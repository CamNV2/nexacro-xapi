package com.example.nexacro_xapi.api.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "TB_GROUP")
@Data
public class GroupEntity {
    @Id
    private String GROUP_ID;
    private String GROUP_NM;

    private String CREATED_BY;
    private String UPDATED_BY;

    private Date CREATED_AT;
    private Date UPDATED_AT;

    @OneToMany(mappedBy = "groupEntity", fetch = FetchType.LAZY)
    List<UserEntity> userEntityList;

    @OneToMany(mappedBy = "groupEntity", fetch = FetchType.LAZY)
    List<ProjectEntity> projectEntityList;
}
