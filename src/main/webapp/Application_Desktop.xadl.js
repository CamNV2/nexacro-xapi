(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("ds_input_project", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"progress\" type=\"STRING\" size=\"256\"/><Column id=\"owner_id\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"strt_date\" type=\"STRING\" size=\"256\"/><Column id=\"end_date\" type=\"STRING\" size=\"256\"/><Column id=\"tag_name\" type=\"STRING\" size=\"256\"/><Column id=\"progress_task\" type=\"STRING\" size=\"256\"/><Column id=\"_done\" type=\"STRING\" size=\"256\"/><Column id=\"template\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"_access_private\" type=\"STRING\" size=\"256\"/><Column id=\"_tight_prj\" type=\"STRING\" size=\"256\"/><Column id=\"group_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("ds_users", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"INT\" size=\"256\"/><Column id=\"username\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/><Column id=\"group_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("ds_groups", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"INT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"deleted\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("ds_templates", this);
            obj._setContents("<ColumnInfo><Column id=\"template\" type=\"STRING\" size=\"256\"/><Column id=\"templateNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"statusNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("ds_types", this);
            obj._setContents("<ColumnInfo><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"typeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("ds_priorities", this);
            obj._setContents("<ColumnInfo><Column id=\"priority\" type=\"STRING\" size=\"256\"/><Column id=\"priorityNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("ds_project", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"progress\" type=\"INT\" size=\"256\"/><Column id=\"owner_id\" type=\"INT\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"strt_date\" type=\"STRING\" size=\"256\"/><Column id=\"end_date\" type=\"STRING\" size=\"256\"/><Column id=\"tag_name\" type=\"STRING\" size=\"256\"/><Column id=\"progress_task\" type=\"INT\" size=\"256\"/><Column id=\"_done\" type=\"STRING\" size=\"256\"/><Column id=\"template\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"_access_private\" type=\"STRING\" size=\"256\"/><Column id=\"_tight_prj\" type=\"STRING\" size=\"256\"/><Column id=\"group_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("idxRowProjects","");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("screen00_02");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("LeftTopFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new HFrameSet("HFrameSet00",null,null,null,null,null,null,this);
            frame0.set_separatesize("200,*");
            frame0.set_border("0px none");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"FrameBase::Form_Left.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_showstatusbar("false");
            frame1.set_border("0px none");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FrameBase::Form_Left.xfdl");


            var frame2 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("50,*");
            frame2.set_border("0px none");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("TopFrame",null,null,null,"270",null,null,"FrameBase::Form_Top.xfdl",frame2);
            frame3.set_showtitlebar("false");
            frame3.set_showstatusbar("false");
            frame3.set_border("0px none,0px none,1px solid #ebebeb");
            frame3.set_background("");
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("FrameBase::Form_Top.xfdl");


            var frame4 = new ChildFrame("WorkFrame",null,null,null,null,null,"0","FrameBase::Form_Work.xfdl",frame2);
            frame4.set_showtitlebar("false");
            frame4.set_showstatusbar("false");
            frame4.set_border("0px none");
            frame2.addChild(frame4.name, frame4);
            frame4.set_formurl("FrameBase::Form_Work.xfdl");
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler

        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::theme1.xcss");
        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
