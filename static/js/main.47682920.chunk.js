(this["webpackJsonpghp-repo"]=this["webpackJsonpghp-repo"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),l=n.n(s),r=(n(13),n(8)),i=n(2),o=n(0),d=function(e){var t=e.resetBtnClick;return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light border border-primary",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:"Football App"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:[Object(o.jsx)("div",{className:"navbar-nav",children:Object(o.jsxs)("a",{className:"nav-item nav-link active px-4",style:{color:"darkred"},onClick:function(){console.log("Clicked Help")},href:"#",children:["Help ",Object(o.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(o.jsx)("div",{className:"navbar-nav",children:Object(o.jsxs)("a",{className:"nav-item nav-link active px-4",onClick:function(){t()},href:"#",children:["Start Over",Object(o.jsx)("span",{className:"sr-only",children:"(current)"})]})})]})]})},b=function(e){Object(c.useEffect)((function(){e.validateSelectionLength()}));var t="Donovan McNabb",n="PHI",a="DEN",s="2000",l="25";return Object(o.jsx)("div",{className:"table-scroll-y",children:Object(o.jsxs)("table",{id:"playerTable",className:"table table-hover table-fix-head",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Name"}),Object(o.jsx)("th",{scope:"col",children:"Team"}),Object(o.jsx)("th",{scope:"col",children:"Opponent"}),Object(o.jsx)("th",{scope:"col",children:"Salary"}),Object(o.jsx)("th",{scope:"col",children:"Projected Pts"})]})}),Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t}),Object(o.jsx)("td",{children:n}),Object(o.jsx)("td",{children:a}),Object(o.jsx)("td",{children:s}),Object(o.jsx)("td",{children:l})]},"1")})]})})},j=n(7),u=function(e){var t,n=e.position,a=e.enableLineup;Object(c.useEffect)((function(){a&&s("Lineup")}));var s=function(e){document.getElementById("PosBtn").textContent=e,"Lineup"!=e&&n(e)},l=function(e){var t=document.getElementById("PosBtn");if("SEL"!=t.textContent){if("Lineup"!=t.textContent){var n=["QB","RB","WR","TE","FLEX","DEF"],c=t.textContent,a=n.indexOf(c);if(!(a<0)){var l="";"next"==e?l=5==a?n[0]:n[a+=1]:"prev"==e&&(l=0==a?n[5]:n[a-=1]),s(l)}}}else s("QB")};return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-4",children:Object(o.jsxs)("div",{className:"dropdown",id:"PosDrop",children:[Object(o.jsx)("button",(t={className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},Object(j.a)(t,"id","PosBtn"),Object(j.a)(t,"children","QB"),t)),Object(o.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",onClick:function(){return s("QB")},id:"QBtab",children:"QB"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",onClick:function(){return s("RB")},id:"RBtab",children:"RB"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",onClick:function(){return s("WR")},id:"WRtab",children:"WR"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",onClick:function(){return s("TE")},id:"TEtab",children:"TE"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",onClick:function(){return s("FLEX")},id:"FLEXtab",children:"FLEX"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",onClick:function(){return s("DEF")},id:"DEFtab",children:"DEF"})})]}),Object(o.jsx)("button",{type:"button",className:"btn btn-light",children:Object(o.jsx)("i",{className:"arrow left",onClick:function(){return l("prev")}})}),Object(o.jsx)("button",{type:"button",className:"btn btn-light",children:Object(o.jsx)("i",{className:"arrow right",onClick:function(){return l("next")}})})]})}),Object(o.jsx)("div",{className:"col-8",children:Object(o.jsx)("button",{type:"button",className:"btn btn-link px-3",style:{marginLeft:"-100px"},onClick:function(){return s("SEL")},children:"My Selected Players"})})]})})},p=function(e){var t=e.text,n=e.submitBtnClick;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-8",children:Object(o.jsx)("h1",{style:{textAlign:"center",marginTop:"10px"},children:t})}),Object(o.jsx)("div",{className:"col-4",children:Object(o.jsx)("button",{className:"btn btn-primary py-3 px-5 rounded","aria-disabled":"true",id:"SubmitBtn",style:{marginTop:"17px"},onClick:function(){n()},children:"Submit Lineup!"})})]})})};var h=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),l=Object(i.a)(s,2),j=l[0],h=l[1],x=Object(c.useState)(!1),O=Object(i.a)(x,2),m=O[0],v=O[1],f=Object(c.useState)("Welcome to Football App!"),g=Object(i.a)(f,2),N=g[0],y=g[1],B=Object(c.useState)(!1),S=Object(i.a)(B,2),k=S[0],E=S[1],C=Object(c.useState)(!1),w=Object(i.a)(C,2),L=w[0],T=w[1];Object(c.useEffect)((function(){0!==n.length||k||P("QB")}));var P=function(e){v(!1),E(!1),document.getElementById("SubmitBtn").disabled=!1,F(e);var t="http://localhost:8000/players/"+e,n=new XMLHttpRequest;if(console.log(t),"SEL"!=e)n.onload=function(){var e=JSON.parse(n.responseText);a(e)},n.open("GET",t),n.send();else{E(!0),n.open("POST",t,!0),n.setRequestHeader("Content-type","application/json"),n.onreadystatechange=function(){if(4==n.readyState&&201==n.status){var e=JSON.parse(n.responseText);a(e)}};var c={selectedPlayers:j};n.send(JSON.stringify(c))}},F=function(e){var t="";switch(e){case"QB":case"TE":case"FLEX":t="Select at least 2 Players.";break;case"RB":case"WR":t="Select at least 3 Players.";break;case"DEF":t="Select at least 2 Teams.";break;case"SEL":t="Your current Selections";break;case"SUBMIT":t="Your optimal Lineup!";break;default:t="Welcome to Football App!"}y(t)};return Object(o.jsx)("div",{className:"bgImage",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(d,{resetBtnClick:function(){(k||m)&&(P("QB"),document.getElementById("PosBtn").textContent="QB",v(!1)),h([])}}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(p,{text:N,submitBtnClick:function(){if(L){y("Welcome to Football App"),document.getElementById("SubmitBtn").disabled=!0,F("SUBMIT"),document.getElementById("PosBtn").textContent="Lineup",v(!0);var e=new XMLHttpRequest;e.open("POST","http://localhost:8000/submitlineup",!0),e.setRequestHeader("Content-type","application/json"),e.onreadystatechange=function(){if(4==e.readyState&&201==e.status){var t=JSON.parse(e.responseText);a(t)}};var t={selectedPlayers:j};e.send(JSON.stringify(t))}else y("Select a player from each position and Ty Again!")}}),Object(o.jsx)(u,{position:P,enableLineup:m}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col table-player",children:Object(o.jsx)(b,{playerArray:n,onSelectPlayer:function(e,t){if(t){if("SEL"==document.getElementById("PosBtn").textContent)return;h((function(t){return[].concat(Object(r.a)(t),[e])}))}else h((function(t){return t.filter((function(t){return t.uid!==e.uid}))}))},selectedPlayers:j,viewSelections:k,validateSelectionLength:function(){for(var e=0,t=0,n=0,c=0,a=0,s=0;s<j.length;s++)switch(j[s].position){case"QB":e++;break;case"RB":t++;break;case"WR":n++;break;case"TE":c++;break;case"D":a++}T(!(e<1||t<2||n<2||c<1||a<1))}})})})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",style:{height:"100px"}})}),Object(o.jsx)("footer",{children:Object(o.jsx)("p",{className:"footer",children:"Some Disclaimer about how results are not guaranteed"})})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.47682920.chunk.js.map