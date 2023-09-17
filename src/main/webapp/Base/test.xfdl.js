(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Label\" type=\"STRING\" size=\"256\"/><Column id=\"Level\" type=\"STRING\" size=\"256\"/><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"B\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Label\">1dollar</Col><Col id=\"Level\">0</Col><Col id=\"A\">A</Col><Col id=\"B\">B</Col></Row><Row><Col id=\"Label\">Sales</Col><Col id=\"Level\">1</Col><Col id=\"A\">A</Col><Col id=\"B\">B</Col></Row><Row><Col id=\"Level\">2</Col><Col id=\"Label\">James</Col><Col id=\"A\">A</Col><Col id=\"B\">B</Col></Row><Row><Col id=\"Label\">Donald</Col><Col id=\"Level\">3</Col><Col id=\"A\">A</Col><Col id=\"B\">B</Col></Row><Row><Col id=\"Label\">Lisa</Col><Col id=\"Level\">3</Col><Col id=\"A\">A</Col><Col id=\"B\">B</Col></Row><Row><Col id=\"Label\">Consulting</Col><Col id=\"Level\">1</Col><Col id=\"A\">A</Col><Col id=\"B\">B</Col></Row><Row><Col id=\"Label\">Joe</Col><Col id=\"Level\">2</Col><Col id=\"A\">A</Col><Col id=\"B\">B</Col></Row><Row><Col id=\"Label\">Michael</Col><Col id=\"Level\">2</Col><Col id=\"A\">A</Col><Col id=\"B\">B</Col></Row><Row><Col id=\"Label\">Research Institute</Col><Col id=\"Level\">1</Col><Col id=\"A\">A</Col><Col id=\"B\">B</Col></Row><Row><Col id=\"Label\">Lilli</Col><Col id=\"Level\">2</Col><Col id=\"A\">A</Col></Row><Row><Col id=\"Label\">Colt</Col><Col id=\"Level\">2</Col><Col id=\"A\">A</Col></Row><Row><Col id=\"Label\">hangul</Col><Col id=\"Level\">0</Col><Col id=\"A\">A</Col></Row><Row><Col id=\"Label\">R&amp;D</Col><Col id=\"Level\">1</Col><Col id=\"A\">A</Col></Row><Row><Col id=\"Label\">Joe</Col><Col id=\"Level\">2</Col><Col id=\"A\">A</Col></Row><Row><Col id=\"Label\">Michael</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Label\">Quality Assurance</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Label\">Colt</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Label\">James</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Label\">Lilli</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Label\">Sales</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Label\">Donald</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Label\">EBOT</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Label\">Personnel</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Label\">Donald</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Label\">James</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Label\">Sales</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Label\">Lilli</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Label\">Lisa</Col><Col id=\"Level\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","32","40","438","310",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("none");
            obj.set_autosizebandtype("body");
            obj.getSetter("text").set("");
            obj.set_autoenter("select");
            obj.set_fillareatype("none");
            obj.set_selecttype("row");
            obj.set_binddataset("Dataset00");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("true");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"280\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Label\"/><Cell col=\"1\" text=\"Level\"/><Cell col=\"2\" text=\"A\"/><Cell col=\"3\" text=\"B\"/></Band><Band id=\"body\"><Cell text=\"bind:Label\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:Level\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:Level\" color=\"#000000\"/><Cell col=\"2\" text=\"bind:A\"/><Cell col=\"3\" text=\"bind:B\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Grid00.addEventHandler("onselectchanged",this.Grid00_onselectchanged,this);
        };
        this.loadIncludeScript("test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
