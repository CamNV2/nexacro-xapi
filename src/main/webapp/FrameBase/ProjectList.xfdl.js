(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("projectList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1670,1080);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_project","0","80","1650",null,null,"15",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_project");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd-project");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"243\"/><Column size=\"76\"/><Column size=\"149\"/><Column size=\"155\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"TÊN DỰ ÁN\" textAlign=\"left\" padding=\"0px 0px 0px 10px\" border=\"0px none,0px none,1px solid #E4E3E3\"/><Cell col=\"1\" text=\"%\"/><Cell col=\"2\" text=\"CHỦ SỞ HỮU\"/><Cell col=\"3\" text=\"TRẠNG THÁI\"/><Cell col=\"4\" text=\"TÁC VỤ\"/><Cell col=\"5\" text=\"CÁC CỘT MỐC\"/><Cell col=\"6\" text=\"VẤN ĐỀ\"/><Cell col=\"7\" text=\"NGÀY BẮT ĐẦU\"/><Cell col=\"8\" text=\"NGÀY KẾT THÚC\" displaytype=\"normal\"/><Cell col=\"9\" text=\"ĐÃ HOÀN THÀNH\"/><Cell col=\"10\" text=\"BỐ CỤC\"/></Band><Band id=\"body\"><Cell text=\"bind:title\" padding=\"0px 0px 0px 10px\"/><Cell col=\"1\" accessibilityrole=\"progressbar\" displaytype=\"normal\" progressbarsmooth=\"true\" text=\"expr:progress + &apos;%&apos;\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:owner_id\" displaytype=\"combotext\" combodataset=\"ds_users\" combodatacol=\"name\" combocodecol=\"id\"/><Cell col=\"3\" text=\"bind:status\" displaytype=\"combocontrol\" combodataset=\"ds_status\" combocodecol=\"status\" combodatacol=\"statusNm\" textAlign=\"center\" suppressalign=\"first\" autosizecol=\"none\" autosizerow=\"none\" combobuttonsize=\"0 0\" cssclass=\"expr:status == &apos;CO_HIEU_LUC&apos; ? &quot;info&quot;: status == &apos;DANG_TIEN_HANH&apos; ? &quot;inprogress&quot; : &quot;cancel&quot;\" padding=\"10px 10px 10px 15px\"/><Cell col=\"4\" displaytype=\"progressbarcontrol\" cssclass=\"progress-task-bar\" textAlign=\"center\" progressbardirection=\"forward\" progressbarsmooth=\"true\" padding=\"10px 40px\" suppressalign=\"first\" text=\"bind:progress_task\"/><Cell col=\"5\" displaytype=\"progressbarcontrol\" text=\"bind:progress_task\" progressbarsmooth=\"true\" padding=\"10px 40px\"/><Cell col=\"6\" text=\"bind:progress_task\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\" padding=\"10px 40px\"/><Cell col=\"7\" text=\"bind:strt_date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:end_date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"false\" checkboxtruevalue=\"true\" text=\"bind:_done\"/><Cell col=\"10\" text=\"bind:template\" combodataset=\"ds_templates\" combocodecol=\"template\" combodatacol=\"templateNm\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1","0","1669","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("top-info");
            this.addChild(obj.name, obj);

            obj = new Button("btn_filter","1587","25","20","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn-menu");
            obj.set_background("url(\'imagerc::filter.png\') repeat center center");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_menu","1627","25","20","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_icon("url(\'imagerc::dots.png\')");
            obj.set_cssclass("btn-menu");
            obj.set_background("url(\'imagerc::filter.png\') repeat left top");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbx_projects","20","20","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("cbx-project-search");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cbx_projects_innerdataset = new nexacro.NormalDataset("Div00_form_cbx_projects_innerdataset", obj);
            Div00_form_cbx_projects_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Tất cả dự án</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cbx_projects_innerdataset);
            obj.set_text("Tất cả dự án");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","150","20","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("(Có hiệu lực)");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add","1470","20","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Dự án mới");
            obj.set_cssclass("btn-add-project");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1670,1080,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ProjectList.xfdl", function() {

        this.btn_add_onclick = function(obj,e)
        {
        	nexacro.Application.idxRowProjects = 0;
        	nexacro.getApplication().mainframe.HFrameSet00.VFrameSet00.WorkFrame.form.fn_addTab("FrameBase::addProject.xfdl");
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined) {
        		return;
        	}

        	if(strPopupID == "chf_popup1") {
        		this.alert("Return Value: " + strReturn);
        	}
        };

        this.initdata_received = function(id, code, message)
        {
             if (code == 0) {
                  this.alert(this.ds_gridExpr.rowcount + " numbers of data have been found.");
                  trace(this.ds_gridExpr.rowcount + " numbers of data have been found.");
             } else {

                  this.alert("Error["+code+"]:"+message);
                  trace("Error["+code+"]:"+message);
             }
        }

        this.projectList_onload = function(obj,e)
        {
        	nexacro.Application.ds_project.clear();

        	 var url = "http://localhost:8080/common/templates";
        	 var reqDs = "";
             var respDs = "ds_templates=IDDataset";
             var args = "";
             var callback = "received";
             nexacro.Application.transaction("getTemplates", url, reqDs, respDs, args, callback, true, 0, false);

        	 url = "http://localhost:8080/common/status";
             respDs = "ds_status=IDDataset";
             callback = "received";
             nexacro.Application.transaction("getStatus", url, reqDs, respDs, args, callback, true, 0, false);

        	 url = "http://localhost:8080/users";
             respDs = "ds_users=IDDataset";
             callback = "received";
             nexacro.Application.transaction("getListUser", url, reqDs, respDs, args, callback, true, 0, false);


        	var id = "getList";
             url = "http://localhost:8080/projects";
             respDs = "ds_project=IDDataset";
             callback = "received";

             nexacro.Application.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };

        this.grd_project_cellClick = function(obj,e)
        {
        	if (e.col != 0){
        		nexacro.Application.idxRowProjects = e.row;
        		nexacro.getApplication().mainframe.HFrameSet00.VFrameSet00.WorkFrame.form.fn_addTab("FrameBase::addProject.xfdl");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.projectList_onload,this);
            this.grd_project.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.grd_project.addEventHandler("oncellclick",this.grd_project_cellClick,this);
            this.Div00.form.cbx_projects.addEventHandler("onitemchanged",this.Div00_cbx_projects_onitemchanged,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
        };
        this.loadIncludeScript("ProjectList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
