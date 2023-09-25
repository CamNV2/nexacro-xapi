
package com.example.nexacro_xapi.api.service;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.example.nexacro_xapi.api.entity.ProjectEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nexacro_xapi.api.mapper.ProjectMapper;
import com.example.nexacro_xapi.common.NexacroConvert;

@Service
public class ProjectService {

    @Autowired
    private ProjectMapper projectMapper;

    public List<Map<String, String>> getList() {
        List<Map<String, String>> rows = new ArrayList<>();
        ProjectEntity projectEntity = new ProjectEntity();

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
			Date startDate = (Date)formatter.parse(data.get("strt_date"));
			Date endDate = (Date)formatter.parse(data.get("end_date"));

			projectEntity.setPJ_NM(data.get("prj_nm"));
			projectEntity.setPJ_OWNER(data.get("owner_id"));
        	projectEntity.setPJ_START_DT((startDate));
        	projectEntity.setPJ_PROCESS(Integer.parseInt(data.get("progress")));
        	projectEntity.setPJ_END_DT(endDate);
        	projectEntity.setPJ_DESC(data.get("description"));
        	projectEntity.setPJ_TAG_NM(data.get("tag_name"));
        	projectEntity.getGroupEntity().setGROUP_ID(data.get("group_id"));
        	projectEntity.setPJ_STATUS(data.get("status"));
        	projectEntity.getProjectTempEntity().setTEMP_ID(data.get("template"));
        	projectEntity.setDELETED(false);
        	projectEntity.setDONE(false);
        	projectEntity.setCREATE_ID("Admin");
			projectEntity.setCREATE_DT(new Date());
        }

        boolean result = projectMapper.create(projectEntity);

        return result;
    }
    
    public boolean update(Map<String, String> data) {
		ProjectEntity projectEntity = new ProjectEntity();
		if (data != null) {
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd HH:mm:ss");
			Date endDate = (Date)formatter.parse(data.get("end_date"));

			projectEntity.setPJ_OWNER(data.get("owner_id"));
			projectEntity.setPJ_START_DT((Date)formatter.parse(data.get("str_date")));
			projectEntity.setPJ_PROCESS(Integer.parseInt(data.get("progress")));
			projectEntity.setPJ_END_DT(endDate);
			projectEntity.setPJ_DESC(data.get("description"));
			projectEntity.setPJ_TAG_NM(data.get("tag_name"));
			projectEntity.getGroupEntity().setGROUP_ID(data.get("group_id"));
			projectEntity.setPJ_STATUS(data.get("status"));
			projectEntity.getProjectTempEntity().setTEMP_ID(data.get("template"));
			projectEntity.setDONE(false);
			projectEntity.setLAST_CHG_ID("Admin");
			projectEntity.setLAST_CHG_DT(new Date());
		}

        boolean result = projectMapper.update(projectEntity);

        return result;
    }
}

