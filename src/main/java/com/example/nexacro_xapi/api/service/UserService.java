package com.example.nexacro_xapi.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nexacro_xapi.api.mapper.UserMapper;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.UserEntity;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public List<Map<String, String>> getList(Map<String, String> data) {
        List<Map<String, String>> rows = new ArrayList<>();
        UserEntity userEntity = new UserEntity();

        if (data != null) {
        	userEntity.setName(data.get("title"));
        }

        List<UserEntity> userEntities = userMapper.getList(userEntity);
        for (UserEntity users : userEntities) {
            Map<String, String> row = NexacroConvert.convertObjectToMap(users);
            rows.add(row);
        }

        return rows;
    }
}
