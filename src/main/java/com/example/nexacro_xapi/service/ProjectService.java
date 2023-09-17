package com.example.nexacro_xapi.service;

import com.example.nexacro_xapi.Exception.CommonException;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.ProjectEntity;
import com.example.nexacro_xapi.mapper.ProjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class ProjectService {

    @Autowired
    private ProjectMapper projectMapper;
    @Autowired
    private UserService userService;
    public List<Map<String, String>> getAllProject(Map<String, String> data) {
        List<Map<String, String>> rows = new ArrayList<>();
        ProjectEntity projectEntity = new ProjectEntity();

        if (data != null) {
            projectEntity.setPJ_ID(data.get("id"));
        }

        List<ProjectEntity> projectEntities = projectMapper.getAllProjects(projectEntity);
        for (ProjectEntity project : projectEntities) {
            Map<String, String> row = NexacroConvert.convertObjectToMap(project);
            rows.add(row);
        }

        return rows;
    }
    public Map<String, String> saveProject(Map<String, String> data, String user) {
        ProjectEntity result;
        data.put("USERID",user);
        List<Map<String, String>> users = userService.getUserByUserName(data);

        if("MEMBER".equals(users.get(0).get("ROLE_NM").toString())){
            throw new CommonException("You have not permission add new or update project");
        }

        String userID = users.get(0).get("USR_ID").toString();
        data.put("username",userID);

        ProjectEntity productEntity = projectMapper.getProject(data);
        if (productEntity != null) {
            result = projectMapper.updateProject(data);
        }else {
            result = projectMapper.createProject(data);
        }
        Map<String, String> row = NexacroConvert.convertObjectToMap(result);
        if (row == null){
            throw new CommonException("Error when create or save project,pls check again");
        }
        return row;
    }

    public int deleteProject(Map<String, String> data,String user) {
        int rs = 0;
        data.put("USERID",user);
        List<Map<String, String>> users = userService.getUserByUserName(data);

        if("MEMBER".equals(users.get(0).get("ROLE_NM").toString())){
            throw new CommonException("You have not permission add new or update project");
        }
        ProjectEntity productEntity = projectMapper.getProject(data);
        if (productEntity != null){
            rs = projectMapper.deleteProject(data);
            return rs;
        }else {
            throw new CommonException("Product is Exists" + data.get("PR_NM").toString());
        }
    }
}
