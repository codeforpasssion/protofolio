(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{51:function(e,n,t){e.exports=t(95)},56:function(e,n,t){},57:function(e,n,t){},95:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(44),c=t.n(l),o=(t(56),t(50)),i=(t(57),t(21)),u=t(13),m=t(22),s=t(8),p=t(9);function d(){var e=Object(s.a)(["\n  @media (max-width: 640px) {\n    display: none;\n  }\n"]);return d=function(){return e},e}var f=Object(p.a)(m.SideNav)(d()),b=[{name:"Me",path:"/"},{name:"Projects",path:"/projects"},{name:"Work",path:"/work"},{name:"Education",path:"/education"}],E=function(){var e=Object(u.f)();return r.a.createElement(f,{isFixedNav:!0,expanded:!0,isChildOfHeader:!1,"aria-label":"Side navigation"},r.a.createElement(m.SideNavItems,null,b.map((function(n){return r.a.createElement(m.SideNavLink,{isActive:"/"===e.pathname&&"/"===n.path||e.pathname===n.path,element:i.b,to:n.path,key:n.name},n.name)}))))},v=t(2);function h(){var e=Object(s.a)(["\n  display: flex;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-weight: bold;\n  align-items: center;\n  margin-top: 1rem;\n  border: 2px solid #2ecc40;\n  background-color: rgba(46, 204, 64, 0.3);\n  transition: background-color 250ms ease;\n  &:hover {\n    background-color: #2ecc40;\n  }\n  svg {\n    fill: white;\n    margin-left: 8px;\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(s.a)(["\n  width: 200px;\n  margin-right: 1rem;\n  border-radius: 2px;\n"]);return g=function(){return e},e}function j(){var e=Object(s.a)(["\n  display: flex;\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 640px) {\n    display: ",";\n    flex-direction: column;\n  }\n"]);return O=function(){return e},e}var y=p.a.div(O(),(function(e){return e.isHome?"flex":"none"})),x=p.a.div(j()),k=p.a.img(g()),w=p.a.a(h()),I=function(e){var n=e.user,t=Object(u.f)();return r.a.createElement(y,{isHome:"/"===t.pathname},r.a.createElement(x,null,r.a.createElement(k,{src:n.basics.picture}),r.a.createElement("div",null,r.a.createElement("h2",null,n.basics.name),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://gitconnected.com/".concat(n.basics.username),target:"_blank",rel:"noreferrer noopener"},"@",n.basics.username)),r.a.createElement("p",null,n.basics.label),r.a.createElement("p",null,"Coding in ",n.basics.region),r.a.createElement("p",null,n.basics.yearsOfExperience," years of experience as a developer"),r.a.createElement("p",null,n.basics.headline),r.a.createElement("p",null,"Blog:"," ",r.a.createElement("a",{href:n.basics.blog,target:"_blank",rel:"noreferrer noopener"},n.basics.blog)))),r.a.createElement("div",null,r.a.createElement(w,{href:"https://gitconnected.com/".concat(n.basics.username,"/resume"),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"View R\xe9sum\xe9"),r.a.createElement(v.c,null))))},P=t(6),S=t(3),N=t(5),D=t(4),H=t(49),M=t.n(H);function _(){var e=Object(s.a)(["\n  width: 100%;\n  justify-content: center;\n"]);return _=function(){return e},e}function A(){var e=Object(s.a)(["\n  width: 25%;\n"]);return A=function(){return e},e}function C(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  z-index: 1;\n"]);return C=function(){return e},e}function F(){var e=Object(s.a)(["\n  height: 48px;\n"]);return F=function(){return e},e}function J(){var e=Object(s.a)(["\n  display: none;\n  @media (max-width: 640px) {\n    display: block;\n  }\n"]);return J=function(){return e},e}var W=p.a.div(J()),z=p.a.div(F()),B=p.a.div(C()),L=Object(p.a)(i.b)(A()),R=Object(p.a)(M.a)(_()),T=function(){return r.a.createElement(W,null,r.a.createElement(z,null),r.a.createElement(B,null,r.a.createElement(L,{to:"/"},r.a.createElement(R,{hasIconOnly:!0,renderIcon:P.Fd,iconDescription:"Me",tooltipPosition:"bottom"})),r.a.createElement(L,{to:"/projects"},r.a.createElement(R,{hasIconOnly:!0,renderIcon:S.db,iconDescription:"Projects",tooltipPosition:"bottom"})),r.a.createElement(L,{to:"/work"},r.a.createElement(R,{hasIconOnly:!0,renderIcon:N.Hd,iconDescription:"Work",tooltipPosition:"bottom"})),r.a.createElement(L,{to:"/education"},r.a.createElement(R,{hasIconOnly:!0,renderIcon:D.Jd,iconDescription:"Education",tooltipPosition:"bottom"}))))};function V(){var e=Object(s.a)(["\n  min-height: 100vh;\n  @media (max-width: 640px) {\n    margin-left: 0 !important;\n  }\n"]);return V=function(){return e},e}var q=Object(p.a)(m.Content)(V()),G=function(e){var n=e.user,t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(E,null),r.a.createElement(q,null,r.a.createElement(I,{user:n}),r.a.createElement("div",null,t)))},K=t(19);function Q(){var e=Object(s.a)(["\n  display: inline-block;\n  margin-right: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 1rem;\n  background-color: ",";\n  color: ",";\n  border-radius: 2px;\n  font-weight: bold;\n"]);return Q=function(){return e},e}function U(){var e=Object(s.a)(["\n  white-space: pre-wrap;\n"]);return U=function(){return e},e}function X(){var e=Object(s.a)(["\n     margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n"]);return X=function(){return e},e}var Y=p.a.h3(X()),Z=p.a.p(U()),$=p.a.span(Q(),K.a[20],K.a[70]);function ee(){var e=Object(s.a)(["\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  display: inline-block;\n  font-size: 18px;\n"]);return ee=function(){return e},e}var ne=p.a.li(ee()),te=function(e){var n=e.user;return console.log("me"),r.a.createElement(G,{user:n},r.a.createElement("div",null,r.a.createElement(Y,null,"About Me"),r.a.createElement(Z,null,n.basics.summary)),r.a.createElement("div",null,r.a.createElement(Y,null,"Skills"),r.a.createElement("div",null,n.skills.map((function(e){return r.a.createElement($,{key:e.name},e.name)})))),r.a.createElement("div",null,r.a.createElement(Y,null,"Profiles"),r.a.createElement("ul",null,n.basics.profiles.map((function(e,n){return r.a.createElement(ne,{key:e.network},0!==n&&" | ",r.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},e.network))})))))},ae=t(36);function re(){var e=Object(s.a)(["\n  margin-top: 1.2rem;\n"]);return re=function(){return e},e}function le(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return le=function(){return e},e}function ce(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return ce=function(){return e},e}var oe=p.a.li(ce(),K.b),ie=p.a.h4(le()),ue=p.a.div(re()),me=function(e){var n=e.user;return r.a.createElement(G,{user:n},r.a.createElement("div",null,r.a.createElement(Y,null,"Projects"),r.a.createElement("ul",null,n.projects.map((function(e,n){return r.a.createElement(oe,{key:n},r.a.createElement(ie,null,e.name),r.a.createElement("p",null,e.summary),r.a.createElement(ue,null,[].concat(Object(ae.a)(e.languages),Object(ae.a)(e.libraries)).map((function(e,n){return r.a.createElement($,{key:n},e)}))))})))))};function se(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return se=function(){return e},e}function pe(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return pe=function(){return e},e}function de(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return de=function(){return e},e}var fe=p.a.li(de(),K.b),be=p.a.h4(pe()),Ee=p.a.p(se()),ve=function(e){var n=e.user;return r.a.createElement(G,{user:n},r.a.createElement("div",null,r.a.createElement(Y,null,"Work"),r.a.createElement("ul",null,n.work.map((function(e,n){return r.a.createElement(fe,{key:n},r.a.createElement(be,null,e.position),r.a.createElement("div",null,r.a.createElement(Ee,null,e.company)," ",r.a.createElement("span",null,e.location),r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(Z,null,e.summary))})))))};function he(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return he=function(){return e},e}function ge(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return ge=function(){return e},e}function je(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return je=function(){return e},e}var Oe=p.a.li(je(),K.b),ye=p.a.h4(ge()),xe=p.a.p(he()),ke=function(e){var n=e.user;return r.a.createElement(G,{user:n},r.a.createElement("div",null,r.a.createElement(Y,null,"Education"),r.a.createElement("ul",null,n.education.map((function(e,n){return r.a.createElement(Oe,{key:n},r.a.createElement(ye,null,e.position),r.a.createElement("div",null,r.a.createElement(xe,null,e.studyType,", ",e.area)," ",r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(Z,null,e.description.replace("\n\n","\n")))})))))},we=function(e){var n=e.user;return r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/protofolio"},r.a.createElement(te,{user:n})),r.a.createElement(u.a,{path:"/protofolio/projects"},r.a.createElement(me,{user:n})),r.a.createElement(u.a,{path:"/protofolio/work"},r.a.createElement(ve,{user:n})),r.a.createElement(u.a,{path:"/protofolio/education"},r.a.createElement(ke,{user:n}))))};var Ie=function(){var e=Object(a.useState)(null),n=Object(o.a)(e,2),t=n[0],l=n[1];return Object(a.useEffect)((function(){console.log(":sdfs"),fetch("https://gitconnected.com/v1/portfolio/codeforpasssion").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),r.a.createElement("div",{className:"App"},console.log(t),t&&r.a.createElement(we,{user:t}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ie,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.c351a9c1.chunk.js.map