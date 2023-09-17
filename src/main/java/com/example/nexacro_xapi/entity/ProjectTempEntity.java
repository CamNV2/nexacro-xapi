package com.example.nexacro_xapi.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "TB_PROJECT_TEMP")
@Data
public class ProjectTempEntity {
    @Id
    private String TEMP_ID;
    private String TEMP_NM;

    @OneToMany(mappedBy = "projectTempEntity", fetch = FetchType.LAZY)
    List<ProjectEntity> projectEntityList;
}
