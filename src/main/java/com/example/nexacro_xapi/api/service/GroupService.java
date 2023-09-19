package com.example.nexacro_xapi.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nexacro_xapi.api.mapper.GroupMapper;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.GroupEntity;

@Service
public class GroupService {

    @Autowired
    private GroupMapper groupMapper;

    public List<Map<String, String>> getList(Map<String, String> data) {
        List<Map<String, String>> rows = new ArrayList<>();
        GroupEntity groupEntity = new GroupEntity();

        if (data != null) {
        	groupEntity.setTitle(data.get("title"));
        }

        List<GroupEntity> groupEntities = groupMapper.getList(groupEntity);
        for (GroupEntity groups : groupEntities) {
            Map<String, String> row = NexacroConvert.convertObjectToMap(groups);
            rows.add(row);
        }

        return rows;
    }
    
    public Boolean create(Map<String, String> data) {
        GroupEntity groupEntity = new GroupEntity();

        if (data != null) {
        	groupEntity.setTitle(data.get("title"));
        	groupEntity.setDeleted(false);
        	groupEntity.setCreated_by("Admin");
        	groupEntity.setUpdated_by("Admin");
        }
        
        return groupMapper.create(groupEntity);
    }
}
