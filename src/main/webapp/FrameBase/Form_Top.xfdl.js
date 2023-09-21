(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,49);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0","13.28%","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Dự án");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static_setting",null,"17","15","15","93",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            obj.set_background("url(\'imagerc::image_custom/setup.png\') no-repeat center center /15px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("Static_img",null,"7","33","33","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            obj.set_background("url(\'imagerc::image_custom/user.png\') no-repeat center center /33px 33px");
            this.addChild(obj.name, obj);

            obj = new Static("Static_store",null,"17","15","15","153",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            obj.set_background("url(\'imagerc::image_custom/store.png\') no-repeat center center /15px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("Static_notify",null,"17","15","15","213",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            obj.set_background("url(\'imagerc::image_custom/notify_top.png\') no-repeat center center /15px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("Static_search",null,"17","15","15","273",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            obj.set_background("url(\'imagerc::image_custom/search.png\') no-repeat center top /15px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("Static_add",null,"17","15","15","333",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            obj.set_background("url(\'imagerc::image_custom/add.png\') no-repeat center center /15px 15px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,49,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Top");

                p.Static00.set_taborder("0");
                p.Static00.set_text("Dự án");
                p.Static00.set_padding("0px 0px 0px 40px");
                p.Static00.set_font("normal 700 14pt/normal \"Arial\"");
                p.Static00.move("0","0","13.28%","100.00%",null,null);

                p.Static_setting.set_taborder("1");
                p.Static_setting.set_text("");
                p.Static_setting.set_padding("0px 0px 0px 40px");
                p.Static_setting.set_font("normal 700 14pt/normal \"Arial\"");
                p.Static_setting.set_background("url(\'imagerc::image_custom/setup.png\') no-repeat center center /15px 15px");
                p.Static_setting.move(null,"17","15","15","93",null);

                p.Static_img.set_taborder("2");
                p.Static_img.set_padding("0px 0px 0px 40px");
                p.Static_img.set_font("normal 700 14pt/normal \"Arial\"");
                p.Static_img.set_background("url(\'imagerc::image_custom/user.png\') no-repeat center center /33px 33px");
                p.Static_img.move(null,"7","33","33","30",null);

                p.Static_store.set_taborder("3");
                p.Static_store.set_text("");
                p.Static_store.set_padding("0px 0px 0px 40px");
                p.Static_store.set_font("normal 700 14pt/normal \"Arial\"");
                p.Static_store.set_background("url(\'imagerc::image_custom/store.png\') no-repeat center center /15px 15px");
                p.Static_store.move(null,"17","15","15","153",null);

                p.Static_notify.set_taborder("4");
                p.Static_notify.set_text("");
                p.Static_notify.set_padding("0px 0px 0px 40px");
                p.Static_notify.set_font("normal 700 14pt/normal \"Arial\"");
                p.Static_notify.set_background("url(\'imagerc::image_custom/notify_top.png\') no-repeat center center /15px 15px");
                p.Static_notify.move(null,"17","15","15","213",null);

                p.Static_search.set_taborder("5");
                p.Static_search.set_text("");
                p.Static_search.set_padding("0px 0px 0px 40px");
                p.Static_search.set_font("normal 700 14pt/normal \"Arial\"");
                p.Static_search.set_background("url(\'imagerc::image_custom/search.png\') no-repeat center top /15px 15px");
                p.Static_search.move(null,"17","15","15","273",null);

                p.Static_add.set_taborder("6");
                p.Static_add.set_text("");
                p.Static_add.set_padding("0px 0px 0px 40px");
                p.Static_add.set_font("normal 700 14pt/normal \"Arial\"");
                p.Static_add.set_background("url(\'imagerc::image_custom/add.png\') no-repeat center center /15px 15px");
                p.Static_add.move(null,"17","15","15","333",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("screen00_02","screen00_02,Desktop_screen",1080,50,this,
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
        this.registerScript("Form_Top.xfdl", function() {
        this.fn_test = function()
        {
        	this.Static00.set_text("abc");
        	this.alert("abc");
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static_setting.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.Static_store.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.Static_notify.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.Static_search.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.Static_add.addEventHandler("onclick",this.Static00_00_onclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
