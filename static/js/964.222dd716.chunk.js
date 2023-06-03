"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[964],{6412:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,i,o,c,s,u,p,l,d,f=t(9439),h=t(2791),x=t(7689),g=t(1087),m=t(7596),v=(t(5462),t(4952)),b=t(168),w=t(5706),y=(w.Z.section(r||(r=(0,b.Z)(["\n  border-radius: 5px;\n"]))),w.Z.div(a||(a=(0,b.Z)(["\n  padding-top: 30px;\n"])))),Z=(w.Z.h1(i||(i=(0,b.Z)(["\n  text-align: center;\n  text-transform: uppercase;\n  color: #000;\n  padding-top: 30px;\n"]))),w.Z.ul(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  justify-content: flex-start; \n  margin-bottom: 10px;\n  padding-right: 15px;\n  padding-left: 0; \n"])))),j=w.Z.li(c||(c=(0,b.Z)(["\n  text-align: center;\n  width: 220px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  padding-left: 15px; \n"]))),k=(0,w.Z)(g.rU)(s||(s=(0,b.Z)(["\n  text-decoration: none;\n  border-radius: 5px;\n"]))),S=w.Z.div(u||(u=(0,b.Z)(["\n  position: relative;\n  overflow: hidden;\n  \n  width: 220px;\n  height: 330px;\n"]))),_=w.Z.img(p||(p=(0,b.Z)(["\n  display: block;\n  height: 100%;\n  width: 100%;\n"]))),U=w.Z.p(l||(l=(0,b.Z)(["\n  font-size: 17px; \n  font-weight: 900;\n  line-height: 1.14;\n  letter-spacing: 0.03em;\n\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n \n  width: 100%;\n  left: 0;\n  bottom: 0;\n  height: 60px;\n  margin: 0;\n  background-color: rgba(43, 178, 180, 0.421);\n"]))),N=w.Z.div(d||(d=(0,b.Z)(["\n  border-radius: 10px;\n  padding-left: 15px; \n"]))),T=t(8721),q=t(184),z=function(n){var e=n.movies,t=n.location;return(0,q.jsx)(N,{children:(0,q.jsx)(y,{children:(0,q.jsx)(Z,{children:e.map((function(n){return(0,q.jsx)(j,{children:(0,q.jsxs)(k,{to:"/movies/".concat(n.id),state:{from:t},children:[(0,q.jsx)(S,{children:n.poster_path?(0,q.jsx)(_,{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),width:"200",alt:"preview"}):(0,q.jsx)(_,{src:T,alt:"No Image Available"})}),n.title&&(0,q.jsx)(U,{children:n.title}),n.name&&(0,q.jsx)(U,{children:n.name})]})},n.id)}))})})})},A=(t(7665),t.p+"static/media/film.fc99ab4b3e3460056884.gif"),C=function(){var n,e=(0,x.TH)(),t=(0,h.useState)([]),r=(0,f.Z)(t,2),a=r[0],i=r[1],o=(0,g.lr)(),c=(0,f.Z)(o,2),s=c[0],u=c[1],p=null!==(n=s.get("query"))&&void 0!==n?n:"",l=(0,h.useState)(!1),d=(0,f.Z)(l,2),b=d[0],w=d[1],y=(0,h.useState)(!1),Z=(0,f.Z)(y,2),j=Z[0],k=Z[1];(0,h.useEffect)((function(){j&&0===a.length&&!b&&m.Am.info("No movies found")}),[a.length,j,b]);var S=function(){w(!0),k(!0),(0,v.XT)(p).then((function(n){i(n.results),w(!1)})).catch((function(n){return console.log(n)}))};return(0,q.jsxs)("div",{style:{textAlign:"center",padding:"100px"},children:[(0,q.jsxs)("form",{onSubmit:function(n){n.preventDefault(),p?S():m.Am.error("Please enter a search query")},style:{display:"flex",alignItems:"flex-start",justifyContent:"center"},children:[(0,q.jsx)("label",{style:{display:"flex",alignItems:"center"},children:(0,q.jsx)("input",{type:"text",value:p,onChange:function(n){u({query:n.target.value})},placeholder:"Search movie",style:{padding:"10px",marginRight:"10px",border:"1px solid #ccc",borderRadius:"5px",fontSize:"26px",outline:"none",transition:"border-color 0.3s",boxShadow:p?"0 0 5px rgba(0, 121, 191, 0.8)":"none"},className:p?"input-active":""})}),(0,q.jsx)("button",{className:"button",type:"submit",style:{padding:"10px 20px",backgroundColor:"rgba(0, 121, 191, 0.8)",color:"white",border:"none",borderRadius:"5px",fontSize:"26px",cursor:"pointer",outline:"none",transition:"background-color 0.3s"},children:"Search"})]}),(0,q.jsx)("div",{style:{margin:"100px"},children:j||b?null:(0,q.jsx)("img",{src:A,alt:"film Gif",style:{width:"880px",height:"600px"}})}),b&&(0,q.jsx)("div",{children:(0,q.jsx)("span",{className:"loader"})}),j&&0===a.length&&!b&&(0,q.jsx)("div",{style:{color:" rgba(0, 121, 191, 0.8)",marginTop:"150px",fontSize:"30px",fontWeight:"800",textTransform:"uppercase"},children:"No movies found"}),a.length>0&&(0,q.jsx)(z,{movies:a,location:e}),(0,q.jsx)("ul",{children:a.map((function(n){return(0,q.jsx)("li",{children:(0,q.jsx)(g.rU,{to:"".concat(n.id),state:{from:e}})},n.id)}))})]})}},4952:function(n,e,t){t.d(e,{Hg:function(){return u},TP:function(){return l},XT:function(){return p},qN:function(){return h},tx:function(){return f},zv:function(){return d}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243),c="a148ed5961285512fd3954af576af4a0",s=o.Z.create({baseURL:"https://api.themoviedb.org/3",headers:{Accept:"application/json"}}),u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t,r=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,n.prev=1,n.next=4,s.get("/trending/movie/day",{params:{api_key:c,language:"en-US",page:e}});case 4:return t=n.sent,n.abrupt("return",t.data);case 8:throw n.prev=8,n.t0=n.catch(1),n.t0;case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/search/movie",{params:{api_key:c,language:"en-US",page:1,include_adult:!1,query:e}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/movie/".concat(e),{params:{api_key:c,language:"en-US"}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/movie/".concat(e,"/credits"),{params:{api_key:c,language:"en-US"}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/movie/".concat(e,"/reviews"),{params:{api_key:c,language:"en-US"}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/trending/tv/day",{params:{api_key:c,language:"en-US"}});case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}()},8721:function(n,e,t){n.exports=t.p+"static/media/NoImage.f836f354b20df77f4679.jpg"}}]);
//# sourceMappingURL=964.222dd716.chunk.js.map