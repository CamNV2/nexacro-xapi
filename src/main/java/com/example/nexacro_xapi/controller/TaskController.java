package com.example.nexacro_xapi.controller;

import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.employee.EmployeeEntity;
import com.example.nexacro_xapi.entity.response.ColumnEntity;
import com.example.nexacro_xapi.entity.response.Dataset;
import com.example.nexacro_xapi.entity.response.ResponseEntity;
import com.example.nexacro_xapi.service.TaskService;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.tx.PlatformException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("task")
public class TaskController {

    @Autowired
    private TaskService taskService;
    @PostMapping("/search")
    public String search (HttpServletRequest request, Model model) throws IOException, PlatformException {

        DataSet dataSet = NexacroConvert.getRequestData(request,"ds_task");
        List<Map<String, String>> tasks = new ArrayList<>();
        List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);

        if (requestBody.size() != 0) {
            tasks = taskService.getAll(requestBody.get(0));
        } else {
            tasks = taskService.getAll(null);
        }

        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new EmployeeEntity());

        List<Dataset> datasets = new ArrayList<>();
        Dataset dataset = new Dataset();
        dataset.setColumns(columns);
        dataset.setRows(tasks);
        dataset.setId("IDDataset");

        datasets.add(dataset);
        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);

        return "nexacroView";
    }
}
