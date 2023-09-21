(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset

            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("screen00_02,Screen0,Screen1");

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
        this.registerScript("Application_Desktop.xadl", function() {
        this.fn_addTab = function(path)
        {
        	this.Div00.set_url(path)

        }
        });
        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::theme1.xcss");
        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
