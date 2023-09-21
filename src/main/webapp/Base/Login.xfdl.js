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
            obj._setContents("<ColumnInfo><Column id=\"USER_LOGIN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","400","145","36.95%","60.00%",null,null,null,null,null,null,this);
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

            obj = new Edit("Edit00","106","140","61.53%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::image_custom/User_icon_2.svg.png\') no-repeat left top /contain");
            obj.set_textAlign("center");
            obj.set_wordSpacing("12px");
            obj.set_font("normal 14pt \"Arial\"");
            obj.set_maxlength("15");
            obj.set_borderRadius("10px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_login","106","307","61.10%","48",null,null,null,null,null,null,this.Div00.form);
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

            obj = new Edit("Edit00_00","107","230","61.53%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::image_custom/pw2_icon.png\') no-repeat left center /contain");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_maxlength("18");
            obj.set_borderRadius("10px");
            obj.set_password("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_forgotPw00","117","385","58.78%","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Do not have an account? / REGISTER");
            obj.set_textAlign("center");
            obj.set_font("normal 12px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("2px");
            obj.set_color("darkorange");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_forgotPw00_00","75","99","28.97%","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("UserName");
            obj.set_textAlign("center");
            obj.set_font("normal 12px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("2px");
            obj.set_color("darkorange");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_forgotPw00_00_00","73","190","28.97%","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("PassWord");
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
        	 var userName = this.Div00.form.Edit00.value;
        	 var passWord = this.Div00.form.Edit00_00.value;

        	 //check empty

        	 if(userName == null){
        		this.alert("Please enter username");
        		return;
        	 }

        	 if(passWord == null){
        		this.alert("Please enter passWord");
        		return;
        	 }

        	 this.dsLogin.setColumn(0, "USER_ID",userName);
        	 this.dsLogin.setColumn(0, "USER_PW", passWord);

             var id = "login";
             var url = "http://localhost:8080/login";
             var reqDs = "dsLogin = dsLogin";
             var respDs = "";
             var args = "";
             var callback = "received";
             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };

        this.received = function(id, code, message)
        {
             if (code == 0) {
                  this.alert("Login success");
                  //trace(this.ds_gridExpr.rowcount + " numbers of data have been found.");
             } else {

                  this.alert("Invalid username or password ");
             }
        }

        this.Div00_bt_forgotPw00_onclick = function(obj,e)
        {

        	//var path = this.dsMenu.getColumn(this.dsMenu.findRow("id",obj.menuId),"path");

        	nexacro.getApplication().mainframe.fn_addTab("Base::Register.xfdl")

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Edit00.addEventHandler("onchanged",this.Div00_Edit00_onchanged,this);
            this.Div00.form.bt_login.addEventHandler("onclick",this.Div00_bt_login_onclick,this);
            this.Div00.form.Edit00_00.addEventHandler("onchanged",this.Div00_Edit00_00_onchanged,this);
            this.Div00.form.bt_forgotPw00.addEventHandler("onclick",this.Div00_bt_forgotPw00_onclick,this);
            this.Div00.form.bt_forgotPw00_00.addEventHandler("onclick",this.Div00_bt_forgotPw00_onclick,this);
            this.Div00.form.bt_forgotPw00_00_00.addEventHandler("onclick",this.Div00_bt_forgotPw00_onclick,this);
        };
        this.loadIncludeScript("Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
