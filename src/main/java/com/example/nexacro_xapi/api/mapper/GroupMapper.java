
package com.example.nexacro_xapi.api.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.nexacro_xapi.entity.GroupEntity;

@Mapper
public interface GroupMapper {
    List<GroupEntity> getList(GroupEntity groupEntity);
    Boolean create(GroupEntity groupEntity);
}
