"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,i,c,o,s,p,u,f=e(9439),d=e(7689),l=e(2791),h=e(4952),g=e(8721),m=(e(7665),e(168)),v=e(5706),x=v.Z.div(r||(r=(0,m.Z)(["\n  padding-right: 15px;\n  padding-left: 15px;\n"]))),w=v.Z.div(a||(a=(0,m.Z)(["\n  font-family: Helvetica Neue;\n  font-weight: 500;\n  font-size: 1.25rem;\n  letter-spacing: 0;\n  line-height: 1.2;\n  padding-left: 9px;\n  text-transform: uppercase;\n  margin-top: 10px;\n  padding-right: 10px;\n  margin-bottom: 1em;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n\n  &::before {\n    position: absolute;\n    content: '';\n    height: 3px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    background-color: blue;\n    transform: scaleX(0);\n    transform-origin: right;\n    transition: transform 0.3s;\n  }\n\n  &:hover::before {\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n"]))),Z=v.Z.ul(i||(i=(0,m.Z)(["\n  list-style: none;\n  padding: 0px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  /* justify-content: space-between; */\n"]))),b=v.Z.li(c||(c=(0,m.Z)(["\n  width: 170px;\n"]))),j=(v.Z.div(o||(o=(0,m.Z)(["\n  height: 255px;\n  width: 177px;\n  overflow: hidden;\n"]))),v.Z.img(s||(s=(0,m.Z)(["\n  display: block;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2); \n"])))),y=v.Z.p(p||(p=(0,m.Z)(["\n  font-size: 14px;\n  font-weight: 600;\n"]))),k=v.Z.p(u||(u=(0,m.Z)(["\n  font-size: 10px;\n  font-weight: 400;\n"]))),_=e(184);var S=function(){var n=(0,d.UO)().movieId,t=(0,l.useState)([]),e=(0,f.Z)(t,2),r=e[0],a=e[1],i=(0,l.useState)(!0),c=(0,f.Z)(i,2),o=c[0],s=c[1],p=(0,l.useState)(null),u=(0,f.Z)(p,2),m=u[0],v=u[1];return(0,l.useEffect)((function(){n&&(s(!0),(0,h.zv)(n).then((function(n){a(n.cast)})).catch((function(n){v(n)})).finally((function(){s(!1)})))}),[n]),(0,_.jsx)("div",{children:o?(0,_.jsx)("span",{className:"loader"}):(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(x,{children:[m&&(0,_.jsx)("p",{children:m}),(0,_.jsx)(w,{children:"Cast and Crew"}),(0,_.jsx)(Z,{children:r.map((function(n){var t=n.credit_id,e=n.profile_path,r=n.name,a=n.character;return(0,_.jsxs)(b,{children:[(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(j,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):g,alt:"preview"})}),(0,_.jsx)(y,{children:r}),(0,_.jsxs)(k,{children:["Character:",a]})]},t)}))})]})})})}},4952:function(n,t,e){e.d(t,{Hg:function(){return s},TP:function(){return u},XT:function(){return p},zv:function(){return d}});var r=e(5861),a=e(4687),i=e.n(a),c=e(1243),o="a148ed5961285512fd3954af576af4a0",s=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:o,language:"en-US"},headers:{Accept:"application/json"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:o,language:"en-US",page:1,include_adult:!1,query:t},headers:{Accept:"application/json"}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();function u(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US&api_key=").concat(o),n.prev=1,n.next=4,c.Z.get(e,{headers:{Accept:"application/json"}});case 4:return r=n.sent,n.abrupt("return",r.data);case 8:throw n.prev=8,n.t0=n.catch(1),n.t0;case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}var d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),n.prev=1,n.next=4,c.Z.get(e,{params:{api_key:o,language:"en-US"},headers:{Accept:"application/json"}});case 4:return r=n.sent,n.abrupt("return",r.data);case 8:throw n.prev=8,n.t0=n.catch(1),n.t0;case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},8721:function(n,t,e){n.exports=e.p+"static/media/NoImage.f836f354b20df77f4679.jpg"}}]);
//# sourceMappingURL=387.ed140333.chunk.js.map