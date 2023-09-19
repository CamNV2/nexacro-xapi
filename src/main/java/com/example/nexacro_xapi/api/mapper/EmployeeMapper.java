package com.example.nexacro_xapi.api.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.nexacro_xapi.entity.EmployeeEntity;

import java.util.List;

@Mapper
public interface EmployeeMapper {
    List<EmployeeEntity> getAll(EmployeeEntity employeeEntity);
}