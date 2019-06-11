(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(98),a(37)),l=a.n(i),u=a(48),m=a(18),s=a(38),d=a.n(s),p=a(166),f=a(164),E=a(165),v=a(163),h=Object(v.a)({root:{flexGrow:1}});var g=function(){var e=h();return r.a.createElement(f.a,{className:e.root,position:"static"},r.a.createElement(E.a,null,r.a.createElement(p.a,{to:"#",variant:"h4",color:"textPrimary"},"Team Management")))},j=a(177),y=a(179),b=a(178),w=a(171),x=a(172),O=a(176),_=a(167),T=a(168),N=a(170),k=a(169),P=a(175),S=a(22),C=Object(v.a)(function(e){return{formControl:{maxWidth:"100%",minWidth:120,marginBottom:e.spacing(2)},selectEmpty:{marginTop:e.spacing(2)},card:{width:"15vw",minWidth:"180px",margin:e.spacing(1)},SaveButton:{padding:e.spacing(2)},typography:{padding:e.spacing(2)}}});var W=function(e){var t=C(),a=r.a.useState(e.Team.Employees),n=Object(m.a)(a,2),o=n[0],c=n[1],i=r.a.useState(e.Team.TeamLead),s=Object(m.a)(i,2),p=s[0],f=s[1],E=e.Team.Projects.map(function(t){return e.Projects.find(function(e){return e._id===t})}),v=r.a.useState(E),h=Object(m.a)(v,2),g=h[0],W=h[1],F=r.a.useState(null),L=Object(m.a)(F,2),B=L[0],A=L[1],V=r.a.useState("Loading..."),z=Object(m.a)(V,2),J=z[0],M=z[1],U=Boolean(B),D=U?"save-popover":null;function G(t){if(Array.isArray(t))return t.map(function(t){return e.Employees.find(function(e){return e._id===t})}).map(function(e){return e.FirstName+" "+e.LastName}).join(", ");var a=e.Employees.find(function(e){return e._id===t});return a?a.FirstName+" "+a.LastName:"Employee with id: ".concat(t," doesn't exist!")}function I(t){if(Array.isArray(t)){var a=t.map(function(t){return e.Projects.find(function(e){return e._id===t._id})});return a?a.map(function(e){return e.ProjectName}).join(", "):"Projects: ".concat(t," - don't exist!")}var n=e.Projects.find(function(e){return e._id===t});return n?n.ProjectName:"Project with id: ".concat(t," doesn't exist!")}return r.a.createElement(_.a,{className:t.card},r.a.createElement(T.a,{title:e.Team.TeamName,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{"aria-describedby":D,onClick:function(t){A(t.currentTarget),function(){var t=Object(u.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.put(e.Url+"team/"+e.Team._id,{Projects:g,Employees:o,TeamLead:p}).then(function(e){return M(e.data.message)});case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},variant:"contained",color:"primary",className:t.button},"Save"),r.a.createElement(P.a,{id:D,open:U,anchorEl:B,onClose:function(e){A(null)},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"center"}},r.a.createElement(S.a,{className:t.typography},J)))}),r.a.createElement(N.a,null,r.a.createElement(w.a,{variant:"outlined",className:t.formControl},r.a.createElement(y.a,{htmlFor:"team-lead-select"},"Team Lead"),r.a.createElement(O.a,{variant:"outlined",id:"team-lead-select",single:"true",autoWidth:!0,value:p,onChange:function(e){f(e.target.value)},input:r.a.createElement(j.a,null),renderValue:function(e){return G(e)}},e.Employees.map(function(e){return r.a.createElement(b.a,{key:e._id,value:e._id},r.a.createElement(x.a,{primary:G(e._id)}))}))),r.a.createElement(w.a,{variant:"outlined",className:t.formControl},r.a.createElement(y.a,{htmlFor:"team-members-select"},"Team Members"),r.a.createElement(O.a,{variant:"outlined",id:"team-members-select",multiple:!0,autoWidth:!0,value:o,onChange:function(e){c(e.target.value)},input:r.a.createElement(j.a,null),renderValue:function(e){return G(e)}},e.Employees.map(function(e){return r.a.createElement(b.a,{key:e._id,value:e._id},r.a.createElement(x.a,{primary:G(e._id)}))}))),r.a.createElement(w.a,{variant:"outlined",className:t.formControl},r.a.createElement(y.a,{htmlFor:"projects-select"},"Projects"),r.a.createElement(O.a,{variant:"outlined",id:"projects-select",multiple:!0,autoWidth:!0,value:g,onChange:function(e){W(e.target.value)},input:r.a.createElement(j.a,null),renderValue:function(e){return I(e)}},g.map(function(e){return r.a.createElement(b.a,{key:e._id,value:e._id},r.a.createElement(x.a,{primary:I(e._id)}))})))))},F=a(174),L=a(173),B=a(88),A=a(87),V=a.n(A),z="https://fosteman-mongo-backend.herokuapp.com/",J=Object(B.a)({palette:{primary:{main:"#4dd0e1",contrastText:"#fff"},textPrimary:{main:"white",contrastText:"#e0f7fa"}}});var M=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),i=Object(m.a)(c,2),s=i[0],p=i[1],f=Object(n.useState)([]),E=Object(m.a)(f,2),v=E[0],h=E[1],j=Object(n.useState)(!1),y=Object(m.a)(j,2),b=y[0],w=y[1];return Object(n.useEffect)(function(){!function(){var e=Object(u.a)(l.a.mark(function e(){var t,a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(z+"teams-raw");case 2:return t=e.sent,o(t.data),e.next=6,d.a.get(z+"employees");case 6:return a=e.sent,p(a.data),e.next=10,d.a.get(z+"projects");case 10:n=e.sent,h(n.data),w(!0);case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement(V.a,{theme:J},r.a.createElement(L.a,null,r.a.createElement(g,null),r.a.createElement(F.a,{display:"flex",alignContent:"flex-start",flexDirection:"row",flexWrap:"wrap"},b?a.map(function(e){return r.a.createElement(W,{key:e._id,Team:e,Employees:s,Projects:v,Url:z})}):r.a.createElement("p",null,"loading is in progress..."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){e.exports=a(133)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.857b9635.chunk.js.map