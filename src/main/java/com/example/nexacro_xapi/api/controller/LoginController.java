package com.example.nexacro_xapi.api.controller;

import com.example.nexacro_xapi.api.Exception.CommonException;
import com.example.nexacro_xapi.api.entity.employee.EmployeeEntity;
import com.example.nexacro_xapi.api.entity.response.ColumnEntity;
import com.example.nexacro_xapi.api.entity.response.Dataset;
import com.example.nexacro_xapi.api.entity.response.ResponseEntity;
import com.example.nexacro_xapi.api.service.UserService;
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
@RequestMapping("")
public class LoginController {
    @Autowired
    private UserService userService;

    @GetMapping("")
    public String getFormLogin(HttpServletRequest request, Model model) throws IOException, PlatformException {
        List<Map<String, String>> users = new ArrayList<>();
        //users = userService.getList(null);

        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new EmployeeEntity());
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

    @PostMapping("login")
    public String login(Model model, HttpServletRequest request, HttpSession session) {
        DataSet dataSet = NexacroConvert.getRequestData(request,"dsLogin");
        List<Map<String, String>> employees = new ArrayList<>();
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

                int rs = userService.updateTimeLogin(requestBody.get(0));
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
        ResponseEntity entity = null;
        try {
            DataSet dataSet = NexacroConvert.getRequestData(request, "dsRegister");
            List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);
            rs = userService.insertUserName(requestBody.get(0));
            if (rs >0) {
                entity = new ResponseEntity(0, "SUCCESS", rs);
                model.addAttribute("data", entity);
            }else {
                entity = new ResponseEntity(1, "ERROR", rs);
                model.addAttribute("data", entity);
            }
            return "nexacroView";
        } catch (Exception e) {
            throw e;
        }

    }

}
