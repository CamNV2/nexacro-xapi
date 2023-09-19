package com.example.nexacro_xapi.entity;

import java.util.Date;

import lombok.Data;

@Data
public class GroupEntity {
    private int id;
    
    private String title;
    private boolean deleted;
    private String created_by;
    private String updated_by;
    
    private Date created_at;
    private Date updated_at;
}
