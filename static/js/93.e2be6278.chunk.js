"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[93],{7093:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n,a,c=r(5861),u=r(9439),s=r(4687),i=r.n(s),o=r(2791),p=r(7689),f=r(4290),h=r(1319),l=r(9194),v=r(168),d=r(7686),m=d.Z.ul(n||(n=(0,v.Z)(["\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n"]))),x=d.Z.li(a||(a=(0,v.Z)(["\n  width: calc((100% - 90px) / 5);\n  border: 1px solid #800;\n  display: flex;\n  padding-bottom: 5px;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n"]))),w=r(184),g=function(){var t=(0,o.useState)(),e=(0,u.Z)(t,2),r=e[0],n=e[1],a=(0,o.useState)(!1),s=(0,u.Z)(a,2),v=s[0],d=s[1],g=(0,o.useState)(!1),Z=(0,u.Z)(g,2),y=Z[0],b=Z[1],j=(0,p.UO)().movieId;return(0,o.useEffect)((function(){var t=function(){var t=(0,c.Z)(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(!1),d(!0),t.next=5,(0,l.Hc)(j);case 5:e=t.sent,r=e.cast,n(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),b(!0);case 13:return t.prev=13,d(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[j]),(0,w.jsxs)(w.Fragment,{children:[v&&(0,w.jsx)(f.Z,{}),y&&(0,w.jsx)(h.Z,{text:"Sorry something went wrong, please try again"}),r&&0!==r.length&&(0,w.jsx)(m,{children:r.map((function(t){var e=t.id,r=t.name,n=t.character,a=t.profile_path;return(0,w.jsxs)(x,{children:[(0,w.jsx)("img",{src:a?"http://image.tmdb.org/t/p/w500".concat(a):"https://dummyimage.com/150x225/800000/800000.jpg",alt:"profile",width:"150",height:"225"}),(0,w.jsx)("p",{children:r}),n&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("p",{children:"Character:"}),(0,w.jsx)("p",{children:n})]})]},e)}))}),r&&0===r.length&&(0,w.jsx)(h.Z,{text:"We don`t have any information about cast of this movie"})]})}},1319:function(t,e,r){r.d(e,{Z:function(){return s}});var n,a=r(168),c=r(7686).Z.p(n||(n=(0,a.Z)(["\n  color: #800;\n  font-size: 35px;\n  text-align: center;\n"]))),u=r(184),s=function(t){var e=t.text;return(0,u.jsx)(c,{children:e})}},9194:function(t,e,r){r.d(e,{Df:function(){return s},Hc:function(){return p},Rg:function(){return o},z1:function(){return i},zO:function(){return f}});var n=r(5861),a=r(4687),c=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.headers.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmI3YTY1YmJhMTVkYTU2OGZjNzJlODdiNGU1MzA0ZSIsInN1YiI6IjYzZGQ1MWIyMzczYWMyMDA3YzFmNTIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8pLwd2kDBypx7lwFPRi_J8X3NWyZonT21z3rtiXLa2E";var s=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("trending/movie/day");case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("search/movie?query=".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e,"/credits"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e,"/reviews"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=93.e2be6278.chunk.js.map