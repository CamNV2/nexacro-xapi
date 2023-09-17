package com.example.nexacro_xapi.mapper;

import com.example.nexacro_xapi.entity.TaskEntity;
import com.example.nexacro_xapi.entity.employee.EmployeeEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TaskMapper {
    List<TaskEntity> getAll(TaskEntity taskEntity);
}
