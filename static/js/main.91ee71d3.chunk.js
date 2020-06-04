(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},15:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),c=a.n(i),l=(a(15),a(2)),d=a(3),r=a(1),s=a(5),m=a(4),u=a(7),p=a.n(u),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).pasteAsPlainText=function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)},e.componentDidMount=function(){return e.props.todo.ref?e.props.todo.ref.current.focus():null},e.handleEnter=function(e){return 13===e.keyCode?e.target.blur():null},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todo-item"},o.a.createElement("div",{className:"todo-heading-desc-wrapper"},o.a.createElement(p.a,{html:this.props.todo.heading,disabled:!1,onPaste:this.pasteAsPlainText,onChange:function(t){return e.props.handleEdit(t,e.props.todo.id,"heading")},tagName:"h3",className:"todo-heading",placeholder:"Title",innerRef:this.props.todo.ref}),o.a.createElement(p.a,{html:this.props.todo.desc,disabled:!1,onPaste:this.pasteAsPlainText,onChange:function(t){return e.props.handleEdit(t,e.props.todo.id,"desc")},tagName:"p",className:"todo-desc",placeholder:"----"})),o.a.createElement("div",{className:"todo-date-time-wrapper"},o.a.createElement("div",{className:"todo-date"},o.a.createElement("input",{type:"date",name:"todo-date",value:this.props.todo.date.toISOString().substr(0,10),onChange:function(t){return e.props.handleEdit(t,e.props.todo.id,"date")}})),o.a.createElement("div",{className:"todo-time"},o.a.createElement("input",{type:"text",value:this.props.todo.time.from,className:"todo-time-editable",placeholder:"hh:mm",onChange:function(t){return e.props.handleEdit(t,e.props.todo.id,"timefrom ")},onKeyDown:function(t){console.log(t.target.value.length),t.target.style.width=t.target.value.length+"ch",e.handleEnter(t)}})," ","-"," ",o.a.createElement("input",{type:"text",value:this.props.todo.time.to,className:"todo-time-editable",placeholder:"hh:mm",onChange:function(t){return e.props.handleEdit(t,e.props.todo.id,"timeto ")},onKeyDown:function(t){console.log(t.target.value.length),t.target.style.width=t.target.value.length+"ch",e.handleEnter(t)}}))))}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.collection.todos.map((function(t){return o.a.createElement(h,{key:t.id,todo:t,handleEdit:e.props.handleEdit,firstEditable:e.props.firstEditable})}));return o.a.createElement("div",{className:"todos"},o.a.createElement("div",{className:"todos-title"},o.a.createElement("input",{type:"text",name:"todos-title",id:"todos-title",placeholder:"Collection Title",onChange:function(t){return e.props.handleChange(t,e.props.collection.id)},value:this.props.collection.name,ref:this.props.collection.ref}),o.a.createElement("div",{className:"bottom-line"}),o.a.createElement("label",{htmlFor:"todos-title",className:"edit"},o.a.createElement("span",{className:"material-icons"},"edit")),o.a.createElement("div",{className:"done"},o.a.createElement("span",{className:"material-icons"},"done"))),o.a.createElement("div",{className:"todo-grid"},o.a.createElement("div",{className:"add",onClick:function(t){return e.props.handleAdd(t,e.props.collection.id)}},o.a.createElement("span",{className:"material-icons"},"add")),t))}}]),a}(n.Component),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.collections.map((function(t){var a={backgroundColor:t.color};return o.a.createElement("li",{className:"collection-list",style:t.active?a:null,onClick:function(){return e.props.changeCollection(t.id)},key:"collection-list-"+t.id},o.a.createElement("button",{title:t.name},o.a.createElement("span",{key:"identifier-"+t.id,className:"identifier"},t.name[0]?t.name[0]:"---"),o.a.createElement("span",{key:t.id,className:"collection"},t.name?t.name:"---")))}));return o.a.createElement("div",{className:"context"},o.a.createElement("div",{className:"heading"},o.a.createElement("div",{className:"menu"},o.a.createElement("i",{className:"material-icons",style:{fontSize:"2em"}},"menu")),o.a.createElement("div",{className:"logo"},"To-Do")),o.a.createElement("ul",null,o.a.createElement("li",{className:"collection-list",id:"add"},o.a.createElement("button",{onClick:this.props.addCollection},o.a.createElement("span",{className:"material-icons"},"add"))),t))}}]),a}(n.Component);function v(e){this.setState((function(t){return t.collections.map((function(t){return t.active&&(t.active=!1),t.id===e&&(t.active=!0),t}))}))}var w=a(6);function E(e,t){var a=o.a.createRef(),n=this.state.collections.filter((function(e){return e.id===t}))[0],i={id:n.todos.length+1,heading:"",desc:"",date:new Date,time:{from:(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),to:(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},completed:!1,ref:a},c=[].concat(Object(w.a)(n.todos),[i]);this.setState((function(e){return e.collections.map((function(e){return e.id===t&&(e.todos=c),e}))}))}function b(e,t){e.target.value||this.setState((function(e){return e.collections.map((function(e){return e.id===t&&(e.name="null"),e}))}))}function D(e,t,a){var n=e.target.value,o=this.state.collections.filter((function(e){return!0===e.active}))[0].id;this.setState((function(e){return e.collections.map((function(e){return e.id===o&&e.todos.map((function(e){return e.id===t&&("date"===a?e[a]=new Date(n):"time"===a.slice(0,4)?e.time[a.slice(4,-1)]=n:e[a]=n.replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<")),e})),e}))}))}function C(e,t){var a=e.target.value;this.setState((function(e){return e.collections.map((function(e){return e.id===t&&(e.name=a),e}))}))}var N=["#5d26ca","#f5a92f","#f45c33","#43c8dd"];function j(){var e=o.a.createRef(),t=this.state.collections.length,a={id:t+1,name:"",color:N[t%4],ref:e,todos:[]};this.setState({collections:[].concat(Object(w.a)(this.state.collections),[a])}),this.changeCollection(t+1)}var y={collections:[{id:1,name:"Work",color:"#5d26ca",todos:[{id:1,heading:"Take out the trash",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,4,0),to:new Date(2020,5,20,7,45,0)},completed:!0},{id:2,heading:"Grocery shoppping",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium odio quia doloribus accusamus illum dolorem, dolores minima ad. At, ratione provident recusandae incidunt eaque consequuntur cupiditate exercitationem eligendi ipsum, veniam suscipit assumenda aspernatur vitae tempora! Quibusdam esse ipsa assumenda, adipisci eos dolores nostrum, modi sapiente libero totam quaerat minima magni? ",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1},{id:3,heading:"Clean gecko tank",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1},{id:4,heading:"Mow lawn",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!0},{id:5,heading:"Catch up on Arrested Develepment",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1}]},{id:2,name:"Shopping",color:"#f5a92f",todos:[{id:1,heading:"Dal",desc:"",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!0},{id:2,heading:"Channa",desc:"",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1},{id:3,heading:"Toothpaste",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1},{id:4,heading:"Hajmola",desc:"",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!0},{id:5,heading:"Chips",desc:"",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1}]},{id:3,name:"EveryDay",color:"#f45c33",todos:[{id:1,heading:"React.js",desc:"Most used.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!0},{id:2,heading:"Angular.js",desc:"From Google.\n Has a lot of hatred.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1},{id:3,heading:"Vue.js",desc:"Most popular among devolopers.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1}]},{id:4,name:"Ideas",color:"#43c8dd",todos:[{id:1,heading:"Ummm...",desc:"Thinking...",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!0}]}]},O=(a(20),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a),e=t.call(this);var n=y.collections.map((function(e){return e.active=!1,e.todos.map((function(e){return e.time.from=e.time.from.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),e.time.to=e.time.to.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),e})),e}));return n[0].active=!0,e.state={collections:n},e.changeCollection=v.bind(Object(r.a)(e)),e.addCollection=j.bind(Object(r.a)(e)),e.handleAdd=E.bind(Object(r.a)(e)),e.handleBlur=b.bind(Object(r.a)(e)),e.handleChange=C.bind(Object(r.a)(e)),e.handleEdit=D.bind(Object(r.a)(e)),e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,{collections:this.state.collections,changeCollection:this.changeCollection,addCollection:this.addCollection}),o.a.createElement(f,{collection:this.state.collections.filter((function(e){return!0===e.active}))[0],handleChange:this.handleChange,handleBlur:this.handleBlur,handleEdit:this.handleEdit,handleAdd:this.handleAdd,firstEditable:this.firstEditable}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.91ee71d3.chunk.js.map