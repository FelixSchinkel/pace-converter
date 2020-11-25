(function(e){function t(t){for(var a,c,s=t[0],o=t[1],l=t[2],p=0,d=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/pace-converter/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2cb2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-toolbar-title",{staticClass:"mx-auto"},[e._v("The Converter")]),n("v-btn",{attrs:{icon:""},on:{click:e.toogleDarkTheme}},[e.$vuetify.theme.dark?n("v-icon",[e._v("mdi-brightness-7")]):n("v-icon",[e._v("mdi-brightness-4")])],1)],1),n("v-main",[n("v-container",[n("ConvertPace")],1),n("v-container",[n("Intervall2Pace")],1)],1)],1)},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("Pace converter")]),n("v-card-subtitle",[e._v("Just type your mile or km pace into the form and let the magic happen")]),n("v-card-text",[n("v-row",[n("PaceInput",{attrs:{label:"pace/mile"},on:{focus:function(t){return e.setConvertionDirection(!0)}},model:{value:e.paceMile,callback:function(t){e.paceMile=t},expression:"paceMile"}}),n("v-icon",{attrs:{large:""}},[e._v("mdi-compare-horizontal")]),n("PaceInput",{attrs:{label:"pace/km"},on:{focus:function(t){return e.setConvertionDirection(!1)}},model:{value:e.paceKm,callback:function(t){e.paceKm=t},expression:"paceKm"}})],1),e.paceKmInSeconds?n("v-row",{staticClass:"mx-0"},[n("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("1k: "+e._s(e.pace2string(e.paceKmInSeconds,!0)))]),n("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("5k: "+e._s(e.pace2string(5*e.paceKmInSeconds,!0)))]),n("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("10k: "+e._s(e.pace2string(10*e.paceKmInSeconds,!0)))]),n("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("Half Marathon: "+e._s(e.pace2string(21.1*e.paceKmInSeconds,!0)))]),n("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("Marathon: "+e._s(e.pace2string(42.2*e.paceKmInSeconds,!0)))])],1):e._e()],1)],1)},s=[],o=(n("ac1f"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-text-field",{staticClass:"mx-4",attrs:{label:e.label,rules:e.inputRules,type:"tel",maxlength:"4",clearable:""},on:{focus:function(t){return e.$emit("focus",t)}},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}})}),l=[],u=(n("caad"),n("fb6a"),n("2532"),n("e4fd")),p=n.n(u),d=/^$|^([0-9][.,][0-5][0-9])/,m={props:{label:String,value:String},setup:function(e,t){var n=[function(e){return d.test(e)||"Invalid Time Format use Minute.Seconds"}],a=Object(u["ref"])(e.value);return Object(u["watch"])((function(){return e.value}),(function(e){return a.value=e})),Object(u["watchEffect"])((function(){var e=a.value;3!==e.length||isNaN(e)||e.includes(".")||(a.value=e.slice(0,1)+"."+e.slice(1)),d.test(a.value)&&t.emit("input",a.value)})),{data:a,inputRules:n}}},v=m,f=n("2877"),h=n("6544"),b=n.n(h),x=n("8654"),I=Object(f["a"])(v,o,l,!1,null,null,null),_=I.exports;b()(I,{VTextField:x["a"]});var y=/^([0-9][.,][0-5][0-9])$/,k={components:{PaceInput:_},data:function(){return{convDirMiles2Km:!0,paceMile:"",paceKm:"",paceKmInSeconds:"",inputRules:[function(e){return y.test(e)||"Invalid Time Format use M.SS"}]}},watch:{paceMile:function(){this.convDirMiles2Km&&(this.paceKm=this.convertPace())},paceKm:function(){this.convDirMiles2Km||(this.paceMile=this.convertPace())}},methods:{setConvertionDirection:function(e){this.convDirMiles2Km=e},convertPace:function(){var e=!0===this.convDirMiles2Km?this.paceMile:this.paceKm;if(!y.test(e))return"";var t=e.split(/[.,]/),n=60*parseInt(t[0])+parseInt(t[1]),a=.62137119223733,i=!0===this.convDirMiles2Km?a:1/a,r=Math.round(n*i);this.convDirMiles2Km?this.paceKmInSeconds=r:this.paceKmInSeconds=n;var c=this.pace2string(r);return c},pace2string:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return"";e=Math.round(e);var n=Math.floor(e/60),a=e-60*n;a<10&&(a="0"+a);var i=n+"."+a;if(t)if(n>=60){var r=Math.floor(e/60/60);i=r+"h"+n%60+"m"+a+"s"}else i+=" min";return i}}},g=k,M=(n("bb15"),n("b0af")),S=n("99d9"),C=n("cc20"),w=n("132d"),K=n("0fd9"),O=Object(f["a"])(g,c,s,!1,null,"c4a0c4ea",null),V=O.exports;b()(O,{VCard:M["a"],VCardSubtitle:S["a"],VCardText:S["b"],VCardTitle:S["c"],VChip:C["a"],VIcon:w["a"],VRow:K["a"]});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("Intervall Pace")]),n("v-card-subtitle",[e._v("Define Intervall distance + time -> get Pace per km")]),n("v-card-text",[n("v-row",[n("v-text-field",{staticClass:"mx-4",attrs:{label:"distance",type:"tel"},scopedSlots:e._u([{key:"append-outer",fn:function(){return[n("DropDownSelect",{attrs:{items:e.distanceUnitOptions},model:{value:e.distanceUnit,callback:function(t){e.distanceUnit=t},expression:"distanceUnit"}})]},proxy:!0}]),model:{value:e.distance,callback:function(t){e.distance=t},expression:"distance"}}),n("v-icon",[e._v("mdi-plus")]),n("v-text-field",{staticClass:"mx-4",attrs:{label:"time"},scopedSlots:e._u([{key:"append-outer",fn:function(){return[n("DropDownSelect",{attrs:{items:e.timeUnitOptions},model:{value:e.timeUnit,callback:function(t){e.timeUnit=t},expression:"timeUnit"}})]},proxy:!0}]),model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}),n("v-icon",[e._v("mdi-equal")]),n("v-text-field",{staticClass:"mx-4",attrs:{label:"pace/km",readonly:""},model:{value:e.pace,callback:function(t){e.pace=t},expression:"pace"}})],1)],1)],1)},D=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.nextItem}},[e._v(e._s(e.selectedItem))])},T=[],U={props:{items:Array,value:String},data:function(){return{displayedItemIndex:0}},computed:{selectedItem:function(){return this.$emit("input",this.items[this.displayedItemIndex]),this.items[this.displayedItemIndex]}},methods:{nextItem:function(){this.displayedItemIndex>=this.items.length-1?this.displayedItemIndex=0:this.displayedItemIndex++}}},$=U,E=n("8336"),R=Object(f["a"])($,j,T,!1,null,null,null),A=R.exports;b()(R,{VBtn:E["a"]});var F=/^([0-9][.][0-5][0-9])$/,B={components:{DropDownSelect:A},data:function(){return{distance:"",distanceUnit:"m",distanceUnitOptions:["m","km","mi"],time:"",timeUnit:"ms",timeUnitOptions:["seconds","minutes + seconds"]}},computed:{pace:function(){if((this.distance||this.time)&&("minutes + seconds"!==this.timeUnit||F.test(this.time))){var e,t,n;switch(this.distanceUnit){case"km":e=1e3*this.distance;break;case"m":e=this.distance;break;case"mi":e=1609.344*this.distance;break;default:}if("minutes + seconds"===this.timeUnit)this.time.includes(".")?(n=this.time.split("."),0===n[1].length&&(n[1]="0")):n=[this.time,0],t=parseInt(60*n[0])+parseInt(n[1]);else t=this.time;var a=Math.floor(1e3*t/e);return Math.floor(a/60)+"m"+a%60+"s ("+a+" seconds)"}}}},J=B,N=Object(f["a"])(J,P,D,!1,null,null,null),q=N.exports;b()(N,{VCard:M["a"],VCardSubtitle:S["a"],VCardText:S["b"],VCardTitle:S["c"],VIcon:w["a"],VRow:K["a"],VTextField:x["a"]});var z={name:"App",components:{ConvertPace:V,Intervall2Pace:q},mounted:function(){var e=this,t=window.matchMedia("(prefers-color-scheme: dark)").matches;t&&this.setColorScheme(t),window.matchMedia("(prefers-color-scheme: dark)").addListener((function(t){var n=t.matches;return e.setColorScheme(n)}))},methods:{toogleDarkTheme:function(){this.setColorScheme(!this.$vuetify.theme.dark)},setColorScheme:function(e){this.$vuetify.theme.dark=e,localStorage.setItem("darkMode",this.$vuetify.theme.dark)}}},H=z,L=n("7496"),G=n("40dc"),Q=n("a523"),W=n("f6c4"),X=n("2a7f"),Y=Object(f["a"])(H,i,r,!1,null,null,null),Z=Y.exports;b()(Y,{VApp:L["a"],VAppBar:G["a"],VBtn:E["a"],VContainer:Q["a"],VIcon:w["a"],VMain:W["a"],VToolbarTitle:X["a"]});var ee=n("f309");a["default"].use(ee["a"]);var te=new ee["a"]({});a["default"].config.productionTip=!1,a["default"].use(p.a),new a["default"]({vuetify:te,render:function(e){return e(Z)}}).$mount("#app")},bb15:function(e,t,n){"use strict";var a=n("2cb2"),i=n.n(a);i.a}});
//# sourceMappingURL=app.18916172.js.map