package com.example.nexacro_xapi.enumeration;

public enum PriorityEnum {

	LOW("Dễ"),
	HIGHT("Khó"),
	MEDIUM("Trung bình");
    
	PriorityEnum(String text) {
        this.text = text;
    }
	
	public String getText() {
        return text;
    }
	
    private String text;
}
