package com.example.nexacro_xapi.service;

import com.example.nexacro_xapi.api.mapper.ProjectMapper;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.ProjectEntity;
import com.example.nexacro_xapi.entity.employee.EmployeeEntity;
import com.example.nexacro_xapi.entity.response.ColumnEntity;
import com.example.nexacro_xapi.entity.response.Dataset;
import com.example.nexacro_xapi.entity.response.ResponseEntity;
import com.nexacro.java.xapi.tx.PlatformException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ProjectService {

    @Autowired
    private ProjectMapper projectMapper;
    public List<Map<String, String>> getAll(Map<String, String> data) {
        List<Map<String, String>> rows = new ArrayList<>();
        ProjectEntity projectEntity = new ProjectEntity();

        if (data != null) {
            projectEntity.setPJ_ID(data.get("id"));
        }

        List<ProjectEntity> projectEntitys = projectMapper.getAllProject(projectEntity);
        for (ProjectEntity project : projectEntitys) {
            Map<String, String> row = NexacroConvert.convertObjectToMap(project);
            rows.add(row);
        }

        return rows;
    }
}
