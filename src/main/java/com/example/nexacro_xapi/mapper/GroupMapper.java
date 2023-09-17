package com.example.nexacro_xapi.mapper;

import com.example.nexacro_xapi.entity.GroupEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface GroupMapper {
    List<GroupEntity> getListGroup(GroupEntity groupEntity);
    GroupEntity addGroup(Map<String, String> data);

    GroupEntity updateGroup(Map<String, String> data);

    int deleteGroup (Map<String, String> data);

    GroupEntity getGroup(Map<String, String> data);


}
