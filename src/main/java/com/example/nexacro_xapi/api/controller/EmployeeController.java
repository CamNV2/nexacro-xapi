package com.example.nexacro_xapi.api.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.example.nexacro_xapi.api.entity.employee.EmployeeEntity;
import com.example.nexacro_xapi.api.entity.response.ColumnEntity;
import com.example.nexacro_xapi.api.entity.response.Dataset;
import com.example.nexacro_xapi.api.entity.response.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.nexacro_xapi.api.service.EmployeeService;
import com.example.nexacro_xapi.common.NexacroConvert;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.tx.PlatformException;

import jakarta.servlet.http.HttpServletRequest;


@Controller
@RequestMapping("employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("")
    public String getAll(HttpServletRequest request, Model model) throws IOException, PlatformException {
        List<Map<String, String>> employees = new ArrayList<>();
        employees = employeeService.getAll(null);

        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new EmployeeEntity());
        List<Dataset> datasets = new ArrayList<>();
        Dataset dataset = new Dataset();
        dataset.setColumns(columns);
        dataset.setRows(employees);
        dataset.setId("IDDataset");

        datasets.add(dataset);
        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);

        return "nexacroView";
    }

    @PostMapping("/search")
    public String search (HttpServletRequest request, Model model) throws IOException, PlatformException {

        DataSet dataSet = NexacroConvert.getRequestData(request,"dsInput");
        List<Map<String, String>> employees = new ArrayList<>();
        List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);

        if (requestBody.size() != 0) {
            employees = employeeService.getAll(requestBody.get(0));
        } else {
            employees = employeeService.getAll(null);
        }

        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new EmployeeEntity());

        List<Dataset> datasets = new ArrayList<>();
        Dataset dataset = new Dataset();
        dataset.setColumns(columns);
        dataset.setRows(employees);
        dataset.setId("IDDataset");

        datasets.add(dataset);
        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);

        return "nexacroView";
    }

}
