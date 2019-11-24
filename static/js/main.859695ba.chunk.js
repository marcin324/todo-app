(this["webpackJsonplifestyle-app"]=this["webpackJsonplifestyle-app"]||[]).push([[0],{50:function(e,n,t){e.exports=t(64)},64:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(27),i=t.n(a),c=t(18),u=t(19),l=t(21),d=t(20),f=t(22),s=t(7),p=t(6),m=t(25),b=t(9),h=t(13),g=t(39),v=t(42),O=t(23),j=t(17),y=t(43),x=t.n(y);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(t,!0).forEach((function(n){Object(j.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k={todo:[{id:0,title:"Zdoby\u0107 pierwsz\u0105 prac\u0119 jako frontend developer",deadline:"2020-01-01",important:!0,finishDate:null}],done:[]},T=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE_TASK":return w({},n,Object(j.a)({},t.itemType,Object(O.a)(n[t.itemType].filter((function(e){return e.id!==t.id})))));case"ADD_TASK":return w({},n,{todo:[].concat(Object(O.a)(n.todo),[{id:t.id,title:t.title,deadline:t.deadline,important:t.important,finishDate:null}])});case"CHANGE_TASK_STATUS":var r={todo:Object(O.a)(n.todo.filter((function(e){return e.id===t.id})))};return r=r.todo.shift(),w({},n,(e={},Object(j.a)(e,t.itemType,Object(O.a)(n[t.itemType].filter((function(e){return e.id!==t.id})))),Object(j.a)(e,"done",[].concat(Object(O.a)(n.done),[w({},r,{finishDate:(new Date).toISOString().slice(0,10)})])),e));default:return n}};function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(t,!0).forEach((function(n){Object(j.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S={text:"",date:(new Date).toISOString().slice(0,10),checked:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE_TEXT_FORM":return z({},e,{text:n.text});case"UPDATE_DATE_FORM":return z({},e,{date:n.date});case"UPDATE_CHECKBOX_FORM":return z({},e,{checked:n.checked});default:return e}},P=function(e){return Object(h.combineReducers)({router:Object(m.b)(e),taskReducer:T,formReducer:C})},A={todo:[{id:0,title:"Zdoby\u0107 pierwsz\u0105 prac\u0119 jako frontend developer",deadline:"2020-01-01",important:!0,finishDate:null}],done:[]},F=Object(b.a)({basename:"/todo_app"});var _=t(3),R=t(2),M=t(15),I=t(16),U=t(28);function V(){var e=Object(_.a)(["\n  display: block;\n  width: 67px;\n  height: 67px;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &.active {\n    background-color: white;\n  }\n"]);return V=function(){return e},e}var K=R.d.button(V()),N=o.a.createContext("todo"),Z=function(e){return function(n){return o.a.createElement(N.Consumer,null,(function(t){return o.a.createElement(e,Object.assign({},n,{cardContext:t}))}))}};function X(){var e=Object(_.a)(["\n  margin-bottom: 50px;\n  padding: 15px 20px;\n  border-radius: 5px;\n  color: black;\n  text-decoration: none;\n  font-size: ",";\n"]);return X=function(){return e},e}function H(){var e=Object(_.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 80px 10px;\n  width: 150px;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"]);return H=function(){return e},e}var B=R.d.div(H(),(function(e){var n=e.activeColor,t=e.theme;return n?t[n]:t.todo})),G=Object(R.d)(K)(X(),(function(e){return e.theme.fontSize.xl})),J=function(e){var n=e.cardContext;return o.a.createElement(B,{activeColor:n},o.a.createElement(G,{as:U.a,to:"/todo",activeclass:"active"},o.a.createElement(M.a,{icon:I.b})),o.a.createElement(G,{as:U.a,to:"/done",activeclass:"active"},o.a.createElement(M.a,{icon:I.d})))};J.defaultProps={cardContext:"todo"};var W=Z(J);function q(){var e=Object(_.a)(["\n  font-size: ",";\n  font-weight: ",";\n\n  &.active {\n    background-color: white;\n  }\n"]);return q=function(){return e},e}var L=R.d.h1(q(),(function(e){var n=e.theme;return e.big?n.fontSize.xl:n.fontSize.l}),(function(e){return e.theme.bold}));function Q(){var e=Object(_.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return Q=function(){return e},e}var Y=R.d.p(Q(),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.light}));function $(){var e=Object(_.a)(["\n  padding: 15px 30px;\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n  border: none;\n  border-radius: 50px;\n\n  ::placeholder {\n    letter-spacing: 1px;\n    color: ",";\n  }\n"]);return $=function(){return e},e}var ee=R.d.input($(),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.regular}),(function(e){return e.theme.grey200}),(function(e){return e.theme.grey300}));function ne(){var e=Object(_.a)(["\n      background-color: ",";\n      width: 105px;\n      height: 30px;\n      font-size: 10px;\n    "]);return ne=function(){return e},e}function te(){var e=Object(_.a)(["\n      background-color: ",";\n      width: 105px;\n      height: 30px;\n      font-size: 10px;\n    "]);return te=function(){return e},e}function re(){var e=Object(_.a)(["\n  margin: 25px 0 0 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",';\n  width: 220px;\n  height: 47px;\n  border: none;\n  border-radius: 50px;\n  font-family: "Montserrat";\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ',"\n\n  ","\n"]);return re=function(){return e},e}var oe=R.d.button(re(),(function(e){var n=e.activeColor,t=e.theme;return n?t[n]:t.todo}),(function(e){return e.secondary&&Object(R.c)(te(),(function(e){return e.theme.grey200}))}),(function(e){return e.tertiary&&Object(R.c)(ne(),(function(e){return e.theme.todo}))}));function ae(){var e=Object(_.a)(["\n  margin: auto 0;\n"]);return ae=function(){return e},e}function ie(){var e=Object(_.a)(["\n  padding: 15px 10px;\n  font-size: ",";\n  font-weight: ",";\n"]);return ie=function(){return e},e}function ce(){var e=Object(_.a)(["\n  display: flex;\n  justify-content: flex-start;\n"]);return ce=function(){return e},e}function ue(){var e=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-basis: 40%;\n"]);return ue=function(){return e},e}function le(){var e=Object(_.a)(["\n  z-index: 9999;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 40px 80px 100px;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  width: 650px;\n  background-color: white;\n  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);\n  transform: translateX(",");\n  transition: all 0.4s ease-in-out;\n"]);return le=function(){return e},e}var de=R.d.form(le(),(function(e){return e.isVisible?"0":"105%"})),fe=R.d.div(ue()),se=R.d.div(ce()),pe=R.d.label(ie(),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.regular})),me=Object(R.d)(ee)(ae()),be=Object(p.c)((function(e){return{title:e.formReducer.text,important:e.formReducer.checked,deadline:e.formReducer.date}}),(function(e){return{updateTextForm:function(n){return e(function(e){return{type:"UPDATE_TEXT_FORM",text:e}}(n))},updateCheckedForm:function(n){return e(function(e){return{type:"UPDATE_CHECKBOX_FORM",checked:e}}(n))},updateDateForm:function(n){return e(function(e){return{type:"UPDATE_DATE_FORM",date:e}}(n))},addTask:function(n,t,r){return e(function(e,n,t){return{type:"ADD_TASK",id:x.a.v4(),title:e,deadline:n,important:t}}(n,t,r))}}}))((function(e){var n=e.isVisible,t=e.updateTextForm,r=e.updateCheckedForm,a=e.updateDateForm,i=e.addTask,c=e.title,u=e.deadline,l=e.important,d=(new Date).toISOString().slice(0,10);return o.a.createElement(de,{isVisible:n,onSubmit:function(e){e.preventDefault(),i(c,u,l),t(""),a(d),r(!1)}},o.a.createElement(L,{big:!0},"Dodaj nowe zadanie"),o.a.createElement(fe,null,o.a.createElement(ee,{type:"text",placeholder:"Wpisz zadanie",value:c,onChange:function(e){return t(e.target.value)}}),o.a.createElement(se,null,o.a.createElement(pe,{htmlFor:"date"},"Termin wykonania:"),o.a.createElement(ee,{type:"date",value:u,min:d,onChange:function(e){return a(e.target.value)}})),o.a.createElement(se,null,o.a.createElement(me,{type:"checkbox",checked:l,id:"important",onChange:function(e){return r(e.target.checked)}}),o.a.createElement(pe,{htmlFor:"important"},"Priorytet"))),o.a.createElement(oe,null,"Dodaj"))}));function he(){var e=Object(_.a)(["\n  position: fixed;\n  bottom: 40px;\n  right: 20px;\n  width: 55px;\n  height: 55px;\n  font-size: ",";\n  background-color: ",";\n  border-radius: 50%;\n  z-index: 10000;\n"]);return he=function(){return e},e}function ge(){var e=Object(_.a)(["\n  margin: 0;\n  font-size: ",";\n  font-weight: ",";\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return ge=function(){return e},e}function ve(){var e=Object(_.a)(["\n  margin: 0 0 10px;\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return ve=function(){return e},e}function Oe(){var e=Object(_.a)(["\n  padding: 50px 100px 0;\n  margin: 0 0 20px 0;\n"]);return Oe=function(){return e},e}function je(){var e=Object(_.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 100px;\n  padding: 50px 100px;\n"]);return je=function(){return e},e}var ye=R.d.div(je()),xe=R.d.div(Oe()),Ee=Object(R.d)(L)(ve()),we=Object(R.d)(Y)(ge(),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.bold})),ke=Object(R.d)(K)(he(),(function(e){return e.theme.fontSize.l}),(function(e){return e.theme.todo})),Te=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).state={isNewItemFormVisible:!1},t.handleNewItemFormToggle=function(){t.setState((function(e){return{isNewItemFormVisible:!e.isNewItemFormVisible}}))},t}return Object(f.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.cardContext,r=e.todo,a=this.state.isNewItemFormVisible;return o.a.createElement(o.a.Fragment,null,o.a.createElement(W,null),o.a.createElement(xe,null,o.a.createElement(Ee,{big:!0,as:"h1"},"todo"===t&&"Twoje zadania czekaj\u0105ce na realizacj\u0119","done"===t&&"Zadania zrealizowane"),o.a.createElement(we,null,"todo"===t&&"liczba zada\u0144: ".concat(r.length))),o.a.createElement(ye,null,n),"todo"===t&&o.a.createElement(ke,{onClick:this.handleNewItemFormToggle},o.a.createElement(M.a,{icon:I.c})),o.a.createElement(be,{isVisible:a}))}}]),n}(r.Component);Te.defaultProps={cardContext:"todo"};var De=Object(p.c)((function(e){return{todo:e.taskReducer.todo}}))(Z(Te));function ze(){var e=Object(_.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return ze=function(){return e},e}function Se(){var e=Object(_.a)(["\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return Se=function(){return e},e}function Ce(){var e=Object(_.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 5px 0 0;\n"]);return Ce=function(){return e},e}function Pe(){var e=Object(_.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Pe=function(){return e},e}function Ae(){var e=Object(_.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    "]);return Ae=function(){return e},e}function Fe(){var e=Object(_.a)(["\n      background-color: ",";\n    "]);return Fe=function(){return e},e}function _e(){var e=Object(_.a)(["\n  position: relative;\n  padding: 17px 30px;\n\n  ","\n\n  ","\n"]);return _e=function(){return e},e}function Re(){var e=Object(_.a)(["\n  min-height: 300px;\n  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.2);\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  display: grid;\n  grid-template-rows: 0.25fr 1fr;\n"]);return Re=function(){return e},e}var Me=R.d.div(Re()),Ie=R.d.div(_e(),(function(e){return e.colored&&Object(R.c)(Fe(),(function(e){var n=e.activeColor,t=e.theme;return n?t[n]:t.todo}))}),(function(e){return e.flex&&Object(R.c)(Ae())})),Ue=R.d.div(Pe()),Ve=Object(R.d)(L)(Ce()),Ke=Object(R.d)(Y)(Se(),(function(e){return e.theme.bold}),(function(e){return e.theme.fontSize.m}),(function(e){return e.isImportant?"red":"black"})),Ne=R.d.div(ze()),Ze=function(e){var n=e.cardContext,t=e.title,r=e.deadline,a=e.important,i=e.finishDate,c=e.id,u=e.removeTask,l=e.changeTaskStatus;return o.a.createElement(Me,null,o.a.createElement(Ie,{colored:!0,activeColor:n},o.a.createElement(Ve,null,"todo"===n&&"Zadanie do zrobienia",a&&o.a.createElement(M.a,{icon:I.a,color:"red"}),"done"===n&&"Zadanie wykonane")),o.a.createElement(Ie,{flex:!0},o.a.createElement(Ke,{isImportant:a},t),o.a.createElement(Ne,null,o.a.createElement(Y,null,"termin: ".concat(r)),o.a.createElement(Y,null,"done"===n&&"wykonano: ".concat(i))),o.a.createElement(Ue,null,o.a.createElement(oe,{secondary:!0,onClick:function(){return u(n,c)}},"Usu\u0144"),"todo"===n&&o.a.createElement(oe,{tertiary:!0,onClick:function(){return l(n,c)}},"Zrobione"))))};Ze.defaultProps={cardContext:"todo"};var Xe=Object(p.c)(null,(function(e){return{removeTask:function(n,t){return e(function(e,n){return{type:"REMOVE_TASK",itemType:e,id:n}}(n,t))},changeTaskStatus:function(n,t){return e(function(e,n){return{type:"CHANGE_TASK_STATUS",itemType:e,id:n}}(n,t))}}}))(Z(Ze)),He=Object(p.c)((function(e){return{todo:e.taskReducer.todo}}))((function(e){var n=e.todo;return n.length>=2&&n.sort((function(e,n){return e.deadline>n.deadline?1:e.deadline<n.deadline?-1:0})),o.a.createElement(o.a.Fragment,null,o.a.createElement(De,{cardType:"todo"},n.map((function(e){return o.a.createElement(Xe,{cardType:"todo",id:e.id,key:e.id,title:e.title,deadline:e.deadline,important:e.important,finishDate:e.finishDate})}))))})),Be=Object(p.c)((function(e){return{done:e.taskReducer.done}}))((function(e){var n=e.done;return n.length>=2&&n.sort((function(e,n){return e.finishDate<n.finishDate?1:e.finishDate>n.finishDate?-1:0})),o.a.createElement(o.a.Fragment,null,o.a.createElement(De,{cardType:"done"},n.map((function(e){return o.a.createElement(Xe,{cardType:"done",id:e.id,key:e.id,title:e.title,deadline:e.deadline,finishDate:e.finishDate})}))))})),Ge=t(47);function Je(){var e=Object(_.a)(["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');\n/* @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600,900&display=swap'); */\n\n*, *::before, *::after {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nhtml {\n  font-size: 62.5%; /* happy rems */\n}\n\nbody {\n  padding-left: 150px;\n  font-size: 1.6rem; /* happy rems */\n  font-family: 'Montserrat', sans-serif;\n}\n"]);return Je=function(){return e},e}var We=Object(R.b)(Je()),qe={todo:"#F8C61A",done:"#1AA3E9",grey100:"hsl(0, 0%, 96%)",grey200:"hsl(0, 0%, 90%)",grey300:"hsl(0, 0%, 50%)",black:"hsl(0, 0%, 0%)",light:300,bold:600,fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2rem",l:"2.4rem",xl:"4rem"}},Le=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).state={pageType:"todo"},t.setCurrentPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=["todo","done"],r=t.props.location.pathname,o=n.filter((function(e){return r.includes(e)})),a=Object(Ge.a)(o,1),i=a[0];e.pageType!==i&&t.setState({pageType:i})},t}return Object(f.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setCurrentPage()}},{key:"componentDidUpdate",value:function(e,n){this.setCurrentPage(n)}},{key:"render",value:function(){var e=this.props.children,n=this.state.pageType;return o.a.createElement("div",null,o.a.createElement(N.Provider,{value:n},o.a.createElement(We,null),o.a.createElement(R.a,{theme:qe},e)))}}]),n}(r.Component),Qe=Object(s.g)(Le),Ye=function(e){var n=e.history,t=Object(v.composeWithDevTools)({});return Object(h.createStore)(P(n),A,t(Object(h.applyMiddleware)(Object(g.a)(n))))}({history:F}),$e=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p.a,{store:Ye},o.a.createElement(m.a,{history:F},o.a.createElement(Qe,null,o.a.createElement(s.d,null,o.a.createElement(s.b,{exact:!0,path:"/",render:function(){return o.a.createElement(s.a,{to:"/todo"})}}),o.a.createElement(s.b,{path:"/todo",component:He}),o.a.createElement(s.b,{path:"/done",component:Be}))))))}}]),n}(r.Component);i.a.render(o.a.createElement($e,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.859695ba.chunk.js.map