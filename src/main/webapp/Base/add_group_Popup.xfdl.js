(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("add_group_Popup");
            this.set_titletext("Form_Popup_Sub");
            this.set_border("1px solid #9c9c9c");
            if (Form == this.constructor)
            {
                this._setFormPosition(351,175);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_child", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_user", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"role\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"name\">NamVH7</Col><Col id=\"role\">1</Col><Col id=\"status\">1</Col></Row><Row><Col id=\"id\">2</Col><Col id=\"name\">SaLT</Col><Col id=\"role\">1</Col><Col id=\"status\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_template", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"INT\" size=\"256\"/><Column id=\"Template_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">1</Col><Col id=\"Template_name\">template 1</Col></Row><Row><Col id=\"ID\">2</Col><Col id=\"Template_name\">template 2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_group", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP_ID\" type=\"INT\" size=\"256\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_rtn_obj","10","120","104","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Tạo nhóm");
            obj.set_borderRadius("24px");
            obj.set_color("white");
            obj.set_background("#FF6200");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rtn_obj2","125","120","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Hủy");
            obj.set_borderRadius("24px");
            obj.set_background("#fff");
            obj.set_color("#ff6200");
            obj.set_border("1px solid #FF6200");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","0","347","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Thêm nhóm mới");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_color("black");
            obj.set_background("#FAFAFA");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_font("normal 700 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("des_lbl00","11","35","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Tên nhóm");
            obj.set_color("black");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("groupNm_txt","10","70","330","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","72","40","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("*");
            obj.set_font("normal 900 20px/normal \"Arial\"");
            obj.set_color("#ff6200");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",351,175,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("add_group_Popup.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	var strParam1 = this.parent.param1;
        	var strParam2 = this.parent.param2;
        	var objParam  = this.parent.param3;

        	this.prj_nm.set_value(strParam1);
        	this.Edit01.set_value(strParam2);

        	this.ds_child.copyData(objParam);
        	this.Grid00.set_binddataset("ds_child");
        	this.Grid00.createFormat();

        	this.Grid00.setCellProperty("body", 0, "edittype", "normal");
        	this.Grid00.setCellProperty("body", 1, "edittype", "normal");
        	this.Grid00.setCellProperty("body", 2, "edittype", "normal");
        	this.Grid00.setCellProperty("body", 3, "edittype", "normal");

        };

        this.btn_rtn_string_onclick = function(obj,e)
        {
        	var strReturn = this.Edit00.value;
        	this.close(strReturn);
        };

        this.btn_rtn_obj_onclick = function(obj,e)
        {
        	 var nameGr = this.groupNm_txt.value;
        	 this.ds_group.setColumn(0, "GROUP_NM",nameGr);
        	 var id = "saveGroup";
             var url = "http://localhost:8080/Group/saveGroup";
             var reqDs = "ds_group = ds_group";
             var respDs = "";
             var args = "";
             var callback = "received";
             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };

        this.btn_rtn_obj2_onclick = function(obj,e)
        {
        	this.opener.ds_parent.clearData();
        	var nRow = this.opener.ds_parent.addRow();
        	this.opener.ds_parent.copyRow(nRow, this.ds_child, this.ds_child.rowposition);
        	this.close();
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}

        	if(strPopupID == "chf_popup1"){
        		this.alert("Return Value: " + strReturn);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_rtn_obj.addEventHandler("onclick",this.btn_rtn_obj_onclick,this);
            this.btn_rtn_obj2.addEventHandler("onclick",this.btn_rtn_obj2_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static06_onclick,this);
            this.groupNm_txt.addEventHandler("onchanged",this.groupNm_txt_onchanged,this);
        };
        this.loadIncludeScript("add_group_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
