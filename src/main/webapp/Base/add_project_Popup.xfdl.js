(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("add_project_Popup");
            this.set_titletext("Form_Popup_Sub");
            this.set_border("1px solid #9c9c9c");
            if (Form == this.constructor)
            {
                this._setFormPosition(581,811);
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
            obj._setContents("<ColumnInfo><Column id=\"GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("prjNm_txt","19","70","511","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","40","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Tiêu đề dự án");
            obj.set_color("black");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","18","725","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Thêm");
            obj.set_borderRadius("24px");
            obj.set_color("white");
            obj.set_background("#FF6200");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","100","725","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Hủy");
            obj.set_borderRadius("24px");
            obj.set_color("#ff6200");
            obj.set_border("1px solid #FF6200");
            obj.set_background("#fff");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","0","548","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Dự án mới");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_color("black");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_font("normal 700 12pt/normal \"Arial\"");
            obj.set_background("#FAFAFA");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","105","40","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("*");
            obj.set_font("normal 900 20px/normal \"Arial\"");
            obj.set_color("#ff6200");
            this.addChild(obj.name, obj);

            obj = new Static("owner_lbl","18","105","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Chủ sở hữu");
            obj.set_color("black");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbx_owner","20","140","254","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_user");
            obj.set_codecolumn("id");
            obj.set_datacolumn("name");
            obj.set_text("");
            obj.set_value("bind: GROUP_NM");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("template_lbl","289","105","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Mẫu");
            obj.set_color("black");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbx_owner00","291","140","239","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_template");
            obj.set_codecolumn("ID");
            obj.set_datacolumn("Template_name");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("strdt_lbl","20","185","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Ngày bắt đầu");
            obj.set_color("black");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("endt_lbl","289","185","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Ngày kết thúc");
            obj.set_color("black");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("stdt_cld","20","225","254","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Calendar("endt_cld","291","225","239","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new CheckBox("isTight_chx","19","265","340","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_text("Cài đặt nội dung này thành dự án chặt chẽ");
            this.addChild(obj.name, obj);

            obj = new Static("des_lbl","20","295","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Mô tả");
            obj.set_color("black");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("des_txt","19","330","511","110",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("group_lbl","20","450","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Tên nhóm");
            obj.set_color("black");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("addgroup_lbl","225","450","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Thêm nhóm mới");
            obj.set_font("normal 700 12px/normal \"Arial\"");
            obj.set_color("#ff6200");
            this.addChild(obj.name, obj);

            obj = new Combo("cbx_group","19","480","301","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_group");
            obj.set_codecolumn("GROUP_ID");
            obj.set_datacolumn("GROUP_NM");
            obj.set_text("");
            obj.set_value("bind: GROUP_NM");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("tag_lbl","20","510","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Tag");
            obj.set_color("black");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("tag_txt","20","540","510","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("group_lbl00","20","580","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_color("black");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_text("Truy cập dự án");
            this.addChild(obj.name, obj);

            obj = new Radio("access_rdo","19","600","491","90",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("2");
            obj.set_fittocontents("width");
            obj.set_font("normal 600 10pt/normal \"Arial\"");
            var access_rdo_innerdataset = new nexacro.NormalDataset("access_rdo_innerdataset", obj);
            access_rdo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Riêng tư</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Công khai</Col></Row></Rows>");
            obj.set_innerdataset(access_rdo_innerdataset);
            obj.set_value("dropdown");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","630","510","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Chỉ có người dùng dự án mới có thể xem và truy cập dự án này.");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","670","510","50",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Người dùng cổng chỉ có thể xem, theo dõi, và nhận xét trong khi người dùng dự án sẽ có toàn quyền truy cập.");
            obj.set_wordWrap("english");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("0px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",581,811,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbx_owner","value","ds_user","id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cbx_owner00","value","ds_user","id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cbx_group","value","ds_group","GROUP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cbx_group","visible","ds_group","GROUP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cbx_group","text","ds_group","GROUP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("add_project_Popup.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	var strParam1 = this.parent.param1;
        	var strParam2 = this.parent.param2;
        	var objParam  = this.parent.param3;

        	this.prjNm_txt.set_value(strParam1);
        	this.getAllGroup();
        };

        this.getAllGroup = function(){
        	this.ds_group.clear();
        	 var id = "Group";
             var url = "http://localhost:8080/Group";
             var reqDs = "";
             var respDs = "ds_group=IDDataset";
             var args = "";
             var callback = "received";
             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };



        this.btn_rtn_string_onclick = function(obj,e)
        {
        	var strReturn = this.Edit00.value;
        	this.close(strReturn);
        };

        this.btn_rtn_obj_onclick = function(obj,e)
        {
        	this.opener.fn_parent(this.ds_child);
        	this.close();
        };

        this.btn_rtn_obj2_onclick = function(obj,e)
        {
        	this.opener.ds_parent.clearData();
        	var nRow = this.opener.ds_parent.addRow();
        	this.opener.ds_parent.copyRow(nRow, this.ds_child, this.ds_child.rowposition);
        	this.close();
        };

        this.addgroup_lbl_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup2"
        	                  , 0
        					  , 0
        					  , 500
        					  , 400
        					  , null
        					  , null
        					  , "Base::add_group_Popup.xfdl");

        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	objChildFrame.showModal(this.getOwnerFrame()
        						  , null
        						  , this
        						  , "fn_popupCallback");
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}

        	if(strPopupID == "chf_popup2"){
        		this.alert("Return Value: " + strReturn);
        	}
        };

        this.Static00_00_onclick = function(obj,e)
        {

        };

        this.cbx_group_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_add.addEventHandler("onclick",this.btn_rtn_string_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_rtn_obj_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static06_onclick,this);
            this.addgroup_lbl.addEventHandler("onclick",this.addgroup_lbl_onclick,this);
            this.cbx_group.addEventHandler("onitemchanged",this.cbx_group_onitemchanged,this);
            this.access_rdo.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
        };
        this.loadIncludeScript("add_project_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
