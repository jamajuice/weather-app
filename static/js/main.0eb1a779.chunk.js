(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{16:function(t,e,c){},17:function(t,e,c){},18:function(t,e,c){},19:function(t,e,c){},24:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c(1),s=c.n(n),r=c(10),i=c.n(r),o=(c(16),c(17),c(18),c(3)),u=(c(19),function(t){var e=t.city,c=t.country,n=t.selected,s=t.change;return Object(a.jsx)("button",{type:"button",onClick:function(){return s(e,c)},disabled:n.city===e,className:"btn".concat(n.city===e?" selected":""),children:e})}),d=function(t){var e=t.selected,c=t.change;return Object(a.jsxs)("div",{className:"menu",children:[Object(a.jsx)(u,{selected:e,change:c,city:"Ottawa",country:"CA"}),Object(a.jsx)(u,{selected:e,change:c,city:"Moscow",country:"RU"}),Object(a.jsx)(u,{selected:e,change:c,city:"Tokyo",country:"JP"})]})};d.defaultProps={selected:{},change:function(){}};var l=d,j=c(2),h=c.n(j),b=c(4),p=c(5),m=c.n(p),f=c(6),x=c.n(f),O=function(t){var e=t.type,c=t.data,n=0!==Object.keys(c).length;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"item ".concat(e),children:[Object(a.jsx)("div",{className:"day",children:n?c.day:Object(a.jsx)(x.a,{width:"100%",height:"100%"})}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("div",{className:"icon-container",children:Object(a.jsx)("div",{className:"img",children:n?Object(a.jsx)("img",{src:n?c.icon_path:null,alt:"Weather Icon"}):Object(a.jsx)(x.a,{circle:!0,height:"lg"===e?120:50,width:"lg"===e?120:50})})}),Object(a.jsxs)("div",{className:"temp-container".concat(n?"":" loading"),children:[Object(a.jsxs)("div",{className:"temp",children:[n?c.temp:Object(a.jsx)(x.a,{width:"100%",height:"100%"}),n?Object(a.jsx)("span",{children:"\xb0"}):null]}),c&&c.temp_text&&"lg"===e?Object(a.jsx)("div",{className:"temp-text",children:c.temp_text}):null]})]})]})})};O.defaultProps={type:"",data:{}};var y=O,v=function(){var t=Object(b.a)(h.a.mark((function t(e){var c,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.weatherbit.io/v2.0/forecast/daily","b6494ce54de54be6a89271638f3f5cd7",c="".concat("https://api.weatherbit.io/v2.0/forecast/daily","?city=").concat(e.city,"&country=").concat(e.country,"&days=5&units=M&key=").concat("b6494ce54de54be6a89271638f3f5cd7"),t.prev=3,t.next=6,fetch(c);case 6:if(200!==(a=t.sent).status){t.next=12;break}return t.next=10,a.json();case 10:return t.t0=t.sent,t.abrupt("return",{success:!0,data:t.t0});case 12:return t.abrupt("return",{success:!1,error:a.statusText});case 15:return t.prev=15,t.t1=t.catch(3),t.abrupt("return",{success:!1,error:t.t1.message});case 18:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(e){return t.apply(this,arguments)}}(),g=function(t){var e=t.location,c=s.a.useState([]),n=Object(o.a)(c,2),r=n[0],i=n[1],u=s.a.useState(""),d=Object(o.a)(u,2),l=d[0],j=d[1];return s.a.useEffect((function(){var t=setTimeout((function(){}),2e3),c=function(){var c=Object(b.a)(h.a.mark((function c(){var a;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,v(e);case 2:a=c.sent,clearTimeout(t),i(a.success?a.data.data.map((function(t){return{day:m()().isSame(m()(t.datetime),"day")?"Today":m()(t.datetime).format("ddd"),icon_path:"https://www.weatherbit.io/static/img/icons/".concat(t.weather.icon,".png"),temp:Math.round(t.high_temp),temp_text:t.weather.description}})):[]),j(a.success?"":a.error);case 6:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return i([]),setTimeout((function(){c()}),1e3),function(){return clearTimeout(t)}}),[e]),Object(a.jsxs)("div",{className:"monitor",children:[l?null:Object(a.jsx)("div",{className:"error",children:l}),Object(a.jsx)("div",{className:"header",children:Object(a.jsx)(y,{type:"lg",data:r[0]})}),Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)(y,{type:"sm",data:r[1]}),Object(a.jsx)(y,{type:"sm",data:r[2]}),Object(a.jsx)(y,{type:"sm",data:r[3]}),Object(a.jsx)(y,{type:"sm",data:r[4]})]})]})};g.defaultProps={location:{}};var w=g,N="location";var k=function(){var t=Object(n.useState)(function(){var t=localStorage.getItem(N);return t?JSON.parse(t):{city:"Ottawa",country:"CA"}}()),e=Object(o.a)(t,2),c=e[0],s=e[1];return Object(a.jsx)("div",{className:"weather-app",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(l,{selected:c,change:function(t,e){var c={city:t,country:e};s(c),function(t){localStorage.setItem(N,JSON.stringify(t))}(c)}}),Object(a.jsx)(w,{location:c})]})})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0eb1a779.chunk.js.map