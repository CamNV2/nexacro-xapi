
package com.example.nexacro_xapi.api.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.nexacro_xapi.entity.ProjectEntity;

@Mapper
public interface ReportMapper {
    List<ProjectEntity> getList(ProjectEntity projectEntity);
}
