package com.example.nexacro_xapi.enumeration;

public enum StatusEnum {

	CO_HIEU_LUC("Có hiệu lực"),
	DANG_TRIEN_KHAI("Đang triển khai"),
	HUY_BO("Hủy bỏ");
	
	StatusEnum(String text) {
        this.text = text;
    }
	
	public String getText() {
        return text;
    }
	
    private String text;
}
