package com.example.nexacro_xapi.api.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nexacro_xapi.api.mapper.ProjectMapper;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.ProjectEntity;
import com.example.nexacro_xapi.enumeration.StatusEnum;
import com.example.nexacro_xapi.enumeration.TemplateEnum;

@Service
public class ProjectService {

    @Autowired
    private ProjectMapper projectMapper;

    public List<Map<String, String>> getList(Map<String, String> data) {
        List<Map<String, String>> rows = new ArrayList<>();
        ProjectEntity projectEntity = new ProjectEntity();

        if (data != null) {
        	projectEntity.setTitle(data.get("title"));
        }

        List<ProjectEntity> projectEntities = projectMapper.getList(projectEntity);
        for (ProjectEntity project : projectEntities) {
            Map<String, String> row = NexacroConvert.convertObjectToMap(project);
            rows.add(row);
        }

        return rows;
    }
    
    public boolean create(Map<String, String> data) {
    	ProjectEntity projectEntity = new ProjectEntity();
        if (data != null) {
        	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd HH:mm:ss");
        	DateTimeFormatter frmTime = DateTimeFormatter.ofPattern("HH:mm:ss");
        	LocalDateTime strtDate = LocalDateTime.parse(data.get("strt_date") + " "+ frmTime.format(LocalDateTime.now()), formatter);
        	LocalDateTime endDate = LocalDateTime.parse(data.get("end_date") + " "+ frmTime.format(LocalDateTime.now()), formatter);
        	
        	projectEntity.setTitle(data.get("title"));
        	projectEntity.setOwner_id(Integer.parseInt(data.get("owner_id")));
        	projectEntity.setStrtDate(strtDate);
        	projectEntity.setProgress(Integer.parseInt(data.get("progress")));
        	projectEntity.setProgress_task(Integer.parseInt(data.get("progress_task")));
        	projectEntity.setEndDate(endDate);
        	projectEntity.setDescription(data.get("description"));
        	projectEntity.setTag_name(data.get("tag_name"));
        	projectEntity.set_tight_prj(Boolean.parseBoolean(data.get("_tight_prj")));
        	projectEntity.set_access_private(Boolean.parseBoolean(data.get("_access_private")));
        	projectEntity.setGroup_id(Integer.parseInt(data.get("group_id")));
        	projectEntity.setStatus(StatusEnum.valueOf(data.get("status")));
        	projectEntity.setTemplate(TemplateEnum.valueOf(data.get("template")));
        	projectEntity.setDeleted(false);
        	projectEntity.set_done(false);
        	projectEntity.setCreated_by("Admin");
        	projectEntity.setUpdated_by("Admin");
        }

        boolean result = projectMapper.create(projectEntity);

        return result;
    }
    
    public boolean update(Map<String, String> data) {
    	ProjectEntity projectEntity = new ProjectEntity();
        if (data != null) {
        	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd HH:mm:ss");
        	DateTimeFormatter frmTime = DateTimeFormatter.ofPattern("HH:mm:ss");
        	LocalDateTime strtDate = LocalDateTime.parse(data.get("strt_date") + " "+ frmTime.format(LocalDateTime.now()), formatter);
        	LocalDateTime endDate = LocalDateTime.parse(data.get("end_date") + " "+ frmTime.format(LocalDateTime.now()), formatter);
        	projectEntity.setId(Integer.parseInt(data.get("id")));
        	projectEntity.setTitle(data.get("title"));
        	projectEntity.setOwner_id(Integer.parseInt(data.get("owner_id")));
        	projectEntity.setStrtDate(strtDate);
        	projectEntity.setEndDate(endDate);
        	projectEntity.setDescription(data.get("description"));
        	projectEntity.setTag_name(data.get("tag_name"));
        	projectEntity.set_tight_prj(Boolean.parseBoolean(data.get("_tight_prj")));
        	projectEntity.set_access_private(Boolean.parseBoolean(data.get("_access_private")));
        	projectEntity.setGroup_id(Integer.parseInt(data.get("group_id")));
        	projectEntity.setTemplate(TemplateEnum.valueOf(data.get("template")));
        	projectEntity.setUpdated_by("Admin");
        }

        boolean result = projectMapper.update(projectEntity);

        return result;
    }
}
