(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("newProject");
            if (Form == this.constructor)
            {
                this._setFormPosition(704,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div_container_prj","0","38","700",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","36","20","628","52",null,null,null,null,null,null,this.Div_container_prj.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div_container_prj.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","21","100%","31",null,null,null,null,null,null,this.Div_container_prj.form.Div00.form);
            obj.set_taborder("0");
            obj.set_borderRadius("3px");
            this.Div_container_prj.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","88","14",null,null,null,null,null,null,this.Div_container_prj.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Tiêu Đề Dự Án");
            obj.set_font("13px/normal \"Arial\"");
            obj.set_cssclass("fz-text");
            this.Div_container_prj.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","88","-3","8","8",null,null,null,null,null,null,this.Div_container_prj.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("*");
            obj.set_textAlign("left");
            obj.set_color("red");
            this.Div_container_prj.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","36","92","280","52",null,null,null,null,null,null,this.Div_container_prj.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Div_container_prj.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","81","14",null,null,null,null,null,null,this.Div_container_prj.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("Chủ sỡ hữu");
            obj.set_font("13px/normal \"Arial\"");
            obj.set_cssclass("fz-text");
            this.Div_container_prj.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","21","100%","31",null,null,null,null,null,null,this.Div_container_prj.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("3px");
            this.Div_container_prj.form.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","384","92","280","52",null,null,null,null,null,null,this.Div_container_prj.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.Div_container_prj.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","81","14",null,null,null,null,null,null,this.Div_container_prj.form.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Mẫu");
            obj.set_cssclass("fz-text");
            this.Div_container_prj.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","0","21","100%","31",null,null,null,null,null,null,this.Div_container_prj.form.Div00_00_00.form);
            obj.set_taborder("1");
            this.Div_container_prj.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_01","36","164","280","52",null,null,null,null,null,null,this.Div_container_prj.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.Div_container_prj.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","81","16",null,null,null,null,null,null,this.Div_container_prj.form.Div00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("Ngày Bắt Đầu");
            obj.set_font("13px/normal \"Arial\"");
            obj.set_cssclass("fz-text");
            this.Div_container_prj.form.Div00_00_01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","21","100.00%","31",null,null,null,null,null,null,this.Div_container_prj.form.Div00_00_01.form);
            obj.set_taborder("1");
            this.Div_container_prj.form.Div00_00_01.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","384","164","280","52",null,null,null,null,null,null,this.Div_container_prj.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.Div_container_prj.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","96","16",null,null,null,null,null,null,this.Div_container_prj.form.Div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Ngày Kết Thúc");
            obj.set_cssclass("fz-text");
            this.Div_container_prj.form.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","21","100.00%","31",null,null,null,null,null,null,this.Div_container_prj.form.Div00_00_00_00.form);
            obj.set_taborder("1");
            this.Div_container_prj.form.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_01_00","36","220","40.00%","20",null,null,null,null,null,null,this.Div_container_prj.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.Div_container_prj.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","1","0",null,"20","0",null,null,null,null,null,this.Div_container_prj.form.Div00_00_01_00.form);
            obj.set_taborder("0");
            obj.set_text("Cài đặt nội dung này thành dự án chặt chẽ");
            this.Div_container_prj.form.Div00_00_01_00.addChild(obj.name, obj);

            obj = new Div("Div00_01","36","256","628","118",null,null,null,null,null,null,this.Div_container_prj.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.Div_container_prj.addChild(obj.name, obj);

            obj = new Static("Static01","1","0","81","14",null,null,null,null,null,null,this.Div_container_prj.form.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("Mô tả");
            obj.set_cssclass("fz-text");
            this.Div_container_prj.form.Div00_01.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0","18","100%","98",null,null,null,null,null,null,this.Div_container_prj.form.Div00_01.form);
            obj.set_taborder("1");
            this.Div_container_prj.form.Div00_01.addChild(obj.name, obj);

            obj = new Div("Div00_00_02","36","392","283","52",null,null,null,null,null,null,this.Div_container_prj.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.Div_container_prj.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","81","14",null,null,null,null,null,null,this.Div_container_prj.form.Div00_00_02.form);
            obj.set_taborder("1");
            obj.set_text("Chủ sỡ hữu");
            obj.set_cssclass("fz-text");
            this.Div_container_prj.form.Div00_00_02.addChild(obj.name, obj);

            obj = new Combo("Combo00","0","21","100.00%","31",null,null,null,null,null,null,this.Div_container_prj.form.Div00_00_02.form);
            obj.set_taborder("1");
            this.Div_container_prj.form.Div00_00_02.addChild(obj.name, obj);

            obj = new Static("Static01_00","184","0","96","14",null,null,null,null,null,null,this.Div_container_prj.form.Div00_00_02.form);
            obj.set_taborder("2");
            obj.set_text("Thêm nhóm mới");
            obj.set_cssclass("fz-text");
            obj.set_visible("false");
            obj.set_color("#ff6400");
            this.Div_container_prj.form.Div00_00_02.addChild(obj.name, obj);

            obj = new Div("Div00_02","36","464","628","52",null,null,null,null,null,null,this.Div_container_prj.form);
            obj.set_taborder("8");
            obj.set_text("");
            this.Div_container_prj.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","21","100.00%","31",null,null,null,null,null,null,this.Div_container_prj.form.Div00_02.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            this.Div_container_prj.form.Div00_02.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","81","16",null,null,null,null,null,null,this.Div_container_prj.form.Div00_02.form);
            obj.set_taborder("1");
            obj.set_text("Tag");
            obj.set_cssclass("fz-text");
            this.Div_container_prj.form.Div00_02.addChild(obj.name, obj);

            obj = new Div("Div00_02_00","32","546","628","98",null,null,null,null,null,null,this.Div_container_prj.form);
            obj.set_taborder("9");
            obj.set_text("");
            this.Div_container_prj.addChild(obj.name, obj);

            obj = new Static("Static01","9","0","151","15",null,null,null,null,null,null,this.Div_container_prj.form.Div00_02_00.form);
            obj.set_taborder("1");
            obj.set_text("Truy Cập Dự Án");
            obj.set_background("url(\'theme::blue/images/btn_expand.png\') no-repeat left center");
            obj.set_cssclass("fz-text");
            obj.set_font("bold 13px/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 13px");
            this.Div_container_prj.form.Div00_02_00.addChild(obj.name, obj);

            obj = new Radio("Radio00","20","20","280",null,null,"0",null,null,null,null,this.Div_container_prj.form.Div00_02_00.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rtl("false");
            obj.set_tooltiptype("hover,mouseleave");
            obj.set_tooltiptext("aa");
            obj.set_cssclass("fz-text");
            obj.set_font("13px/normal \"Arial\"");
            var Div_container_prj_form_Div00_02_00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div_container_prj_form_Div00_02_00_form_Radio00_innerdataset", obj);
            Div_container_prj_form_Div00_02_00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Riêng tư</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Công khai</Col></Row></Rows>");
            obj.set_innerdataset(Div_container_prj_form_Div00_02_00_form_Radio00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.Div_container_prj.form.Div00_02_00.addChild(obj.name, obj);

            obj = new Button("Button00","36","664","88","34",null,null,null,null,null,null,this.Div_container_prj.form);
            obj.set_taborder("10");
            obj.set_text("Thêm");
            obj.set_cssclass("btnAdd");
            this.Div_container_prj.addChild(obj.name, obj);

            obj = new Button("Button01","171","664","88","34",null,null,null,null,null,null,this.Div_container_prj.form);
            obj.set_taborder("11");
            obj.set_text("Hủy");
            obj.set_cssclass("btnAdd");
            obj.set_color("#ff6400");
            obj.set_background("#ffffff");
            this.Div_container_prj.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","704","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Dự án mới");
            obj.set_font("18pt/normal \"Arial\"");
            obj.set_background("#f4f4f4");
            obj.set_padding("0px 0px 0px 36px");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div_container_prj.form.Div00.form
            obj = new Layout("default","",0,0,this.Div_container_prj.form.Div00.form,function(p){});
            this.Div_container_prj.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_container_prj.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div_container_prj.form.Div00_00.form,function(p){});
            this.Div_container_prj.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_container_prj.form.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div_container_prj.form.Div00_00_00.form,function(p){});
            this.Div_container_prj.form.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_container_prj.form.Div00_00_01.form
            obj = new Layout("default","",0,0,this.Div_container_prj.form.Div00_00_01.form,function(p){});
            this.Div_container_prj.form.Div00_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_container_prj.form.Div00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div_container_prj.form.Div00_00_00_00.form,function(p){});
            this.Div_container_prj.form.Div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_container_prj.form.Div00_00_01_00.form
            obj = new Layout("default","",0,0,this.Div_container_prj.form.Div00_00_01_00.form,function(p){});
            this.Div_container_prj.form.Div00_00_01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_container_prj.form.Div00_01.form
            obj = new Layout("default","",0,0,this.Div_container_prj.form.Div00_01.form,function(p){});
            this.Div_container_prj.form.Div00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_container_prj.form.Div00_00_02.form
            obj = new Layout("default","",0,0,this.Div_container_prj.form.Div00_00_02.form,function(p){});
            this.Div_container_prj.form.Div00_00_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_container_prj.form.Div00_02.form
            obj = new Layout("default","",0,0,this.Div_container_prj.form.Div00_02.form,function(p){});
            this.Div_container_prj.form.Div00_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_container_prj.form.Div00_02_00.form
            obj = new Layout("default","",0,0,this.Div_container_prj.form.Div00_02_00.form,function(p){});
            this.Div_container_prj.form.Div00_02_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_container_prj.form
            obj = new Layout("default","",0,0,this.Div_container_prj.form,function(p){});
            this.Div_container_prj.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",704,760,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("newProject.xfdl", function() {
        this.new_prj_onload = function(obj,e)
        {
        	nexacro.getApplication().mainframe.HFrameSet00.VFrameSet00.TopFrame.form.Static00.set_text('Dự án mới');
         	this.Static00.set_visible(false);
         	this.Div_container_prj.set_top(0);
        };

        this.Div_container_prj_Button01_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.new_prj_onload,this);
            this.Div_container_prj.form.Div00.form.Static01.addEventHandler("onclick",this.Div_container_prj_Div00_Static01_onclick,this);
            this.Div_container_prj.form.Div00.form.Static00.addEventHandler("onclick",this.Div_container_prj_Div00_Static00_onclick,this);
            this.Div_container_prj.form.Div00_00_00.form.Static01.addEventHandler("onclick",this.Div00_00_00_Static01_onclick,this);
            this.Div_container_prj.form.Div00_00_01_00.form.CheckBox00.addEventHandler("onclick",this.Div00_00_01_00_CheckBox00_onclick,this);
            this.Div_container_prj.form.Div00_02_00.form.Static01.addEventHandler("onclick",this.Div00_02_00_Static01_onclick,this);
            this.Div_container_prj.form.Div00_02_00.form.Radio00.addEventHandler("onitemchanged",this.Div00_02_00_00_Radio00_onitemchanged,this);
            this.Div_container_prj.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Div_container_prj.form.Button01.addEventHandler("onclick",this.Div_container_prj_Button01_onclick,this);
        };
        this.loadIncludeScript("newProject.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
