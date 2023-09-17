(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","10","20",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
            var objChildFrame = new ChildFrame();
        	objChildFrame.init("childframe00", 0, 0, 400, 400, null, null);
        	objChildFrame.set_border("1px solid #999999");
        	objChildFrame.set_showstatusbar(true);
        	objChildFrame.set_openalign('center middle');
        	objChildFrame.set_resizable(true);
        	//objChildFrame.set_overlaycolor("rgba(255,0,0,0.3)");
        	//objChildFrame.set_background("#ffffff");
        	objChildFrame.set_formurl("Base::newProject.xfdl");
        	objChildFrame.showModal(this.getOwnerFrame());

        };


        this.menuButton_onclick = function(obj,e)
        {
        var left=100, mainTop=70, subTop=0, mainHeight=40, subHeight=50, right=0, gap=0;
        	var objFrameset = new FrameSet();
        	objFrameset.init("framesetNew", 200, 90, 400, 400);
        	this.addChild("framesetNew", objFrameset);
        	objFrameset.set_border("1px solid #999999");
        	objFrameset.set_background("red");
        	objFrameset.show();

        };

        this.fn_addTab = function(path)
        {
        	this.Div00.set_url(path)

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
