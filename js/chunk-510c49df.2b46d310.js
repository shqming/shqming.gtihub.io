(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-510c49df"],{"10e4":function(e,t,a){"use strict";a("796b")},"12e9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"marker"},[t("div",{staticClass:"wrap shadow"},[t("div",{staticClass:"search-wrap"},[t("span",[e._v("基因组： ")]),t("el-select",{attrs:{filterable:"",size:"medium",placeholder:"请选择"},model:{value:e.genomeid,callback:function(t){e.genomeid=t},expression:"genomeid"}},e._l(e.genomeList,(function(e){return t("el-option",{key:e.gnome_version_id,attrs:{label:e.gnome_species_name,value:e.gnome_version_id}})})),1),t("span",[e._v("标记类型： ")]),t("el-select",{attrs:{filterable:"",clearable:"",size:"medium",placeholder:"请选择"},model:{value:e.typeID,callback:function(t){e.typeID=t},expression:"typeID"}},e._l(e.typeList,(function(e){return t("el-option",{key:e.maker_type_id,attrs:{label:e.maker_type_name,value:e.maker_type_id}})})),1),t("el-button",{attrs:{type:"primary",size:"medium",icon:"el-icon-search"},on:{click:e.getPageList}},[e._v("搜索")])],1),t("div",{staticClass:"table"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.tableData,height:"700","header-cell-style":{"background-color":"#f8f8f9"}}},[t("el-table-column",{attrs:{prop:"maker_id",label:"makerId"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("span",{staticStyle:{color:"#9B58FE"}},[e._v(" "+e._s(a.maker_id)+" ")])]}}])}),t("el-table-column",{attrs:{prop:"gnome_version_id",label:"gnomeVersionId"}}),t("el-table-column",{attrs:{prop:"maker_type_id",label:"makerTypeId"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("span",{staticStyle:{color:"#9B58FE"}},[e._v(" "+e._s(a.maker_type_id)+" ")])]}}])}),t("el-table-column",{attrs:{prop:"gnome_chr_id",label:"gnomeChrId"}}),t("el-table-column",{attrs:{prop:"start",label:"start"}}),t("el-table-column",{attrs:{prop:"end",label:"end"}}),t("el-table-column",{attrs:{prop:"description",label:"description"}}),t("el-table-column",{attrs:{prop:"seq_url",label:"seqUrl","show-overflow-tooltip":""}})],1),t("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.total},on:{"current-change":e.handleCurrentChange,"prev-click":e.handleCurrentChange,"next-click":e.handleCurrentChange}})],1)])])},s=[],o=a("68dd");const r="MolecularMarker";class l{static getTypeList(e){const t={method:"GET",url:r+"/typeList",params:{genomeVersionID:e}};return o["a"].request(t)}static getPageList(e){const t={method:"GET",url:r+"/info",params:e};return o["a"].request(t)}}var i=a("83c4"),c={name:"MolecularMarker",props:{},components:{},data(){return{tableData:[],tableLoading:!1,pageInfo:{total:0,pageSize:10,pageNum:1},genomeid:2022021721004,genomeList:[],typeID:"",typeList:[]}},computed:{},watch:{genomeid:{handler(e){this.getTypeList(e)},immediate:!0}},mounted(){this.getGenome(),this.getPageList()},methods:{getGenome(){i["a"].list().then(e=>{this.genomeList=e.data.data})},getTypeList(e){l.getTypeList(e).then(e=>{this.typeList=e.data.data})},getPageList(){this.tableLoading=!0;const e={genomeVersionID:this.genomeid,typeID:this.typeID,page:this.pageInfo.pageNum};l.getPageList(e).then(e=>{const{data:t}=e.data;this.tableData=t.GenomeSvInfos,this.pageInfo.total=t.Total,this.tableLoading=!1})},handleCurrentChange(e){this.pageInfo.pageNum=e,this.getPageList()}}},p=c,d=(a("10e4"),a("2877")),u=Object(d["a"])(p,n,s,!1,null,"c7995568",null);t["default"]=u.exports},"796b":function(e,t,a){},"83c4":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("68dd");const s="genome";class o{static list(){const e={method:"GET",url:s+"/list"};return n["a"].request(e)}static genomeDetail(e){const t={method:"GET",url:`${s}/introduction?genomeVersionID=${e}`};return n["a"].request(t)}static getGenomeChrList(e){const t={method:"GET",url:s+"/genomeChrList",params:{genomeVersionID:e}};return n["a"].request(t)}}}}]);
//# sourceMappingURL=chunk-510c49df.2b46d310.js.map