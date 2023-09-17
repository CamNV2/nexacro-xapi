package com.example.nexacro_xapi.mapper;

import com.example.nexacro_xapi.entity.UserEntity;
import com.nexacro.java.xapi.data.DataSet;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface UserMapper {
    List<UserEntity> getList(UserEntity userEntity);
    int findUsersByUsernameAndPassword(Map<String, String> data);

    List<Map<String, String>> getUserByUserName(Map<String, String> data);

    void updateTimeLogin(Map<String, String> data);

    int insertUser (Map<String, String> data);


}
