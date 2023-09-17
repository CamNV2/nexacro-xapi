package com.example.nexacro_xapi.service;

import com.example.nexacro_xapi.api.mapper.EmployeeMapper;
import com.example.nexacro_xapi.common.NexacroConvert;
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
}
