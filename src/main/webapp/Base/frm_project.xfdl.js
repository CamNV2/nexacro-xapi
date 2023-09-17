(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_project");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_project", this);
            obj._setContents("<ColumnInfo><Column id=\"PJ_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PJ_OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"PJ_STT\" type=\"STRING\" size=\"1\"/><Column id=\"PJ_PROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"PJ_START_DT\" type=\"DATE\" size=\"256\"/><Column id=\"PJ_END_DT\" type=\"DATE\" size=\"256\"/><Column id=\"PJ_RESOLVE_DT\" type=\"DATE\" size=\"256\"/><Column id=\"PJ_TEMPLATE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_TASK\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_TASK_COMPELTE\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_ISSUE\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_ISSUE_COMPLETE\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PJ_NM\">PROJECT A</Col><Col id=\"PJ_OWNER\">LOCNH14</Col><Col id=\"PJ_STT\">Y</Col><Col id=\"PJ_PROCESS\">0</Col><Col id=\"PJ_START_DT\">2023-12-12</Col><Col id=\"PJ_END_DT\">2023-12-12</Col><Col id=\"PJ_RESOLVE_DT\">2023-12-12</Col><Col id=\"PJ_TEMPLATE\">BASIC</Col><Col id=\"TOTAL_TASK\">11</Col><Col id=\"TOTAL_TASK_COMPELTE\">9</Col><Col id=\"TOTAL_ISSUE\">12</Col><Col id=\"TOTAL_ISSUE_COMPLETE\">6</Col></Row><Row><Col id=\"PJ_NM\">PROJECT B</Col><Col id=\"PJ_OWNER\">LOCNH14</Col><Col id=\"PJ_STT\">Y</Col><Col id=\"PJ_PROCESS\">0</Col><Col id=\"PJ_START_DT\">2023-12-12</Col><Col id=\"PJ_END_DT\">2023-12-12</Col><Col id=\"PJ_RESOLVE_DT\">2023-12-12</Col><Col id=\"PJ_TEMPLATE\">BASIC</Col><Col id=\"TOTAL_TASK\">11</Col><Col id=\"TOTAL_TASK_COMPELTE\">9</Col><Col id=\"TOTAL_ISSUE\">12</Col><Col id=\"TOTAL_ISSUE_COMPLETE\">6</Col></Row><Row><Col id=\"PJ_NM\">PROJECT C</Col><Col id=\"PJ_OWNER\">LOCNH14</Col><Col id=\"PJ_STT\">Y</Col><Col id=\"PJ_PROCESS\">0</Col><Col id=\"PJ_START_DT\">2023-12-12</Col><Col id=\"PJ_END_DT\">2023-12-12</Col><Col id=\"PJ_RESOLVE_DT\">2023-12-12</Col><Col id=\"PJ_TEMPLATE\">BASIC</Col><Col id=\"TOTAL_TASK\">11</Col><Col id=\"TOTAL_TASK_COMPELTE\">9</Col><Col id=\"TOTAL_ISSUE\">12</Col><Col id=\"TOTAL_ISSUE_COMPLETE\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","0","100.00%","85.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#fff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","100",null,null,"10","50",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_project");
            obj.set_borderRadius("1px");
            obj.set_color("#ff6400");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"219\"/><Column size=\"54\"/><Column size=\"106\"/><Column size=\"106\"/><Column size=\"28\"/><Column size=\"106\"/><Column size=\"28\"/><Column size=\"28\"/><Column size=\"106\"/><Column size=\"28\"/><Column size=\"28\"/><Column size=\"106\"/><Column size=\"28\"/><Column size=\"136\"/><Column size=\"133\"/><Column size=\"146\"/><Column size=\"106\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TÊN DỰ ÁN\" background=\"#fff\" border=\",,1px solid #cacaca,\" color=\"#555558\" textAlign=\"left\" padding=\"0px 0px 0px 10px\"/><Cell col=\"1\" text=\"%\" font=\"normal 700 12px/normal &quot;Malgun Gothic bold&quot;\" border=\",,1px solid #cacaca,\" background=\"#fff\" color=\"#555558\" textAlign=\"left\" padding=\"0px 0px 0px 10px\"/><Cell col=\"2\" text=\"CHỦ SỞ HỮU\" background=\"#fff\" border=\",,1px solid #cacaca,\" color=\"#555558\" padding=\"0px 0px 0px 10px\" textAlign=\"left\"/><Cell col=\"3\" text=\"TRẠNG THÁI\" background=\"#fff\" border=\",,1px solid #cacaca,\" color=\"#555558\" textAlign=\"left\" padding=\"0px 0px 0px 10px\"/><Cell col=\"4\" colspan=\"3\" text=\"TÁC VỤ\" background=\"#fff\" border=\",,1px solid #cacaca,\" color=\"#555558\" textAlign=\"left\" padding=\"0px 0px 0px 10px\"/><Cell col=\"7\" colspan=\"3\" text=\"CỘT MỐC\" background=\"#fff\" border=\",,1px solid #cacaca,\" color=\"#555558\" textAlign=\"left\" padding=\"0px 0px 0px 10px\"/><Cell col=\"10\" colspan=\"3\" text=\"VẤN ĐỀ\" background=\"#fff\" border=\",,1px solid #cacaca,\" color=\"#555558\" textAlign=\"left\" padding=\"0px 0px 0px 10px\"/><Cell col=\"13\" text=\"NGÀY BẮT ĐẦU\" background=\"#fff\" border=\",,1px solid #cacaca,\" color=\"#555558\" textAlign=\"left\" padding=\"0px 0px 0px 10px\"/><Cell col=\"14\" text=\"NGÀY KẾT THÚC\" background=\"#fff\" border=\",,1px solid #cacaca,\" color=\"#555558\" textAlign=\"left\" padding=\"0px 0px 0px 10px\"/><Cell col=\"15\" text=\"NGÀY HOÀN THÀNH\" background=\"#fff\" border=\",,1px solid #cacaca,\" color=\"#555558\" textAlign=\"left\" padding=\"0px 0px 0px 10px\"/><Cell col=\"16\" text=\"BỐ CỤC\" background=\"#fff\" border=\",,1px solid #cacaca,\" color=\"#555558\" textAlign=\"left\" padding=\"0px 0px 0px 10px\"/></Band><Band id=\"body\"><Cell text=\"bind:PJ_NM\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:PJ_OWNER\"/><Cell col=\"3\" text=\"expr:(PJ_STT== &quot;Y&quot; ? &quot;CÓ HIỆU LỰC&quot; : &quot;KHÔNG HIỆU LỰC&quot;)\"/><Cell col=\"4\" text=\"bind:TOTAL_TASK_COMPELTE\"/><Cell col=\"5\" displaytype=\"progressbarcontrol\" text=\"EXPR: parseInt((TOTAL_TASK_COMPELTE/TOTAL_TASK)*100) + &quot;%&quot;\" maskeditformat=\"#\" progressbarsmooth=\"true\" progressbardirection=\"forward\"/><Cell col=\"6\" text=\"bind:TOTAL_TASK\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"progressbarcontrol\" text=\"20\"/><Cell col=\"9\"/><Cell col=\"10\" text=\"bind:TOTAL_ISSUE_COMPLETE\"/><Cell col=\"11\" displaytype=\"progressbarcontrol\" text=\"EXPR: parseInt((TOTAL_ISSUE_COMPLETE/TOTAL_ISSUE)*100) + &quot;%&quot;\" progressbarsmooth=\"true\"/><Cell col=\"12\" text=\"bind:TOTAL_ISSUE\"/><Cell col=\"13\" text=\"bind:PJ_START_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" autosizecol=\"limitmin\" autosizerow=\"limitmin\"/><Cell col=\"14\" text=\"bind:PJ_END_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" autosizecol=\"limitmin\" autosizerow=\"limitmin\"/><Cell col=\"15\" text=\"bind:PJ_RESOLVE_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" autosizecol=\"limitmin\" autosizerow=\"limitmin\"/><Cell col=\"16\" text=\"bind:PJ_TEMPLATE\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","10","0",null,"58","4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#fff");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","15","151","30",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Tất cả dự án");
            obj.set_background("url(\'theme://images/cmb_WF_Drop_O.png\') no-repeat right center");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_color("#ff6400");
            obj.set_textAlign("left");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"15","100","38","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Tạo dự án");
            obj.set_border("0px none #fff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form.Div00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00.form,function(p){});
            this.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_project.xfdl", function() {

        this.frm_project_onload = function(obj,e)
        {
        	var a = 12;
        	var b = 7;
        	this.alert(parseInt(b/a*100));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_project_onload,this);
            this.Div01.form.Div00.form.Static01.addEventHandler("onclick",this.Div00_02_00_Static01_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frm_project.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
