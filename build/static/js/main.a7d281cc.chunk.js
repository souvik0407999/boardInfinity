(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),i=(a(23),a(13)),m=a(14),c=a(2),s=a(17),u=a(16),h=a(15),p=a.n(h),d=function(e){return r.a.createElement("form",{onSubmit:function(t){return e.handleUserFormSubmit(t)}},r.a.createElement("label",null,r.a.createElement("p",null,"Search:"),r.a.createElement("input",{name:"username",type:"text",placeholder:"GitHub username",required:!0,value:e.formData.username,onChange:e.handleFormChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:"Submit"})))},f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={gitun:"No username",info:"",formData:{username:""}},e.handleUserFormSubmit=e.handleUserFormSubmit.bind(Object(c.a)(e)),e.handleFormChange=e.handleFormChange.bind(Object(c.a)(e)),e}return Object(m.a)(a,[{key:"handleUserFormSubmit",value:function(e){var t=this;e.preventDefault(),p.a.get("https://api.github.com/users/"+this.state.formData.username).then((function(e){return t.setState({gitun:e.data.login,info:JSON.stringify(e.data,void 0,2)})})).catch((function(e){console.log(e)}))}},{key:"handleFormChange",value:function(e){var t=this.state.formData;t[e.target.name]=e.target.value,this.setState(t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"GitHub Analytics")),r.a.createElement("p",{className:"App-intro"},"Watch this space..."),r.a.createElement(d,{formData:this.state.formData,handleUserFormSubmit:this.handleUserFormSubmit,handleFormChange:this.handleFormChange}),r.a.createElement("p",null,r.a.createElement("b",null,"Username:")),r.a.createElement("p",null,this.state.gitun),r.a.createElement("b",null,"Information:"),r.a.createElement("pre",null,this.state.info))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.a7d281cc.chunk.js.map