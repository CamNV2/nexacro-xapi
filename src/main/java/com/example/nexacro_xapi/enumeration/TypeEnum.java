package com.example.nexacro_xapi.enumeration;

public enum TypeEnum {

	CODING("Coding"),
	UT("Kiểm tra UT"),
	SRS("Đặc tả yêu cầu"),
	ISSUE("Vấn đề"),
	DESIGN("Thiết kế chi tiết");
    
	TypeEnum(String text) {
        this.text = text;
    }
	
	public String getText() {
        return text;
    }
	
    private String text;
}
