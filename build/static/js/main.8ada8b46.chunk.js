(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports=t(40)},38:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(11),o=t.n(r),c=t(12),l=t(3),i=t(2),m=t.n(i),s=function(e){var n=e.person,t=e.removePerson;return u.a.createElement("div",null,n.name," ",n.number," ",u.a.createElement("button",{id:n.id,name:n.name,onClick:t},"poista"))},f=function(e){var n=e.showSearch,t=e.handleShowSearch;return u.a.createElement("form",null,u.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4: ",u.a.createElement("input",{value:n,onChange:t})))},d=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,r=e.newNumber,o=e.handleNumberChange;return u.a.createElement("form",{onSubmit:n},u.a.createElement("div",null,"nimi: ",u.a.createElement("input",{value:t,onChange:a})),u.a.createElement("div",null,"numero: ",u.a.createElement("input",{value:r,onChange:o})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},h=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"notification"},n)},v=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"error"},n)},b="http://localhost:3001/api/persons",E=function(e){return m.a.post(b,e).then(function(e){return e.data})},p=function(e){return m.a.delete("".concat(b,"/").concat(e)).then(function(e){return e.data})},g=function(e,n){return m.a.put("".concat(b,"/").concat(e),n).then(function(e){return e.data})},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),b=i[0],w=i[1],j=Object(a.useState)(""),O=Object(l.a)(j,2),S=O[0],N=O[1],C=Object(a.useState)(""),k=Object(l.a)(C,2),P=k[0],y=k[1],L=Object(a.useState)(null),T=Object(l.a)(L,2),J=T[0],x=T[1],B=Object(a.useState)(null),D=Object(l.a)(B,2),H=D[0],I=D[1];Object(a.useEffect)(function(){console.log("effect"),m.a.get("http://localhost:3001/persons").then(function(e){console.log("promise fulfilled"),r(e.data)})},[]);var q=t.filter(function(e){return e.name.toLowerCase().includes(P.toLowerCase())}),z=function(e){var n=t.find(function(n){return n.id===e});window.confirm("Poistetaanko ".concat(n.name)),p(e).then(function(a){r(t.filter(function(n){return n.id!==e})),x("Poistettiin '".concat(n.name,"'")),setTimeout(function(){x(null)},5e3)})};return u.a.createElement("div",null,u.a.createElement("h2",null,"Puhelinluettelo"),u.a.createElement(h,{message:J}),u.a.createElement(v,{message:H}),u.a.createElement(f,{showSearch:P,handleShowSearch:function(e){y(e.target.value)}}),u.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),u.a.createElement(d,{addPerson:function(e){if(e.preventDefault(),t.find(function(e){return e.name===b})){alert("".concat(b," on jo luettelossa, korvataanko vanha numero uudella?"));var n=t.find(function(e){return e.name===b}),a=Object(c.a)({},n,{number:S});g(n.id,a).then(function(e){r(t.map(function(n){return n.id!==e.id?n:e})),x("P\xe4ivitettiin henkil\xf6n '".concat(n.name," numero'")),setTimeout(function(){x(null)},5e3)}).catch(function(e){I("Henkil\xf6 ".concat(n.name," on jo poistettu")),setTimeout(function(){I(null)},5e3)})}else E({name:b,number:S}).then(function(e){r(t.concat(e)),x("Lis\xe4ttiin '".concat(e.name,"'")),setTimeout(function(){x(null)},5e3)});w(""),N("")},newName:b,handleNameChange:function(e){w(e.target.value)},newNumber:S,handleNumberChange:function(e){N(e.target.value)}}),u.a.createElement("h2",null,"Numerot"),q.map(function(e){return u.a.createElement(s,{key:e.id,person:e,removePerson:function(){return z(e.id)}})}))};t(38);o.a.render(u.a.createElement(w,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.8ada8b46.chunk.js.map