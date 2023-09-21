package com.example.nexacro_xapi.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.example.nexacro_xapi.api.Exception.CommonException;
import com.example.nexacro_xapi.api.entity.GroupEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nexacro_xapi.api.mapper.GroupMapper;
import com.example.nexacro_xapi.common.NexacroConvert;

@Service
public class GroupService {

    @Autowired
    private GroupMapper groupMapper;
    @Autowired
    private UserService userService;

    public List<Map<String, String>> getList(Map<String, String> data) {
        List<Map<String, String>> rows = new ArrayList<>();
        GroupEntity groupEntity = new GroupEntity();

        if (data != null) {
            groupEntity.setGROUP_NM(data.get("GROUP_NM"));
        }

        List<GroupEntity> groupEntities = groupMapper.getListGroup(groupEntity);
        for (GroupEntity groups : groupEntities) {
            Map<String, String> row = NexacroConvert.convertObjectToMap(groups);
            rows.add(row);
        }

        return rows;
    }

    public Map<String, String> saveGroup(Map<String, String> data, String user) {
        int result = 0;
        data.put("USER_ID",user);
        List<Map<String, String>> users = userService.getUserByUserName(data);

        if("MEMBER".equals(users.get(0).get("role_nm").toString())){
            throw new CommonException("You have not permission add new or update group");
        }

        String userID = users.get(0).get("usr_id").toString();
        data.put("USERID",userID);

        GroupEntity groupEntity = groupMapper.getGroup(data);
        if (groupEntity != null) {
            result = groupMapper.updateGroup(data);
        }else {
            result = groupMapper.addGroup(data);
        }
        Map<String, String> row = NexacroConvert.convertObjectToMap(result);
        if (row == null){
            throw new CommonException("Error when create or save group,pls check again");
        }
        return row;
    }

    public int deleteGroup(Map<String, String> data,String user) {
        int rs = 0;
        data.put("USERID",user);
        List<Map<String, String>> users = userService.getUserByUserName(data);

        if("MEMBER".equals(users.get(0).get("ROLE_NM").toString())){
            throw new CommonException("You have not permission add new or update group");
        }
        GroupEntity groupEntity = groupMapper.getGroup(data);
        if (groupEntity != null){
            rs = groupMapper.deleteGroup(data);
            return rs;
        }else {
            throw new CommonException("Group is Exists" + data.get("GROUP_NM").toString());
        }
    }
}
