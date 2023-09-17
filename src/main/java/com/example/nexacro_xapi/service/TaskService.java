package com.example.nexacro_xapi.service;

import com.example.nexacro_xapi.Exception.CommonException;
import com.example.nexacro_xapi.api.mapper.EmployeeMapper;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.GroupEntity;
import com.example.nexacro_xapi.entity.TaskEntity;
import com.example.nexacro_xapi.entity.employee.EmployeeEntity;
import com.example.nexacro_xapi.mapper.TaskMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class TaskService {
    @Autowired
    private TaskMapper taskMapper;

    @Autowired
    private UserService userService;

    public List<Map<String, String>> getAll(Map<String, String> data) {
        List<Map<String, String>> rows = new ArrayList<>();
        TaskEntity taskEntity = new TaskEntity();

        if (data != null) {
            taskEntity.setTASK_NM(data.get("TASK_NM"));
        }

        List<TaskEntity> taskEntitys = taskMapper.getAll(taskEntity);
        for (TaskEntity task : taskEntitys) {
            Map<String, String> row = NexacroConvert.convertObjectToMap(task);
            rows.add(row);
        }

        return rows;
    }

    public Map<String, String> createTask(Map<String, String> data, String user) {
        TaskEntity result = null;
        data.put("USERID",user);
        List<Map<String, String>> users = userService.getUserByUserName(data);

        if("MEMBER".equals(users.get(0).get("ROLE_NM").toString())){
            throw new CommonException("You have not permission add new or update group");
        }

        String userID = users.get(0).get("USR_ID").toString();
        data.put("username",userID);

        TaskEntity taskEntity = taskMapper.getTaskByCd(data);
        if (taskEntity != null) {
            //result = taskMapper.updateTask(data);
        }else {
            result = taskMapper.createTask(data);
        }
        Map<String, String> row = NexacroConvert.convertObjectToMap(result);
        if (row == null){
            throw new CommonException("Error when create or save group,pls check again");
        }
        return row;
    }
}
