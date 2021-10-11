(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{597:function(t,e,o){"use strict";var a=o(5),r=o(20),n=o(0),i=(o(4),o(506)),c=o(543),l=o(654),s=o(655),p=o(536),d=o(18),u=["className","component"];var b=o(595),g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.defaultTheme,o=Object(c.a)("div")(l.a),b=n.forwardRef((function(t,n){var c=Object(p.a)(e),l=Object(s.a)(t),b=l.className,g=l.component,v=void 0===g?"div":g,m=Object(r.a)(l,u);return Object(d.jsx)(o,Object(a.a)({as:v,ref:n,className:Object(i.a)(b,"MuiBox-root"),theme:c},m))}));return b}({defaultTheme:Object(b.a)()});e.a=g},598:function(t,e,o){"use strict";var a=o(164),r=o(20),n=o(5),i=o(0),c=(o(4),o(506)),l=o(656),s=o(507),p=o(505),d=o(657),u=o(658);function b(t){return Object(d.a)("MuiToolbar",t)}Object(u.a)("MuiToolbar",["root","gutters","regular","dense"]);var g=o(18),v=["className","component","disableGutters","variant"],m=Object(p.a)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[e.root,!o.disableGutters&&e.gutters,e[o.variant]]}})((function(t){var e=t.theme,o=t.ownerState;return Object(n.a)({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&Object(a.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),"dense"===o.variant&&{minHeight:48})}),(function(t){var e=t.theme;return"regular"===t.ownerState.variant&&e.mixins.toolbar})),h=i.forwardRef((function(t,e){var o=Object(s.a)({props:t,name:"MuiToolbar"}),a=o.className,i=o.component,p=void 0===i?"div":i,d=o.disableGutters,u=void 0!==d&&d,h=o.variant,j=void 0===h?"regular":h,O=Object(r.a)(o,v),f=Object(n.a)({},o,{component:p,disableGutters:u,variant:j}),x=function(t){var e=t.classes,o={root:["root",!t.disableGutters&&"gutters",t.variant]};return Object(l.a)(o,b,e)}(f);return Object(g.jsx)(m,Object(n.a)({as:p,className:Object(c.a)(x.root,a),ref:e,ownerState:f},O))}));e.a=h},599:function(t,e,o){"use strict";var a=o(164),r=o(20),n=o(5),i=o(0),c=(o(4),o(506)),l=o(656),s=o(651),p=o(505),d=o(507),u=o(678),b=o(510),g=o(657),v=o(658);function m(t){return Object(g.a)("MuiIconButton",t)}var h=Object(v.a)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),j=o(18),O=["edge","children","className","color","disabled","disableFocusRipple","size"],f=Object(p.a)(u.a,{name:"MuiIconButton",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[e.root,"default"!==o.color&&e["color".concat(Object(b.a)(o.color))],o.edge&&e["edge".concat(Object(b.a)(o.edge))],e["size".concat(Object(b.a)(o.size))]]}})((function(t){var e=t.theme,o=t.ownerState;return Object(n.a)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(s.a)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})}),(function(t){var e=t.theme,o=t.ownerState;return Object(n.a)({},"inherit"===o.color&&{color:"inherit"},"inherit"!==o.color&&"default"!==o.color&&{color:e.palette[o.color].main,"&:hover":{backgroundColor:Object(s.a)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"small"===o.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===o.size&&{padding:12,fontSize:e.typography.pxToRem(28)},Object(a.a)({},"&.".concat(h.disabled),{backgroundColor:"transparent",color:e.palette.action.disabled}))})),x=i.forwardRef((function(t,e){var o=Object(d.a)({props:t,name:"MuiIconButton"}),a=o.edge,i=void 0!==a&&a,s=o.children,p=o.className,u=o.color,g=void 0===u?"default":u,v=o.disabled,h=void 0!==v&&v,x=o.disableFocusRipple,y=void 0!==x&&x,w=o.size,R=void 0===w?"medium":w,S=Object(r.a)(o,O),z=Object(n.a)({},o,{edge:i,color:g,disabled:h,disableFocusRipple:y,size:R}),k=function(t){var e=t.classes,o=t.disabled,a=t.color,r=t.edge,n=t.size,i={root:["root",o&&"disabled","default"!==a&&"color".concat(Object(b.a)(a)),r&&"edge".concat(Object(b.a)(r)),"size".concat(Object(b.a)(n))]};return Object(l.a)(i,m,e)}(z);return Object(j.jsx)(f,Object(n.a)({className:Object(c.a)(k.root,p),centerRipple:!0,focusRipple:!y,disabled:h,ref:e,ownerState:z},S,{children:s}))}));e.a=x},600:function(t,e,o){"use strict";var a=o(20),r=o(5),n=o(0),i=(o(4),o(506)),c=o(655),l=o(656),s=o(505),p=o(507),d=o(510),u=o(657),b=o(658);function g(t){return Object(u.a)("MuiTypography",t)}Object(b.a)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=o(18),m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],h=Object(s.a)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[e.root,o.variant&&e[o.variant],"inherit"!==o.align&&e["align".concat(Object(d.a)(o.align))],o.noWrap&&e.noWrap,o.gutterBottom&&e.gutterBottom,o.paragraph&&e.paragraph]}})((function(t){var e=t.theme,o=t.ownerState;return Object(r.a)({margin:0},o.variant&&e.typography[o.variant],"inherit"!==o.align&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})})),j={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},O={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=n.forwardRef((function(t,e){var o=Object(p.a)({props:t,name:"MuiTypography"}),n=function(t){return O[t]||t}(o.color),s=Object(c.a)(Object(r.a)({},o,{color:n})),u=s.align,b=void 0===u?"inherit":u,f=s.className,x=s.component,y=s.gutterBottom,w=void 0!==y&&y,R=s.noWrap,S=void 0!==R&&R,z=s.paragraph,k=void 0!==z&&z,B=s.variant,M=void 0===B?"body1":B,N=s.variantMapping,T=void 0===N?j:N,C=Object(a.a)(s,m),I=Object(r.a)({},s,{align:b,color:n,className:f,component:x,gutterBottom:w,noWrap:S,paragraph:k,variant:M,variantMapping:T}),W=x||(k?"p":T[M]||j[M])||"span",G=function(t){var e=t.align,o=t.gutterBottom,a=t.noWrap,r=t.paragraph,n=t.variant,i=t.classes,c={root:["root",n,"inherit"!==t.align&&"align".concat(Object(d.a)(e)),o&&"gutterBottom",a&&"noWrap",r&&"paragraph"]};return Object(l.a)(c,g,i)}(I);return Object(v.jsx)(h,Object(r.a)({as:W,ref:e,ownerState:I,className:Object(i.a)(G.root,f)},C))}));e.a=f},688:function(t,e,o){"use strict";o.r(e),o.d(e,"Header",(function(){return w}));var a=o(20),r=o(5),n=o(0),i=(o(4),o(506)),c=o(656),l=o(505),s=o(507),p=o(510),d=o(694),u=o(657),b=o(658);function g(t){return Object(u.a)("MuiAppBar",t)}Object(b.a)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var v=o(18),m=["className","color","enableColorOnDark","position"],h=Object(l.a)(d.a,{name:"MuiAppBar",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[e.root,e["position".concat(Object(p.a)(o.position))],e["color".concat(Object(p.a)(o.color))]]}})((function(t){var e=t.theme,o=t.ownerState,a="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return Object(r.a)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===o.position&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===o.position&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===o.position&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"static"===o.position&&{position:"static"},"relative"===o.position&&{position:"relative"},"default"===o.color&&{backgroundColor:a,color:e.palette.getContrastText(a)},o.color&&"default"!==o.color&&"inherit"!==o.color&&"transparent"!==o.color&&{backgroundColor:e.palette[o.color].main,color:e.palette[o.color].contrastText},"inherit"===o.color&&{color:"inherit"},"dark"===e.palette.mode&&!o.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===o.color&&Object(r.a)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"}))})),j=n.forwardRef((function(t,e){var o=Object(s.a)({props:t,name:"MuiAppBar"}),n=o.className,l=o.color,d=void 0===l?"primary":l,u=o.enableColorOnDark,b=void 0!==u&&u,j=o.position,O=void 0===j?"fixed":j,f=Object(a.a)(o,m),x=Object(r.a)({},o,{color:d,position:O,enableColorOnDark:b}),y=function(t){var e=t.color,o=t.position,a=t.classes,r={root:["root","color".concat(Object(p.a)(e)),"position".concat(Object(p.a)(o))]};return Object(c.a)(r,g,a)}(x);return Object(v.jsx)(h,Object(r.a)({square:!0,component:"header",ownerState:x,elevation:4,className:Object(i.a)(y.root,n,"fixed"===O&&"mui-fixed"),ref:e},f))})),O=o(597),f=o(598),x=o(600),y=o(599);function w(){return Object(v.jsx)(O.a,{sx:{flexGrow:1},children:Object(v.jsx)(j,{position:"static",children:Object(v.jsxs)(f.a,{children:[Object(v.jsx)(y.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}}),Object(v.jsx)(x.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"NPM-registry"})]})})})}}}]);