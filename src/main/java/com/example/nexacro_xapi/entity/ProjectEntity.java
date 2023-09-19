package com.example.nexacro_xapi.entity;

import java.time.LocalDateTime;
import java.util.Date;

import com.example.nexacro_xapi.enumeration.StatusEnum;
import com.example.nexacro_xapi.enumeration.TemplateEnum;

import lombok.Data;

@Data
public class ProjectEntity {
    private int id;
    private int group_id;
    private int owner_id;
    private int progress_task;
    private int progress;
    
    private boolean is_tight_prj;
    private boolean is_access_private;
    private boolean is_done;
    private boolean deleted;

    private TemplateEnum template;
    private StatusEnum status;
    
    private String title;
    private String strt_date;
    private String end_date;
    private LocalDateTime strtDate;
    private LocalDateTime endDate;
    private String description;
    private String tag_name;
    private String created_by;
    private String updated_by;
    
    private Date created_at;
    private Date updated_at;
}
