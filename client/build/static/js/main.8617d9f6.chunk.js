(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(25),i=n.n(r),l=(n(50),n(12)),s=n(3),o=(n(51),n(1));function u(){return Object(o.jsxs)("div",{className:"landing_page",children:[Object(o.jsx)("h1",{className:"title_landing",children:"\xa1HELLO HUMAN!"}),Object(o.jsx)("h4",{className:"subtitle_landing",children:"Search breeds of dogs or create one"}),Object(o.jsx)(l.b,{to:"/Home",children:Object(o.jsx)("button",{className:"button_landing",children:"\ud83d\udc3e"})})]})}var j=n(5),h=n(11),m=n(4),d=n(8),b=n(19),p=n.n(b);function g(){return function(){var e=Object(d.a)(Object(m.a)().mark((function e(t){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3001/dog/");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_DOGS",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function O(){return function(){var e=Object(d.a)(Object(m.a)().mark((function e(t){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3001/temperament/");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_TEMPERAMENT",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function x(e){return function(){var t=Object(d.a)(Object(m.a)().mark((function t(n){var a;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=8;break}return t.next=4,p.a.get("http://localhost:3001/dog/".concat(e));case 4:a=t.sent,n({type:"GET_DETAIL",payload:a.data}),t.next=9;break;case 8:n({type:"GET_DETAIL",payload:[]});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}n(74);function f(e){var t=e.image,n=e.name,a=e.temperament,c=e.weight,r=e.id;return Object(o.jsxs)("div",{children:[Object(o.jsx)(l.b,{to:"/dog/"+r,children:Object(o.jsx)("img",{className:"card_image",src:t,alt:"img not found"})}),Object(o.jsx)("h3",{children:n}),Object(o.jsx)("h5",{children:a}),Object(o.jsx)("h5",{children:c})]})}n(75);function v(e){for(var t=e.dogsPerPage,n=e.allDogs,a=e.pagination,c=[],r=1;r<=Math.ceil(n/t);r++)c.push(r);return Object(o.jsx)("nav",{children:Object(o.jsx)("div",{className:"pagination_container",children:c&&c.map((function(e,t){return Object(o.jsx)("button",{className:"pagination",onClick:function(){return a(e)},children:e},t)}))})})}var w=n.p+"static/media/gif_perro_sinfondo.dfef47d2.gif";n(76);function M(){return Object(o.jsx)("div",{className:"fondo_1",children:Object(o.jsxs)("div",{className:"loader",children:[Object(o.jsx)("img",{src:w,alt:"loading"}),Object(o.jsx)("h3",{children:Object(o.jsx)("strong",{children:"LOADING . . ."})})]})})}function E(){var e=Object(h.b)(),t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],r=n[1];function i(t){t.preventDefault(),c.length?(e(function(e){return function(){var t=Object(d.a)(Object(m.a)().mark((function t(n){var a;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("http://localhost:3001/dog?name="+e);case 3:return a=t.sent,t.abrupt("return",n({type:"GET_DOG_NAME",payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),alert("Dog not found \ud83d\ude15");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(c)),r("")):alert("Please enter a breed")}return Object(o.jsx)("form",{onSubmit:function(e){return i(e)},children:Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"text",value:c,placeholder:"Write a breed...",onChange:function(e){return function(e){e.preventDefault(),r(e.target.value),console.log(c)}(e)}}),Object(o.jsx)("button",{type:"submit",children:"\ud83d\udd0d"})]})})}n(77);function _(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.dogs})),n=Object(h.c)((function(e){return e.temperament})),c=Object(a.useState)(1),r=Object(j.a)(c,2),i=r[0],s=r[1],u=Object(a.useState)(8),m=Object(j.a)(u,1)[0],d=Object(a.useState)(""),b=Object(j.a)(d,2)[1],p=i*m,x=p-m,w=t.slice(x,p);if(Object(a.useEffect)((function(){e(O())}),[e]),Object(a.useEffect)((function(){e(g())}),[e]),!t.length)return Object(o.jsx)(M,{});function _(t){var n;t.preventDefault(),e((n=t.target.value,console.log(n),{type:"FILTER_BY_TEMPERAMENT",payload:n})),s(1),b(t.target.value)}return Object(o.jsxs)("div",{className:"fondo",children:[Object(o.jsx)(l.b,{className:"create_button",to:"/dog",children:"Create Dog"}),Object(o.jsx)("button",{className:"reload_dogs",onClick:function(t){!function(t){t.preventDefault(),e(g())}(t)},children:"Reload Dogs"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("select",{onClick:function(t){!function(t){t.preventDefault(),e({type:"ORDER_BY_NAME",payload:t.target.value}),s(1),b(t.target.value)}(t)},children:[Object(o.jsx)("option",{value:"Asc",children:"A-Z"}),Object(o.jsx)("option",{value:"Desc",children:"Z-A"})]}),Object(o.jsxs)("select",{onChange:function(e){return _(e)},children:[Object(o.jsx)("option",{children:"Temperaments"}),Object(o.jsx)("option",{value:"All",children:"All"}),n.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name},e.name)}))]}),Object(o.jsxs)("select",{onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_WEIGHT",payload:t.target.value}),s(1),b(t.target.value)}(t)},children:[Object(o.jsx)("option",{children:"Weight"}),Object(o.jsx)("option",{value:"Heavy",children:"Heavy"}),Object(o.jsx)("option",{value:"Light",children:"Light"})]}),Object(o.jsxs)("select",{onChange:function(t){return function(t){t.preventDefault(),e({type:"FILTER_CREATED",payload:t.target.value}),s(1),b(t.target.value)}(t)},children:[Object(o.jsx)("option",{children:"Dogs"}),Object(o.jsx)("option",{value:"All",children:"All"}),Object(o.jsx)("option",{value:"Created",children:"Created"}),Object(o.jsx)("option",{value:"Api",children:"Existent"})]}),Object(o.jsx)(E,{}),Object(o.jsx)(v,{dogsPerPage:m,allDogs:t.length,pagination:function(e){s(e)}}),Object(o.jsx)("ul",{className:"card_grid",children:null===w||void 0===w?void 0:w.map((function(e){var t;return Object(o.jsx)(f,{id:e.id,name:e.name,image:e.image,temperament:e.temperament?e.temperament:null===(t=e.temperaments)||void 0===t?void 0:t.map((function(t,n){return e.temperaments.length-1===n?t.name:t.name+", "})),weight:e.weight?e.weight:e.weightMin+" - "+e.weightMax},e.id)}))})]})]})}var N=n(9),y=n(7),D=n(6);n(78);function T(e){var t={};return e.name.trim()?parseInt(e.name)&&(t.name="Name is invalid, please use at least one letter at the beginning"):t.name="Write a name, please",e.image||(t.image="Upload an image, please"),e.temperament||(t.temperament="Select one or more temperaments, please"),(e.heightMin<0||e.heightMin>100)&&(t.heightMin="Require field, please write a valid number between 1 and 100"),(e.heightMax<1||e.heightMax>100)&&(t.heightMax="Require field, please write a valid number between 1 and 100"),e.heightMax<e.heightMin&&(t.heightMin="The minimum value cannot be greater than the maximum value"),(e.weightMin<0||e.weightMin>100)&&(t.weightMin="Require field, please write a valid number between 1 and 100"),(e.weightMax<1||e.weightMax>100)&&(t.weightMax="Require field, please write a valid number between 1 and 100"),e.weightMax<e.weightMin&&(t.weightMin="The minimum value cannot be greater than the maximum value"),(e.lmin<0||e.lmin>19)&&(t.lmin="Require field, please write a valid number between 1 and 19"),(e.lmax<0||e.lmax>19)&&(t.lmax="Require field, please write a valid number between 1 and 19"),e.lmax<10&&e.lmax<e.lmin&&(t.lmin="The minimum value cannot be greater than the maximum value"),t}function C(){var e=Object(h.b)(),t=Object(s.l)(),n=Object(h.c)((function(e){return e.temperament})),c=Object(a.useState)({}),r=Object(j.a)(c,2),i=r[0],u=r[1],b=Object(a.useState)({name:"",image:"",heightMin:"",heightMax:"",weightMin:"",weightMax:"",lmin:"",lmax:"",temperament:[]}),g=Object(j.a)(b,2),x=g[0],f=g[1];function v(e){f(Object(D.a)(Object(D.a)({},x),{},Object(y.a)({},e.target.name,e.target.value))),u(T(Object(D.a)(Object(D.a)({},x),{},Object(y.a)({},e.target.name,e.target.value)))),console.log(x)}function w(n){var a;(n.preventDefault(),u(T(Object(D.a)(Object(D.a)({},x),{},Object(y.a)({},n.target.name,n.target.value)))),!Object.keys(i).length&&x.name&&x.image&&x.heightMin&&x.heightMax&&x.weightMin&&x.weightMax&&x.lmin&&x.lmax&&x.temperament)?(x.heightMax+=" cm",x.weightMax+=" kgs",x.life_span=x.lmin+" - "+x.lmax+" years",e((a=x,function(){var e=Object(d.a)(Object(m.a)().mark((function e(t){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("http://localhost:3001/dog",a);case 2:return n=e.sent,console.log(n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),alert("Dog created \ud83d\udc36"),f({name:"",image:"",heightMin:"",heightMax:"",weightMin:"",weightMax:"",lmin:"",lmax:"",temperament:[]}),t("/home")):alert("ERROR: Dog not created \ud83d\ude15")}return Object(a.useEffect)((function(){e(O())}),[e]),Object(o.jsx)("div",{className:"fondo_2",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(l.b,{as:l.b,to:"/home",children:Object(o.jsx)("button",{children:"HOME"})}),Object(o.jsx)("h1",{children:"BE CREATIVE \ud83d\udc3e"}),Object(o.jsxs)("form",{onSubmit:function(e){return w(e)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"input",placeholder:"Dog Name",type:"text",value:x.name,name:"name",onChange:function(e){return v(e)}}),i.name&&Object(o.jsx)("p",{className:"error",children:i.name})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"input",placeholder:"Image",type:"img",value:x.image,name:"image",alt:"not found",onChange:function(e){return v(e)}}),i.image&&Object(o.jsx)("p",{className:"error",children:i.image})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"input",placeholder:"Min height",type:"number",value:x.heightMin,name:"heightMin",onChange:function(e){return v(e)}}),i.heightMin&&Object(o.jsx)("p",{className:"error",children:i.heightMin})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"input",placeholder:"Max height",type:"number",value:x.heightMax,name:"heightMax",onChange:function(e){return v(e)}}),i.heightMax&&Object(o.jsx)("p",{className:"error",children:i.heightMax})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"input",placeholder:"Min weight",type:"number",value:x.weightMin,name:"weightMin",onChange:function(e){return v(e)}}),i.weightMin&&Object(o.jsx)("p",{className:"error",children:i.weightMin})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"input",placeholder:"Max weight",type:"number",value:x.weightMax,name:"weightMax",onChange:function(e){return v(e)}}),i.weightMax&&Object(o.jsx)("p",{className:"error",children:i.weightMax})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"input",placeholder:"Min life years",type:"number",value:x.lmin,name:"lmin",onChange:function(e){return v(e)}}),i.lmin&&Object(o.jsx)("p",{className:"error",children:i.lmin})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"input",placeholder:"Max life years",type:"number",value:x.lmax,name:"lmax",onChange:function(e){return v(e)}}),i.lmax&&Object(o.jsx)("p",{className:"error",children:i.lmax})]}),Object(o.jsx)("label",{children:" Temperaments "}),Object(o.jsxs)("select",{onChange:function(e){return function(e){f(Object(D.a)(Object(D.a)({},x),{},{temperament:[].concat(Object(N.a)(x.temperament),[e.target.value])}))}(e)},children:[i.temperament&&Object(o.jsx)("p",{className:"error",children:i.temperament}),n.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"create",type:"submit",children:"CREATE"})})]}),x.temperament.map((function(e){return Object(o.jsx)("ul",{className:"input_temperament",children:Object(o.jsxs)("li",{children:[Object(o.jsx)("p",{children:e}),Object(o.jsx)("button",{className:"x",onClick:function(){return function(e){f(Object(D.a)(Object(D.a)({},x),{},{temperament:x.temperament.filter((function(t){return t!==e}))}))}(e)},children:"X"})]})},e)}))]})})}n(79);function R(){var e=Object(h.b)(),t=Object(s.n)().id,n=Object(s.l)();Object(a.useEffect)((function(){return e(x(t)),function(){e(x())}}),[t,e]);var c=Object(h.c)((function(e){return e.detail}));return Object(o.jsx)("div",{className:"fondo_3",children:Object(o.jsxs)("div",{className:"button_container_detail",children:[Object(o.jsx)("button",{className:"button_detail",onClick:function(){return n("/home")},children:"HOME"}),c.length>0?Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:c[0].name}),Object(o.jsx)("img",{className:"image_detail",src:c[0].image,alt:"not found"}),Object(o.jsxs)("p",{children:["Height : ",c[0].createdInDb?c[0].heightMin+" - "+c[0].heightMax:c[0].height]}),Object(o.jsxs)("p",{children:["Weight : ",c[0].createdInDb?c[0].weightMin+" - "+c[0].weightMax:c[0].weight]}),Object(o.jsxs)("p",{children:["Life Span : ",c[0].life_span]}),Object(o.jsxs)("p",{children:["Temperaments :  ",c[0].createdInDb?c[0].temperaments.map((function(e,t){return c[0].temperaments.length-1===t?e.name:e.name+", "})):c[0].temperament+" "]})]}):Object(o.jsx)("p",{children:"Loading..."})]})})}n(80);var A=function(){return Object(o.jsx)(l.a,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(s.c,{children:[Object(o.jsx)(s.a,{exact:!0,path:"/",element:Object(o.jsx)(u,{})}),Object(o.jsx)(s.a,{path:"/home",element:Object(o.jsx)(_,{})}),Object(o.jsx)(s.a,{path:"/dog",element:Object(o.jsx)(C,{})}),Object(o.jsx)(s.a,{path:"/dog/:id",element:Object(o.jsx)(R,{})})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},I=n(31),S=n(45),k={dogs:[],allDogs:[],temperament:[],detail:[]};var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DOGS":return Object(D.a)(Object(D.a)({},e),{},{dogs:t.payload,allDogs:t.payload});case"GET_DOG_NAME":return Object(D.a)(Object(D.a)({},e),{},{dogs:t.payload});case"GET_TEMPERAMENT":return Object(D.a)(Object(D.a)({},e),{},{temperament:t.payload});case"POST_DOG":return Object(D.a)({},e);case"FILTER_BY_TEMPERAMENT":var n=e.dogs,a="All"===t.payload?e.allDogs:n.filter((function(e){var n;return e.temperament?e.temperament.includes(t.payload):null===(n=e.temperaments)||void 0===n?void 0:n.map((function(e){return e.name})).includes(t.payload)}));return Object(D.a)(Object(D.a)({},e),{},{dogs:a});case"FILTER_CREATED":var c="Created"===t.payload?e.allDogs.filter((function(e){return e.createdInDb})):e.allDogs.filter((function(e){return!e.createdInDb}));return Object(D.a)(Object(D.a)({},e),{},{dogs:"All"===t.payload?e.allDogs:c});case"ORDER_BY_NAME":var r="Asc"===t.payload?e.allDogs.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:t.name.toLowerCase()>e.name.toLowerCase()?-1:0})):e.allDogs.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?-1:t.name.toLowerCase()>e.name.toLowerCase()?1:0}));return Object(D.a)(Object(D.a)({},e),{},{dogs:r});case"ORDER_BY_WEIGHT":var i="Light"===t.payload?e.dogs.sort((function(e,t){return e.weight>t.weight?1:t.weight>e.weight?-1:0})):e.dogs.sort((function(e,t){return e.weight>t.weight?-1:t.weight>e.weight?1:0}));return Object(D.a)(Object(D.a)({},e),{},{dogs:i});case"GET_DETAIL":return Object(D.a)(Object(D.a)({},e),{},{detail:t.payload});default:return e}},P=Object(I.c)(G,Object(I.b)(Object(I.a)(S.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));i.a.render(Object(o.jsxs)(h.a,{store:P,children:[Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(A,{})}),","]}),document.getElementById("root")),L()}},[[81,1,2]]]);
//# sourceMappingURL=main.8617d9f6.chunk.js.map