
package com.example.nexacro_xapi.api.mapper;

import java.util.List;
import java.util.Map;

import com.example.nexacro_xapi.api.entity.UserEntity;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface UserMapper {
    List<UserEntity> getList(UserEntity userEntity);

    int findUsersByUsernameAndPassword(Map<String, String> data);

    List<Map<String, String>> getUserByUserName(Map<String, String> data);

    int updateTimeLogin(Map<String, String> data);

    int insertUser (Map<String, String> data);
}
