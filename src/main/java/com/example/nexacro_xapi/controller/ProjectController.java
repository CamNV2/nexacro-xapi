package com.example.nexacro_xapi.controller;

import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.ProjectEntity;
import com.example.nexacro_xapi.entity.employee.EmployeeEntity;
import com.example.nexacro_xapi.entity.response.ColumnEntity;
import com.example.nexacro_xapi.entity.response.Dataset;
import com.example.nexacro_xapi.entity.response.ResponseEntity;
import com.example.nexacro_xapi.service.ProjectService;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.tx.PlatformException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Controller
@RequestMapping("projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping("")
    public String getAllProject(Model model, HttpServletRequest request, HttpSession session) {
        List<Map<String, String>> projects = new ArrayList<>();
        List<Dataset> datasets = new ArrayList<>();
        projects = projectService.getAllProject(null);
        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new ProjectEntity());
        Dataset dataset = new Dataset();
        dataset.setColumns(columns);
        dataset.setRows(projects);
        dataset.setId("IDDataset");
        datasets.add(dataset);
        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);

        return "nexacroView";
    }

    @PostMapping("/save")
    public String saveProject(Model model, HttpServletRequest request, HttpSession session) {
        DataSet dataSet = NexacroConvert.getRequestData(request, "ds_project");
        Map<String, String> project = new HashMap<>();
        List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);
        try {
            String user = session.getAttribute("user").toString();

            if (requestBody.size() != 0) {
                project = projectService.saveProject(requestBody.get(0),user);
            }

            List<Dataset> datasets = new ArrayList<>();
            Dataset dataset = new Dataset();
            dataset.setId("IDDataset");
            dataset.setColumns(NexacroConvert.convertEntityToColumn(project));
            datasets.add(dataset);
            ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
            model.addAttribute("data", entity);

            return "nexacroView";
        }catch (Exception e){
            throw e;
        }

    }

    @PostMapping("/delete")
    public String delete(Model model, HttpServletRequest request, HttpSession session) {
        DataSet dataSet = NexacroConvert.getRequestData(request, "ds_project");
        int rs = 0;
        List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);
        String user = session.getAttribute("user").toString();
        try {
            if (requestBody.size() != 0) {
                rs = projectService.deleteProject(requestBody.get(0),user);
            }
            if (rs >0){
                List<Dataset> datasets = new ArrayList<>();
                Dataset dataset = new Dataset();
                dataset.setId("IDDataset");
                datasets.add(dataset);
                ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
                model.addAttribute("data", entity);
            }

            return "nexacroView";
        }catch (Exception e){
            throw e;
        }

    }

}

