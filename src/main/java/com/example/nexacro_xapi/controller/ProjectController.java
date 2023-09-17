package com.example.nexacro_xapi.controller;

import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.ProjectEntity;
import com.example.nexacro_xapi.entity.employee.EmployeeEntity;
import com.example.nexacro_xapi.entity.response.ColumnEntity;
import com.example.nexacro_xapi.entity.response.Dataset;
import com.example.nexacro_xapi.entity.response.ResponseEntity;
import com.example.nexacro_xapi.service.ProjectService;
import com.nexacro.java.xapi.tx.PlatformException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ProjectController {
    @Autowired
    private ProjectService projectService;
    @GetMapping("/test")
    public String getAllProject(HttpServletRequest request, Model model) throws IOException, PlatformException {
        List<Map<String, String>> project = new ArrayList<>();
        project = projectService.getAll(null);

        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new ProjectEntity());
        List<Dataset> datasets = new ArrayList<>();
        Dataset dataset = new Dataset();
        dataset.setColumns(columns);
        dataset.setRows(project);
        dataset.setId("IDDataset");

        datasets.add(dataset);
        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);

        return "nexacroView";
    }
}
