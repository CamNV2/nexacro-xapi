package com.example.nexacro_xapi.service;

import com.example.nexacro_xapi.entity.ProjectEntity;
import com.example.nexacro_xapi.mapper.AddProjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class AddService {
    @Autowired
    private AddProjectMapper projectMapper;

    public int addProject(Map<String, String> input){
        int rs = 0;

        return rs;
    }
}
