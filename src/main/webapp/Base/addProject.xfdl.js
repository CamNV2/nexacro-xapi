(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("addProject");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","100.00%","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","150","91","136","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Tiêu đề dự án <fc v=\'red\'>*</fc>");
            obj.set_usedecorate("true");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","150","122","78.13%","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("Nhập");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02","150","460","150","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Tên nhóm");
            obj.set_cssclass("label");
            obj.set_font("normal 14pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_03","150","330","150","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Mô tả");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","150","489","38.52%","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("Select");
            var Div00_form_Combo00_01_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_01_innerdataset", obj);
            Div00_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Nhóm A</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Nhóm B</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_01_innerdataset);
            obj.set_text("Chọn--");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","40.55%","450","142","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Thêm nhóm mới");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_color("#fda167");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_03_00","150","536","150","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Tag");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","150","569","78.13%","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_displaynulltext("Nhập tên tag");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","150","360","78.13%","83",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_displaynulltext("Nhập mô tả");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","150","616","468","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","230","658","493","119",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","26","-1","124","20",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Truy cập dự án");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("CollapseBtn","2","0","20","20",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("20");
            obj.set_borderRadius("50%");
            obj.set_background("url(\'theme::blue/images/btn_expand.png\') no-repeat center");
            obj.set_cssclass("isCollap");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Radio("projectPermission","20","14","110","79",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_visible("false");
            var Div00_form_Div01_form_projectPermission_innerdataset = new nexacro.NormalDataset("Div00_form_Div01_form_projectPermission_innerdataset", obj);
            Div00_form_Div01_form_projectPermission_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Riêng tư</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Công khai</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Div01_form_projectPermission_innerdataset);
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("subPrivate","40","42","180","17",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Chỉ có người dùng dự án mới có thể xem và truy cập dự án này.");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("subPublic","40","73","373","43",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Người dùng cổng chỉ có thể xem, theo dõi và nhận xét trong khi người dùng dự án sẽ có toàn quyền truy cập.");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_wordWrap("english");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01","150","37","210","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("Thêm dự án mới");
            obj.set_font("normal 600 18pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","292","96","18","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("i");
            obj.set_font("italic 11pt/normal \"Arial\"");
            obj.set_border("1px solid #fc6304");
            obj.set_borderRadius("50%");
            obj.set_color("#fc6304");
            obj.set_padding("0px 0px 10px 5px");
            obj.set_tooltiptext("Chỗ này điền tên dự án");
            obj.set_tooltiptype("hover,mouseleave");
            obj.set_cursor("pointer");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","242","467","18","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("i");
            obj.set_font("italic 11pt/normal \"Arial\"");
            obj.set_border("1px solid #fc6304");
            obj.set_borderRadius("50%");
            obj.set_color("#fc6304");
            obj.set_padding("0px 0px 10px 5px");
            obj.set_tooltiptext("Chọn 1 nhóm có sẵn hoặc thêm mới");
            obj.set_tooltiptype("hover,mouseleave");
            obj.set_cursor("pointer");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","156","790","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("Thêm");
            obj.set_cssclass("btnPrimary");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","245","790","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("Hủy");
            obj.set_cssclass("btnPrimaryOutline");
            obj.set_fittocontents("width");
            obj.set_padding("0px 15px");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div03","149","255","78.13%","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","480","27",null,null,null,null,null,null,this.Div00.form.Div03.form);
            obj.set_taborder("3");
            obj.set_text("Ngày bắt đầu");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.Div00.form.Div03.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","30","48%","35",null,null,null,null,null,null,this.Div00.form.Div03.form);
            obj.set_taborder("2");
            this.Div00.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","52%","0","480","27",null,null,null,null,null,null,this.Div00.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("Ngày kết thúc");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.Div00.form.Div03.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","52%","30","48%","35",null,null,null,null,null,null,this.Div00.form.Div03.form);
            obj.set_taborder("5");
            this.Div00.form.Div03.addChild(obj.name, obj);

            obj = new Div("Div02","149","177","78.13%","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","150","20",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("Chủ sở hữu");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00","0","30","48.00%","35",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("Chọn --");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Div02_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_form_Div02_form_Combo00_innerdataset", obj);
            Div00_form_Div02_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Ngô Khắc Bắc</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Bắc Ngô Khắc</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Bắc Khắc Ngô</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Div02_form_Combo00_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","52%","0","150","20",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("Mẫu");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","52%","30","48%","35",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("Chọn --");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Div02_form_Combo00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Div02_form_Combo00_00_innerdataset", obj);
            Div00_form_Div02_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Test</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Agile Scrum</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Water Fall</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">Fix bug</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Div02_form_Combo00_00_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","880","660","288","145",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#fff");
            obj.set_boxShadow("0px 0px 10px 5px RGB(140,140,140)");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","12","7","100","30",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Tên nhóm");
            obj.set_font("normal 14pt/normal \"Arial\"");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Edit("NewGroupName","13","45","260","34",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("Nhập tên nhóm");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button00","13","92","118","34",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("Tạo nhóm");
            obj.set_cssclass("btnPrimary");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button00_00","153","92","118","34",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_text("Hủy");
            obj.set_cssclass("btnPrimaryOutline");
            obj.set_fittocontents("width");
            obj.set_padding("0px 15px");
            this.PopupDiv00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,function(p){});
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div03.form
            obj = new Layout("default","",0,0,this.Div00.form.Div03.form,function(p){});
            this.Div00.form.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div02.form
            obj = new Layout("default","",0,0,this.Div00.form.Div02.form,function(p){});
            this.Div00.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,850,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("addProject.xfdl", function() {
        var isCollapsed = false;
        this.Div00_Static02_onclick = function(obj,e) {
        	trace(collapse);
            var comp = obj;
            var form = comp.parent; // Đặt tên form tùy ý (đảm bảo trùng với tên form đã tạo)
        	var collapse = form.CollapseBtn;
        	collapse.set_cssclass(isCollapsed ? "isCollapse" : "isNotCollapse");
            // Lấy các thành phần muốn collapse
            var componentsToCollapse = [form.projectPermission, form.subPrivate, form.subPublic];
            if (isCollapsed) {
                // Ẩn các thành phần khi trạng thái collapse
                for (var i = 0; i < componentsToCollapse.length; i++) {
                    componentsToCollapse[i].set_visible(false);
                }
            } else {
                // Hiển thị các thành phần khi trạng thái mở rộng
                for (var i = 0; i < componentsToCollapse.length; i++) {
                    componentsToCollapse[i].set_visible(true);
                }
            }

            // Đảo ngược trạng thái collapse
            isCollapsed = !isCollapsed;
        };


        this.btn_pdiv_onclick = function(obj,e)
        {

        	var nX = parseInt(obj.width);
        	var nY = 0; //parseInt(obj.height);
        	console.log(this);

        	this.PopupDiv00.trackPopupByComponent(obj
        	                                    , nX
        										, nY
        										, null
        										, null
        										, "fn_pDivCallback");


        };

        this.fn_pDivCallback = function(objID, rtnValue)
        {
        	if(rtnValue == ""){
        		return;
        	}
        	if(objID == "PopupDiv00")
        	{
        		this.alert("Return Value: " + rtnValue);
        	}
        };

        this.PopupDiv00_Button00_00_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup("");
        };

        this.PopupDiv00_Button00_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup(obj.parent.NewGroupName.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Button00.addEventHandler("onclick",this.btn_pdiv_onclick,this);
            this.Div00.form.Div01.form.Static02.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.Div00.form.Button00_00.addEventHandler("onclick",this.PopupDiv00_Button00_onclick,this);
            this.Div00.form.Button00_00_00.addEventHandler("onclick",this.PopupDiv00_Button00_00_onclick,this);
            this.PopupDiv00.form.Static00.addEventHandler("onclick",this.Div00_PopupDiv00_Static00_onclick,this);
            this.PopupDiv00.form.Button00.addEventHandler("onclick",this.PopupDiv00_Button00_onclick,this);
            this.PopupDiv00.form.Button00_00.addEventHandler("onclick",this.PopupDiv00_Button00_00_onclick,this);
        };
        this.loadIncludeScript("addProject.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
