package com.example.nexacro_xapi.mapper;

import com.example.nexacro_xapi.entity.TaskEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface TaskMapper {
    List<TaskEntity> getAll(TaskEntity taskEntity);

    TaskEntity createTask(Map<String, String> data);

    TaskEntity getTaskByCd(Map<String, String> data);
}
