
package com.example.nexacro_xapi.api.mapper;

import java.util.List;
import java.util.Map;

import com.example.nexacro_xapi.api.entity.TaskEntity;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface TaskMapper {
    List<TaskEntity> getList(TaskEntity taskEntity);
    int addTask(Map<String, String> data);

    int deleteTask (Map<String, String> data);
}
