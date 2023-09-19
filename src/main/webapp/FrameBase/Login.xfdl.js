(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Login");
            this.set_titletext("New Form");
            this.set_background("linear-gradient(to right top,#1e1e1e 50%,#b47b59) #2d2d2d");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInput", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_LOGIN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_LOGIN\">RYU</Col><Col id=\"USER_PW\">123</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","425","145","35%","60%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("linear-gradient(to right top,#5b5b5b 30%,#b3533b) #c4c4c4");
            obj.set_opacity("1");
            obj.set_borderRadius("12px");
            this.addChild(obj.name, obj);

            obj = new Static("login_st","0","0","100.00%","90",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("LOGIN FORM");
            obj.set_textAlign("center");
            obj.set_font("normal 700 24px/normal \"Malgun Gothic\"");
            obj.set_color("darkorange");
            obj.set_letterSpacing("5px");
            obj.set_background("#4c423d");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","86","130","62%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::image_custom/User_icon_2.svg.png\') no-repeat left top /contain");
            obj.set_textAlign("center");
            obj.set_wordSpacing("12px");
            obj.set_font("normal 14pt \"Arial\"");
            obj.set_maxlength("15");
            obj.set_borderRadius("10px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_login","86","307","59.60%","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Login");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("5px");
            obj.set_background("#4c423d");
            obj.set_opacity("0.5");
            obj.set_borderRadius("15px");
            obj.set_color("darkorange");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","87","200","62%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::image_custom/pw2_icon.png\') no-repeat left center /contain");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_maxlength("18");
            obj.set_borderRadius("10px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_forgotPw","86","250","60.04%","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Forgot User Name / Password");
            obj.set_textAlign("center");
            obj.set_font("normal 14px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("3px");
            obj.set_color("darkorange");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_forgotPw00","87","395","59.60%","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Do not have an account? / REGISTER");
            obj.set_textAlign("center");
            obj.set_font("normal 12px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("2px");
            obj.set_color("darkorange");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Login.xfdl", function() {

        this.Div00_bt_login_onclick = function(obj,e)
        {

            var id = "getAll";
             var url = "http://localhost:8080/login";
             var reqDs = "dsInput =dsInput";
             var respDs = "ds_tranction=IDDataset";
             var args = "";
             var callback = "received";



             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.bt_login.addEventHandler("onclick",this.Div00_bt_login_onclick,this);
        };
        this.loadIncludeScript("Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
