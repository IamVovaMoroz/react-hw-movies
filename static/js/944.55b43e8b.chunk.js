"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[944],{3944:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r,a=n(5861),c=n(9439),i=n(4687),u=n.n(i),s=n(2791),o=n(7596),p=(n(5462),n(4952)),h=n(8402),f=n(168),d=n(5706).Z.div(r||(r=(0,f.Z)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"]))),l=n(184);var v=function(){return(0,l.jsx)(d,{children:(0,l.jsx)(h.s5,{strokeColor:"#37b2d9",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},m=n(1087);var g=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),n=t[0],r=t[1],i=(0,s.useState)(!0),h=(0,c.Z)(i,2),f=h[0],d=h[1],g=(0,s.useState)(null),x=(0,c.Z)(g,2),w=x[0],k=x[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,p.Hg)();case 4:t=e.sent,r(t.results),d(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),k(e.t0.message),o.Am.error("Oops, something went wrong."),d(!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{children:[f&&(0,l.jsx)(v,{}),w&&(0,l.jsx)(o.Ix,{}),(0,l.jsx)("h2",{children:"Trending Movies"}),(0,l.jsx)("ul",{children:n.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(m.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},4952:function(e,t,n){n.d(t,{Hg:function(){return s},TP:function(){return p},XT:function(){return o},zv:function(){return f}});var r=n(5861),a=n(4687),c=n.n(a),i=n(1243),u="a148ed5961285512fd3954af576af4a0",s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:u,language:"en-US"},headers:{Accept:"application/json"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:u,language:"en-US",page:1,include_adult:!1,query:t},headers:{Accept:"application/json"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function p(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US&api_key=").concat(u),e.prev=1,e.next=4,i.Z.get(n,{headers:{Accept:"application/json"}});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),e.prev=1,e.next=4,i.Z.get(n,{params:{api_key:u,language:"en-US"},headers:{Accept:"application/json"}});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=944.55b43e8b.chunk.js.map