(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(8),i=a.n(l),m=(a(14),a(2)),r=a(3),c=a(6),o=a(4),d=a(5),u=a(1),h=function(e){var t=e.name,a=e.platform,n=e.url,l=e.onClick;return s.a.createElement("div",{onClick:l},n?s.a.createElement("div",{className:"item"},s.a.createElement("img",{src:n,alt:t+"'s cover"})):s.a.createElement("div",{className:"item"},s.a.createElement("div",{className:"item__platform"},a),s.a.createElement("div",{className:"item__name"},s.a.createElement("p",null,t))))},p={id:"",name:"",platform:"PC",url:"",updated:!1},v=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state=Object.assign({},p,e.modalItem),a.updateItem=a.updateItem.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"updateItem",value:function(e){var t=e.target,a=t.name,n=t.value,s={};s[a]=n,s.updated="true",this.setState(s)}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.platforms,l=t.title,i=t.onSave,m=t.visible,r=t.onHide,c=function(){for(var t=document.getElementById(a).getElementsByTagName("input"),n=0;n<t.length;n++)t[n].value="";e.setState(p),r()};return s.a.createElement("div",null,s.a.createElement("div",{id:a,className:"modal "+("true"===m?"is-active":"")},s.a.createElement("div",{onClick:c,className:"modal-background"}),s.a.createElement("div",{className:"modal-card"},s.a.createElement("header",{className:"modal-card-head"},s.a.createElement("p",{className:"modal-card-title"},l),s.a.createElement("button",{onClick:c,className:"delete","aria-label":"close"})),s.a.createElement("section",{className:"modal-card-body"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-two-thirds"},s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Name"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{name:"name",className:"input",type:"text",placeholder:"Enter a name",onChange:this.updateItem,value:this.state.name}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Platform"),s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"select"},s.a.createElement("select",{name:"platform",value:this.state.platform,onChange:this.updateItem},n?n.map(function(e,t){return s.a.createElement("option",{key:t,value:e},e)}):"")))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Image URL"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",type:"url",value:this.state.url,placeholder:"Enter a URL",name:"url",onChange:this.updateItem})))),s.a.createElement("div",{className:"column"},s.a.createElement(h,{name:this.state.name,platform:this.state.platform,url:this.state.url})))),s.a.createElement("footer",{className:"modal-card-foot"},s.a.createElement("button",{className:"button is-success",onClick:function(){var t=Object.assign({},e.state);0!==t.name.length&&(i(t),c())}},"Save"),s.a.createElement("button",{className:"button",onClick:c},"Cancel")))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"true"===t.updated?null:Object.assign({},p,e.modalItem)}}]),t}(n.Component),f=(a(16),a(18),{name:"Joffrey",items:[{id:1,name:"Sim City",platform:"PC"},{id:2,name:"Doom",platform:"Xbox One",url:"https://www.mobygames.com/images/covers/l/330671-doom-xbox-one-front-cover.png"},{id:3,name:"Super Mario Odyssey",platform:"Switch"},{id:4,name:"Stardew Valley",platform:"Switch",url:"https://i.ebayimg.com/images/i/292386150442-0-1/s-l1000.jpg"},{id:5,name:"Stellaris",platform:"PC",url:"https://vignette.wikia.nocookie.net/yogscast/images/e/e7/Stellaris_cover_art.jpg/revision/latest?cb=20160520205240"}]}),b=["PC","Xbox One","Switch"],E=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={showModal:"false",modalAction:"add",modalItem:{}},a.addItem=a.addItem.bind(Object(u.a)(Object(u.a)(a))),a.updateItem=a.updateItem.bind(Object(u.a)(Object(u.a)(a))),a.filterItems=a.filterItems.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Object.assign({},f);setTimeout(function(){e.setState({serverData:Object.assign({},t),data:Object.assign({},t)})},1e3);var a=Object.assign([],b);setTimeout(function(){e.setState({platforms:a})},3e3)}},{key:"addItem",value:function(e){var t=Object.assign([],this.state.serverData.items),a=t.reduce(function(e,t){return e<t.id?t.id:e},0),n=Object.assign({},e,{id:a+1});t.push(n);var s=Object.assign({},this.state);s.serverData.items=Object.assign([],t),this.setState(s),this.filterItems()}},{key:"updateItem",value:function(e){var t=Object.assign([],this.state.serverData.items),a=t.findIndex(function(t){return t.id===e.id});t[a]=e;var n=Object.assign({},this.state);n.serverData.items=Object.assign([],t),this.setState(n),this.filterItems()}},{key:"filterItems",value:function(){var e=document.getElementById("searchItem").value,t=document.getElementById("platformFilter").value,a=Object.assign({},this.state),n=Object.assign([],a.serverData.items);a.data.items=n.filter(function(a){return a.name.toLowerCase().includes(e)&&("all platforms"===t.toLowerCase()||a.platform.toLowerCase()===t.toLowerCase())}),this.setState(a)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,this.state&&this.state.data?s.a.createElement("div",null,s.a.createElement("header",{className:"header"},s.a.createElement("h1",{className:"header__title"},this.state.data.name,"'s library"),s.a.createElement("div",{className:"header__bar"},s.a.createElement("span",{className:"button is-primary",onClick:function(){return e.setState({showModal:"true",modalAction:"add",modalItem:{}})}},"Add a new item"),s.a.createElement("div",{className:"control",style:{padding:"0 10px 0 10px"}},s.a.createElement("input",{id:"searchItem",className:"input",type:"text",placeholder:"Search",onChange:this.filterItems})),s.a.createElement("div",{style:{padding:"0 10px 0 0px"}},s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"select"},s.a.createElement("select",{id:"platformFilter",onChange:this.filterItems},s.a.createElement("option",null,"All Platforms"),this.state.platforms?this.state.platforms.map(function(e,t){return s.a.createElement("option",{key:t},e)}):"")))),s.a.createElement("span",null,this.state.data.items.length," items"))),s.a.createElement("hr",null),s.a.createElement("div",{className:"item-list"},this.state.data.items?this.state.data.items.map(function(t,a){return s.a.createElement(h,{key:a,id:t.id,name:t.name,platform:t.platform,url:t.url,onClick:function(){return e.setState({modalItem:Object.assign({},t,{key:a}),showModal:"true",modalAction:"edit"})}})}):""),s.a.createElement(v,{id:"addItemModal",action:this.state.modalAction,visible:this.state.showModal,platforms:this.state.platforms,title:"add"===this.state.modalAction?"Add a new item":"Edit an item",modalItem:this.state.modalItem,onHide:function(){return e.setState({modalItem:{},showModal:"false"})},onSave:"add"===this.state.modalAction?this.addItem:this.updateItem})):s.a.createElement("div",{className:"header"},s.a.createElement("h1",{className:"header__title"},"Loading in progress...")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.e74bc94a.chunk.js.map