(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports=t(40)},38:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(11),c=t.n(r),o=t(12),i=t(2),l=function(e){var n=e.person,t=e.removePerson;return u.a.createElement("div",null,n.name," ",n.number," ",u.a.createElement("button",{id:n.id,name:n.name,onClick:t},"poista"))},m=function(e){var n=e.showSearch,t=e.handleShowSearch;return u.a.createElement("form",null,u.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4: ",u.a.createElement("input",{value:n,onChange:t})))},s=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,r=e.newNumber,c=e.handleNumberChange;return u.a.createElement("form",{onSubmit:n},u.a.createElement("div",null,"nimi: ",u.a.createElement("input",{value:t,onChange:a})),u.a.createElement("div",null,"numero: ",u.a.createElement("input",{value:r,onChange:c})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},f=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"notification"},n)},d=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"error"},n)},h=t(3),v=t.n(h),b="/api/persons",E=function(){return v.a.get(b).then(function(e){return e.data})},p=function(e){return v.a.post(b,e).then(function(e){return e.data})},w=function(e){return v.a.delete("".concat(b,"/").concat(e)).then(function(e){return e.data})},j=function(e,n){return v.a.put("".concat(b,"/").concat(e),n).then(function(e){return e.data})},g=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),h=Object(i.a)(c,2),v=h[0],b=h[1],g=Object(a.useState)(""),O=Object(i.a)(g,2),S=O[0],N=O[1],C=Object(a.useState)(""),k=Object(i.a)(C,2),P=k[0],y=k[1],L=Object(a.useState)(null),T=Object(i.a)(L,2),J=T[0],x=T[1],B=Object(a.useState)(null),D=Object(i.a)(B,2),H=D[0],I=D[1];Object(a.useEffect)(function(){E().then(function(e){r(e)})},[]);var q=t.filter(function(e){return e.name.toLowerCase().includes(P.toLowerCase())}),z=function(e){var n=t.find(function(n){return n.id===e});window.confirm("Poistetaanko ".concat(n.name)),w(e).then(function(a){r(t.filter(function(n){return n.id!==e})),x("Poistettiin '".concat(n.name,"'")),setTimeout(function(){x(null)},5e3)})};return u.a.createElement("div",null,u.a.createElement("h2",null,"Puhelinluettelo"),u.a.createElement(f,{message:J}),u.a.createElement(d,{message:H}),u.a.createElement(m,{showSearch:P,handleShowSearch:function(e){y(e.target.value)}}),u.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),u.a.createElement(s,{addPerson:function(e){if(e.preventDefault(),t.find(function(e){return e.name===v})){alert("".concat(v," on jo luettelossa, korvataanko vanha numero uudella?"));var n=t.find(function(e){return e.name===v}),a=Object(o.a)({},n,{number:S});j(n.id,a).then(function(e){r(t.map(function(n){return n.id!==e.id?n:e}))}).catch(function(e){I("Henkil\xf6 ".concat(n.name," on jo poistettu")),setTimeout(function(){I(null)},5e3)}),x("P\xe4ivitettiin henkil\xf6n '".concat(n.name," numero'")),setTimeout(function(){x(null)},5e3)}else p({name:v,number:S}).then(function(e){r(t.concat(e)),x("Lis\xe4ttiin '".concat(e.name,"'")),setTimeout(function(){x(null)},5e3)});b(""),N("")},newName:v,handleNameChange:function(e){b(e.target.value)},newNumber:S,handleNumberChange:function(e){N(e.target.value)}}),u.a.createElement("h2",null,"Numerot"),q.map(function(e){return u.a.createElement(l,{key:e.id,person:e,removePerson:function(){return z(e.id)}})}))};t(38);c.a.render(u.a.createElement(g,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.b25bb2f9.chunk.js.map