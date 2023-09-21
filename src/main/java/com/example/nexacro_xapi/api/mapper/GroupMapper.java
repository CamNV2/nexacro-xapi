
package com.example.nexacro_xapi.api.mapper;

import java.util.List;
import java.util.Map;

import com.example.nexacro_xapi.api.entity.GroupEntity;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface GroupMapper {
    /*List<GroupEntity> getList(GroupEntity groupEntity);
    Boolean create(GroupEntity groupEntity);*/
    List<GroupEntity> getListGroup(GroupEntity groupEntity);
    int addGroup(Map<String, String> data);

    int updateGroup(Map<String, String> data);

    int deleteGroup (Map<String, String> data);

    GroupEntity getGroup(Map<String, String> data);
}
