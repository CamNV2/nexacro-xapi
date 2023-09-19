package com.example.nexacro_xapi.entity.response;

import java.util.List;

import lombok.Data;

@Data
public class ResponseEntity {

    private int code;
    private String message;
    private List<Dataset> datasets;

    public ResponseEntity(int code, String message, List<Dataset> datasets) {
        this.code = code;
        this.message = message;
        this.datasets = datasets;
    }
}