package com.example.nexacro_xapi.enumeration;

public enum TemplateEnum {

	BO_CUC_TIEU_CHUAN("Bố cục tiêu chuẩn"),
	BO_CUC_AGILE("Bố cục Agile"),
	BO_CUC_WATERFALL("Bố cục Waterfall");
    
	TemplateEnum(String text) {
        this.text = text;
    }
	
	public String getText() {
        return text;
    }
	
    private String text;
}
