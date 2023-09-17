(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Report");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReport", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"PERCENT\" type=\"INT\" size=\"256\"/><Column id=\"OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"TIME\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DUE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRIO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TAG\" type=\"STRING\" size=\"256\"/><Column id=\"BILLT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TITLE\">NG-1 Explore Zoho Projects</Col><Col id=\"OWNER\">Zoho</Col><Col id=\"PERCENT\">0</Col><Col id=\"STATUS\"/><Col id=\"START_DT\"/><Col id=\"DUE_DT\"/><Col id=\"PRIO_ID\"/><Col id=\"LEVEL\">0</Col><Col id=\"BILLT_ID\"/><Col id=\"END_DT\"/><Col id=\"TAG\"/><Col id=\"TIME\"/></Row><Row><Col id=\"TITLE\">Getting started with Zoho Projects</Col><Col id=\"OWNER\">Bắc Ngô Khắc</Col><Col id=\"PERCENT\">0</Col><Col id=\"START_DT\">2023-05-30</Col><Col id=\"DUE_DT\">2023-06-10</Col><Col id=\"PRIO_ID\"/><Col id=\"LEVEL\">1</Col><Col id=\"BILLT_ID\"/><Col id=\"STATUS\"/><Col id=\"END_DT\"/><Col id=\"TAG\"/><Col id=\"TIME\"/></Row><Row><Col id=\"TITLE\">A Quick way to get started!</Col><Col id=\"OWNER\"/><Col id=\"PERCENT\">0</Col><Col id=\"STATUS\"/><Col id=\"START_DT\">2023-05-31</Col><Col id=\"DUE_DT\">2023-06-02</Col><Col id=\"PRIO_ID\"/><Col id=\"LEVEL\">2</Col><Col id=\"BILLT_ID\"/><Col id=\"END_DT\"/><Col id=\"TAG\"/><Col id=\"TIME\"/></Row><Row><Col id=\"TITLE\">Fix bug</Col><Col id=\"OWNER\">Bắc Ngô Khắc</Col><Col id=\"PERCENT\">0</Col><Col id=\"STATUS\">Mở</Col><Col id=\"START_DT\">2023-05-31</Col><Col id=\"DUE_DT\">2023-06-02</Col><Col id=\"PRIO_ID\">&lt;fc v=&apos;red&apos;&gt;◆&lt;/fc&gt; Cao</Col><Col id=\"LEVEL\">3</Col><Col id=\"TIME\"/><Col id=\"BILLT_ID\">0</Col><Col id=\"END_DT\"/><Col id=\"TAG\"/></Row><Row><Col id=\"TITLE\">Basics of Tasks and Milestones</Col><Col id=\"PERCENT\">0</Col><Col id=\"LEVEL\">2</Col><Col id=\"START_DT\">2023-05-30</Col><Col id=\"DUE_DT\">2023-06-07</Col><Col id=\"BILLT_ID\"/><Col id=\"STATUS\"/><Col id=\"OWNER\"/><Col id=\"TIME\"/><Col id=\"END_DT\"/><Col id=\"PRIO_ID\"/><Col id=\"TAG\"/></Row><Row><Col id=\"TITLE\">Multiple users can be owner of the project</Col><Col id=\"PERCENT\">10</Col><Col id=\"OWNER\">Bắc Ngô Khắc</Col><Col id=\"STATUS\">Đang tiến hành</Col><Col id=\"TIME\"/><Col id=\"START_DT\">2023-05-30</Col><Col id=\"DUE_DT\">2023-05-31</Col><Col id=\"PRIO_ID\">&lt;fc v=&apos;green&apos;&gt;◆&lt;/fc&gt; Thấp</Col><Col id=\"LEVEL\">3</Col><Col id=\"BILLT_ID\">0</Col><Col id=\"END_DT\"/><Col id=\"TAG\"/></Row><Row><Col id=\"TITLE\">The Start &amp; End (Due) dates can be</Col><Col id=\"PERCENT\">10</Col><Col id=\"OWNER\">Bắc Ngô Khắc</Col><Col id=\"STATUS\">Mở</Col><Col id=\"TIME\"/><Col id=\"START_DT\">2023-05-30</Col><Col id=\"DUE_DT\">2023-06-01</Col><Col id=\"PRIO_ID\">&lt;fc v=&apos;orange&apos;&gt;◆&lt;/fc&gt; Trung bình</Col><Col id=\"BILLT_ID\">0</Col><Col id=\"LEVEL\">3</Col><Col id=\"END_DT\"/><Col id=\"TAG\"/></Row><Row><Col id=\"TITLE\">Click the &apos;Import Tasks&apos; option</Col><Col id=\"PERCENT\">10</Col><Col id=\"OWNER\">Bắc Ngô Khắc</Col><Col id=\"STATUS\">Mở</Col><Col id=\"TIME\"/><Col id=\"START_DT\">2023-05-30</Col><Col id=\"DUE_DT\">2023-06-06</Col><Col id=\"BILLT_ID\">0</Col><Col id=\"LEVEL\">3</Col><Col id=\"END_DT\"/><Col id=\"PRIO_ID\">&lt;fc v=&apos;gray&apos;&gt;◆&lt;/fc&gt; Không có</Col><Col id=\"TAG\"/></Row><Row><Col id=\"TITLE\">Click the &apos;Export Tasks&apos; option</Col><Col id=\"PERCENT\">10</Col><Col id=\"OWNER\">Bắc Ngô Khắc</Col><Col id=\"STATUS\">Mở</Col><Col id=\"TIME\"/><Col id=\"START_DT\">2023-05-30</Col><Col id=\"DUE_DT\">2023-06-07</Col><Col id=\"PRIO_ID\">&lt;fc v=&apos;orange&apos;&gt;◆&lt;/fc&gt; Trung bình</Col><Col id=\"BILLT_ID\">0</Col><Col id=\"LEVEL\">3</Col><Col id=\"END_DT\"/><Col id=\"TAG\"/></Row><Row><Col id=\"TITLE\">This task is a recurring one</Col><Col id=\"PERCENT\">10</Col><Col id=\"OWNER\">Bắc Ngô Khắc</Col><Col id=\"STATUS\">Mở</Col><Col id=\"TIME\"/><Col id=\"START_DT\">2023-05-30</Col><Col id=\"DUE_DT\">2023-06-07</Col><Col id=\"PRIO_ID\">&lt;fc v=&apos;green&apos;&gt;◆&lt;/fc&gt; Thấp</Col><Col id=\"BILLT_ID\">0</Col><Col id=\"LEVEL\">3</Col><Col id=\"END_DT\"/><Col id=\"TAG\"/></Row><Row><Col id=\"TITLE\">Missing Modules</Col><Col id=\"PERCENT\">0</Col><Col id=\"OWNER\"/><Col id=\"START_DT\">2023-06-08</Col><Col id=\"DUE_DT\">2023-06-08</Col><Col id=\"PRIO_ID\"/><Col id=\"BILLT_ID\"/><Col id=\"LEVEL\">2</Col><Col id=\"STATUS\"/><Col id=\"TIME\"/><Col id=\"END_DT\"/><Col id=\"TAG\"/></Row><Row><Col id=\"TITLE\">Bugs, Timesheet, Pages, and Chat</Col><Col id=\"PERCENT\">10</Col><Col id=\"OWNER\">Bắc Ngô Khắc</Col><Col id=\"STATUS\">Đang tiến hành</Col><Col id=\"TIME\"/><Col id=\"START_DT\">2023-06-08</Col><Col id=\"DUE_DT\">2023-06-08</Col><Col id=\"PRIO_ID\">&lt;fc v=&apos;red&apos;&gt;◆&lt;/fc&gt; Cao</Col><Col id=\"BILLT_ID\">0</Col><Col id=\"LEVEL\">3</Col><Col id=\"END_DT\"/><Col id=\"TAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPriority", this);
            obj._setContents("<ColumnInfo><Column id=\"PRIO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRIO_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRIO_ID\">&lt;fc v=&apos;red&apos;&gt;◆&lt;/fc&gt; Cao</Col><Col id=\"PRIO_VALUE\">Cao</Col><Col id=\"IMAGE_URL\">imagerc::prio_high.png</Col></Row><Row><Col id=\"PRIO_ID\">&lt;fc v=&apos;orange&apos;&gt;◆&lt;/fc&gt; Trung bình</Col><Col id=\"PRIO_VALUE\">Trung bình</Col><Col id=\"IMAGE_URL\">imagerc::prio_medium.png</Col></Row><Row><Col id=\"PRIO_ID\">&lt;fc v=&apos;green&apos;&gt;◆&lt;/fc&gt; Thấp</Col><Col id=\"PRIO_VALUE\">Thấp</Col><Col id=\"IMAGE_URL\">imagerc::prio_low.png</Col></Row><Row><Col id=\"PRIO_ID\">&lt;fc v=&apos;gray&apos;&gt;◆&lt;/fc&gt; Không có</Col><Col id=\"PRIO_VALUE\">Không có</Col><Col id=\"IMAGE_URL\">imagerc::prio_none.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBillType", this);
            obj._setContents("<ColumnInfo><Column id=\"BILLT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BILLT_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BILLT_ID\">0</Col><Col id=\"BILLT_VALUE\">Không có</Col></Row><Row><Col id=\"BILLT_ID\">1</Col><Col id=\"BILLT_VALUE\">Có</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divHeader","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","14","0","110","50",null,null,null,null,null,null,this.divHeader.form);
            obj.set_taborder("0");
            obj.set_text("Biểu Đồ Gantt");
            obj.set_font("bold 16px/normal \"Malgun Gothic\"");
            obj.set_color("#101010");
            this.divHeader.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:14","0","125","50",null,null,null,null,null,null,this.divHeader.form);
            obj.set_taborder("1");
            obj.set_text("Mở Của Tôi");
            obj.set_font("bold 16px/normal \"Malgun Gothic\"");
            obj.set_cssclass("sta_RT_title07");
            this.divHeader.addChild(obj.name, obj);

            obj = new Static("Static03",null,"10","35","30","15",null,null,null,null,null,this.divHeader.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_RT_title06");
            this.divHeader.addChild(obj.name, obj);

            obj = new Button("btnAddTask",null,"10","120","30","Static03:25",null,null,null,null,null,this.divHeader.form);
            obj.set_taborder("3");
            obj.set_text("Thêm Tác Vụ");
            obj.set_cssclass("btnAddTask");
            this.divHeader.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","80","50","btnAddTask:10",null,null,null,null,null,this.divHeader.form);
            obj.set_taborder("2");
            obj.set_text("Cột Mốc");
            obj.set_font("bold 16px/normal \"Malgun Gothic\"");
            obj.set_color("#101010");
            this.divHeader.addChild(obj.name, obj);

            obj = new Div("Div00","0","divHeader:0","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#f8f8f8");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","147","6","40","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbOption","20","7","150","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_border("0px solid #ffffff");
            obj.set_displaynulltext("Hiện Thị Tùy Chọn");
            obj.set_color("#2f2f2f");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnFilter",null,"2","42","25","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("...");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_font("bold 18px/normal \"Malgun Gothic\",\"Arial Rounded MT Bold\"");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grdTaskInfo","0","Div00:0","100%","550",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsReport");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_autofittype("col");
            obj.set_nodatatext("-");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"TIÊU ĐỀ\" textAlign=\"left\"/><Cell col=\"1\" text=\"%\" textAlign=\"left\"/><Cell col=\"2\" text=\"CHỦ SỞ HỮU\" textAlign=\"left\"/><Cell col=\"3\" text=\"TRẠNG THÁI\" textAlign=\"left\"/><Cell col=\"4\" text=\"THỜI LƯỢNG\" textAlign=\"left\"/><Cell col=\"5\" text=\"NGÀY BẮT ĐẦU\" textAlign=\"left\"/><Cell col=\"6\" text=\"THỜI HẠN\" textAlign=\"left\"/><Cell col=\"7\" text=\"NGÀY HOÀN THÀNH\" textAlign=\"left\"/><Cell col=\"8\" text=\"ƯU TIÊN\" textAlign=\"left\"/><Cell col=\"9\" text=\"TAG\" textAlign=\"left\"/><Cell col=\"10\" text=\"LOẠI HÓA ĐƠN\" textAlign=\"left\"/></Band><Band id=\"body\"><Cell text=\"bind:TITLE\" textAlign=\"left\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEVEL\"/><Cell col=\"1\" text=\"bind:PERCENT\" textAlign=\"left\"/><Cell col=\"2\" text=\"expr:OWNER== &quot;&quot;? &quot;-&quot;: OWNER\" textAlign=\"left\"/><Cell col=\"3\" text=\"expr:STATUS== &quot;&quot;? &quot;-&quot;:STATUS\" cssclass=\"expr:STATUS== &quot;Mở&quot;? &quot;stat1&quot;: STATUS== &quot;Đang tiến hành&quot;? &quot;stat2&quot;:&quot;stat3&quot;\" padding=\"5px 25px 5px 5px\" displaytype=\"buttoncontrol\" controlautosizingtype=\"width\"/><Cell col=\"4\" textAlign=\"left\" expr=\"comp.parent.fnGetCountDay(currow)\"/><Cell col=\"5\" text=\"bind:START_DT\" textAlign=\"left\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"dd-MM-yyyy\" calendareditformat=\"dd-MM-yyyy\" calendardisplaynulltext=\"bind:START_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" text=\"bind:DUE_DT\" textAlign=\"left\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"dd-MM-yyyy\" calendareditformat=\"dd-MM-yyyy\" calendardisplaynulltext=\"bind:DUE_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"expr:END_DT== &quot;&quot;? &quot;-&quot;: END_DT\" textAlign=\"left\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"dd-MM-yyyy\" calendareditformat=\"dd-MM-yyyy\" calendardisplayinvalidtext=\"-\"/><Cell col=\"8\" displaytype=\"decoratetext\" edittype=\"combo\" combodataset=\"dsPriority\" combocodecol=\"PRIO_ID\" combodatacol=\"PRIO_VALUE\" text=\"bind:PRIO_ID\"/><Cell col=\"9\" text=\"expr:TAG== &quot;&quot;? &quot;-&quot;: TAG\" textAlign=\"left\"/><Cell col=\"10\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsBillType\" combocodecol=\"BILLT_ID\" combodatacol=\"BILLT_VALUE\" text=\"bind:BILLT_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divHeader.form
            obj = new Layout("default","",0,0,this.divHeader.form,function(p){});
            this.divHeader.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Report.xfdl", function() {

        this.Form_Report_onload = function(obj,e)
        {
        	// Code here
        };

        this.divHeader_btnAddTask_onclick = function(obj,e)
        {
        	this.alert("Do something");
        };

        this.Div00_btnFilter_onclick = function(obj,e)
        {
        	this.alert("This is an option button");
        };


        //////////////////////////////////////////////////////////////////////////
        // USER FUNCTION
        //////////////////////////////////////////////////////////////////////////
        this.fnGetCountDay = function (currow)
        {
        	var strDate = this.dsReport.getColumn(currow, 'START_DT');
        	var dueDate = this.dsReport.getColumn(currow, 'DUE_DT');

        	if (!strDate || !dueDate)
        	{
        		return '-';
        	}

        	var countDay = this.fnCountWeekdays(strDate, dueDate);

        	return `${countDay} Ngày`;
        };

        this.fnCountWeekdays = function(startDate, endDate) {
          const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

          let currentDate = new Date(startDate);
          const targetDate = new Date(endDate);

          let weekdayCount = 0;

          while (currentDate <= targetDate) {
            const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
              weekdayCount++;
            }

            currentDate.setTime(currentDate.getTime() + oneDay); // Move to the next day
          }

          return weekdayCount;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Report_onload,this);
            this.divHeader.form.btnAddTask.addEventHandler("onclick",this.divHeader_btnAddTask_onclick,this);
            this.Div00.form.btnFilter.addEventHandler("onclick",this.Div00_btnFilter_onclick,this);
        };
        this.loadIncludeScript("Form_Report.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
