package com.example.nexacro_xapi.service;

import com.example.nexacro_xapi.Exception.CommonException;
import com.example.nexacro_xapi.Exception.ExistsUserException;
import com.example.nexacro_xapi.Exception.PermissionUserException;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.UserEntity;
import com.example.nexacro_xapi.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public List<Map<String, String>> getList(Map<String, String> data) {
        List<Map<String, String>> rows = new ArrayList<>();
        UserEntity userEntity = new UserEntity();

        if (data != null) {
            userEntity.setUSR_NM(data.get("title"));
        }

        List<UserEntity> userEntities = userMapper.getList(userEntity);
        for (UserEntity users : userEntities) {
            Map<String, String> row = NexacroConvert.convertObjectToMap(users);
            rows.add(row);
        }

        return rows;
    }

    public  int checkExistUser(Map<String, String> data) {
        int rs = 0;
        rs = userMapper.findUsersByUsernameAndPassword(data);
        if (rs < 1){
            throw new CommonException("user does not exist" + data.get("UserName"));
        }
        return rs;
    }

    public  List<Map<String, String>> getUserByUserName(Map<String, String> data) {
        List<Map<String, String>> users = userMapper.getUserByUserName(data);
        if ("N".equals(users.get(0).get("USR_YN"))) {
            throw new PermissionUserException("User can't permisstion");
        }
        return users;
    }

    public void updateTimeLogin(Map<String, String> data) {
        userMapper.updateTimeLogin(data);
    }

    public int insertUserName(Map<String, String> data) {
        int rs = 0;
        String username = data.get("userName").toString();
        List<Map<String, String>> usersMap = userMapper.getUserByUserName(data);
        if (usersMap.size() > 0){
            throw new ExistsUserException("user exist" + username);
        }

        rs = userMapper.insertUser(data);
        return rs;
    }
}
