package com.example.nexacro_xapi.mapper;

import com.example.nexacro_xapi.entity.ProjectEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ProjectMapper {
    List<ProjectEntity> getAllProjects(ProjectEntity productEntity);
    ProjectEntity createProject(Map<String, String> data);

    ProjectEntity updateProject(Map<String, String> data);

    int deleteProject (Map<String, String> data);

    ProjectEntity getProject(Map<String, String> data);

}
