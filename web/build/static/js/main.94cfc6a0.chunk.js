(this.webpackJsonpstarscream_web=this.webpackJsonpstarscream_web||[]).push([[0],{162:function(e,a,t){e.exports=t(200)},167:function(e,a,t){},200:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),o=(t(167),t(36)),i=t(9),u=t(7),s=t(17),m=t(233),d=Object(m.a)((function(e){return{header:{colorDefault:e.palette.primary.dark},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},leftColumn:{backgroundColor:e.palette.layout.main,color:e.palette.common.white,borderTop:"1px solid ".concat(e.palette.util.separator)},topLine:{backgroundColor:e.palette.layout.main,color:e.palette.common.white},contentColumn:{backgroundColor:e.palette.common.white,minHeight:"calc(100vh - 64px)"},rightColumn:{backgroundColor:e.palette.layout.light},leftPanelButtonsText:{paddingLeft:e.spacing(1)},searchLineBase:{display:"flex",width:"100%"},createThreadButtonContainer:{display:"flex",width:"100%",height:"100%",alignItems:"stretch"},createThreadButtonBox:{display:"flex",width:"100%"},avatar:{marginLeft:e.spacing(2)}}})),E=t(153),p=t(107),f=t(235),h=Object(E.a)({overrides:{MuiAppBar:{colorPrimary:{backgroundColor:p.a[900]}}},palette:{primary:{main:f.a[600],dark:f.a[900],light:f.a[100]},layout:{main:f.a[800],dark:f.a[900],light:f.a[50]},util:{separator:"rgba(0, 0, 0, 0.12)"}}}),b=t(109),g=Object(E.a)({palette:{primary:{main:f.a[100],dark:f.a[300],light:f.a[50]},secondary:{main:b.a[700],dark:b.a[900],light:b.a[500]},util:{separator:"rgba(0, 0, 0, 0.12)"}}}),v=t(245),w=t(52),j=t(268),y=t(81),O=t.n(y),C=function(){return function(e){e||console.error("request endPoint undefined");var a=function(e,a){return console.log("request.".concat(e,":"),a)};return{endPoint:function(){return e},post:function(t){var n="".concat(e,"/").concat(t);return a("post",n),O.a.post(n).set("accept","application/json").withCredentials()},put:function(t){var n="".concat(e,"/").concat(t);return a("put",n),O.a.put(n).set("accept","application/json").withCredentials()},delete:function(t){var n="".concat(e,"/").concat(t);return a("delete",n),O.a.delete(n).set("accept","application/json").withCredentials()},get:function(t){var n="".concat(e,"/").concat(t);return a("get",n),O.a.get(n).set("accept","application/json").withCredentials()}}}("https://web.solomaha.com/apis")},k=l.a.createContext({user:null,token:null});function x(e){var a=l.a.useState(null),t=Object(u.a)(a,2),n=t[0],r=t[1],c=l.a.useState(null),o=Object(u.a)(c,2),i=o[0],s=o[1];return l.a.createElement(k.Provider,Object.assign({value:{user:n,setUser:r,token:i,setToken:s,isAdmin:function(){return!!n.is_admin}}},e))}var S=function(){return l.a.useContext(k)},W=Object(m.a)((function(e){return{threadsList:{paddingRight:e.spacing(6)},pagination:{display:"inline-flex"},paginationContainer:{display:"flex",justifyContent:"center"},ratingBadge:{color:e.palette.grey[500]}}})),N=t(269),_=t(241),A=t(243),q=t(204),B=t(239),z=t(238),D=t(267),F=t(72),T=t(240),L=t(237),P=t(236),U=t(261),I=t(244),R=t(266),Z=t(79),M=t.n(Z),J=t(146),G=t.n(J),H=t(145),Y=t.n(H);function $(e){var a=e.thread,t=(Object(s.a)(e,["thread"]),W()),n=Object(w.f)();var r=l.a.createElement(F.a,null,a.title),c=l.a.createElement(P.a,null,l.a.createElement(L.a,{badgeContent:a.reply_count,showZero:!0,color:"primary"},l.a.createElement(Y.a,{className:t.ratingBadge})),l.a.createElement(L.a,{badgeContent:a.views_count,showZero:!0,color:"primary"},l.a.createElement(G.a,{className:t.ratingBadge})));return l.a.createElement(l.a.Fragment,null,l.a.createElement(q.a,{button:!0,onClick:function(e){return t="/thread/".concat(a.id),void n.push(t);var t}},l.a.createElement(z.a,null,l.a.createElement(D.a,null,l.a.createElement(M.a,null))),l.a.createElement(B.a,{primary:r,secondary:"".concat(a.user.name," | ").concat(new Date(a.created_at).toLocaleString()),className:t.threadsList}),c),l.a.createElement(T.a,null))}function K(e){var a=e.articles,t=e.setArticles,n=(Object(s.a)(e,["articles","setArticles"]),W()),r=(Object(w.f)(),l.a.useState("newest")),c=Object(u.a)(r,2),o=c[0],i=c[1],m=l.a.useState(1),d=Object(u.a)(m,2),E=d[0],p=d[1],f=l.a.useState(1),h=Object(u.a)(f,2),b=h[0],g=h[1];function v(e){C().get("questions").query({page:e}).then((function(e){t(e.body.data),p(e.body.meta.last_page)})).catch((function(e){console.error(e)}))}return l.a.useEffect((function(){v(1)}),[]),l.a.createElement(_.a,{item:!0,xs:12},l.a.createElement(N.a,{p:1},l.a.createElement(A.a,null,l.a.createElement(q.a,null,l.a.createElement(B.a,{primary:"All threads"})),l.a.createElement(q.a,null,l.a.createElement(R.a,{value:o,size:"small",exclusive:!0,onChange:function(e,a){i(a)}},l.a.createElement(I.a,{value:"newest"},"Newest"),l.a.createElement(I.a,{value:"popular"},"Most popular"))),a.map((function(e,a){return l.a.createElement($,{thread:e,key:"artciles_".concat(a)})}))),l.a.createElement("div",{className:n.paginationContainer},l.a.createElement(U.a,{count:E,page:b,onChange:function(e,a){g(a),v(a)},className:n.pagination}))))}var Q=Object(m.a)((function(e){return{width100:{width:"100%"}}})),V=t(259),X=t(247),ee=t(25),ae=t(248),te=t(66),ne=t.n(te),le=t(105),re=t.n(le),ce=t(67),oe=t.n(ce),ie=t(68),ue=t.n(ie),se=t(264),me=t(246),de=t(205),Ee=t(147),pe=t.n(Ee),fe=t(3),he=pe()((function(e){return{paper_small:{maxWidth:"300px"},paper_middle:{maxWidth:"400px"},paper_large:{maxWidth:"500px"}}}));function be(e){var a=e.children,t=e.onCancel,n=void 0===t?function(){}:t,r=e.onAccept,c=void 0===r?function(){}:r,o=e.open,i=void 0===o||o,u=e.yes,m=void 0===u?"Yes":u,d=e.no,E=void 0===d?"No":d,p=e.size,f=void 0===p?"middle":p,h=(Object(s.a)(e,["children","onCancel","onAccept","open","yes","no","size"]),he()),b=h.paper_middle;switch(f){case"small":b=h.paper_small;break;case"large":b=h.paper_large;break;case"middle":break;default:console.error('Unresolved size props, expected ("small","middle","large"), got '.concat(f))}return l.a.createElement(se.a,{onClose:n,"aria-labelledby":"confirm-dialog-title",open:i},l.a.createElement(de.a,{className:b},l.a.createElement(me.a,{id:"confirm-dialog-title"},a),l.a.createElement(_.a,{container:!0},l.a.createElement(_.a,{item:!0,xs:6},l.a.createElement(X.a,{fullWidth:!0,size:"large",onClick:n},E)),l.a.createElement(_.a,{item:!0,xs:6},l.a.createElement(X.a,{fullWidth:!0,size:"large",onClick:c},m)))))}function ge(e){var a=e.author,t=e.thread,n=e.onEdited,r=void 0===n?function(){}:n,c=(Object(s.a)(e,["author","thread","onEdited"]),Object(w.f)()),o=S().user,m=l.a.useState(!1),d=Object(u.a)(m,2),E=d[0],p=d[1],f=l.a.useState({title:t.title,body:t.body}),h=Object(u.a)(f,2),b=h[0],g=h[1],v=l.a.useState(!1),j=Object(u.a)(v,2),y=j[0],O=j[1];function k(e){g(Object(i.a)(Object(i.a)({},b),{},Object(ee.a)({},e.target.name,e.target.value)))}return l.a.useEffect((function(){g({title:t.title,body:t.body})}),[t]),l.a.createElement(l.a.Fragment,null,l.a.createElement(be,{open:y,onAccept:function(){O(!1),C().delete("questions/".concat(t.id)).then((function(e){var a;a="/threads",c.push(a)})).catch((function(e){console.error(e)}))},onCancel:function(){return O(!1)}},"Are you sure you want delete thread: ",t.title),l.a.createElement(q.a,{id:"author"},l.a.createElement(z.a,null,l.a.createElement(D.a,null)),l.a.createElement(B.a,{primary:a.name,secondary:"posted ".concat(t.created_at&&new Date(t.created_at).toLocaleString()||"just now")}),o&&o.id===a.id&&l.a.createElement(P.a,null,!E&&l.a.createElement(l.a.Fragment,null,l.a.createElement(ae.a,{onClick:function(e){return p(!0)}},l.a.createElement(ne.a,null)),l.a.createElement(ae.a,{onClick:function(){return O(!0)}},l.a.createElement(re.a,null))),E&&l.a.createElement(l.a.Fragment,null,l.a.createElement(ae.a,{onClick:function(){C().put("questions/".concat(t.id)).send(b).then((function(e){console.log(e),p(!1),r(b)})).catch((function(e){console.error(e)}))}},l.a.createElement(oe.a,null)),l.a.createElement(ae.a,{onClick:function(e){p(!1),g({title:t.title,body:t.body})}},l.a.createElement(ue.a,null))))),l.a.createElement(q.a,{id:"question"},!E&&l.a.createElement(F.a,{variant:"h5"},t.title),E&&l.a.createElement(V.a,{fullWidth:!0,label:"Summary",required:!0,value:b.title,name:"title",variant:"outlined",onChange:k})),l.a.createElement(q.a,null,!E&&l.a.createElement(F.a,{variant:"body1"},t.body),E&&l.a.createElement(V.a,{fullWidth:!0,label:"Description",required:!0,value:b.body,name:"body",variant:"outlined",size:"small",onChange:k,multiline:!0,rows:6})))}function ve(e){var a=e.answer,t=e.onEdited,n=void 0===t?function(){}:t,r=(Object(s.a)(e,["answer","onEdited"]),S().user),c=l.a.useState(!1),o=Object(u.a)(c,2),i=o[0],m=o[1],d=l.a.useState(a.text),E=Object(u.a)(d,2),p=E[0],f=E[1];l.a.useEffect((function(){f(a.text)}),[a]);var h=l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,{variant:"h6"},a.user.name),!i&&a.text,i&&l.a.createElement(V.a,{fullWidth:!0,label:"Answer",variant:"outlined",size:"small",multiline:!0,rows:4,onChange:function(e){f(e.target.value)},value:p,required:!0}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(q.a,{alignItems:"flex-start"},l.a.createElement(z.a,null,l.a.createElement(D.a,null)),l.a.createElement(B.a,{primary:h,secondary:"posted ".concat(new Date(a.created_at).toLocaleString())}),r&&r.id===a.user.id&&l.a.createElement(P.a,null,!i&&l.a.createElement(l.a.Fragment,null,l.a.createElement(ae.a,{onClick:function(e){return m(!0)}},l.a.createElement(ne.a,{fontSize:"small"})),l.a.createElement(ae.a,{onClick:function(){C().delete("replies/".concat(a.id)).then((function(e){n()})).catch((function(e){console.error(e)}))}},l.a.createElement(re.a,{fontSize:"small"}))),i&&l.a.createElement(l.a.Fragment,null,l.a.createElement(ae.a,{onClick:function(){console.log(p),C().put("replies/".concat(a.id)).send({text:p}).then((function(e){console.log(e),m(!1),n(p)})).catch((function(e){console.error(e)}))}},l.a.createElement(oe.a,{fontSize:"small"})),l.a.createElement(ae.a,{onClick:function(e){m(!1),f(a.text)}},l.a.createElement(ue.a,{fontSize:"small"}))))),l.a.createElement(T.a,null))}var we=Object(j.a)()((function(e){var a=e.width,t=(Object(s.a)(e,["width"]),l.a.useState({})),n=Object(u.a)(t,2),r=n[0],c=n[1],o=l.a.useState({}),m=Object(u.a)(o,2),d=m[0],E=m[1],p=l.a.useState([]),f=Object(u.a)(p,2),h=f[0],b=f[1],g=l.a.useState(""),v=Object(u.a)(g,2),y=v[0],O=v[1],k=Object(w.g)().id,x=S().user,W=Q();function z(){C().get("questions/".concat(k,"/replies")).then((function(e){b(e.body.data)})).catch((function(e){console.error(e)}))}return l.a.useEffect((function(){C().get("questions/".concat(k)).then((function(e){c(e.body.data.user),E(Object(i.a)(Object(i.a)({},e.body.data),{},{replies:void 0,user:void 0,user_id:void 0})),b(e.body.data.replies)})).catch((function(e){console.error(e)}))}),[]),l.a.createElement(_.a,{item:!0,xs:12},l.a.createElement(N.a,{p:1},l.a.createElement(A.a,null,l.a.createElement(ge,{author:r,thread:d,onEdited:function(){C().get("questions/".concat(k)).then((function(e){E(Object(i.a)(Object(i.a)({},e.body.data),{},{replies:void 0,user:void 0,user_id:void 0}))})).catch((function(e){console.error(e)}))}}),l.a.createElement(T.a,null),l.a.createElement(q.a,{id:"answers"},l.a.createElement(A.a,{className:W.width100},h.map((function(e,a){return l.a.createElement(ve,{key:"answer_".concat(a),answer:e,onEdited:z})})))),x&&l.a.createElement(q.a,{id:"compose"},l.a.createElement(_.a,{container:!0},l.a.createElement(_.a,{item:!0,xs:12},l.a.createElement(V.a,{value:y,multiline:!0,rows:8,variant:"outlined",label:"Answer",fullWidth:!0,onChange:function(e){O(e.target.value)}})),Object(j.b)("sm",a)&&l.a.createElement(_.a,{item:!0,md:10}),l.a.createElement(_.a,{item:!0,xs:12,md:2},l.a.createElement(X.a,{fullWidth:!0,onClick:function(){C().post("questions/".concat(k,"/replies")).send({text:y}).then((function(e){z(),O("")})).catch((function(e){console.error(e)}))}},"Send")))),!x&&l.a.createElement(q.a,null,l.a.createElement(B.a,{secondary:"Login or sign up to leave messages"})))))})),je=t(260),ye=t(252),Oe=t(253);function Ce(e){var a=e.children,t=e.value,n=e.index,r=Object(s.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"thread-editor-tabpanel--".concat(n),"aria-labelledby":"thread-editor-".concat(n)},r),t===n&&a)}function ke(e){Object.assign({},e);var a=l.a.useState(0),t=Object(u.a)(a,2),n=t[0],r=t[1],c=l.a.useState({title:null,body:null}),o=Object(u.a)(c,2),s=o[0],m=o[1],d=l.a.useState([]),E=Object(u.a)(d,2),p=E[0],f=E[1],h=l.a.useState(null),b=Object(u.a)(h,2),g=b[0],v=b[1];function w(e){m(Object(i.a)(Object(i.a)({},s),{},Object(ee.a)({},e.target.name,e.target.value)))}return l.a.useEffect((function(){C().get("categories").then((function(e){f(e.body.data)})).catch((function(e){console.error(e)}))}),[]),l.a.createElement(_.a,{item:!0,xs:12},l.a.createElement(je.a,{value:n,onChange:function(e,a){r(a)},"aria-label":"simple tabs example",variant:"fullWidth"},l.a.createElement(ye.a,{label:"Edit"}),l.a.createElement(ye.a,{label:"Preview"})),l.a.createElement(Ce,{value:n,index:0},l.a.createElement(A.a,null,l.a.createElement(q.a,null,l.a.createElement(F.a,{variant:"h6"},"Create new thread")),l.a.createElement(q.a,null,l.a.createElement(V.a,{label:"Sumarry",value:s.title||"",required:!0,fullWidth:!0,variant:"outlined",name:"title",onChange:w})),l.a.createElement(q.a,null,l.a.createElement(V.a,{label:"Description",value:s.body||"",required:!0,fullWidth:!0,variant:"outlined",multiline:!0,rows:10,name:"body",onChange:function(e){return w(e)}})),l.a.createElement(q.a,null,l.a.createElement(V.a,{select:!0,name:"category_id",label:"Category",value:g||"",onChange:function(e){v(e.target.value)},fullWidth:!0,variant:"outlined"},p.map((function(e){return l.a.createElement(Oe.a,{key:e.id,value:e.id},e.name)})))),l.a.createElement(q.a,null,l.a.createElement(X.a,{fullWidth:!0,variant:"outlined",onClick:function(){C().post("questions").send(Object(i.a)(Object(i.a)({},s),{},{category_id:g})).then((function(e){})).catch((function(e){}))}},"Submit")))),l.a.createElement(Ce,{value:n,index:1},l.a.createElement(ge,{author:{username:"Andreev Danil"},thread:{title:s.title||"Fill the summary input line",body:s.body||"Fill the description input line"}})))}var xe=t(249),Se=t(254),We=t(255),Ne=t(256),_e=t(263),Ae=Object(m.a)((function(e){return{paper:{maxWidth:"300px"}}}));function qe(e){var a=e.authData,t=e.setAuthData,n=e.onComplete,r=void 0===n?function(){}:n,c=(Object(s.a)(e,["authData","setAuthData","onComplete"]),l.a.useState(!1)),o=Object(u.a)(c,2),m=o[0],d=o[1],E=l.a.useState(null),p=Object(u.a)(E,2),f=p[0],h=p[1],b=l.a.useState({email:null,password:null,remember_me:!1}),g=Object(u.a)(b,2),v=g[0],w=g[1],j=S().setUser,y=Ae();return a||(a=v,t=w),l.a.createElement(de.a,{className:y.paper},l.a.createElement(A.a,null,f&&l.a.createElement(q.a,null,l.a.createElement(F.a,{color:"error",variant:"body2"},f)),l.a.createElement(q.a,null,l.a.createElement(xe.a,{placeholder:"Email",fullWidth:!0,required:!0,autoComplete:"email",onChange:function(e){e.persist(),t((function(a){return Object(i.a)(Object(i.a)({},a),{},{email:e.target.value||null})}))},value:a.email||""})),l.a.createElement(q.a,null,l.a.createElement(xe.a,{id:"standard-adornment-password",type:m?"text":"password",value:a.password||"",placeholder:"Password",onChange:function(e){e.persist(),t((function(a){return Object(i.a)(Object(i.a)({},a),{},{password:e.target.value||null})}))},autoComplete:"password",fullWidth:!0,required:!0,endAdornment:l.a.createElement(Se.a,{position:"end"},l.a.createElement(ae.a,{"aria-label":"toggle password visibility",onClick:function(e){d((function(e){return!e}))}},m?l.a.createElement(We.a,null):l.a.createElement(Ne.a,null)))})),l.a.createElement(q.a,null,l.a.createElement(B.a,{primary:"Remember me"}),l.a.createElement(P.a,null,l.a.createElement(_e.a,{checked:a.remember_me,onChange:function(e){e.persist(),t((function(a){return Object(i.a)(Object(i.a)({},a),{},{remember_me:e.target.checked||!1})}))}}))),l.a.createElement(q.a,null,l.a.createElement(X.a,{fullWidth:!0,onClick:function(){a.email&&a.password?C().post("auth/login").send(a).then((function(e){console.log(e),j(e.body.data),r(e.body.data)})).catch((function(e){var a=JSON.parse(e.message).message;switch(e.status){case 403:h(a);break;case 422:h("Incorrect email or password");break;default:h("Unexpected error, see console for more information"),console.error(e)}})):h("Credential cannot be empty")}},"Sign in"))))}var Be=t(251);function ze(e){e.authData,e.setAuthData;var a=e.onComplete,t=(Object(s.a)(e,["authData","setAuthData","onComplete"]),l.a.useState(!1)),n=Object(u.a)(t,2),r=n[0],c=n[1],o=l.a.useState({username:null,password:null,email:null}),m=Object(u.a)(o,2),d=m[0],E=m[1],p=S().setUser,f=Object(w.f)(),h=l.a.useState({username:null,email:null,password:null,repeatpassword:null}),b=Object(u.a)(h,2),g=b[0],v=b[1];function j(e){e.persist(),E((function(a){return Object(i.a)(Object(i.a)({},a),{},Object(ee.a)({},e.target.name,e.target.value||null))}))}return l.a.createElement(A.a,null,l.a.createElement(q.a,null,l.a.createElement(B.a,{primary:l.a.createElement(xe.a,{placeholder:"Username",fullWidth:!0,required:!0,name:"username",onChange:j,value:d.username||""}),secondary:g.username&&l.a.createElement(Be.a,{error:!0}," ",g.username," ")})),l.a.createElement(q.a,null,l.a.createElement(B.a,{primary:l.a.createElement(xe.a,{placeholder:"Email",fullWidth:!0,required:!0,name:"email",onChange:j,value:d.email||""}),secondary:g.email&&l.a.createElement(Be.a,{error:!0}," ",g.email," ")})),l.a.createElement(q.a,null,l.a.createElement(B.a,{primary:l.a.createElement(xe.a,{id:"standard-adornment-password",type:r?"text":"password",value:d.password||"",placeholder:"Password",onChange:function(e){e.persist(),E((function(a){return Object(i.a)(Object(i.a)({},a),{},{password:e.target.value||null})}))},required:!0,endAdornment:l.a.createElement(Se.a,{position:"end"},l.a.createElement(ae.a,{"aria-label":"toggle password visibility",onClick:function(e){c((function(e){return!e}))}},r?l.a.createElement(We.a,null):l.a.createElement(Ne.a,null)))}),secondary:g.password&&l.a.createElement(Be.a,{error:!0}," ",g.password," ")})),l.a.createElement(q.a,null,l.a.createElement(X.a,{fullWidth:!0,onClick:function(){C().post("auth/register").send(Object(i.a)(Object(i.a)({},d),{},{password_confirmation:d.password,name:d.username,username:void 0})).then((function(e){var t;p(e.body.data),t="/user/".concat(e.body.data.id),f.push(t),a()})).catch((function(e){console.error(e),function(e){switch(v({username:null,email:null,password:null,repeatpassword:null}),e.status){case 422:v((function(e){return Object(i.a)(Object(i.a)({},e),{},{password:"Password is too short"})}));var a=JSON.parse(e.message).errors,t=function(e){var t="Unresolved error",n=a[e][0];if(n){switch(n){case"validation.email":t="Incorrect email";break;case"validation.min.string":t="Password is too short";break;case"validation.unique":t="Username is already taken"}v((function(a){return Object(i.a)(Object(i.a)({},a),{},Object(ee.a)({},e,t))}))}};for(var n in a)t(n)}}(e)}))}},"Sign up")))}var De=t(108),Fe=Object(m.a)((function(e){return{listItemTextFix:{paddingRight:e.spacing(5)},dangerZone:{backgroundColor:De.a[700],color:e.palette.common.white,borderColor:e.palette.common.white}}}));function Te(){var e=function(){var e=l.a.useState(null),a=Object(u.a)(e,2),t=a[0],n=a[1];return[t,l.a.useCallback((function(e){null!==e&&n(e.getBoundingClientRect())}),[])]}(),a=Object(u.a)(e,2),t=a[0],n=a[1],r=l.a.useState(!1),c=Object(u.a)(r,2),o=c[0],s=c[1],m=Object(w.g)().id,d=l.a.useState({name:"",email:"",interests:""}),E=Object(u.a)(d,2),p=E[0],f=E[1],h=l.a.useState({name:"",email:"",interests:""}),b=Object(u.a)(h,2),g=b[0],v=b[1],j=l.a.useState(!0),y=Object(u.a)(j,2),O=y[0],k=y[1],x=S(),W=x.user,z=x.setUser,F=Fe(),T=!1;function L(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&k(!0),C().get("users/".concat(m)).then((function(a){var t=Object(i.a)(Object(i.a)({},a.body.data),{},{id:void 0,interests:"lol"});f(t),v(t),e&&k(!1)})).catch((function(a){console.error(a),e&&k(!1)}))}function U(e){v(Object(i.a)(Object(i.a)({},g),{},Object(ee.a)({},e.target.name,e.target.value)))}return l.a.useEffect((function(){T=!0,L(!0)}),[]),l.a.useEffect((function(){L(!0)}),[m,W]),T||O?null:l.a.createElement(q.a,null,l.a.createElement(_.a,{container:!0},l.a.createElement(_.a,{item:!0,xs:12,md:6},l.a.createElement(N.a,{p:1},l.a.createElement(D.a,{ref:n,style:{width:"100%",height:t&&t.width}}))),l.a.createElement(_.a,{item:!0,xs:12,md:6},l.a.createElement(A.a,null,l.a.createElement(q.a,null,l.a.createElement(B.a,{primary:"User info",secondary:"Last updated ".concat(new Date(g.updated_at).toLocaleString()||"recently"),className:Object(fe.a)(o&&F.listItemTextFix)}),W&&W.id===+m&&l.a.createElement(P.a,null,!o&&l.a.createElement(ae.a,{onClick:function(){s(!0)}},l.a.createElement(ne.a,{fontSize:"small"})),o&&l.a.createElement(l.a.Fragment,null,l.a.createElement(ae.a,{onClick:function(){C().put("users/".concat(m)).send(g).then((function(e){z(e.body.data),s(!1),L()})).catch((function(e){console.error(e)}))}},l.a.createElement(oe.a,{fontSize:"small"})),l.a.createElement(ae.a,{onClick:function(){v(p),s(!1)}},l.a.createElement(ue.a,{fontSize:"small"}))))),l.a.createElement(q.a,null,l.a.createElement(V.a,{disabled:!o,fullWidth:!0,name:"name",label:"Name",value:g.name,onChange:U})),l.a.createElement(q.a,null,l.a.createElement(V.a,{disabled:!o,name:"email",fullWidth:!0,label:"Email",value:g.email,onChange:U})),l.a.createElement(q.a,null,l.a.createElement(V.a,{disabled:!o,name:"interests",fullWidth:!0,label:"Interests",value:g.interests,onChange:U}))))))}var Le=t(250);function Pe(e){var a=e.handleClick,t=e.shown,n=e.name;return l.a.createElement(Se.a,{position:"end"},l.a.createElement(ae.a,{"aria-label":"toggle password visibility",onClick:function(e){return a(e,n)}},t?l.a.createElement(We.a,null):l.a.createElement(Ne.a,null)))}function Ue(){var e=l.a.useState({oldpassword:!1,newpassword:!1,confirmnewpassword:!1}),a=Object(u.a)(e,2),t=a[0],n=a[1];function r(e,a){n(Object(i.a)(Object(i.a)({},t),{},Object(ee.a)({},a,!t[a])))}return l.a.createElement(q.a,null,l.a.createElement(Le.a,{fullWidth:!0},l.a.createElement(Be.a,null,"Change password"),l.a.createElement(_.a,{container:!0},l.a.createElement(_.a,{item:!0,xs:12,md:6},l.a.createElement(N.a,{p:1},l.a.createElement(xe.a,{required:!0,type:t.oldpassword?"text":"password",fullWidth:!0,placeholder:"Old password",autoComplete:"password",endAdornment:l.a.createElement(Pe,{handleClick:r,shown:t.oldpassword,name:"oldpassword"})}))),l.a.createElement(_.a,{item:!0,xs:12,md:6},l.a.createElement(N.a,{p:1},l.a.createElement(xe.a,{required:!0,type:t.newpassword?"text":"password",fullWidth:!0,placeholder:"New password",autoComplete:"new-password",endAdornment:l.a.createElement(Pe,{handleClick:r,shown:t.newpassword,name:"newpassword"})}),l.a.createElement(xe.a,{required:!0,type:t.confirmnewpassword?"text":"password",fullWidth:!0,placeholder:"Confirm new password",autoComplete:"confirm-new-password",endAdornment:l.a.createElement(Pe,{handleClick:r,shown:t.confirmnewpassword,name:"confirmnewpassword"})}))),l.a.createElement(_.a,{item:!0,xs:12},l.a.createElement(X.a,{fullWidth:!0,variant:"outlined"},"Change password")))))}function Ie(){var e=Fe(),a=l.a.useState(!1),t=Object(u.a)(a,2),n=t[0],r=t[1],c=S(),o=c.user,i=c.setUser,s=c.setToken,m=Object(w.f)();return l.a.createElement(q.a,{className:e.dangerZone},l.a.createElement(be,{open:n,onCancel:function(){r(!1)},onAccept:function(){r(!1),o&&C().delete("users/".concat(o.id)).then((function(e){var a;i(null),s(null),a="/threads",m.push(a)})).catch((function(e){console.log(e)}))}},"Are you sure you want delete account: ",o.name),l.a.createElement(Le.a,{fullWidth:!0},l.a.createElement(Be.a,{className:e.dangerZone},"Danger zone"),l.a.createElement(X.a,{fullWidth:!0,variant:"outlined",className:e.dangerZone,onClick:function(e){return r(!0)}},"Delete account")))}function Re(){var e=S().user,a=Object(w.g)().id;return l.a.createElement(_.a,{item:!0,xs:12},l.a.createElement(A.a,null,l.a.createElement(Te,null),e&&e.id===+a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(T.a,null),l.a.createElement(Ue,null),l.a.createElement(T.a,null),l.a.createElement(Ie,null),l.a.createElement(T.a,null))))}var Ze=t(257),Me=t(258),Je=t(152),Ge=t.n(Je),He=t(151),Ye=t.n(He),$e=t(150),Ke=t.n($e),Qe=t(149),Ve=t.n(Qe),Xe=t(148),ea=t.n(Xe);function aa(e){var a=e.thread,t=(Object(s.a)(e,["thread"]),d(),Object(w.f)()),n=l.a.createElement(F.a,{variant:"body2"},a.title),r=l.a.createElement(l.a.Fragment,null,"".concat(a.answers," answers"));return l.a.createElement(l.a.Fragment,null,l.a.createElement(q.a,{button:!0,onClick:function(e){return a="/thread/1",void t.push(a);var a}},l.a.createElement(z.a,null,l.a.createElement(D.a,null,l.a.createElement(M.a,null))),l.a.createElement(B.a,{primary:n,secondary:r})),l.a.createElement(T.a,null))}function ta(e){var a=e.articles,t=e.setArticles;Object(s.a)(e,["articles","setArticles"]);return l.a.createElement(w.c,null,l.a.createElement(w.a,{path:"/threads"},l.a.createElement(K,{articles:a,setArticles:t})),l.a.createElement(w.a,{path:"/thread/:id"},l.a.createElement(we,null)),l.a.createElement(w.a,{path:"/editthread/:id"},l.a.createElement(ke,null)),l.a.createElement(w.a,{path:"/user/:id"},l.a.createElement(Re,null)))}var na=Object(j.a)()((function(e){var a=e.width,t=(Object(s.a)(e,["width"]),d()),n=Object(w.f)(),r=l.a.useState(""),c=Object(u.a)(r,2),o=c[0],m=c[1],E=l.a.useState([]),p=Object(u.a)(E,2),f=p[0],h=p[1],b=l.a.useState(!1),y=Object(u.a)(b,2),O=y[0],k=y[1],x=l.a.useState({email:null,password:null,remember_me:!1}),W=Object(u.a)(x,2),z=W[0],L=W[1],P=l.a.useState(!1),U=Object(u.a)(P,2),I=U[0],R=U[1],Z=S(),J=Z.user,G=Z.setUser,H=Z.setToken,Y=l.a.useState(!1),$=Object(u.a)(Y,2),K=$[0],Q=$[1],ee=!1;function ae(e){k(!1),R(!1)}function te(e){n.push(e)}return l.a.useEffect((function(){ee=!0,C().get("users/me").then((function(e){G(Object(i.a)(Object(i.a)({},e.body.data),{},{created_at:void 0,updated_at:void 0})),Q(!0)})).catch((function(e){G(null),Q(!0)}))}),[]),l.a.useEffect((function(){ee=!0}),[]),ee||!K?null:l.a.createElement(l.a.Fragment,null,l.a.createElement(se.a,{"aria-labelledby":"auth-dialog",open:O,onClose:function(){k(!1),L({username:null,password:null})}},l.a.createElement(me.a,{id:"auth-dialog-title"},"Authentication"),l.a.createElement(qe,{authData:z,setAuthData:L,onComplete:ae})),l.a.createElement(se.a,{"aria-labelledby":"auth-dialog",open:I,onClose:function(){R(!1)}},l.a.createElement(me.a,{id:"auth-dialog-title"},"Registration"),l.a.createElement(ze,{onComplete:ae})),l.a.createElement(Ze.a,{position:"static"},l.a.createElement(Me.a,null,l.a.createElement(F.a,{variant:"h6",className:t.title},"Forum"),!J&&l.a.createElement(X.a,{color:"inherit",onClick:function(){return R(!0)}},"Sign up"),!J&&l.a.createElement(X.a,{color:"inherit",onClick:function(){return k(!0)}},"Login"),J&&l.a.createElement(X.a,{color:"inherit"},J.name,l.a.createElement(D.a,{className:t.avatar},l.a.createElement(M.a,null))),J&&l.a.createElement(X.a,{color:"inherit",onClick:function(){C().post("auth/logout").send({}).then((function(e){H(null),G(null)})).catch(console.error)}},"Logout"))),l.a.createElement(_.a,{container:!0},Object(j.b)("sm",a)&&l.a.createElement(_.a,{item:!0,md:1,lg:2}),l.a.createElement(_.a,{item:!0,xs:12,md:10,lg:8,id:"page"},l.a.createElement(N.a,null,l.a.createElement(v.a,{theme:g},l.a.createElement(_.a,{container:!0,className:t.topLine},l.a.createElement(_.a,{item:!0,xs:12,md:2}),l.a.createElement(_.a,{item:!0,xs:12,md:7},l.a.createElement(N.a,{p:1},l.a.createElement("div",{className:t.searchLineBase},l.a.createElement(V.a,{fullWidth:!0,variant:"filled",label:"Find question",size:"small",name:"search",onChange:function(e){m(e.target.value)},autoComplete:"search"}),l.a.createElement(X.a,{variant:"contained",color:"primary",onClick:function(){var e=C().get("questions");o&&""!==o&&(e=e.query({search:o})),e.then((function(e){h(e.body.data)})).catch((function(e){console.error(e)}))}},l.a.createElement(ea.a,null))))),l.a.createElement(_.a,{item:!0,xs:12,md:3},l.a.createElement("div",{className:t.createThreadButtonContainer},l.a.createElement(N.a,{p:1,className:t.createThreadButtonBox},l.a.createElement(X.a,{fullWidth:!0,variant:"contained",color:"secondary",className:t.createThreadButton,onClick:function(e){return te("/editthread/new")}},"Create thread")))))),l.a.createElement(_.a,{container:!0},l.a.createElement(v.a,{theme:g},l.a.createElement(_.a,{item:!0,xs:12,md:2,className:t.leftColumn},l.a.createElement(N.a,{p:1},l.a.createElement(A.a,null,l.a.createElement(q.a,{dense:!0,button:!0,onClick:function(e){return te("/threads")}},l.a.createElement(Ve.a,{fontSize:"small"}),l.a.createElement(B.a,{primary:"All threads",className:t.leftPanelButtonsText})),l.a.createElement(q.a,{dense:!0,button:!0,onClick:function(e){return te("/threads/my")}},l.a.createElement(Ke.a,{fontSize:"small"}),l.a.createElement(B.a,{primary:"My threads",className:t.leftPanelButtonsText})),l.a.createElement(q.a,{dense:!0,button:!0,onClick:function(e){return te("/threads/reviewed")}},l.a.createElement(Ye.a,{fontSize:"small"}),l.a.createElement(B.a,{primary:"Commented by me",className:t.leftPanelButtonsText})),l.a.createElement(T.a,null),J&&l.a.createElement(q.a,{dense:!0,button:!0,onClick:function(e){return te("/user/".concat(J.id))}},l.a.createElement(Ge.a,{fontSize:"small"}),l.a.createElement(B.a,{primary:"My account",className:t.leftPanelButtonsText})))))),l.a.createElement(_.a,{item:!0,xs:12,md:7,className:t.contentColumn},l.a.createElement(_.a,{container:!0},l.a.createElement(ta,{articles:f,setArticles:h}))),l.a.createElement(_.a,{item:!0,xs:12,md:3,className:t.rightColumn},l.a.createElement(N.a,{p:1},l.a.createElement(A.a,null,l.a.createElement(q.a,null,l.a.createElement(B.a,{primary:"Top 10 threads"})),l.a.createElement(T.a,null),[{title:"\u041a\u0430\u043a\u0438\u0435 \u043a\u043d\u0438\u0433\u0438 \u0447\u0438\u0442\u0430\u0442\u044c \u043f\u043e python \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u0435 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u044f?\n",answers:4},{title:"\u041a\u0430\u043a \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u043a input?",answers:2},{title:"\u041a\u0430\u043a\u043e\u0439 \u043c\u043e\u043d\u0438\u0442\u043e\u0440 \u043d\u0430 IPS \u043c\u0430\u0442\u0440\u0438\u0446\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c?",answers:8},{title:"\u041a\u0430\u043a \u0443\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u0430\u043d\u0434\u0440\u043e\u0438\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u043e \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0438 \u0441 \u0432\u0435\u0431 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439?",answers:4},{title:"\u0427\u0442\u043e \u043d\u0435 \u0442\u0430\u043a \u0441 \u043a\u043e\u0434\u043e\u043c \u044e\u0442\u0443\u0431\u0430?",answers:10}].map((function(e,a){return l.a.createElement(aa,{key:"top_artciles_".concat(a),thread:e})})))))))),Object(j.b)("sm",a)&&l.a.createElement(_.a,{item:!0,md:1,lg:2})))}));var la=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(x,null,l.a.createElement(v.a,{theme:h},l.a.createElement(o.a,null,l.a.createElement(na,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(la,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[162,1,2]]]);
//# sourceMappingURL=main.94cfc6a0.chunk.js.map