(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),r=(a(13),a(2)),s=(a(14),a(7)),i=function(e){var t=e.setInputText,a=e.setTodoList,o=e.todoList,c=e.inputText,l=e.setStatus;return n.a.createElement("form",null,n.a.createElement("input",{onChange:function(e){t(e.target.value)},value:c,type:"text",className:"todo-input"}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),a([].concat(Object(s.a)(o),[{text:c,completed:!1,id:1e3*Math.random()}])),t("")},className:"todo-button",type:"submit"},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select",onChange:function(e){l(e.target.value)}},n.a.createElement("select",{name:"todos",className:"filter-todo"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},u=a(4),m=function(e){var t=e.todo,a=e.setTodoList,o=e.todoList;return n.a.createElement("div",{className:"todo"},n.a.createElement("li",{className:t.completed?"completed":"todo-item"},t.text),n.a.createElement("button",{className:"complete-btn",onClick:function(){a(o.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))}},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{className:"trash-btn",onClick:function(){a(o.filter((function(e){return e.id!==t.id})))}},n.a.createElement("i",{className:"fas fa-trash"})))},d=function(e){var t=e.todoList,a=e.setTodoList,o=e.filteredTodo;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},o.map((function(e){return n.a.createElement(m,{todo:e,setTodoList:a,todoList:t})}))))};var f=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)([]),s=Object(r.a)(l,2),u=s[0],m=s[1],f=Object(o.useState)("all"),p=Object(r.a)(f,2),E=p[0],b=p[1],v=Object(o.useState)([]),h=Object(r.a)(v,2),N=h[0],j=h[1];Object(o.useEffect)((function(){return L()}),[u,E]);var L=function(){switch(E){case"completed":j(u.filter((function(e){return!0===e.completed})));break;case"uncompleted":j(u.filter((function(e){return!1===e.completed})));break;default:j(u)}};return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"Works to do today")),n.a.createElement(i,{setInputText:c,setTodoList:m,todoList:u,inputText:a,setStatus:b}),n.a.createElement(d,{todoList:u,setTodoList:m,filteredTodo:N}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1709925f.chunk.js.map