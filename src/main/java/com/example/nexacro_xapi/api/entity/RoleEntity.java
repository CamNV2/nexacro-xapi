package com.example.nexacro_xapi.api.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "TB_ROLE")
@Data
public class RoleEntity {
    @Id
    private String ROLE_ID;
    private String ROLE_NM;
    private Date CREATE_DT;
    private String LAST_CHG_ID;
    private Date LAST_CHG_DT;

    @OneToMany(mappedBy = "roleEntity", fetch = FetchType.LAZY)
    List<UserEntity> userEntityList;

}
