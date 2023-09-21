package com.example.nexacro_xapi.api.entity;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "TB_USER")
@Data
@Getter
@Setter
public class UserEntity {
    @Id
    private String USR_ID;
    private String USR_NM;
    private String USR_PWD;
    private String USR_ADDRESS;
    private String USR_YN;
    private String CREATE_ID;
    private Date CREATE_DT;
    private String LAST_CHG_ID;
    private Date LAST_CHG_DT;
    private Date LAST_LOGIN;

    @ManyToOne
    @JoinColumn(name = "GROUP_ID")
    private GroupEntity groupEntity;
    @ManyToOne
    @JoinColumn(name = "ROLE_ID")
    private RoleEntity roleEntity;

    @OneToMany(mappedBy = "userEntity", fetch = FetchType.LAZY)
    private List<SubTaskEntity> taskList;


}