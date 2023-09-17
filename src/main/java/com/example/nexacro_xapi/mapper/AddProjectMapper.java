package com.example.nexacro_xapi.mapper;

import com.example.nexacro_xapi.entity.ProjectEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AddProjectMapper {
    int addProject(ProjectEntity project);
}
