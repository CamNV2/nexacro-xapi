package com.example.nexacro_xapi.api.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.nexacro_xapi.api.service.ProjectService;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.ProjectEntity;
import com.example.nexacro_xapi.entity.response.ColumnEntity;
import com.example.nexacro_xapi.entity.response.Dataset;
import com.example.nexacro_xapi.entity.response.ResponseEntity;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.java.xapi.tx.PlatformException;

import jakarta.servlet.http.HttpServletRequest;


@Controller
@RequestMapping("projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping("")
    public String getList(HttpServletRequest request, Model model) throws IOException, PlatformException {
        
        DataSet dataInput = NexacroConvert.getRequestData(request, "dsInput");
        List<Map<String, String>> projects = new ArrayList<>();
        List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataInput);

        if (requestBody.size() != 0) {
        	projects = projectService.getList(requestBody.get(0));
        } else {
        	projects = projectService.getList(null);
        }

        
        projects = projectService.getList(null);

        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new ProjectEntity());
        List<Dataset> datasets = new ArrayList<>();
        Dataset dataset = new Dataset();
        dataset.setColumns(columns);
        dataset.setRows(projects);
        dataset.setId("IDDataset");

        datasets.add(dataset);
        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);

        return "nexacroView";
    }

    @PostMapping("/create")
    public String create(HttpServletRequest request, Model model) throws IOException, PlatformException {

        DataSet dataInput = NexacroConvert.getRequestData(request,"dsInput");
		int nErrorCode = 0;
		String strErrorMsg = "START";
		boolean result = false;

		 List<Map<String, String>> projectInfos = NexacroConvert.convertDatasetToListMap(dataInput);
	        
        if (projectInfos.size() != 0) {
        	result = projectService.create(projectInfos.get(0));
        }

		if (result) {
			strErrorMsg = "Tạo mới thành công !";
		} else {
			nErrorCode = -1;
			strErrorMsg = "Tạo mới không thành công !";
		}
		PlatformData senddata = new PlatformData();
		VariableList varList = senddata.getVariableList();
		varList.add("ErrorCode", nErrorCode);
		varList.add("ErrorMsg", strErrorMsg);
		return "nexacroView";
    }
    
    @PostMapping("/update")
    public String update(HttpServletRequest request, Model model) throws IOException, PlatformException {

        DataSet dataInput = NexacroConvert.getRequestData(request,"dsInput");
		int nErrorCode = 0;
		String strErrorMsg = "START";
		boolean result = false;

		 List<Map<String, String>> projectInfos = NexacroConvert.convertDatasetToListMap(dataInput);
	        
        if (projectInfos.size() != 0) {
        	result = projectService.update(projectInfos.get(0));
        }

		if (result) {
			strErrorMsg = "Cập nhật thành công !";
		} else {
			nErrorCode = -1;
			strErrorMsg = "Cập nhật không thành công !";
		}
		PlatformData senddata = new PlatformData();
		VariableList varList = senddata.getVariableList();
		varList.add("ErrorCode", nErrorCode);
		varList.add("ErrorMsg", strErrorMsg);
		return "nexacroView";
    }

}
