package com.example.nexacro_xapi.entity;

import java.util.Date;

import lombok.Data;

@Data
public class UserEntity {
    private int id;
    private String username;
    private String name;
    private String email;
    private String password;
    private String roleNm;
    private String groupNm;
    private boolean deleted;

    private String created_by;
    private String updated_by;
    
    private Date created_at;
    private Date updated_at;
}
