
package com.example.nexacro_xapi.api.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.nexacro_xapi.entity.UserEntity;

@Mapper
public interface UserMapper {
    List<UserEntity> getList(UserEntity userEntity);
}
