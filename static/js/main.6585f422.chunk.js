(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{15:function(t,e,c){},16:function(t,e,c){},17:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(2),r=c.n(a),i=c(8),d=c.n(i),s=(c(15),c(7)),o=c(9),l=(c(16),c(1)),j=c(3);var b=function(t){var e=t.title,c=t.children,a=Object(j.a)(t,["title","children"]);return Object(n.jsxs)("div",Object(l.a)(Object(l.a)({className:"dashboard-container"},a),{},{children:[Object(n.jsx)("h1",{contentEditable:!0,className:"dashboard-name",children:e}),c]}))};var h=function(t){var e=t.data,c=Object(j.a)(t,["data"]);return Object(n.jsxs)("div",Object(l.a)(Object(l.a)({className:"card-container"},c),{},{children:[Object(n.jsx)("h2",{contentEditable:!0,className:"card-name",children:e.title}),Object(n.jsx)("div",{contentEditable:!0,className:"card-description",children:e.description}),Object(n.jsx)("button",{className:"card-del-button",onClick:function(t){t.target.parentElement.remove()},children:"x"})]}))};function u(t){var e=t.children,c=Object(j.a)(t,["children"]);return Object(n.jsx)("button",Object(l.a)(Object(l.a)({},c),{},{children:e}))}var O=function(){var t=Object(a.useState)([{title:"Untitled dashboard",cards:[]}]),e=Object(o.a)(t,2),c=e[0],r=e[1];function i(t){var e=Object(s.a)(c);e[t.target.parentNode.id].cards.push({title:"Card",description:"Description"}),r(e)}return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{children:"Your ToDo's"}),Object(n.jsxs)("div",{className:"todoApp",children:[c.map((function(t,e){return Object(n.jsxs)(b,{title:t.title,id:e,children:[t.cards.map((function(t,e){return Object(n.jsx)(h,{data:t},"card"+e)})),Object(n.jsx)(u,{className:"cardAdd",onClick:i,children:"+"})]})})),Object(n.jsx)(u,{className:"dashboardAdd",onClick:function(){r([].concat(Object(s.a)(c),[{title:"Untitled dashboard",cards:[]}]))},children:"+"})]})]})},m=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),r(t),i(t)}))};d.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.6585f422.chunk.js.map