(function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],f=0,v=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&v.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"55a9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{attrs:{id:"gameengine"}},[a("h1",{attrs:{id:"title"}},[t._v("Sudoku Project App")]),a("v-divider"),a("v-spacer"),0==t.$store.state.menuStatus?a("v-container",{staticClass:"mx-0 px-0"},[a("v-btn",{staticClass:"starter",attrs:{"x-large":"",elevation:"12"},on:{click:function(e){t.$store.state.menuStatus=1}}},[t._v(" Új játék "),a("v-spacer"),a("v-icon",[t._v("mdi-refresh")])],1),a("v-spacer"),t.isTableStateInStorage()?a("v-btn",{staticClass:"starter",attrs:{"x-large":"",elevation:"12"},on:{click:function(e){return t.initTableFromStorage()}}},[t._v(" Folytatás "),a("v-spacer"),a("v-icon",[t._v("mdi-play")])],1):t._e()],1):t._e(),1==t.$store.state.menuStatus?a("v-container",{staticClass:"mx-0 px-0"},[a("v-btn",{staticClass:"starter",attrs:{"x-large":"",color:"#00e639",elevation:"12"},on:{click:function(e){return t.setDifficulty(1)}}},[t._v(" Könnyű "),a("v-spacer"),a("v-icon",[t._v("mdi-star")]),a("v-icon",[t._v("mdi-star-outline")]),a("v-icon",[t._v("mdi-star-outline")])],1),a("v-spacer"),a("v-btn",{staticClass:"starter",attrs:{"x-large":"",color:"#ffff66",elevation:"12"},on:{click:function(e){return t.setDifficulty(2)}}},[t._v(" Közepes "),a("v-spacer"),a("v-icon",[t._v("mdi-star")]),a("v-icon",[t._v("mdi-star")]),a("v-icon",[t._v("mdi-star-outline")])],1),a("v-spacer"),a("v-btn",{staticClass:"starter",attrs:{"x-large":"",color:"#ff5c33",elevation:"12"},on:{click:function(e){return t.setDifficulty(3)}}},[t._v(" Nehéz "),a("v-spacer"),a("v-icon",[t._v("mdi-star")]),a("v-icon",[t._v("mdi-star")]),a("v-icon",[t._v("mdi-star")])],1)],1):t._e(),2==t.$store.state.menuStatus?a("v-container",{staticClass:"my-10 py-10 mx-0 px-0"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"rgb(51,102,187)"}})],1):t._e(),3==t.$store.state.menuStatus?a("v-container",{staticClass:"px-0"},[a("v-container",{staticClass:"float-left col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3"},[a("GameInfo")],1),a("v-container",{staticClass:"float-right col-xs-12 col-sm-12 col-md-8 col-lg-9 col-xl-9"},[a("GameBoard")],1)],1):t._e()],1)],1)},n=[],i=(a("99af"),a("159b"),a("4de4"),a("caad"),a("ac1f"),a("1276"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"gameboard mx-0 px-0"},[a("v-row",{directives:[{name:"show",rawName:"v-show",value:1==t.$store.state.gamePaused,expression:"$store.state.gamePaused == true"}],attrs:{id:"pause",align:"center",justify:"center"}},[a("h1",[t._v("A játék szünetel. ")]),a("br"),t._v(" Ilyenkor a tábla nem látszik. "),a("br"),t._v(" Folytatáshoz kattints a Play ikonra! ")]),a("table",{directives:[{name:"show",rawName:"v-show",value:0==t.$store.state.gamePaused,expression:"$store.state.gamePaused == false"}],staticClass:"mx-auto px-0",attrs:{id:"sudokutable"}},t._l(9,(function(e){return a("tr",{key:e,staticClass:"mainrow"},t._l(9,(function(r){return a("td",{key:r,staticClass:"maincol",attrs:{id:"row"+e+"col"+r}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.table[e-1][r-1],expression:"$store.state.table[rIndex - 1][cIndex - 1]"}],staticClass:"mainvalue",attrs:{id:"input_row"+e+"col"+r},domProps:{value:t.$store.state.table[e-1][r-1]},on:{click:function(a){return t.clearCell(e-1,r-1)},change:function(a){return t.numberInspection(e-1,r-1)},input:function(a){a.target.composing||t.$set(t.$store.state.table[e-1],r-1,a.target.value)}}})])})),0)})),0)],1)}),o=[],l={methods:{getPossibleNumbers:function(t,e){for(var a=this,r=[1,2,3,4,5,6,7,8,9],s=function(s){-1!==r.indexOf(a.$store.state.table[t][s])&&s!=e&&(r=r.filter((function(e){return e!==a.$store.state.table[t][s]}))),-1!==r.indexOf(a.$store.state.table[s][e])&&s!=t&&(r=r.filter((function(t){return t!==a.$store.state.table[s][e]})))},n=0;n<9;n++)s(n);var i=this.getNumbersFromBlock(t,e);return i.forEach((function(t){-1!==r.indexOf(t)&&(r=r.filter((function(e){return e!==t})))})),r},getNumbersFromBlock:function(t,e){var a=this.getBlockNumber(t,e),r=0,s=0,n=0,i=0,o=[];switch(a){case 1:n=3,i=3;break;case 2:n=3,s=3,i=6;break;case 3:n=3,s=6,i=9;break;case 4:r=3,n=6,i=3;break;case 5:r=3,n=6,s=3,i=6;break;case 6:r=3,n=6,s=6,i=9;break;case 7:r=6,n=9,i=3;break;case 8:r=6,n=9,s=3,i=6;break;case 9:r=6,n=9,s=6,i=9;break}for(var l=r;l<n;l++)for(var c=s;c<i;c++)o.includes(this.$store.state.table[l][c])||o.push(this.$store.state.table[l][c]);return o},resetRow:function(t){for(var e=0;e<9;e++)this.$store.state.table[t][e]=""},numberInspection:function(t,e){var a=this.$store.state.table[t][e];if(parseInt(a)>0)if(parseInt(a)>9)this.clearCell(t,e);else{var r=document.getElementById("input_row".concat(t+1,"col").concat(e+1));this.isNumberAccepted(a,t,e)?(r.style.color="blue",this.$store.state.filledFields++,81==this.$store.state.filledFields&&this.finishGame()):(r.style.color="red",this.$store.state.failCounter++,this.$store.state.filledFields++)}},isNumberAccepted:function(t,e,a){return!!(this.isBlockFree(t,e,a)&&this.isRowFree(t,e,a)&&this.isColFree(t,e,a))},isRowFree:function(t,e,a){for(var r=0;r<9;r++)if(this.$store.state.table[e][r]==t&&r!=a)return!1;return!0},isColFree:function(t,e,a){for(var r=0;r<9;r++)if(this.$store.state.table[r][a]==t&&r!=e)return!1;return!0},isBlockFree:function(t,e,a){return!this.isNumberInBlock(t,e,a)},getBlockNumber:function(t,e){if(t<3){if(e<3)return 1;if(e>=3&&e<6)return 2;if(e>=6)return 3}else if(t>=3&&t<6){if(e<3)return 4;if(e>=3&&e<6)return 5;if(e>=6)return 6}else if(t>=6){if(e<3)return 7;if(e>=3&&e<6)return 8;if(e>=6)return 9}},isNumberInBlock:function(t,e,a){var r=this.getBlockNumber(e,a),s=0,n=0,i=0,o=0;switch(r){case 1:i=3,o=3;break;case 2:i=3,n=3,o=6;break;case 3:i=3,n=6,o=9;break;case 4:s=3,i=6,o=3;break;case 5:s=3,i=6,n=3,o=6;break;case 6:s=3,i=6,n=6,o=7;break;case 7:s=6,i=9,o=3;break;case 8:s=6,i=9,n=3,o=6;break;case 9:s=6,i=9,n=6,o=9;break}for(var l=s;l<i;l++)for(var c=n;c<o;c++)if(this.$store.state.table[l][c]==t&&l!=e&&c!=a)return!0;return!1},clearCell:function(t,e){var a=document.getElementById("input_row".concat(t+1,"col").concat(e+1));""!=this.$store.state.table[t][e]&&this.$store.state.filledFields--,this.$store.state.table[t][e]="",a.value="",a.style.color="black"},finishGame:function(){console.log("a tábla ki lett tölve")}}},c=l,u=(a("9dea"),a("2877")),f=a("6544"),v=a.n(f),d=a("a523"),m=a("0fd9"),b=Object(u["a"])(c,i,o,!1,null,"1ff274f3",null),h=b.exports;v()(b,{VContainer:d["a"],VRow:m["a"]});var p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"gameinfo"},[a("v-container",{staticClass:"gameinfobox"},[a("v-container",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block text-left"},[a("table",[a("tr",[a("td",{staticClass:"titles"},[t._v("Eltelt idő:")]),a("td",{staticClass:"values"},[t._v(t._s(t.countString))])]),a("tr",[a("td",{staticClass:"titles"},[t._v("Hibapont:")]),a("td",{staticClass:"values"},[t._v(t._s(t.failedTries))])]),a("tr",[a("td",{staticClass:"titles"},[t._v("Kitöltött mezők:")]),a("td",{staticClass:"values"},[t._v(t._s(t.filledFields)+"/81")])])])]),a("v-container",{staticClass:"d-inline-block d-sm-inline-block d-md-none justify-center py-0 my-0 px-auto mx-auto"},[a("table",[a("tr",[a("td",{staticClass:"text-xs-center cellsize"},[a("v-icon",[t._v("mdi-alert-circle-outline")])],1),a("td",{staticClass:"text-xs-center cellsize"},[a("v-icon",[t._v("mdi-av-timer")])],1),a("td",{staticClass:"text-xs-center cellsize"},[a("v-icon",[t._v("mdi-check")])],1)]),a("tr",[a("td",{staticClass:"text-xs-center cellsize"},[t._v(t._s(t.failedTries))]),a("td",{staticClass:"text-xs-center cellsize"},[t._v(t._s(t.countString))]),a("td",{staticClass:"text-xs-center cellsize"},[t._v(t._s(t.filledFields)+"/81")])])])])],1),a("br"),a("v-container",{staticClass:"py-0 my-0"},[a("v-row",[a("v-col",[a("v-btn",{attrs:{icon:"",elevation:"20",color:"black"},on:{click:function(e){return t.pauseGame()}}},[a("v-icon",[t._v(t._s(t.$store.state.gamePaused?"mdi-play":"mdi-pause"))])],1)],1),a("v-col",[a("SubmitReload")],1)],1)],1)],1)},g=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{slot:"activator",icon:"",elevation:"20",color:"black"},slot:"activator"},r),[a("v-icon",[t._v("mdi-refresh")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{color:"rgba(234, 234, 250)"}},[a("v-card-title",[a("h4",[t._v("Megerősítés")])]),a("v-card-text",[a("b",[a("v-spacer"),a("v-divider"),a("br"),t._v(" Biztosan új táblát szeretnél? "),a("v-spacer"),t._v(" A jelenlegi eredményed el fog veszni. "),a("v-spacer")],1)]),a("v-card-actions",[a("v-btn",{attrs:{large:"",width:"40%",color:"rgb(51,102,187)",elevation:"20"},on:{click:function(e){t.$store.state.menuStatus=1}}},[t._v(" Igen "),a("v-spacer"),a("v-icon",[t._v("mdi-check")])],1),a("v-spacer"),a("v-btn",{attrs:{large:"",width:"40%",elevation:"20"},on:{click:function(e){t.dialog=!1}}},[t._v(" Nem "),a("v-spacer"),a("v-icon",[t._v("mdi-close")])],1)],1)],1)],1)},k=[],_={data:function(){return{dialog:!1}}},x=_,y=(a("6ece"),a("8336")),C=a("b0af"),w=a("99d9"),S=a("169a"),I=a("ce7e"),F=a("132d"),B=a("2fa4"),P=Object(u["a"])(x,$,k,!1,null,"56ed49f1",null),N=P.exports;v()(P,{VBtn:y["a"],VCard:C["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VDialog:S["a"],VDivider:I["a"],VIcon:F["a"],VSpacer:B["a"]});var T={components:{SubmitReload:N},data:function(){return{reload:!1}},computed:{countString:function(){var t=this.$store.state.counter,e=0,a=0;return e=parseInt(t/60),a=t%60<10?"0".concat(t%60):t%60,e+":"+a},failedTries:function(){return this.$store.state.failCounter},filledFields:function(){return this.$store.state.filledFields}},methods:{pauseGame:function(){if(0==this.$store.state.gamePaused){var t=document.getElementById("sudokutable");t.style.visibility="hidden",this.$store.state.gamePaused=!0,this.saveGame()}else{var e=document.getElementById("sudokutable");e.style.visibility="visible",this.$store.state.gamePaused=!1,localStorage.setItem("tableState","")}},saveGame:function(){for(var t="",e=0;e<9;e++)for(var a=0;a<9;a++){var r=document.getElementById("input_row".concat(e+1,"col").concat(a+1)).disabled,s="".concat(e,",").concat(a,",").concat(""==this.$store.state.table[e][a]?null:this.$store.state.table[e][a],",").concat(r);t+=t.length?";"+s:s}t+="/".concat(this.$store.state.counter,"/").concat(this.$store.state.failCounter),localStorage.setItem("tableState",t)}}},V=T,O=(a("ef8a"),a("62ad")),j=Object(u["a"])(V,p,g,!1,null,"2e3089b5",null),z=j.exports;v()(j,{VBtn:y["a"],VCol:O["a"],VContainer:d["a"],VIcon:F["a"],VRow:m["a"]});var E={name:"GameEngine",components:{GameBoard:h,GameInfo:z},data:function(){return{timer:null}},methods:{setDifficulty:function(t){var e=this;this.$store.state.menuStatus=2,this.$store.state.difficulty=t,setTimeout((function(){e.$store.state.menuStatus=3,e.initTable(),e.timer=setInterval((function(){return e.countTime()}),1e3)}),1500)},isTableStateInStorage:function(){return null!=localStorage.getItem("tableState")&&""!=localStorage.getItem("tableState")},initTable:function(){for(var t=0;t<9;t++)this.resetRow(t);window.clearTimeout(this.timer);var e=0,a=0;this.$store.state.filledFields=81,this.$store.state.failCounter=0,this.$store.state.counter=0,this.$store.state.gamePaused=!1;while(e<9){var r=0;while(a<9&&r<5){var s=this.getPossibleNumbers(e,a);if(0==s.length)this.resetRow(e),a=0,r++,5==r&&e--;else{var n=Math.floor(Math.random()*s.length),i=s[n];this.$store.state.table[e][a]=i,a++}}a=0,e++}this.removeNumbers(58+2*this.$store.state.difficulty)},initCellStyles:function(){for(var t=0;t<9;t++)for(var e=0;e<9;e++){var a=document.getElementById("input_row".concat(t+1,"col").concat(e+1));""!=this.$store.state.table[t][e]&&(a.disabled=!0)}},removeNumbers:function(t){var e=this,a=0,r=0,s=0;while(r<9){for(var n=0;n<9;n++)if(""!=this.$store.state.table[r][n]&&a<t&&Math.floor(10*Math.random())+1+s>=5&&(this.$store.state.table[r][n]="",a++,this.$store.state.filledFields--,a==t))break;r++,9==r&&a<t&&(r=0,s++)}setTimeout((function(){return e.initCellStyles()}),1)},countTime:function(){this.$store.state.filledFields<81&&0==this.$store.state.gamePaused&&this.$store.state.counter++},resetRow:function(t){for(var e=0;e<9;e++)this.$store.state.table[t][e]=""},getPossibleNumbers:function(t,e){for(var a=this,r=[1,2,3,4,5,6,7,8,9],s=function(s){-1!==r.indexOf(a.$store.state.table[t][s])&&s!=e&&(r=r.filter((function(e){return e!==a.$store.state.table[t][s]}))),-1!==r.indexOf(a.$store.state.table[s][e])&&s!=t&&(r=r.filter((function(t){return t!==a.$store.state.table[s][e]})))},n=0;n<9;n++)s(n);var i=this.getNumbersFromBlock(t,e);return i.forEach((function(t){-1!==r.indexOf(t)&&(r=r.filter((function(e){return e!==t})))})),r},getNumbersFromBlock:function(t,e){var a=this.getBlockNumber(t,e),r=0,s=0,n=0,i=0,o=[];switch(a){case 1:n=3,i=3;break;case 2:n=3,s=3,i=6;break;case 3:n=3,s=6,i=9;break;case 4:r=3,n=6,i=3;break;case 5:r=3,n=6,s=3,i=6;break;case 6:r=3,n=6,s=6,i=9;break;case 7:r=6,n=9,i=3;break;case 8:r=6,n=9,s=3,i=6;break;case 9:r=6,n=9,s=6,i=9;break}for(var l=r;l<n;l++)for(var c=s;c<i;c++)o.includes(this.$store.state.table[l][c])||o.push(this.$store.state.table[l][c]);return o},getBlockNumber:function(t,e){if(t<3){if(e<3)return 1;if(e>=3&&e<6)return 2;if(e>=6)return 3}else if(t>=3&&t<6){if(e<3)return 4;if(e>=3&&e<6)return 5;if(e>=6)return 6}else if(t>=6){if(e<3)return 7;if(e>=3&&e<6)return 8;if(e>=6)return 9}},initTableFromStorage:function(){var t=this;this.$store.state.menuStatus=2,setTimeout((function(){t.$store.state.menuStatus=3,t.loadTable(),t.timer=setInterval((function(){return t.countTime()}),1e3)}),1500)},loadTable:function(){var t=this;this.$store.state.menuStatus=3;var e=localStorage.getItem("tableState"),a=e.split("/"),r=a[0].split(";");this.$store.state.counter=a[1],this.$store.state.failCounter=a[2],this.$store.state.filledFields=0;for(var s=0;s<r.length;s++){var n=r[s].split(",");null!=n[2]&&"null"!=n[2]&&(this.$store.state.filledFields++,this.$store.state.table[n[0]][n[1]]=n[2])}localStorage.setItem("tableState",""),setTimeout((function(){return t.initLoadedCellStyles(r)}),1)},initLoadedCellStyles:function(t){console.log(t);for(var e=0;e<t.length;e++){var a=t[e].split(","),r=document.getElementById("input_row".concat(parseInt(a[0])+1,"col").concat(parseInt(a[1])+1));r.disabled=JSON.parse(a[3])}}}},G=E,R=(a("7800"),a("7496")),M=a("490a"),A=Object(u["a"])(G,s,n,!1,null,null,null),D=A.exports;v()(A,{VApp:R["a"],VBtn:y["a"],VContainer:d["a"],VDivider:I["a"],VIcon:F["a"],VProgressCircular:M["a"],VSpacer:B["a"]});var J=a("8c4f");r["a"].use(J["a"]);var K=[],L=new J["a"]({mode:"history",base:"/",routes:K}),H=L,q=a("f309");r["a"].use(q["a"]);var Q=new q["a"]({}),U=a("2f62");r["a"].use(U["a"]);var W=new U["a"].Store({state:{menuStatus:0,difficulty:0,table:[["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],counter:0,failCounter:0,filledFields:81,gamePaused:!1},mutations:{},actions:{},getters:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:H,vuetify:Q,store:W,render:function(t){return t(D)}}).$mount("#gameengine")},"6ece":function(t,e,a){"use strict";a("f218")},7585:function(t,e,a){},7800:function(t,e,a){"use strict";a("eaea")},"9dea":function(t,e,a){"use strict";a("7585")},eaea:function(t,e,a){},ef8a:function(t,e,a){"use strict";a("55a9")},f218:function(t,e,a){}});
//# sourceMappingURL=app.47be6638.js.map