package com.example.nexacro_xapi.controller;

import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.GroupEntity;
import com.example.nexacro_xapi.entity.ProjectEntity;
import com.example.nexacro_xapi.entity.employee.EmployeeEntity;
import com.example.nexacro_xapi.entity.response.ColumnEntity;
import com.example.nexacro_xapi.entity.response.Dataset;
import com.example.nexacro_xapi.entity.response.ResponseEntity;
import com.example.nexacro_xapi.service.GroupService;
import com.nexacro.java.xapi.data.DataSet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
//Create by Nhandv7
@Controller
@RequestMapping("/group")
public class GroupController {

    @Autowired
    private GroupService groupService;

    @PostMapping("")
    public String getAllGroup(Model model, HttpServletRequest request, HttpSession session) {
        List<Map<String, String>> groups = new ArrayList<>();
        groups = groupService.getList(null);
        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new EmployeeEntity());
        List<Dataset> datasets = new ArrayList<>();
        Dataset dataset = new Dataset();
        dataset.setColumns(columns);
        dataset.setRows(groups);
        dataset.setId("IDDataset");

        datasets.add(dataset);
        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);

        return "nexacroView";
    }

    @PostMapping("/saveGroup")
    public String saveGroup(Model model, HttpServletRequest request, HttpSession session) {
        DataSet dataSet = NexacroConvert.getRequestData(request, "ds_group");
        Map<String, String> group = new HashMap<>();
        List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);
        try {
            String user = session.getAttribute("user").toString();

            if (requestBody.size() != 0) {
                group = groupService.saveGroup(requestBody.get(0),user);
            }

            List<Dataset> datasets = new ArrayList<>();
            Dataset dataset = new Dataset();
            dataset.setId("IDDataset");
            dataset.setColumns(NexacroConvert.convertEntityToColumn(group));
            datasets.add(dataset);
            ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
            model.addAttribute("data", entity);

            return "nexacroView";
        }catch (Exception e){
            throw e;
        }

    }

    @PostMapping("/deleteGroup")
    public String deleteGroup(Model model, HttpServletRequest request, HttpSession session) {
        DataSet dataSet = NexacroConvert.getRequestData(request, "ds_group");
        int rs = 0;
        List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);
        String user = session.getAttribute("user").toString();
        try {
            if (requestBody.size() != 0) {
                rs = groupService.deleteGroup(requestBody.get(0),user);
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
