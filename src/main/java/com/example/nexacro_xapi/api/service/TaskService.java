package com.example.nexacro_xapi.api.service;

import com.example.nexacro_xapi.api.Exception.CommonException;
import com.example.nexacro_xapi.api.entity.GroupEntity;
import com.example.nexacro_xapi.api.entity.TaskEntity;
import com.example.nexacro_xapi.api.mapper.GroupMapper;
import com.example.nexacro_xapi.api.mapper.TaskMapper;
import com.example.nexacro_xapi.common.NexacroConvert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class TaskService {

    @Autowired
    private TaskMapper taskMapper;
    @Autowired
    private UserService userService;

    public List<Map<String, String>> getList(Map<String, String> data) {
        List<Map<String, String>> rows = new ArrayList<>();
        TaskEntity taskEntity = new TaskEntity();

        if (data != null) {
            taskEntity.setTASK_ID(data.get("TASK_ID"));
        }

        List<TaskEntity> taskEntities = taskMapper.getList(taskEntity);
        for (TaskEntity task : taskEntities) {
            Map<String, String> row = NexacroConvert.convertObjectToMap(task);
            rows.add(row);
        }

        return rows;
    }

    public int saveGroup(Map<String, String> data, String user) {
        data.put("USER_ID",user);
        List<Map<String, String>> users = userService.getUserByUserName(data);

        if("MEMBER".equals(users.get(0).get("role_nm").toString())){
            throw new CommonException("You have not permission add new or update group");
        }

        String userID = users.get(0).get("usr_id").toString();
        data.put("USERID",userID);

        int result = taskMapper.addTask(data);
        if (result == 0){
            throw new CommonException("Error when create or save group,pls check again");
        }
        return result;
    }

    public int deleteGroup(Map<String, String> data,String user) {
        return taskMapper.deleteTask(data);
    }
}
