package com.example.nexacro_xapi.controller;

import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.response.ResponseEntity;
import com.example.nexacro_xapi.service.AddService;
import com.nexacro.java.xapi.data.DataSet;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("addProject")
public class AddProjectController {

    @Autowired
    private AddService addService;

    @PostMapping("addProject")
    public String addProject(HttpServletRequest request, Model model){
        int rs = 0;
        DataSet dataSet = NexacroConvert.getRequestData(request,"dsInput");
        Map<String, String> requestBody = NexacroConvert.convertObjectToMap(dataSet);
        rs = addService.addProject(requestBody);

        ResponseEntity entity = new ResponseEntity(0,"SUCCESS",rs);
        model.addAttribute("data",entity);

        return "addProject";
    }
}