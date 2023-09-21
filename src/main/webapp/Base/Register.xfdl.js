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
            obj = new Dataset("ds_ROLE", this);
            obj._setContents("<ColumnInfo><Column id=\"role_Cd\" type=\"STRING\" size=\"256\"/><Column id=\"role_Nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"role_Cd\">1</Col><Col id=\"role_Nm\">Project Manager</Col></Row><Row><Col id=\"role_Cd\">2</Col><Col id=\"role_Nm\">Team Lead</Col></Row><Row><Col id=\"role_Cd\">3</Col><Col id=\"role_Nm\">Member</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegister", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_PW\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","395","155","45.63%","65.56%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("linear-gradient(to right top,#5b5b5b 30%,#b3533b) #c4c4c4");
            obj.set_opacity("1");
            obj.set_borderRadius("12px");
            this.addChild(obj.name, obj);

            obj = new Static("login_st","0","0","99.99%","90",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("CREATE ACCOUNT");
            obj.set_textAlign("center");
            obj.set_font("normal 700 24px/normal \"Malgun Gothic\"");
            obj.set_color("darkorange");
            obj.set_letterSpacing("5px");
            obj.set_background("#4c423d");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_login","141","357","59.07%","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Register");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("5px");
            obj.set_background("#4c423d");
            obj.set_opacity("0.5");
            obj.set_borderRadius("15px");
            obj.set_color("darkorange");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("tb_pw","195","220","40.58%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::image_custom/pw2_icon.png\') no-repeat left center /contain");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_maxlength("18");
            obj.set_borderRadius("10px");
            obj.set_password("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","195","285","40.41%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_ROLE");
            obj.set_codecolumn("role_Cd");
            obj.set_datacolumn("role_Nm");
            obj.set_borderRadius("10px");
            obj.set_font("normal 700 18px/normal \"Malgun Gothic\"");
            obj.set_text("Project Manager");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_forgotPw00","152","429","54.96%","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("LOGIN");
            obj.set_textAlign("center");
            obj.set_font("normal 12px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("2px");
            obj.set_color("darkorange");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("tb_usrName","195","165","40.58%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_background("url(\'imagerc::image_custom/User_icon_2.svg.png\') no-repeat left top /contain");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_maxlength("18");
            obj.set_borderRadius("10px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_forgotPw00_00_00","39","165","22.43%","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("User Name");
            obj.set_textAlign("center");
            obj.set_font("normal 12px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("2px");
            obj.set_color("darkorange");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_forgotPw00_00_01","39","215","22.43%","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Password");
            obj.set_textAlign("center");
            obj.set_font("normal 12px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("2px");
            obj.set_color("darkorange");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("tb_name","194","105","40.58%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_background("url(\'imagerc::image_custom/User_icon_2.svg.png\') no-repeat left top /contain");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_maxlength("18");
            obj.set_borderRadius("10px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_forgotPw00_00_00_00","30","109","22.43%","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("Name");
            obj.set_textAlign("center");
            obj.set_font("normal 12px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("2px");
            obj.set_color("darkorange");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_forgotPw00_00_00_00_00","30","285","22.43%","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("Role");
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
            obj = new BindItem("item0","Div00.form.Edit00","value","dsInput","USER_LOGIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.tb_pw","value","dsInput","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.tb_usrName","value","dsInput","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.tb_name","value","dsInput","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Register.xfdl", function() {

        this.Div00_bt_login_onclick = function(obj,e)
        {
        	 var userName = this.Div00.form.tb_name.value;
        	 var userLogin = this.Div00.form.tb_usrName.value;
        	 var passWord = this.Div00.form.tb_pw.value;
        	 var roleCD = this.Div00.form.Combo00.value;

        	 if (!this.checkInput(userName, "Name") || !this.checkInput(userLogin, "Username") || !this.checkInput(passWord, "Password")) {
        			return;
        	 }

        	 this.dsRegister.setColumn(0, "USER_ID",userLogin);
        	 this.dsRegister.setColumn(0, "USER_PW", passWord);
        	 this.dsRegister.setColumn(0, "USER_NM", userName);
        	 this.dsRegister.setColumn(0, "ROLE_ID", roleCD);

        	 var id = "register";
             var url = "http://localhost:8080/register";
             var reqDs = "dsRegister = dsRegister";
             var respDs = "";
             var args = "";
             var callback = "received";
             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };

        this.checkInput =  function(inputValue, inputName)
        {
        	if (inputValue == null) {
                this.alert("Please enter " + inputName);
                return false;
            }
        	return true;
        };

        this.received = function(id, code, message) {
        	if (code == 0) {
        		this.alert("Register success");
        	}else {
        		this.alert("Invalid username");
        	}
        }

        this.Div00_Edit00_00_00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.bt_login.addEventHandler("onclick",this.Div00_bt_login_onclick,this);
            this.Div00.form.bt_forgotPw00.addEventHandler("onclick",this.Div00_bt_forgotPw00_onclick,this);
            this.Div00.form.tb_usrName.addEventHandler("onchanged",this.Div00_Edit00_00_00_onchanged,this);
            this.Div00.form.bt_forgotPw00_00_00.addEventHandler("onclick",this.Div00_bt_forgotPw00_onclick,this);
            this.Div00.form.bt_forgotPw00_00_01.addEventHandler("onclick",this.Div00_bt_forgotPw00_onclick,this);
            this.Div00.form.tb_name.addEventHandler("onchanged",this.Div00_Edit00_00_00_onchanged,this);
            this.Div00.form.bt_forgotPw00_00_00_00.addEventHandler("onclick",this.Div00_bt_forgotPw00_onclick,this);
            this.Div00.form.bt_forgotPw00_00_00_00_00.addEventHandler("onclick",this.Div00_bt_forgotPw00_onclick,this);
        };
        this.loadIncludeScript("Register.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
