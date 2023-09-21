
package com.example.nexacro_xapi.api.mapper;

import java.util.List;

import com.example.nexacro_xapi.api.entity.ProjectEntity;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface ProjectMapper {
    List<ProjectEntity> getList(ProjectEntity projectEntity);
    boolean create(ProjectEntity projectEntity);
	boolean update(ProjectEntity projectEntity);
}
