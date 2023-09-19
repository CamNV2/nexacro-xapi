//XJS=common.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        const MESS_DATE_TO = "Ngày áp dụng: Vui lòng nhập thời gian kết thúc."
        const MESS_DATE_FROM = "Ngày áp dụng: Vui lòng nhập thời gian bắt đầu."
        const MESS_DATE_COMPARE = "Ngày áp dụng: Thời gian kết thúc không được nhỏ hơn thời gian bắt đầu."
        const MES_HSL_COMPARE = "HSL đang hưởng: Hệ số trước không được nhỏ hơn hệ số sau."
        const MES_HSL_VALID = "HSL đang hưởng: Hệ số phải nằm trong khoảng từ 1.65 ~ 2.5"
        const MES_NGAYNANGLUON_COMPARE = "Ngày nâng lương tiếp theo không được nhỏ hơn Ngày áp dụng"
        const MES_REQ = " bắt buộc nhập."
        const HSL_MIN = 1.65;
        const HSL_MAX = 2.5;

        this.checkDateBoxSearch = function(dateFrom , dateTo){

        	if(dateFrom && !dateTo){
        		return MESS_DATE_TO;
        	}
        	if(!dateFrom && dateTo){
        		return MESS_DATE_FROM;
        	}
        	if(dateFrom && dateTo && (dateTo < dateFrom)){
        	    return MESS_DATE_COMPARE;
        	}
        	return '';
        }

        this.checkHSLValid = function(hslFrom, hslTo){
        	if(hslTo < hslFrom){
        		return MES_HSL_COMPARE;
        	}
        	return '';
        }

        this.checkInputHSLValid = function(hsl){
        	if(HSL_MIN > hsl || HSL_MAX < hsl){
        		return MES_HSL_VALID;
        	}
        	return '';
        }
        this.validEmptyValue = function(title, value){
        	if(value == null || value.trim() == ''){
        		return title + MES_REQ;
        	}
        	return '';
        }

        this.isNullValue = function(value){
        	if(value == null){
        		return true;
        	}
        	return false;
        }

        this.validNgayNangLuong = function(dateFrom , dateTo){
        	if(dateFrom && dateTo && (dateTo < dateFrom)){
        	    return MES_NGAYNANGLUON_COMPARE;
        	}
        	return '';
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
