(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            this.set_background("#16100d");
            this.set_cssclass("static01");
            this.set_stepshowtype("action");
            this.set_scrollbartrackbarsize("0");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(220,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"upid\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"tooltiptext\" type=\"STRING\" size=\"256\"/><Column id=\"path\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">10000</Col><Col id=\"caption\">Trang chủ</Col><Col id=\"level\">0</Col><Col id=\"upid\">10000</Col><Col id=\"url\">imagerc::image_custom/home_icon.png</Col><Col id=\"path\"/></Row><Row><Col id=\"id\">20000</Col><Col id=\"caption\">Thông tin mới</Col><Col id=\"level\">0</Col><Col id=\"upid\">20000</Col><Col id=\"url\">imagerc::image_custom/info_icon.png</Col><Col id=\"path\"/></Row><Row><Col id=\"id\">30000</Col><Col id=\"caption\">Thảo luận</Col><Col id=\"level\">0</Col><Col id=\"upid\">30000</Col><Col id=\"url\">imagerc::image_custom/discuss_icon1.png</Col><Col id=\"path\"/></Row><Row><Col id=\"id\">40000</Col><Col id=\"caption\">Báo cáo</Col><Col id=\"level\">0</Col><Col id=\"upid\">40000</Col><Col id=\"url\">imagerc::image_custom/report_icon.png</Col><Col id=\"path\"/></Row><Row><Col id=\"id\">40001</Col><Col id=\"caption\">Báo cáo dự án</Col><Col id=\"level\">1</Col><Col id=\"upid\">40000</Col><Col id=\"path\">FrameBase::Form_Report.xfdl</Col></Row><Row><Col id=\"id\">40002</Col><Col id=\"caption\">Báo cáo task</Col><Col id=\"level\">1</Col><Col id=\"upid\">40000</Col><Col id=\"path\">FrameBase::ReportTask.xfdl</Col></Row><Row><Col id=\"id\">50000</Col><Col id=\"caption\">Lịch</Col><Col id=\"level\">0</Col><Col id=\"upid\">50000</Col><Col id=\"url\">imagerc::image_custom/calendar_icon.png</Col><Col id=\"path\"/></Row><Row><Col id=\"id\">60000</Col><Col id=\"caption\">Dự án</Col><Col id=\"level\">0</Col><Col id=\"upid\">60000</Col><Col id=\"url\">imagerc::image_custom/project_icon.png</Col><Col id=\"path\"/></Row><Row><Col id=\"id\">10100</Col><Col id=\"caption\">Tạo tác vụ</Col><Col id=\"level\">1</Col><Col id=\"upid\">60000</Col><Col id=\"path\">FrameBase::newTask.xfdl</Col></Row><Row><Col id=\"id\">20200</Col><Col id=\"caption\">Thông tin dự án</Col><Col id=\"level\">1</Col><Col id=\"upid\">60000</Col><Col id=\"path\">FrameBase::ProjectList.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","2","0",null,"50","2",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("0px none,0px none,1px solid #2e2826");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","8","10","35","36",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("url(\'imagerc::image_custom/menu_LNC.png\') no-repeat left center /contain");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","45","13","165","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("LNC Projects");
            obj.set_textAlign("center");
            obj.set_font("normal 800 16px/normal \"Malgun Gothic\",\"Algerian\"");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_color("#eaffff");
            obj.set_background("url(\'imagerc::image_custom/logo.png\') no-repeat left center /contain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",220,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Left");
                p.set_background("#16100d");
                p.set_cssclass("static01");
                p.set_stepshowtype("action");
                p.set_scrollbartrackbarsize("0");
                p.set_scrolltype("none");

                p.Static00.set_taborder("2");
                p.Static00.set_border("0px none,0px none,1px solid #2e2826");
                p.Static00.move("2","0",null,"50","2",null);

                p.Static00_00.set_taborder("0");
                p.Static00_00.set_text("");
                p.Static00_00.set_background("url(\'imagerc::image_custom/menu_LNC.png\') no-repeat left center /contain");
                p.Static00_00.move("8","10","35","36",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("LNC Projects");
                p.Static01.set_textAlign("center");
                p.Static01.set_font("normal 800 16px/normal \"Malgun Gothic\",\"Algerian\"");
                p.Static01.set_padding("0px 0px 0px 15px");
                p.Static01.set_color("#eaffff");
                p.Static01.set_background("url(\'imagerc::image_custom/logo.png\') no-repeat left center /contain");
                p.Static01.move("45","13","165","28",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("screen00_02","screen00_02",200,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {
        this.Form_Left_onload = function(obj,e)
        {
        	this.createMenuButton();
        };

        this.createMenuButton = function()
        {
        var myObject = nexacro.getApplication();


        	var left=0, mainTop=72, subTop=0, mainHeight=40, subHeight=50, right=0, gap=0;

        	for (var i = 0, len = this.dsMenu.rowcount; i < len; i++) {
        		var id = this.dsMenu.getColumn(i, "id"),
        			caption = this.dsMenu.getColumn(i, "caption"),
        			level = this.dsMenu.getColumn(i, "level"),
        			upid = this.dsMenu.getColumn(i, "upid")
        			urlImg = this.dsMenu.getColumn(i, "url");

        		if (level == 0) {
        			var objId = "btnMenu_"+id,
        				objIconId = "icon_"+id,
        				menuTitle = new Button(objId, 38, mainTop, null, mainHeight, right, null),
        				staticTag = new Static(objIconId, 10, mainTop, 20, mainHeight);

        				cssclass = "";

        			switch(id) {
        			case "10000":
        				cssclass = "btn_MLF_Lmenu01";
        				break;
        			case "20000":
        				cssclass = "btn_MLF_Lmenu02";
        				break;
        			case "30000":
        				cssclass = "btn_MLF_Lmenu03";
        				break;
        			case "40000":
        				cssclass = "btn_MLF_Lmenu04";
        				break;
         			case "50000":
         				cssclass = "btn_MLF_Lmenu05";
         				break;
         			case "60000":
         				cssclass = "btn_MLF_Lmenu06";
         				break;
        			}

        			staticTag.set_cssclass("icon_style");
        			staticTag.set_background("url('" + urlImg + "') no-repeat left center /20px 20px");
         			this.addChild(objIconId, staticTag);
         			staticTag.show();

        			menuTitle.set_cssclass(cssclass);
        			menuTitle.set_text(caption);
        			menuTitle.menuId = id;
        			menuTitle.addEventHandler("onclick", this.menuTitle_onclick, this);
        			this.addChild(objId, menuTitle);
        			menuTitle.show();

        			mainTop = objId + ":0";
        			objId = "divSubMenu_"+id;

        			var container = new Div(objId, left, mainTop, null, 0, right, null);
        			container.set_cssclass("div_MLF_subMenu");

        			this.addChild(objId, container);
        			container.show();

        			mainTop = objId + ":0";
        		} else {
        			var objId = "btnMenu_"+id,
        				button = new Button(objId, left, subTop, null, subHeight, right, null);

        			button.set_cssclass("btn_MLF_subMenu");
        			button.set_text(caption);
        			button.menuId = id;
        			button.addEventHandler("onclick", this.menuButton_onclick, this);
        			this.components["divSubMenu_" + upid].addChild(objId, button);
        			//this.components["divSubMenu_"+upid].addChild(objId, button);

        			button.show();

        			subTop = objId + ":0";
        		}
        	}
        };


        this.Button01_onclick = function(obj,e)
        {
        	this.createMenuButton();

        };
        this.menuTitle_onclick = function(obj,e)
        {
        	var cssclasses = obj.cssclass.split(","),
        		container = this.components["divSubMenu_"+obj.menuId];

        	// expanded
        	if (cssclasses.length > 1 && cssclasses[1] == "btn_MLF_LmenuS") {
        		container.set_height(0);
        		obj.set_cssclass(cssclasses[0]);
        		this.selectedMenu = "";
        	}
        	// collapsed
        	else {
        		if (this.selectedMenu)	this.components[this.selectedMenu].click();

        		container.set_height(container.form.components.length * 50 + 2);
        		obj.set_cssclass(cssclasses[0] + ",btn_MLF_LmenuS");
        		this.selectedMenu = obj.name;
        	    var path = this.dsMenu.getColumn(this.dsMenu.findRow("id",obj.menuId),"path");

        	}

        	this.resetScroll();
        };

        this.menuButton_onclick = function(obj,e)
        {
        	var menuId = obj.menuId;
        	var path = this.dsMenu.getColumn(this.dsMenu.findRow("id",obj.menuId),"path");

        	nexacro.getApplication().mainframe.HFrameSet00.VFrameSet00.WorkFrame.form.fn_addTab(path);


        //  	if(menuId == '20100') {
        //  		nexacro.getApplication().mainframe.HFrameSet00.VFrameSet00.WorkFrame.form.Div00.form.Static00.set_visible(false)
        //  		nexacro.getApplication().mainframe.HFrameSet00.VFrameSet00.WorkFrame.form.Div00.form.Div_container_prj.set_top(0);
        //  	}
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.Static01.addEventHandler("onclick",this.Div00_Div00_Static01_onclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
