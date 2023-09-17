package com.example.nexacro_xapi.controller;

import com.example.nexacro_xapi.Exception.CommonException;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.employee.EmployeeEntity;
import com.example.nexacro_xapi.entity.response.ColumnEntity;
import com.example.nexacro_xapi.entity.response.Dataset;
import com.example.nexacro_xapi.entity.response.ResponseEntity;
import com.example.nexacro_xapi.service.UserService;
import com.nexacro.java.xapi.data.DataSet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
//Create by Nhandv7
@Controller
public class LoginController {
    @Autowired
    private UserService userService;

    @PostMapping("login")
    public String login(Model model, HttpServletRequest request, HttpSession session) {
        DataSet dataSet = NexacroConvert.getRequestData(request, "dsInput");
        List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);

        try {
            if (userService.checkExistUser(requestBody.get(0)) == 1) {
                List<Map<String, String>> user = userService.getUserByUserName(requestBody.get(0));
                session.setAttribute("user", user);

                List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new EmployeeEntity());

                List<Dataset> datasets = new ArrayList<>();
                Dataset dataset = new Dataset();
                dataset.setRows(user);
                dataset.setColumns(columns);
                dataset.setId("IDDataset");
                datasets.add(dataset);

                ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
                model.addAttribute("data", entity);

                userService.updateTimeLogin(requestBody.get(0));
                return "nexacroView";

            } else {
                throw new CommonException("User is not exsts" + requestBody.get(0).get(""));
            }
        } catch (Exception e) {
            throw e;
        }
    }

    @PostMapping("/register")
    public String registerUser(HttpServletRequest request, Model model) {
        int rs = 0;
        try {
            DataSet dataSet = NexacroConvert.getRequestData(request, "dsInput");
            List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);
            rs = userService.insertUserName(requestBody.get(0));
            if (rs >0) {
                ResponseEntity entity = new ResponseEntity(0, "SUCCESS", rs);
                model.addAttribute("data", entity);
            }
            return "nexacroView";
        } catch (Exception e) {
            throw e;
        }

    }

}
