(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Menu");
            this.set_titletext("New Form");
            this.set_background("#2d2d2d");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("db_menu_left", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">TRANG CHỦ</Col></Row><Row><Col id=\"MENU_CD\">1111</Col><Col id=\"UP_MENU_CD\">1</Col><Col id=\"MENU_NM\">Thông Tin Mới</Col><Col id=\"MENU_LVL\">0</Col></Row><Row><Col id=\"MENU_CD\">1112</Col><Col id=\"UP_MENU_CD\"/><Col id=\"MENU_NM\">Thông Tin Mới 1</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">1113</Col><Col id=\"UP_MENU_CD\"/><Col id=\"MENU_NM\">Thông Tin Mới 2</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">2222</Col><Col id=\"UP_MENU_CD\">1</Col><Col id=\"MENU_NM\">Thảo Luận</Col><Col id=\"MENU_LVL\">0</Col></Row><Row><Col id=\"MENU_CD\">3333</Col><Col id=\"UP_MENU_CD\"/><Col id=\"MENU_NM\">Báo Cáo</Col><Col id=\"MENU_LVL\">0</Col></Row><Row><Col id=\"MENU_CD\">4444</Col><Col id=\"UP_MENU_CD\"/><Col id=\"MENU_NM\">Lịch</Col><Col id=\"MENU_LVL\">0</Col></Row><Row><Col id=\"MENU_CD\">5555</Col><Col id=\"UP_MENU_CD\"/><Col id=\"MENU_NM\">Dự Án</Col><Col id=\"MENU_LVL\">0</Col></Row><Row><Col id=\"MENU_CD\">6666</Col><Col id=\"UP_MENU_CD\"/><Col id=\"MENU_NM\">Tổng Quan Công Việc</Col><Col id=\"MENU_LVL\">0</Col></Row><Row><Col id=\"MENU_CD\">7777</Col><Col id=\"UP_MENU_CD\"/><Col id=\"MENU_NM\">Các Dự Án Gần</Col><Col id=\"MENU_LVL\">0</Col></Row><Row><Col id=\"MENU_CD\">2221</Col><Col id=\"UP_MENU_CD\"/><Col id=\"MENU_NM\">Thông Tin Mới 1</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">2222</Col><Col id=\"UP_MENU_CD\"/><Col id=\"MENU_NM\">Thông Tin Mới 2</Col><Col id=\"MENU_LVL\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"upid\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"tooltiptext\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">10000</Col><Col id=\"caption\">MENU1</Col><Col id=\"level\">0</Col><Col id=\"upid\">10000</Col><Col id=\"url\">imagerc::image_custom/menu.png</Col></Row><Row><Col id=\"id\">20000</Col><Col id=\"caption\">MENU2</Col><Col id=\"level\">0</Col><Col id=\"upid\">20000</Col></Row><Row><Col id=\"id\">10100</Col><Col id=\"caption\">MENU1.1</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col></Row><Row><Col id=\"id\">20100</Col><Col id=\"caption\">MENU2.1</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col></Row><Row><Col id=\"id\">20200</Col><Col id=\"caption\">MENU2.2</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","100.00%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MWF_leftBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","50","0","150","6.81%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::image_custom/iconProject.png\') no-repeat left center /contain");
            obj.set_text("PROJECT");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18px/normal \"Malgun Gothic\",\"Algerian\"");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_color("#eaffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","5","30","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::image_custom/menu.png\') no-repeat left center /contain");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Menu.xfdl", function() {


        this.createMenuButton = function()
        {
        var myObject = nexacro.getApplication();
        	var app = nexacro.getApplication();

        	var left=0, mainTop=70, subTop=0, mainHeight=40, subHeight=50, right=0, gap=0;

        	for (var i = 0, len = this.dsMenu.rowcount; i < len; i++) {
        		var id = this.dsMenu.getColumn(i, "id"),
        			caption = this.dsMenu.getColumn(i, "caption"),
        			level = this.dsMenu.getColumn(i, "level"),
        			upid = this.dsMenu.getColumn(i, "upid")
        			urlImg = this.dsMenu.getColumn(i, "url");

        		if (level == 0) {
        			var objId = "btnMenu_"+id,
        				menuTitle = new Button(objId, left, mainTop, null, mainHeight, right, null),
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
        			}
        			menuTitle.set_cssclass(cssclass);
        			menuTitle.set_text(caption);
        			menuTitle.menuId = id;
        			menuTitle.addEventHandler("onclick", this.menuTitle_onclick, this);
        			this.addChild(objId, menuTitle);
        			menuTitle.show();
        			//menuTitle.set_background("url('imagerc::image_custom/menu.png') no-repeat left center /contain");
        			menuTitle.set_background("url('" + urlImg + "') no-repeat left center /contain");
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

        			button.set_cssclass("brn_MLF_subMenu");
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
        	}

        	this.resetScroll();
        };



        this.Static00_00_onclick = function(obj,e)
        {
        	this.createMenuButton();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static01.addEventHandler("onclick",this.Div00_Div00_Static01_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
        };
        this.loadIncludeScript("Menu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
