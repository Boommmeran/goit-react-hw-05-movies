"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[418],{1319:function(n,e,r){r.d(e,{Z:function(){return i}});var t,a=r(168),c=r(7686).Z.p(t||(t=(0,a.Z)(["\n  color: #800;\n  font-size: 35px;\n  text-align: center;\n"]))),s=r(184),i=function(n){var e=n.text;return(0,s.jsx)(c,{children:e})}},9194:function(n,e,r){r.d(e,{Df:function(){return i},Hc:function(){return p},Rg:function(){return u},z1:function(){return o},zO:function(){return l}});var t=r(5861),a=r(4687),c=r.n(a),s=r(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.headers.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmI3YTY1YmJhMTVkYTU2OGZjNzJlODdiNGU1MzA0ZSIsInN1YiI6IjYzZGQ1MWIyMzczYWMyMDA3YzFmNTIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8pLwd2kDBypx7lwFPRi_J8X3NWyZonT21z3rtiXLa2E";var i=function(){var n=(0,t.Z)(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("trending/movie/day");case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("search/movie?query=".concat(e));case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e));case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"/credits"));case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"/reviews"));case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},7418:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var t,a,c,s,i,o,u,p=r(5861),l=r(9439),f=r(4687),h=r.n(f),d=r(2791),x=r(7689),v=r(6355),m=r(168),Z=r(7686),g=r(1087),w=(0,Z.Z)(g.rU)(t||(t=(0,m.Z)(["\n  width: 110px;\n  padding: 10px;\n  margin: 5px 0 5px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background-color: #800;\n  border-radius: 10px;\n  color: #fff;\n  font-size: 17px;\n  font-weight: 500;\n  justify-content: center;\n\n  :hover {\n    background-color: #531010;\n  }\n"]))),j=Z.Z.h2(a||(a=(0,m.Z)(["\n  font-size: 40px;\n  margin: 20px 0;\n"]))),y=Z.Z.div(c||(c=(0,m.Z)(["\n  max-width: 800px;\n  display: flex;\n  gap: 20px;\n  margin-bottom: 10px;\n"]))),b=Z.Z.p(s||(s=(0,m.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  margin: 20px 0 30px;\n"]))),k=Z.Z.h3(i||(i=(0,m.Z)(["\n  font-size: 20px;\n  margin-bottom: 10px;\n"]))),z=Z.Z.p(o||(o=(0,m.Z)(["\n  font-size: 17px;\n  margin-bottom: 30px;\n"]))),I=Z.Z.ul(u||(u=(0,m.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),J=r(184),Y=function(n){var e=n.details,r=e.poster_path,t=e.title,a=e.release_date,c=e.genres,s=e.overview,i=e.vote_average;return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(j,{children:"".concat(t," (").concat(a.slice(0,4),")")}),(0,J.jsxs)(y,{children:[(0,J.jsx)("img",{src:"http://image.tmdb.org/t/p/w500".concat(r),width:"350",height:"493",alt:"poster"}),(0,J.jsxs)("div",{children:[(0,J.jsx)(b,{children:"User Score: ".concat(Math.round(10*i),"%")}),(0,J.jsxs)("div",{children:[(0,J.jsx)(k,{children:"Overview"}),(0,J.jsx)(z,{children:s})]}),(0,J.jsxs)("div",{children:[(0,J.jsx)(k,{children:"Genres"}),(0,J.jsx)(z,{children:c.map((function(n){return n.name})).join(" ")})]}),(0,J.jsx)(k,{children:"Additional information"}),(0,J.jsxs)(I,{children:[(0,J.jsx)("li",{children:(0,J.jsx)(w,{to:"cast",children:"Cast"})}),(0,J.jsx)("li",{children:(0,J.jsx)(w,{to:"reviews",children:"Reviews"})})]})]})]})]})},_=r(4290),N=r(1319),E=r(9194),G=function(){var n,e,r=(0,d.useState)(null),t=(0,l.Z)(r,2),a=t[0],c=t[1],s=(0,d.useState)(!1),i=(0,l.Z)(s,2),o=i[0],u=i[1],f=(0,d.useState)(!1),m=(0,l.Z)(f,2),Z=m[0],g=m[1],j=(0,x.UO)().movieId,y=(0,x.TH)(),b=(0,d.useRef)(null!==(n=null===(e=y.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,d.useEffect)((function(){var n=function(){var n=(0,p.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!1),u(!0),n.next=5,(0,E.Rg)(j);case 5:e=n.sent,c(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),g(!0);case 12:return n.prev=12,u(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[j]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(w,{to:b.current,children:[(0,J.jsx)(v.x_l,{}),"Go back"]}),a&&(0,J.jsx)(Y,{details:a}),o&&(0,J.jsx)(_.Z,{}),Z&&(0,J.jsx)(N.Z,{text:"Sorry something went wrong, please try again"}),(0,J.jsx)(d.Suspense,{fallback:(0,J.jsx)(_.Z,{}),children:(0,J.jsx)(x.j3,{})})]})}}}]);
//# sourceMappingURL=418.6ef3b07f.chunk.js.map