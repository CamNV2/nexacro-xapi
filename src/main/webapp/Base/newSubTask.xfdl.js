(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("newTask2");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(580,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0","100%","5%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("NEW SUBTASK");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_background("#f4f4f4");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,null,"100%","95.00%","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","140","540","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","0",null,"100.00%","34",null,"0",null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","81","14",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Tên SubTask");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","20","15","540","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","81","14",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("Dự Án");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","0",null,"100%","34",null,"0",null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01","20","205","540","130",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","81","14",null,null,null,null,null,null,this.Div00.form.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("Thêm Mô Tả");
            this.Div00.form.Div00_01.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0",null,"100.00%","100",null,"0",null,null,null,null,this.Div00.form.Div00_01.form);
            obj.set_taborder("1");
            this.Div00.form.Div00_01.addChild(obj.name, obj);

            obj = new Button("Button00","152","611","88","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Thêm");
            obj.set_cssclass("btnAdd");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","322","611","88","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Hủy");
            obj.set_cssclass("btnAdd");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","20","75","540","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","81","14",null,null,null,null,null,null,this.Div00.form.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("TASK");
            this.Div00.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","0",null,"100%","34",null,"0",null,null,null,null,this.Div00.form.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.Div00.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","23","354","126","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Thông Tin SubTask");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","20","386","540","231",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","365","10","170","55",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","130","15",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("Chọn Người Làm Task");
            this.Div00.form.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","0",null,"100%","34",null,"0",null,null,null,null,this.Div00.form.Div01.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.Div00.form.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00","9","10","329","55",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","0",null,"100.00%","34",null,"0",null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","101","14",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Nhóm Đã Liên Kết");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","182","90","28.89%","40",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","81","14",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Ngày Kết Thúc");
            this.Div00.form.Div01.form.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","17","100%","23",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00_00_00_00.form);
            obj.set_taborder("1");
            this.Div00.form.Div01.form.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_01","9","90","28.89%","40",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","81","14",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("Ngày Bắt Đầu");
            this.Div00.form.Div01.form.Div00_00_01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","17","100%","23",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00_00_01.form);
            obj.set_taborder("1");
            this.Div00.form.Div01.form.Div00_00_01.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","365","78","170","55",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","130","15",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Ưu Tiên");
            this.Div00.form.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","0",null,"100%","34",null,"0",null,null,null,null,this.Div00.form.Div01.form.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.Div00.form.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01","9","140","329","55",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","0",null,"100.00%","34",null,"0",null,null,null,null,this.Div00.form.Div01.form.Div00_01.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            this.Div00.form.Div01.form.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","81","14",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("Tên SubTask");
            this.Div00.form.Div01.form.Div00_01.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_01","365","138","170","55",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","130","15",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00_00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("Loại Hóa Đơn");
            this.Div00.form.Div01.form.Div00_00_00_01.addChild(obj.name, obj);

            obj = new Combo("Combo00","0",null,"100%","34",null,"0",null,null,null,null,this.Div00.form.Div01.form.Div00_00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.Div00.form.Div01.form.Div00_00_00_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,function(p){});
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00.form,function(p){});
            this.Div00.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_01.form,function(p){});
            this.Div00.form.Div00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00_00.form,function(p){});
            this.Div00.form.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form.Div00_00.form,function(p){});
            this.Div00.form.Div01.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form.Div00.form,function(p){});
            this.Div00.form.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form.Div00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form.Div00_00_00_00.form,function(p){});
            this.Div00.form.Div01.form.Div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form.Div00_00_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form.Div00_00_01.form,function(p){});
            this.Div00.form.Div01.form.Div00_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form.Div00_00_00.form,function(p){});
            this.Div00.form.Div01.form.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form.Div00_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form.Div00_01.form,function(p){});
            this.Div00.form.Div01.form.Div00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form.Div00_00_00_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form.Div00_00_00_01.form,function(p){});
            this.Div00.form.Div01.form.Div00_00_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",580,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("newSubTask.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
