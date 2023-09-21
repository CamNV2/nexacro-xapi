(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ReportTask");
            this.set_titletext("ReportTask");
            this.set_color("darkorange");
            if (Form == this.constructor)
            {
                this._setFormPosition(790,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_wrkHour", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"NM\">1:00</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"NM\">2:00</Col></Row><Row><Col id=\"CD\">03</Col><Col id=\"NM\">3:00</Col></Row><Row><Col id=\"CD\">04</Col><Col id=\"NM\">4:00</Col></Row><Row><Col id=\"CD\">05</Col><Col id=\"NM\">5:00</Col></Row><Row><Col id=\"CD\">06</Col><Col id=\"NM\">6:00</Col></Row><Row><Col id=\"CD\">07</Col><Col id=\"NM\">7:00</Col></Row><Row><Col id=\"CD\">08</Col><Col id=\"NM\">8:00</Col></Row><Row><Col id=\"CD\">09</Col><Col id=\"NM\">9:00</Col></Row><Row><Col id=\"CD\">10</Col><Col id=\"NM\">10:00</Col></Row><Row><Col id=\"CD\">11</Col><Col id=\"NM\">11:00</Col></Row><Row><Col id=\"CD\">12</Col><Col id=\"NM\">12:00</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">s1</Col><Col id=\"NM\">Open</Col></Row><Row><Col id=\"CD\">s2</Col><Col id=\"NM\">Đang tiến hành</Col></Row><Row><Col id=\"CD\">s3</Col><Col id=\"NM\">Đã Close</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dut", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">H1</Col><Col id=\"NM\">Cao</Col></Row><Row><Col id=\"CD\">H2</Col><Col id=\"NM\">Trung bình</Col></Row><Row><Col id=\"CD\">H3</Col><Col id=\"NM\">Thấp</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mss", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">M1</Col><Col id=\"NM\">Không có</Col></Row><Row><Col id=\"CD\">M2</Col><Col id=\"NM\">Đã Thông báo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_team", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">T1</Col><Col id=\"NM\">Nhóm 1</Col></Row><Row><Col id=\"CD\">T2</Col><Col id=\"NM\">Nhóm 2</Col></Row><Row><Col id=\"CD\">T3</Col><Col id=\"NM\">Nhóm 3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","21","10","618","81",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","9","0","324","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Team 2 Report Task");
            obj.set_font("normal bold 18pt/normal \"normal/normal\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","9","38","390","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("By Trương Quang Tứ |      Explore Zoho Project! |      |      |      |");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","156","48","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("⎙ ");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            obj.set_color("darkorange");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","362","56","17","19",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("✆");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","28","84","730","56",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_background("white");
            obj.set_boxShadow("0px 5px 5px 5px #adadad");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","12","26","149","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("TRẠNG THÁI HIỆN TẠI");
            obj.set_font("normal 9pt/normal");
            obj.set_color("gray");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_status","18","1","133","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_border("0px none");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_font("10");
            obj.set_text("Đang tiến hành");
            obj.set_value("s2");
            obj.set_index("1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("stc_st_ico","8","7","20","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("◉");
            obj.set_color("green");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_00","30","160","730","56",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_background("white");
            obj.set_boxShadow("0px 5px 5px 5px #adadad");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","23","7","114","19",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("Mô Tả ✎");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01","16","26","394","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("Task owners, manager, and admins only have permission edit that task");
            obj.set_font("normal 10px/normal");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","10","13",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("❱");
            obj.set_color("coral");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("work_info","30","242","730","358",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_background("white");
            obj.set_boxShadow("0px 5px 5px 5px #adadad");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","7","117","21",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("0");
            obj.set_text("Thông tin tác vụ");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","10","13",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("1");
            obj.set_text("❱");
            obj.set_color("coral");
            this.work_info.addChild(obj.name, obj);

            obj = new Div("Div00","15","33","700","28",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_border("0px none,0px none,1px ridge lavender");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static00","0","-5","105","30",null,null,null,null,null,null,this.work_info.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Nhóm Đã liên kết");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_color("gray");
            this.work_info.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_team","160","-7","540","30",null,null,null,null,null,null,this.work_info.form.Div00.form);
            obj.set_taborder("1");
            obj.set_border("0px none");
            obj.set_innerdataset("ds_team");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_displaynulltext("Chọn các nhóm");
            obj.set_color("black");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.work_info.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","15","64","700","28",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_border("0px none,0px none,1px ridge lavender");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","134","25",null,null,null,null,null,null,this.work_info.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("Chủ Sở hữu");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_color("gray");
            this.work_info.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","160","0","165","26",null,null,null,null,null,null,this.work_info.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_background("url(\'imagerc::avat-removebg-preview.png\') no-repeat left center /contain cornsilk");
            obj.set_borderRadius("10px 10px 10px 10px");
            obj.set_text("");
            this.work_info.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","200","4","100","17",null,null,null,null,null,null,this.work_info.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("Trương Quang Tứ");
            this.work_info.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","305","2","22","19",null,null,null,null,null,null,this.work_info.form.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("✕");
            this.work_info.form.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01","15","95","700","28",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_border("0px none,0px none,1px ridge lavender");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static00","0","-5","134","30",null,null,null,null,null,null,this.work_info.form.Div00_01.form);
            obj.set_taborder("0");
            obj.set_text("Giờ Làm việc");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_color("gray");
            this.work_info.form.Div00_01.addChild(obj.name, obj);

            obj = new Combo("Combo00","154","3","546","20",null,null,null,null,null,null,this.work_info.form.Div00_01.form);
            obj.set_taborder("1");
            obj.set_border("0px none");
            obj.set_innerdataset("ds_wrkHour");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("1:00");
            obj.set_value("01");
            obj.set_index("0");
            this.work_info.form.Div00_01.addChild(obj.name, obj);

            obj = new Div("div_status","15","124","330","35",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_border("0px none,0px none,1px ridge lavender");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static00","0","6","134","24",null,null,null,null,null,null,this.work_info.form.div_status.form);
            obj.set_taborder("0");
            obj.set_text("Trạng thái");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_color("gray");
            this.work_info.form.div_status.addChild(obj.name, obj);

            obj = new Combo("cmb_status","170","3","160","30",null,null,null,null,null,null,this.work_info.form.div_status.form);
            obj.set_taborder("1");
            obj.set_border("0px none");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("Đang tiến hành");
            obj.set_value("s2");
            obj.set_index("1");
            this.work_info.form.div_status.addChild(obj.name, obj);

            obj = new Static("stc_st_ico","160","9","20","21",null,null,null,null,null,null,this.work_info.form.div_status.form);
            obj.set_taborder("2");
            obj.set_text("◉");
            obj.set_color("green");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.work_info.form.div_status.addChild(obj.name, obj);

            obj = new Div("Div00_01_00_00","381","122","334","35",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_border("0px none,0px none,1px ridge lavender");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static00","5","8","134","22",null,null,null,null,null,null,this.work_info.form.Div00_01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Ngày bắt đầu");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_color("gray");
            this.work_info.form.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","160","11","165","19",null,null,null,null,null,null,this.work_info.form.Div00_01_00_00.form);
            obj.set_taborder("1");
            obj.set_value("20230408");
            obj.set_border("0px none");
            this.work_info.form.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01_00_01","15","161","330","35",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_border("0px none,0px none,1px ridge lavender");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","134","30",null,null,null,null,null,null,this.work_info.form.Div00_01_00_01.form);
            obj.set_taborder("0");
            obj.set_text("Thời hạn");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_color("gray");
            this.work_info.form.Div00_01_00_01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","160","5","165","20",null,null,null,null,null,null,this.work_info.form.Div00_01_00_01.form);
            obj.set_taborder("1");
            obj.set_value("20230413");
            obj.set_border("0px none");
            this.work_info.form.Div00_01_00_01.addChild(obj.name, obj);

            obj = new Div("Div00_01_00_00_00","381","159","334","35",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_border("0px none,0px none,1px ridge lavender");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static00","5","2","134","28",null,null,null,null,null,null,this.work_info.form.Div00_01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Thời lượng");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_color("gray");
            this.work_info.form.Div00_01_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_ut","147","8","178","20",null,null,null,null,null,null,this.work_info.form.Div00_01_00_00_00.form);
            obj.set_border("0px none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("1");
            var work_info_form_Div00_01_00_00_00_form_cmb_ut_innerdataset = new nexacro.NormalDataset("work_info_form_Div00_01_00_00_00_form_cmb_ut_innerdataset", obj);
            work_info_form_Div00_01_00_00_00_form_cmb_ut_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Ngày 1</Col></Row><Row><Col id=\"datacolumn\">Ngày 2</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">Ngày 3</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">Ngày 4</Col><Col id=\"codecolumn\">4</Col></Row><Row><Col id=\"datacolumn\">Ngày 5</Col><Col id=\"codecolumn\">5</Col></Row><Row><Col id=\"datacolumn\">Ngày 6</Col><Col id=\"codecolumn\">6</Col></Row><Row><Col id=\"datacolumn\">Ngày 7</Col><Col id=\"codecolumn\">7</Col></Row><Row><Col id=\"datacolumn\">Ngày 8</Col><Col id=\"codecolumn\">8</Col></Row><Row><Col id=\"datacolumn\">Ngày 9</Col><Col id=\"codecolumn\">9</Col></Row><Row><Col id=\"datacolumn\">Ngày 10</Col><Col id=\"codecolumn\">10</Col></Row><Row><Col id=\"datacolumn\">Ngày 11</Col><Col id=\"codecolumn\">11</Col></Row></Rows>");
            obj.set_innerdataset(work_info_form_Div00_01_00_00_00_form_cmb_ut_innerdataset);
            obj.set_text("Ngày 1");
            obj.set_value("1");
            obj.set_index("0");
            this.work_info.form.Div00_01_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01_00_01_00","15","196","330","35",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_border("0px none,0px none,1px ridge lavender");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","129","30",null,null,null,null,null,null,this.work_info.form.Div00_01_00_01_00.form);
            obj.set_taborder("1");
            obj.set_text("Ưu tiên");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_color("gray");
            this.work_info.form.Div00_01_00_01_00.addChild(obj.name, obj);

            obj = new Combo("cmb_ut","147","8","178","20",null,null,null,null,null,null,this.work_info.form.Div00_01_00_01_00.form);
            obj.set_border("0px none");
            obj.set_innerdataset("ds_dut");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_taborder("0");
            obj.set_text("Trung bình");
            obj.set_value("H2");
            obj.set_index("1");
            this.work_info.form.Div00_01_00_01_00.addChild(obj.name, obj);

            obj = new Div("Div00_01_00_00_00_00","383","194","329","37",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_border("0px none,0px none,1px ridge lavender");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static00","5","5","134","25",null,null,null,null,null,null,this.work_info.form.Div00_01_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Phần trăm hoàn thành");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_color("gray");
            this.work_info.form.Div00_01_00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_ut","147","8","178","20",null,null,null,null,null,null,this.work_info.form.Div00_01_00_00_00_00.form);
            obj.set_border("0px none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("1");
            var work_info_form_Div00_01_00_00_00_00_form_cmb_ut_innerdataset = new nexacro.NormalDataset("work_info_form_Div00_01_00_00_00_00_form_cmb_ut_innerdataset", obj);
            work_info_form_Div00_01_00_00_00_00_form_cmb_ut_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">10 %</Col></Row><Row><Col id=\"datacolumn\">20 %</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">30 %</Col><Col id=\"codecolumn\">3</Col></Row></Rows>");
            obj.set_innerdataset(work_info_form_Div00_01_00_00_00_00_form_cmb_ut_innerdataset);
            obj.set_text("Ngày 1");
            obj.set_value("1");
            obj.set_index("0");
            this.work_info.form.Div00_01_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01_00_01_00_00","15","233","701","30",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_border("0px none,0px none,1px ridge lavender");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","134","25",null,null,null,null,null,null,this.work_info.form.Div00_01_00_01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Tag");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_color("gray");
            this.work_info.form.Div00_01_00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","160","0","60","26",null,null,null,null,null,null,this.work_info.form.Div00_01_00_01_00_00.form);
            obj.set_taborder("1");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_borderRadius("10px 10px 10px 10px");
            obj.set_background("cornsilk");
            this.work_info.form.Div00_01_00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","170","4","100","17",null,null,null,null,null,null,this.work_info.form.Div00_01_00_01_00_00.form);
            obj.set_taborder("2");
            obj.set_text("OK");
            this.work_info.form.Div00_01_00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","195","2","22","19",null,null,null,null,null,null,this.work_info.form.Div00_01_00_01_00_00.form);
            obj.set_taborder("3");
            obj.set_text("✕");
            this.work_info.form.Div00_01_00_01_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01_00_01_00_00_00","15","270","330","28",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.set_border("0px none,0px none,1px ridge lavender");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static00","0","3","111","22",null,null,null,null,null,null,this.work_info.form.Div00_01_00_01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Thông báo nhắc");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_color("gray");
            obj.set_background("url(\'imagerc::Information_icon4_orange.svg.png\') no-repeat right top /20px 20px");
            this.work_info.form.Div00_01_00_01_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_ut","147","0","178","25",null,null,null,null,null,null,this.work_info.form.Div00_01_00_01_00_00_00.form);
            obj.set_border("0px none");
            obj.set_innerdataset("ds_mss");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_taborder("1");
            obj.set_text("Không có");
            obj.set_value("M1");
            obj.set_index("0");
            this.work_info.form.Div00_01_00_01_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01_00_00_00_00_00_00","383","268","334","27",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_border("0px none,0px none,1px ridge lavender");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static00","5","5","134","20",null,null,null,null,null,null,this.work_info.form.Div00_01_00_00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Tái diễn");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_color("gray");
            this.work_info.form.Div00_01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","162","5","161","15",null,null,null,null,null,null,this.work_info.form.Div00_01_00_00_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_border("0px none");
            this.work_info.form.Div00_01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01_00_01_00_00_00_00","15","300","330","35",null,null,null,null,null,null,this.work_info.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_border("0px none,0px none,1px ridge lavender");
            this.work_info.addChild(obj.name, obj);

            obj = new Static("Static00","0","-2","134","29",null,null,null,null,null,null,this.work_info.form.Div00_01_00_01_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Loại hóa đơn");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_color("gray");
            this.work_info.form.Div00_01_00_01_00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_ut","147","1","178","27",null,null,null,null,null,null,this.work_info.form.Div00_01_00_01_00_00_00_00.form);
            obj.set_border("0px none");
            obj.set_innerdataset("ds_mss");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_taborder("1");
            obj.set_text("Không có");
            obj.set_value("M1");
            obj.set_index("0");
            this.work_info.form.Div00_01_00_01_00_00_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_00","392","57","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_image("url(\'../image/Information_icon4_orange.svg.png\')");
            obj.set_imagealign("center middle");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_00_00","305","57","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_image("url(\'../image/1381552.png\')");
            obj.set_imagealign("center middle");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_01","333","57","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_image("url(\'../image/tag.png\')");
            obj.set_imagealign("center middle");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Team 2 Report Task");
                p.Static00.set_font("normal bold 18pt/normal \"normal/normal\"");
                p.Static00.move("9","0","324","38",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("By Trương Quang Tứ |      Explore Zoho Project! |      |      |      |");
                p.Static01.move("9","38","390","31",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Phone_screen","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.set_taborder("0");
                p.Static01.set_text("TRẠNG THÁI HIỆN TẠI");
                p.Static01.set_font("normal 9pt/normal");
                p.Static01.set_color("gray");
                p.Static01.move("12","26","149","20",null,null);

                p.cmb_status.set_taborder("1");
                p.cmb_status.set_border("0px none");
                p.cmb_status.set_innerdataset("ds_status");
                p.cmb_status.set_codecolumn("CD");
                p.cmb_status.set_datacolumn("NM");
                p.cmb_status.set_font("10");
                p.cmb_status.set_text("Đang tiến hành");
                p.cmb_status.set_value("s2");
                p.cmb_status.set_index("1");
                p.cmb_status.move("18","1","133","30",null,null);

                p.stc_st_ico.set_taborder("2");
                p.stc_st_ico.set_text("◉");
                p.stc_st_ico.set_color("green");
                p.stc_st_ico.set_font("normal 10pt/normal \"Arial\"");
                p.stc_st_ico.move("8","7","20","21",null,null);
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Phone_screen","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Mô Tả ✎");
                p.Static00.set_font("normal bold 10pt/normal \"Arial\"");
                p.Static00.move("23","7","114","19",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("Task owners, manager, and admins only have permission edit that task");
                p.Static01.set_font("normal 10px/normal");
                p.Static01.move("16","26","394","24",null,null);

                p.Static02.set_taborder("2");
                p.Static02.set_text("❱");
                p.Static02.set_color("coral");
                p.Static02.move("10","10","10","13",null,null);
            	}
            );
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01_00.form
            obj = new Layout("Phone_screen","",0,0,this.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form.Div00.form
            obj = new Layout("default","",0,0,this.work_info.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Nhóm Đã liên kết");
                p.Static00.set_font("normal 9pt/normal \"Arial\"");
                p.Static00.set_color("gray");
                p.Static00.move("0","-5","105","30",null,null);

                p.cmb_team.set_taborder("1");
                p.cmb_team.set_border("0px none");
                p.cmb_team.set_innerdataset("ds_team");
                p.cmb_team.set_codecolumn("CD");
                p.cmb_team.set_datacolumn("NM");
                p.cmb_team.set_displaynulltext("Chọn các nhóm");
                p.cmb_team.set_color("black");
                p.cmb_team.set_text("");
                p.cmb_team.set_value("");
                p.cmb_team.set_index("-1");
                p.cmb_team.move("160","-7","540","30",null,null);
            	}
            );
            this.work_info.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form.Div00.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form.Div00_00.form
            obj = new Layout("default","",0,0,this.work_info.form.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Chủ Sở hữu");
                p.Static00.set_font("normal 9pt/normal \"Arial\"");
                p.Static00.set_color("gray");
                p.Static00.move("0","0","134","25",null,null);

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_font("normal 8pt/normal \"Arial\"");
                p.Static00_00.set_color("black");
                p.Static00_00.set_background("url(\'imagerc::avat-removebg-preview.png\') no-repeat left center /contain cornsilk");
                p.Static00_00.set_borderRadius("10px 10px 10px 10px");
                p.Static00_00.set_text("");
                p.Static00_00.move("160","0","165","26",null,null);

                p.Static01.set_taborder("2");
                p.Static01.set_text("Trương Quang Tứ");
                p.Static01.move("200","4","100","17",null,null);

                p.Static02.set_taborder("3");
                p.Static02.set_text("✕");
                p.Static02.move("305","2","22","19",null,null);
            	}
            );
            this.work_info.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form.Div00_00.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.Div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form.Div00_01.form
            obj = new Layout("default","",0,0,this.work_info.form.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Giờ Làm việc");
                p.Static00.set_font("normal 9pt/normal \"Arial\"");
                p.Static00.set_color("gray");
                p.Static00.move("0","-5","134","30",null,null);

                p.Combo00.set_taborder("1");
                p.Combo00.set_border("0px none");
                p.Combo00.set_innerdataset("ds_wrkHour");
                p.Combo00.set_codecolumn("CD");
                p.Combo00.set_datacolumn("NM");
                p.Combo00.set_text("1:00");
                p.Combo00.set_value("01");
                p.Combo00.set_index("0");
                p.Combo00.move("154","3","546","20",null,null);
            	}
            );
            this.work_info.form.Div00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form.Div00_01.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.Div00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form.div_status.form
            obj = new Layout("default","",0,0,this.work_info.form.div_status.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Trạng thái");
                p.Static00.set_font("normal 9pt/normal \"Arial\"");
                p.Static00.set_color("gray");
                p.Static00.move("0","6","134","24",null,null);

                p.cmb_status.set_taborder("1");
                p.cmb_status.set_border("0px none");
                p.cmb_status.set_innerdataset("ds_status");
                p.cmb_status.set_codecolumn("CD");
                p.cmb_status.set_datacolumn("NM");
                p.cmb_status.set_text("Đang tiến hành");
                p.cmb_status.set_value("s2");
                p.cmb_status.set_index("1");
                p.cmb_status.move("170","3","160","30",null,null);

                p.stc_st_ico.set_taborder("2");
                p.stc_st_ico.set_text("◉");
                p.stc_st_ico.set_color("green");
                p.stc_st_ico.set_font("normal 10pt/normal \"Arial\"");
                p.stc_st_ico.move("160","9","20","21",null,null);
            	}
            );
            this.work_info.form.div_status.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form.div_status.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form.div_status.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.div_status.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form.Div00_01_00_00.form
            obj = new Layout("default","",0,0,this.work_info.form.Div00_01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Ngày bắt đầu");
                p.Static00.set_font("normal 8pt/normal \"Arial\"");
                p.Static00.set_color("gray");
                p.Static00.move("5","8","134","22",null,null);

                p.Calendar00.set_taborder("1");
                p.Calendar00.set_value("20230408");
                p.Calendar00.set_border("0px none");
                p.Calendar00.move("160","11","165","19",null,null);
            	}
            );
            this.work_info.form.Div00_01_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form.Div00_01_00_00.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form.Div00_01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.Div00_01_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form.Div00_01_00_01.form
            obj = new Layout("default","",0,0,this.work_info.form.Div00_01_00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Thời hạn");
                p.Static00.set_font("normal 9pt/normal \"Arial\"");
                p.Static00.set_color("gray");
                p.Static00.move("0","0","134","30",null,null);

                p.Calendar00.set_taborder("1");
                p.Calendar00.set_value("20230413");
                p.Calendar00.set_border("0px none");
                p.Calendar00.move("160","5","165","20",null,null);
            	}
            );
            this.work_info.form.Div00_01_00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form.Div00_01_00_01.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form.Div00_01_00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.Div00_01_00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form.Div00_01_00_00_00.form
            obj = new Layout("default","",0,0,this.work_info.form.Div00_01_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Thời lượng");
                p.Static00.set_font("normal 8pt/normal \"Arial\"");
                p.Static00.set_color("gray");
                p.Static00.move("5","2","134","28",null,null);

                p.cmb_ut.set_border("0px none");
                p.cmb_ut.set_codecolumn("codecolumn");
                p.cmb_ut.set_datacolumn("datacolumn");
                p.cmb_ut.set_taborder("1");
                p.cmb_ut.set_innerdataset(work_info_form_Div00_01_00_00_00_form_cmb_ut_innerdataset);
                p.cmb_ut.set_text("Ngày 1");
                p.cmb_ut.set_value("1");
                p.cmb_ut.set_index("0");
                p.cmb_ut.move("147","8","178","20",null,null);
            	}
            );
            this.work_info.form.Div00_01_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form.Div00_01_00_00_00.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form.Div00_01_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.Div00_01_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form.Div00_01_00_01_00.form
            obj = new Layout("default","",0,0,this.work_info.form.Div00_01_00_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("1");
                p.Static00.set_text("Ưu tiên");
                p.Static00.set_font("normal 9pt/normal \"Arial\"");
                p.Static00.set_color("gray");
                p.Static00.move("0","0","129","30",null,null);

                p.cmb_ut.set_border("0px none");
                p.cmb_ut.set_innerdataset("ds_dut");
                p.cmb_ut.set_codecolumn("CD");
                p.cmb_ut.set_datacolumn("NM");
                p.cmb_ut.set_taborder("0");
                p.cmb_ut.set_text("Trung bình");
                p.cmb_ut.set_value("H2");
                p.cmb_ut.set_index("1");
                p.cmb_ut.move("147","8","178","20",null,null);
            	}
            );
            this.work_info.form.Div00_01_00_01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form.Div00_01_00_01_00.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form.Div00_01_00_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.Div00_01_00_01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form.Div00_01_00_00_00_00.form
            obj = new Layout("default","",0,0,this.work_info.form.Div00_01_00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Phần trăm hoàn thành");
                p.Static00.set_font("normal 8pt/normal \"Arial\"");
                p.Static00.set_color("gray");
                p.Static00.move("5","5","134","25",null,null);

                p.cmb_ut.set_border("0px none");
                p.cmb_ut.set_codecolumn("codecolumn");
                p.cmb_ut.set_datacolumn("datacolumn");
                p.cmb_ut.set_taborder("1");
                p.cmb_ut.set_innerdataset(work_info_form_Div00_01_00_00_00_00_form_cmb_ut_innerdataset);
                p.cmb_ut.set_text("Ngày 1");
                p.cmb_ut.set_value("1");
                p.cmb_ut.set_index("0");
                p.cmb_ut.move("147","8","178","20",null,null);
            	}
            );
            this.work_info.form.Div00_01_00_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form.Div00_01_00_00_00_00.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form.Div00_01_00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.Div00_01_00_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form.Div00_01_00_01_00_00.form
            obj = new Layout("default","",0,0,this.work_info.form.Div00_01_00_01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Tag");
                p.Static00.set_font("normal 8pt/normal \"Arial\"");
                p.Static00.set_color("gray");
                p.Static00.move("0","0","134","25",null,null);

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_font("normal 8pt/normal \"Arial\"");
                p.Static00_00.set_color("black");
                p.Static00_00.set_borderRadius("10px 10px 10px 10px");
                p.Static00_00.set_background("cornsilk");
                p.Static00_00.move("160","0","60","26",null,null);

                p.Static01.set_taborder("2");
                p.Static01.set_text("OK");
                p.Static01.move("170","4","100","17",null,null);

                p.Static02.set_taborder("3");
                p.Static02.set_text("✕");
                p.Static02.move("195","2","22","19",null,null);
            	}
            );
            this.work_info.form.Div00_01_00_01_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form.Div00_01_00_01_00_00.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form.Div00_01_00_01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.Div00_01_00_01_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form.Div00_01_00_01_00_00_00.form
            obj = new Layout("default","",0,0,this.work_info.form.Div00_01_00_01_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Thông báo nhắc");
                p.Static00.set_font("normal 9pt/normal \"Arial\"");
                p.Static00.set_color("gray");
                p.Static00.set_background("url(\'imagerc::Information_icon4_orange.svg.png\') no-repeat right top /20px 20px");
                p.Static00.move("0","3","111","22",null,null);

                p.cmb_ut.set_border("0px none");
                p.cmb_ut.set_innerdataset("ds_mss");
                p.cmb_ut.set_codecolumn("CD");
                p.cmb_ut.set_datacolumn("NM");
                p.cmb_ut.set_taborder("1");
                p.cmb_ut.set_text("Không có");
                p.cmb_ut.set_value("M1");
                p.cmb_ut.set_index("0");
                p.cmb_ut.move("147","0","178","25",null,null);
            	}
            );
            this.work_info.form.Div00_01_00_01_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form.Div00_01_00_01_00_00_00.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form.Div00_01_00_01_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.Div00_01_00_01_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form.Div00_01_00_00_00_00_00_00.form
            obj = new Layout("default","",0,0,this.work_info.form.Div00_01_00_00_00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Tái diễn");
                p.Static00.set_font("normal 8pt/normal \"Arial\"");
                p.Static00.set_color("gray");
                p.Static00.move("5","5","134","20",null,null);

                p.Combo00.set_taborder("1");
                p.Combo00.set_border("0px none");
                p.Combo00.move("162","5","161","15",null,null);
            	}
            );
            this.work_info.form.Div00_01_00_00_00_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form.Div00_01_00_00_00_00_00_00.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form.Div00_01_00_00_00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.Div00_01_00_00_00_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form.Div00_01_00_01_00_00_00_00.form
            obj = new Layout("default","",0,0,this.work_info.form.Div00_01_00_01_00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Loại hóa đơn");
                p.Static00.set_font("normal 8pt/normal \"Arial\"");
                p.Static00.set_color("gray");
                p.Static00.move("0","-2","134","29",null,null);

                p.cmb_ut.set_border("0px none");
                p.cmb_ut.set_innerdataset("ds_mss");
                p.cmb_ut.set_codecolumn("CD");
                p.cmb_ut.set_datacolumn("NM");
                p.cmb_ut.set_taborder("1");
                p.cmb_ut.set_text("Không có");
                p.cmb_ut.set_value("M1");
                p.cmb_ut.set_index("0");
                p.cmb_ut.move("147","1","178","27",null,null);
            	}
            );
            this.work_info.form.Div00_01_00_01_00_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form.Div00_01_00_01_00_00_00_00.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form.Div00_01_00_01_00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.Div00_01_00_01_00_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.work_info.form
            obj = new Layout("default","",0,0,this.work_info.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Thông tin tác vụ");
                p.Static00.set_font("normal bold 10pt/normal \"Arial\"");
                p.Static00.move("20","7","117","21",null,null);

                p.Static02.set_taborder("1");
                p.Static02.set_text("❱");
                p.Static02.set_color("coral");
                p.Static02.move("10","10","10","13",null,null);

                p.Div00.set_taborder("2");
                p.Div00.set_text("Div00");
                p.Div00.set_border("0px none,0px none,1px ridge lavender");
                p.Div00.move("15","33","700","28",null,null);

                p.Div00_00.set_taborder("3");
                p.Div00_00.set_text("Div00");
                p.Div00_00.set_border("0px none,0px none,1px ridge lavender");
                p.Div00_00.move("15","64","700","28",null,null);

                p.Div00_01.set_taborder("4");
                p.Div00_01.set_text("Div00");
                p.Div00_01.set_border("0px none,0px none,1px ridge lavender");
                p.Div00_01.move("15","95","700","28",null,null);

                p.div_status.set_taborder("5");
                p.div_status.set_text("Div00");
                p.div_status.set_border("0px none,0px none,1px ridge lavender");
                p.div_status.move("15","124","330","35",null,null);

                p.Div00_01_00_00.set_taborder("6");
                p.Div00_01_00_00.set_text("Div00");
                p.Div00_01_00_00.set_border("0px none,0px none,1px ridge lavender");
                p.Div00_01_00_00.move("381","122","334","35",null,null);

                p.Div00_01_00_01.set_taborder("7");
                p.Div00_01_00_01.set_text("Div00");
                p.Div00_01_00_01.set_border("0px none,0px none,1px ridge lavender");
                p.Div00_01_00_01.move("15","161","330","35",null,null);

                p.Div00_01_00_00_00.set_taborder("8");
                p.Div00_01_00_00_00.set_text("Div00");
                p.Div00_01_00_00_00.set_border("0px none,0px none,1px ridge lavender");
                p.Div00_01_00_00_00.move("381","159","334","35",null,null);

                p.Div00_01_00_01_00.set_taborder("9");
                p.Div00_01_00_01_00.set_text("Div00");
                p.Div00_01_00_01_00.set_border("0px none,0px none,1px ridge lavender");
                p.Div00_01_00_01_00.move("15","196","330","35",null,null);

                p.Div00_01_00_00_00_00.set_taborder("10");
                p.Div00_01_00_00_00_00.set_text("Div00");
                p.Div00_01_00_00_00_00.set_border("0px none,0px none,1px ridge lavender");
                p.Div00_01_00_00_00_00.move("383","194","329","37",null,null);

                p.Div00_01_00_01_00_00.set_taborder("11");
                p.Div00_01_00_01_00_00.set_text("Div00");
                p.Div00_01_00_01_00_00.set_border("0px none,0px none,1px ridge lavender");
                p.Div00_01_00_01_00_00.set_font("normal 9pt/normal \"Arial\"");
                p.Div00_01_00_01_00_00.move("15","233","701","30",null,null);

                p.Div00_01_00_01_00_00_00.set_taborder("12");
                p.Div00_01_00_01_00_00_00.set_text("Div00");
                p.Div00_01_00_01_00_00_00.set_border("0px none,0px none,1px ridge lavender");
                p.Div00_01_00_01_00_00_00.move("15","270","330","28",null,null);

                p.Div00_01_00_00_00_00_00_00.set_taborder("13");
                p.Div00_01_00_00_00_00_00_00.set_text("Div00");
                p.Div00_01_00_00_00_00_00_00.set_border("0px none,0px none,1px ridge lavender");
                p.Div00_01_00_00_00_00_00_00.move("383","268","334","27",null,null);

                p.Div00_01_00_01_00_00_00_00.set_taborder("14");
                p.Div00_01_00_01_00_00_00_00.set_text("Div00");
                p.Div00_01_00_01_00_00_00_00.set_border("0px none,0px none,1px ridge lavender");
                p.Div00_01_00_01_00_00_00_00.move("15","300","330","35",null,null);
            	}
            );
            this.work_info.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.work_info.form
            obj = new Layout("Phone_screen","",0,0,this.work_info.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.work_info.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",790,630,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("ReportTask");
                p.set_color("darkorange");

                p.Div00.set_taborder("1");
                p.Div00.set_text("Div00");
                p.Div00.move("21","10","618","81",null,null);

                p.Static00.set_taborder("0");
                p.Static00.set_text("⎙ ");
                p.Static00.set_font("normal bold 12pt/normal \"Arial\"");
                p.Static00.set_color("darkorange");
                p.Static00.move("156","48","20","30",null,null);

                p.Static01_00.set_taborder("2");
                p.Static01_00.set_text("✆");
                p.Static01_00.set_font("normal 12pt/normal \"Arial\"");
                p.Static01_00.move("362","56","17","19",null,null);

                p.Div01.set_taborder("3");
                p.Div01.set_text("Div01");
                p.Div01.set_background("white");
                p.Div01.set_boxShadow("0px 5px 5px 5px #adadad");
                p.Div01.move("28","84","730","56",null,null);

                p.Div01_00.set_taborder("4");
                p.Div01_00.set_text("Div01");
                p.Div01_00.set_background("white");
                p.Div01_00.set_boxShadow("0px 5px 5px 5px #adadad");
                p.Div01_00.move("30","160","730","56",null,null);

                p.work_info.set_taborder("5");
                p.work_info.set_text("Div01");
                p.work_info.set_background("white");
                p.work_info.set_boxShadow("0px 5px 5px 5px #adadad");
                p.work_info.move("30","242","730","358",null,null);

                p.ImageViewer00_00_00.set_taborder("6");
                p.ImageViewer00_00_00.set_image("url(\'../image/Information_icon4_orange.svg.png\')");
                p.ImageViewer00_00_00.set_imagealign("center middle");
                p.ImageViewer00_00_00.set_stretch("fit");
                p.ImageViewer00_00_00.set_border("0px none");
                p.ImageViewer00_00_00.set_tabstop("false");
                p.ImageViewer00_00_00.move("392","57","15","15",null,null);

                p.ImageViewer00_00_00_00.set_taborder("7");
                p.ImageViewer00_00_00_00.set_image("url(\'../image/1381552.png\')");
                p.ImageViewer00_00_00_00.set_imagealign("center middle");
                p.ImageViewer00_00_00_00.set_stretch("fit");
                p.ImageViewer00_00_00_00.set_border("0px none");
                p.ImageViewer00_00_00_00.set_tabstop("false");
                p.ImageViewer00_00_00_00.move("305","57","15","15",null,null);

                p.ImageViewer00_00_01.set_taborder("8");
                p.ImageViewer00_00_01.set_image("url(\'../image/tag.png\')");
                p.ImageViewer00_00_01.set_imagealign("center middle");
                p.ImageViewer00_00_01.set_stretch("fit");
                p.ImageViewer00_00_01.set_border("0px none");
                p.ImageViewer00_00_01.set_tabstop("false");
                p.ImageViewer00_00_01.move("333","57","15","15",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_screen","Phone_screen",480,768,this,
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
        this.registerScript("ReportTask.xfdl", function() {

        this.Div01_00_00_Div00_01_00_cmb_status_canitemchange = function(obj,e)
        {
        	switch(e.postvalue) {
        		case "s1":
        			this.work_info.form.div_status.form.stc_st_ico.set_color("gold");
        			break;
        		case "s2":
        			this.work_info.form.div_status.form.stc_st_ico.set_color("green");
        			break;
        		case "s3":
        			this.work_info.form.div_status.form.stc_st_ico.set_color("red");
        			break;
        	}
        };

        this.Div01_cmb_status_canitemchange = function(obj,e)
        {
        	switch(e.postvalue) {
        		case "s1":
        			this.Div01.form.stc_st_ico.set_color("gold");
        			break;
        		case "s2":
        			this.Div01.form.stc_st_ico.set_color("green");
        			break;
        		case "s3":
        			this.Div01.form.stc_st_ico.set_color("red");
        			break;
        	}
        };

        this.work_info_Div00_00_Static02_onclick = function(obj,e)
        {
        	this.work_info.form.Div00_00.form.Static01.set_visible(false);
        	this.work_info.form.Div00_00.form.Static02.set_visible(false);
        	//this.ImageViewer00.set_visible(false);
        	this.work_info.form.Div00_00.form.Static00_00.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.Div01.form.cmb_status.addEventHandler("canitemchange",this.Div01_cmb_status_canitemchange,this);
            this.work_info.form.Div00.form.cmb_team.addEventHandler("canitemchange",this.Div01_00_00_Div00_01_00_cmb_status_canitemchange,this);
            this.work_info.form.Div00_00.form.Static02.addEventHandler("onclick",this.work_info_Div00_00_Static02_onclick,this);
            this.work_info.form.div_status.form.cmb_status.addEventHandler("canitemchange",this.Div01_00_00_Div00_01_00_cmb_status_canitemchange,this);
            this.work_info.form.Div00_01_00_01_00_00.form.Static02.addEventHandler("onclick",this.work_info_Div00_00_Static02_onclick,this);
        };
        this.loadIncludeScript("ReportTask.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
