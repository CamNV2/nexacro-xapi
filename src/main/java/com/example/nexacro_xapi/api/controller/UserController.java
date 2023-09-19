package com.example.nexacro_xapi.api.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.nexacro_xapi.api.service.UserService;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.UserEntity;
import com.example.nexacro_xapi.entity.response.ColumnEntity;
import com.example.nexacro_xapi.entity.response.Dataset;
import com.example.nexacro_xapi.entity.response.ResponseEntity;
import com.nexacro.java.xapi.tx.PlatformException;

import jakarta.servlet.http.HttpServletRequest;


@Controller
@RequestMapping("users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    public String getList(HttpServletRequest request, Model model) throws IOException, PlatformException {
        List<Map<String, String>> users = new ArrayList<>();
        users = userService.getList(null);

        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new UserEntity());
        List<Dataset> datasets = new ArrayList<>();
        Dataset dataset = new Dataset();
        dataset.setColumns(columns);
        dataset.setRows(users);
        dataset.setId("IDDataset");

        datasets.add(dataset);
        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);

        return "nexacroView";
    }

}
