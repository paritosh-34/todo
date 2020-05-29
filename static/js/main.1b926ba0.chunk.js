(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{13:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(7),c=a.n(i),l=(a(13),a(1)),s=a(2),r=a(4),d=a(3),m=a(5),u=a.n(m),p=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).open=function(){e.setState({opened:!0})},e.close=function(){e.setState({opened:!1})},e.check=function(){console.log("check")},e.pasteAsPlainText=function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)},e.state={opened:!1},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:this.state.opened?"active-wrapper active":"active-wrapper"},o.a.createElement("div",{className:"block",onClick:this.open}),o.a.createElement("div",{className:"todo-item"},o.a.createElement("div",{className:"todo-heading-desc-wrapper"},o.a.createElement(u.a,{html:this.props.todo.heading,disabled:!1,onPaste:this.pasteAsPlainText,onChange:function(t){return e.props.handleEdit(t,e.props.todo.id,"heading")},tagName:"h3",className:"todo-heading"}),o.a.createElement(u.a,{html:this.props.todo.desc,disabled:!1,onPaste:this.pasteAsPlainText,onChange:function(t){return e.props.handleEdit(t,e.props.todo.id,"desc")},tagName:"p",className:"todo-desc"})),o.a.createElement("div",{className:"todo-date-time-wrapper"},o.a.createElement("div",{className:"todo-date"},this.props.todo.date.toLocaleDateString()),o.a.createElement("div",{className:"todo-time"},this.props.todo.time.from.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," ","-"," ",this.props.todo.time.to.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})))),o.a.createElement("div",{className:"close",onClick:this.close},o.a.createElement("span",{className:"material-icons"},"close")))}}]),a}(n.Component),h=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.collection.todos.map((function(t){return o.a.createElement(p,{key:t.id,todo:t,handleEdit:e.props.handleEdit})}));return o.a.createElement("div",{className:"todos"},o.a.createElement("div",{className:"todos-title"},o.a.createElement("input",{type:"text",name:"todos-title",id:"todos-title",placeholder:"Collection Title",onChange:function(t){return e.props.handleChange(t,e.props.collection.id)},onBlur:function(t){e.props.handleBlur(t,e.props.collection.id)},value:this.props.collection.name}),o.a.createElement("div",{className:"bottom-line"}),o.a.createElement("label",{htmlFor:"todos-title",className:"edit"},o.a.createElement("span",{className:"material-icons"},"edit")),o.a.createElement("div",{className:"done"},o.a.createElement("span",{className:"material-icons"},"done"))),o.a.createElement("div",{className:"todo-grid"},o.a.createElement("div",{className:"add"},o.a.createElement("span",{className:"material-icons"},"add")),t))}}]),a}(n.Component),f=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.collections.map((function(t){var a={backgroundColor:t.color};return o.a.createElement("li",{className:"collection-list",style:t.active?a:null,onClick:function(){return e.props.changeCollection(t.id)},key:"collection-list-"+t.id},o.a.createElement("button",{title:t.name},o.a.createElement("span",{key:"identifier-"+t.id,className:"identifier"},t.name[0]),o.a.createElement("span",{key:t.id,className:"collection"},t.name)))}));return o.a.createElement("div",{className:"context"},o.a.createElement("div",{className:"heading"},o.a.createElement("div",{className:"menu"},o.a.createElement("i",{className:"material-icons",style:{fontSize:"2em"}},"menu")),o.a.createElement("div",{className:"logo"},"To-Do")),o.a.createElement("ul",null,o.a.createElement("li",{className:"collection-list",id:"add"},o.a.createElement("button",null,o.a.createElement("span",{className:"material-icons"},"add"))),t))}}]),a}(n.Component),g={collections:[{id:1,name:"Work",color:"#5d26ca",todos:[{id:1,heading:"Take out the trash",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,4,0),to:new Date(2020,5,20,7,45,0)},completed:!0},{id:2,heading:"Grocery shoppping",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium odio quia doloribus accusamus illum dolorem, dolores minima ad. At, ratione provident recusandae incidunt eaque consequuntur cupiditate exercitationem eligendi ipsum, veniam suscipit assumenda aspernatur vitae tempora! Quibusdam esse ipsa assumenda, adipisci eos dolores nostrum, modi sapiente libero totam quaerat minima magni? ",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1},{id:3,heading:"Clean gecko tank",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1},{id:4,heading:"Mow lawn",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!0},{id:5,heading:"Catch up on Arrested Develepment",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1}]},{id:2,name:"Shopping",color:"#f5a92f",todos:[{id:1,heading:"Dal",desc:"",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!0},{id:2,heading:"Channa",desc:"",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1},{id:3,heading:"Toothpaste",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1},{id:4,heading:"Hajmola",desc:"",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!0},{id:5,heading:"Chips",desc:"",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1}]},{id:3,name:"EveryDay",color:"#f45c33",todos:[{id:1,heading:"React.js",desc:"Most used.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!0},{id:2,heading:"Angular.js",desc:"From Google.\n Has a lot of hatred.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1},{id:3,heading:"Vue.js",desc:"Most popular among devolopers.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1}]},{id:4,name:"Ideas",color:"#43c8dd",todos:[{id:1,heading:"Ummm...",desc:"Thinking...",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!0}]}]},v=(a(18),function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a),(e=t.call(this)).changeCollection=function(t){e.setState((function(e){return e.collections.map((function(e){return e.active&&(e.active=!1),e.id===t&&(e.active=!0),e}))}))},e.handleChange=function(t,a){var n=t.target.value;e.setState((function(e){return e.collections.map((function(e){return e.id===a&&(e.name=n),e}))}))},e.handleBlur=function(t,a){t.target.value||e.setState((function(e){return e.collections.map((function(e){return e.id===a&&(e.name="null"),e}))}))},e.trimSpaces=function(e){return e.replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<")},e.handleEdit=function(t,a,n){var o=t.target.value;console.log(o);var i=e.state.collections.filter((function(e){return!0===e.active}))[0].id;e.setState((function(t){return t.collections.map((function(t){return t.id===i&&t.todos.map((function(t){return t.id===a&&(t[n]=e.trimSpaces(o)),t})),t}))}))};var n=g.collections.map((function(e){return e.active=!1,e}));return n[0].active=!0,e.state={collections:n},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,{collections:this.state.collections,changeCollection:this.changeCollection}),o.a.createElement(h,{collection:this.state.collections.filter((function(e){return!0===e.active}))[0],handleChange:this.handleChange,handleBlur:this.handleBlur,handleEdit:this.handleEdit}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(19)}},[[8,1,2]]]);
//# sourceMappingURL=main.1b926ba0.chunk.js.map