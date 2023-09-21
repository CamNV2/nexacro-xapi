package com.example.nexacro_xapi.api.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.nexacro_xapi.api.entity.response.ColumnEntity;
import com.example.nexacro_xapi.api.entity.response.Dataset;
import com.example.nexacro_xapi.api.entity.response.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.enumeration.PriorityEnum;
import com.example.nexacro_xapi.enumeration.StatusEnum;
import com.example.nexacro_xapi.enumeration.TemplateEnum;
import com.example.nexacro_xapi.enumeration.TypeEnum;
import com.nexacro.java.xapi.tx.PlatformException;

import jakarta.servlet.http.HttpServletRequest;


@Controller
@RequestMapping("common")
public class CommonController {

    @GetMapping("/templates")
    public String getList(HttpServletRequest request, Model model) throws IOException, PlatformException {
        List<Map<String, String>> templates = new ArrayList<>();
		Map<String, String> object = new HashMap<>();

		object.put("template", TemplateEnum.BO_CUC_TIEU_CHUAN.name());
		object.put("templateNm", TemplateEnum.BO_CUC_TIEU_CHUAN.getText());
		templates.add(object);

		object = new HashMap<String, String>();
		object.put("template", TemplateEnum.BO_CUC_AGILE.name());
		object.put("templateNm", TemplateEnum.BO_CUC_AGILE.getText());
		templates.add(object);
		
		object = new HashMap<String, String>();
		object.put("template", TemplateEnum.BO_CUC_WATERFALL.name());
		object.put("templateNm", TemplateEnum.BO_CUC_WATERFALL.getText());
		templates.add(object);

        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(templates.get(0));
        List<Dataset> datasets = new ArrayList<>();
        Dataset dataset = new Dataset();
        dataset.setColumns(columns);
        dataset.setRows(templates);
        dataset.setId("IDDataset");

        datasets.add(dataset);
        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);

        return "nexacroView";
    }
    
    @GetMapping("/status")
    public String getStatus(HttpServletRequest request, Model model) throws IOException, PlatformException {
        List<Map<String, String>> statusList = new ArrayList<>();
		Map<String, String> object = new HashMap<>();

		object.put("status", StatusEnum.CO_HIEU_LUC.name());
		object.put("statusNm", StatusEnum.CO_HIEU_LUC.getText());
		statusList.add(object);

		object = new HashMap<String, String>();
		object.put("status", StatusEnum.DANG_TRIEN_KHAI.name());
		object.put("statusNm", StatusEnum.DANG_TRIEN_KHAI.getText());
		statusList.add(object);
		
		object = new HashMap<String, String>();
		object.put("status", StatusEnum.HUY_BO.name());
		object.put("statusNm", StatusEnum.HUY_BO.getText());
		statusList.add(object);

        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(statusList.get(0));
        List<Dataset> datasets = new ArrayList<>();
        Dataset dataset = new Dataset();
        dataset.setColumns(columns);
        dataset.setRows(statusList);
        dataset.setId("IDDataset");

        datasets.add(dataset);
        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);

        return "nexacroView";
    }
    
    @GetMapping("/types")
    public String getTypes(HttpServletRequest request, Model model) throws IOException, PlatformException {
        List<Map<String, String>> types = new ArrayList<>();
		Map<String, String> object = new HashMap<>();
		object.put("type", TypeEnum.CODING.name());
		object.put("typeNm", TypeEnum.CODING.getText());
		types.add(object);

		object = new HashMap<String, String>();
		object.put("type", TypeEnum.UT.name());
		object.put("typeNm", TypeEnum.UT.getText());
		types.add(object);
		
		object = new HashMap<String, String>();
		object.put("type", TypeEnum.SRS.name());
		object.put("typeNm", TypeEnum.SRS.getText());
		types.add(object);
		
		object = new HashMap<String, String>();
		object.put("type", TypeEnum.ISSUE.name());
		object.put("typeNm", TypeEnum.ISSUE.getText());
		types.add(object);
		
		object = new HashMap<String, String>();
		object.put("type", TypeEnum.DESIGN.name());
		object.put("typeNm", TypeEnum.DESIGN.getText());
		types.add(object);

        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(types.get(0));
        List<Dataset> datasets = new ArrayList<>();
        Dataset dataset = new Dataset();
        dataset.setColumns(columns);
        dataset.setRows(types);
        dataset.setId("IDDataset");

        datasets.add(dataset);
        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);

        return "nexacroView";
    }
    
    @GetMapping("/priorities")
    public String getPriorities(HttpServletRequest request, Model model) throws IOException, PlatformException {
        List<Map<String, String>> priorities = new ArrayList<>();
		Map<String, String> object = new HashMap<>();
		
		object.put("priority", PriorityEnum.LOW.name());
		object.put("priorityNm", PriorityEnum.LOW.getText());
		priorities.add(object);

		object = new HashMap<String, String>();
		object.put("priority", PriorityEnum.HIGHT.name());
		object.put("priorityNm", PriorityEnum.HIGHT.getText());
		priorities.add(object);
		
		object = new HashMap<String, String>();
		object.put("priority", PriorityEnum.MEDIUM.name());
		object.put("priorityNm", PriorityEnum.MEDIUM.getText());
		priorities.add(object);
		
        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(priorities.get(0));
        List<Dataset> datasets = new ArrayList<>();
        Dataset dataset = new Dataset();
        dataset.setColumns(columns);
        dataset.setRows(priorities);
        dataset.setId("IDDataset");

        datasets.add(dataset);
        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);

        return "nexacroView";
    }

}
