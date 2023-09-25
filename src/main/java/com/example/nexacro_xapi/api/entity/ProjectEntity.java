package com.example.nexacro_xapi.api.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "TB_PROJECT")
@Data
public class ProjectEntity {
    @Id
    private String PJ_ID;
    private String PJ_NM;
    private String PJ_OWNER;
    private Date PJ_START_DT;
    private Date PJ_END_DT;
    private Date PJ_RESOLVE_DT;
    private String PJ_DESC;
    private String PJ_TAG_NM;
    private String PJ_STATUS;
    private String PJ_YN;
    private int PJ_PROCESS;
    private int PJ_PROCESS_TASK;
    private int PJ_ACTION;
    boolean DELETED;
    boolean DONE;
    private String CREATE_ID;
    private Date CREATE_DT;
    private String LAST_CHG_ID;
    private Date LAST_CHG_DT;

    @ManyToOne
    @JoinColumn(name = "TEMP_ID")
    private ProjectTempEntity projectTempEntity;

    @ManyToOne
    @JoinColumn(name = "GROUP_ID")
    private GroupEntity groupEntity;

    @OneToMany(mappedBy = "projectEntity", fetch = FetchType.LAZY)
    List<TaskEntity> taskEntityList;
}
