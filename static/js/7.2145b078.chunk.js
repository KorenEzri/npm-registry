(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{527:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(96),a=n(170);var c,i={searches:[]},o=(c={name:"search",initialState:i,reducers:{addToHistory:function(e,t){e.searches.push(t.payload)},removeFromHistory:function(e,t){e.searches.length>1&&e.searches.pop()}}},Object(r.b)(c)),s=(o.actions,function(){var e;return e={key:o.name,reducer:o.reducer},Object(a.b)(e),{actions:o.actions}})},558:function(e,t,n){e.exports=n(264)},597:function(e,t,n){"use strict";var r=n(5),a=n(20),c=n(0),i=(n(4),n(506)),o=n(543),s=n(654),u=n(655),d=n(536),l=n(18),p=["className","component"];var v=n(595),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=Object(o.a)("div")(s.a),v=c.forwardRef((function(e,c){var o=Object(d.a)(t),s=Object(u.a)(e),v=s.className,f=s.component,h=void 0===f?"div":f,b=Object(a.a)(s,p);return Object(l.jsx)(n,Object(r.a)({as:h,ref:c,className:Object(i.a)(v,"MuiBox-root"),theme:o},b))}));return v}({defaultTheme:Object(v.a)()});t.a=f},679:function(e,t,n){"use strict";n.r(t),n.d(t,"Inputs",(function(){return E}));var r=n(558),a=n.n(r);function c(e,t,n,r,a,c,i){try{var o=e[c](i),s=o.value}catch(u){return void n(u)}o.done?t(s):Promise.resolve(s).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){c(i,r,a,o,s,"next",e)}function s(e){c(i,r,a,o,s,"throw",e)}o(void 0)}))}}var o=n(509),s=n(166),u=n(0),d=n(68),l=n(597),p=n(681),v=n(164),f=n(20),h=n(5),b=(n(4),n(516)),m=n(528),j=n(655),O=n(652),x=n(505),g=n(507),y=n(18),w=["component","direction","spacing","divider","children"];function k(e,t){var n=u.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,a){return e.push(r),a<n.length-1&&e.push(u.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}var T=Object(x.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r=Object(h.a)({display:"flex"},Object(b.b)({theme:n},t.direction,(function(e){return{flexDirection:e}})));if(t.spacing){var a=Object(m.a)(n),c=Object.keys(n.breakpoints.values).reduce((function(e,n){return null==t.spacing[n]&&null==t.direction[n]||(e[n]=!0),e}),{}),i=Object(b.d)({values:t.direction,base:c}),o=Object(b.d)({values:t.spacing,base:c});r=Object(O.a)(r,Object(b.b)({theme:n},o,(function(e,n){return{"& > :not(style) + :not(style)":Object(v.a)({margin:0},"margin".concat((r=n?i[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),Object(m.d)(a,e))};var r})))}return r})),R=u.forwardRef((function(e,t){var n=Object(g.a)({props:e,name:"MuiStack"}),r=Object(j.a)(n),a=r.component,c=void 0===a?"div":a,i=r.direction,o=void 0===i?"column":i,s=r.spacing,u=void 0===s?0:s,d=r.divider,l=r.children,p=Object(f.a)(r,w),v={direction:o,spacing:u};return Object(y.jsx)(T,Object(h.a)({as:c,ownerState:v,ref:t},p,{children:d?k(l,d):l}))})),S=n(693),N="".concat("http://localhost:8080","/api/v1");function C(e){return P.apply(this,arguments)}function P(){return P=i(a.a.mark((function e(t){var n,r,c,i,o,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"GET",r=s.length>2?s[2]:void 0,c={method:n,mode:"cors",cache:"no-cache"},r&&(c.body=JSON.stringify(r)),c.headers=new Headers({"Content-Type":"application/json; charset=utf-8"}),e.next=7,fetch(N+t,c);case 7:return i=e.sent,e.next=10,i.json();case 10:if(o=e.sent,200!==i.status){e.next=13;break}return e.abrupt("return",o);case 13:throw o;case 14:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}var I=n(527);function E(e){var t=u.useState({name:!1,version:!1}),n=Object(o.a)(t,2),r=n[0],c=(n[1],u.useState({name:"Package name (IE puppeteer)",version:"The symantic version (IE: 1.0.1)"})),s=Object(o.a)(c,2),v=s[0],f=(s[1],u.useRef(null)),h=u.useRef(null),b=e.setNpmPackage,m=Object(I.b)().actions.addToHistory,j=Object(d.c)(),O=function(){var e=i(a.a.mark((function e(){var t,n,r,c,i,o,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f&&h){e.next=2;break}return e.abrupt("return");case 2:return r=null===(t=f.current)||void 0===t?void 0:t.value,c=null===(n=h.current)||void 0===n?void 0:n.value,e.prev=4,e.next=7,C("/package/getDependencies/".concat(r,"/").concat(c));case 7:(i=e.sent)&&r&&c&&(o={name:r,version:c,dependencies:i.map((function(e,t){return e.id=t,e}))},b(o),j(m(o))),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),"Unexpected token N in JSON at position 0"===(s=e.t0.message)?b({name:r,version:c,dependencies:[{name:"No dependencies",version:"",id:1}]}):console.log(s);case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)(H,{children:[Object(y.jsx)(l.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!1,autoComplete:"off",children:Object(y.jsxs)("div",{children:[Object(y.jsx)(p.a,{error:r.name,id:"filled-error-helper-text",label:"Package name",helperText:v.name,variant:"filled",inputRef:f}),Object(y.jsx)(p.a,{error:r.version,id:"filled-error-helper-text",label:"Package version",helperText:v.version,variant:"filled",inputRef:h})]})}),Object(y.jsx)(J,{children:Object(y.jsx)(R,{spacing:2,direction:"row",children:Object(y.jsx)(S.a,{variant:"contained",onClick:O,children:"Go"})})})]})}var H=s.b.div.withConfig({componentId:"sc-141u402-0"})(["display:flex;@media (max-width:768px){display:unset;}"]),J=s.b.div.withConfig({componentId:"sc-141u402-1"})(["margin-top:15px;margin-left:5px;"])}}]);