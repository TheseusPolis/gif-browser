(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n(7),i=n.n(c),s=n(2),u=n(9),o=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>1&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))},children:Object(a.jsx)("input",{type:"search",value:i,onChange:function(e){o(e.target.value)},placeholder:" Search your favorites gifs"})})},j=n(10),d=n(6),l=n.n(d),b=n(8),f=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=DOqrXRhbCQJBWGmPifIGxrdL5fF1l4eE"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.slug,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){e.id;var t=e.title,n=e.url,r=e.category.toUpperCase();return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:n,alt:t}),Object(a.jsx)("p",{children:r})]})},O=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),a}(t),c=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),Object(a.jsx)("br",{}),i&&Object(a.jsx)("div",{className:"d-flex justify-content-center",children:Object(a.jsx)("div",{className:"spinner-border",role:"status",children:Object(a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),Object(a.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(a.jsx)(p,Object(j.a)({category:t},e),e.id)}))})]})},h=function(){var e=Object(r.useState)(["Gif"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:"Gif Browser"}),Object(a.jsx)(o,{setCategories:c}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(O,{category:e},e)}))}),Object(a.jsx)("br",{})]})};n(17),n(18);i.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.bcec77bf.chunk.js.map