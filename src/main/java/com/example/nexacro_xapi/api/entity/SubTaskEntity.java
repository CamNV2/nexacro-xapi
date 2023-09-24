package com.example.nexacro_xapi.api.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "TB_SUBTASK")
@Data
public class SubTaskEntity {
    @Id
    private String ST_ID;
    private String ST_NM;
    private String ST_STT;
    private Date ST_START_DT;
    private Date ST_END_DT;
    private Date ST_RESOLVE_DT;
    private String ST_PRIORITY;
    private String ST_TAG;
    @ManyToOne
    @JoinColumn(name = "USR_ID")
    private UserEntity userEntity;

    @ManyToOne
    @JoinColumn(name = "TASK_ID")
    private TaskEntity taskEntity;
}
