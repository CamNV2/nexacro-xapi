package com.example.nexacro_xapi.api.controller;

import com.example.nexacro_xapi.api.entity.GroupEntity;
import com.example.nexacro_xapi.api.entity.response.ColumnEntity;
import com.example.nexacro_xapi.api.entity.response.Dataset;
import com.example.nexacro_xapi.api.entity.response.ResponseEntity;
import com.example.nexacro_xapi.api.service.GroupService;
import com.example.nexacro_xapi.api.service.TaskService;
import com.example.nexacro_xapi.common.NexacroConvert;
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
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("Group")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping("")
    public String getTasks(HttpServletRequest request, Model model) throws IOException, PlatformException {
        List<Map<String, String>> tasks = new ArrayList<>();
        tasks = taskService.getList(null);

        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new GroupEntity());
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

    @PostMapping("/saveGroup")
    public String saveGroup(Model model, HttpServletRequest request, HttpSession session) {
        DataSet dataSet = NexacroConvert.getRequestData(request, "ds_task");
        int rs = 0;
        int nErrorCode = 0;
        String strErrorMsg = "";
        List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);
        try {
            ResponseEntity entity;
            if (requestBody.size() != 0) {
                rs = taskService.saveGroup(requestBody.get(0), "loc");
                entity = new ResponseEntity(200, "Tạo mới thành công !", rs);
            } else {
                entity = new ResponseEntity(400, "Không thể tạo ask ới", 1);
            }
            model.addAttribute("data", entity);
        } catch (Exception e) {
            ResponseEntity entity = new ResponseEntity(500, "Tạo mới không thành công !", 1);
            model.addAttribute("data", entity);
        }

        return strErrorMsg;
    }

    @PostMapping("/deleteGroup")
    public String deleteGroup(Model model, HttpServletRequest request, HttpSession session) {
        DataSet dataSet = NexacroConvert.getRequestData(request, "ds_group");
        int rs = 0;
        List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);
        String user = session.getAttribute("user").toString();
        try {
            if (requestBody.size() != 0) {
                rs = taskService.deleteGroup(requestBody.get(0), user);
            }
            if (rs > 0) {
                List<Dataset> datasets = new ArrayList<>();
                Dataset dataset = new Dataset();
                dataset.setId("IDDataset");
                datasets.add(dataset);
                ResponseEntity entity = new ResponseEntity(200, "Xóa thành công", datasets);
                model.addAttribute("data", entity);
            }
        } catch (Exception e) {
            ResponseEntity entity = new ResponseEntity(500, "Xóa không thành công",null);
            model.addAttribute("data", entity);
        }
        return "nexacroView";
    }
}
