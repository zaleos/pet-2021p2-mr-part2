(this["webpackJsonpfruit-ninja"]=this["webpackJsonpfruit-ninja"]||[]).push([[0],{114:function(n,t,e){},115:function(n,t,e){},122:function(n,t){},124:function(n,t){},134:function(n,t){},136:function(n,t){},163:function(n,t){},164:function(n,t){},169:function(n,t){},171:function(n,t){},178:function(n,t){},197:function(n,t){},215:function(n,t,e){"use strict";e.r(t);var c=e(11),r=e.n(c),i=e(108),o=e.n(i),u=(e(114),e(31)),a=(e(115),"qwertyuiopasdfghjklzxcvbnm123456qwertyuiopasdfghjklzxcvbnm123456qwertyuiopasdfghjklzxcvbnm123456"),s=e(116);function f(n){return s.decode(n,a)}var l=e(55),j=e.n(l),b=e(109);var h=function(n){return function(n){var t=p(n);return fetch(O+"/tokens/validate",{method:"POST",body:t}).then((function(n){return n.json()})).then((function(n){return f(n.jws)}))}(n).then((function(n){if("OK"!==n.sub)throw console.log("Token is not valid anymore"),n.sub}))},d=function(){return console.log("Token is still valid")};function v(n,t,e){!function(n,t,e,c){var r=setInterval(Object(b.a)(j.a.mark((function t(){var i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n();case 3:i=t.sent,e(i),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),clearInterval(r),c(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])}))),t)}((function(){return h(n)}),t,d,e)}function p(n){return function(n){return s.encode(n,a)}({sub:n,appId:"fruit-ninja"})}var O="https://fast-tor-84943.herokuapp.com";var m=e(5);var g=function(){var n=Object(c.useState)(""),t=Object(u.a)(n,2),e=t[0],r=t[1],i=Object(c.useState)(!1),o=Object(u.a)(i,2),a=o[0],s=o[1],l=Object(c.useState)(""),j=Object(u.a)(l,2),b=j[0],h=j[1];return Object(m.jsxs)("div",{className:"App",children:[!a&&Object(m.jsx)("div",{className:"licensing",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Token: "}),Object(m.jsx)("input",{type:"text",value:e,onChange:function(n){r(n.target.value)}}),Object(m.jsx)("button",{onClick:function(){return function(n){var t=p(n);return fetch(O+"/tokens/redeem",{method:"POST",body:t}).then((function(n){return n.json()})).then((function(n){var t=f(n.jws);return console.log(t),t}))}(e).then((function(n){"OK"===n.sub?(s(!0),h(""),v(e,5e3,(function(n){h(n),s(!1)}))):h(n.sub)}))},children:"Submit"}),b&&Object(m.jsx)("p",{children:b})]})}),a&&Object(m.jsx)("div",{className:"game",children:Object(m.jsx)("iframe",{src:"https://league55.github.io/FruitNinjaClone/",allow:"camera *;",title:"Game"})})]})},x=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,216)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;e(n),c(n),r(n),i(n),o(n)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),x()}},[[215,1,2]]]);
//# sourceMappingURL=main.165eb33b.chunk.js.map