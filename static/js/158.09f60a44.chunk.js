"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[158],{5158:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a=n(2791),r="contactsForm_wrapper__EKB61",s="contactsForm_wrapper__name__Ng7G8",c="contactsForm_input__name__+b+43",o="contactsForm_input__namber__hHi9z",i="contactsForm_button__HaOVu",u=n(9434),l=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t},m=n(6916),d=function(e){return e.contacts.items},_=function(e){return e.contacts.isLoading},p=function(e){return e.contacts.error},f=(0,m.createSelector)([d,function(e){return e.filter}],(function(e,t){var n=t.toLowerCase().trim();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),h=n(5167),v=n(184),b=function(){var e=(0,u.I0)(),t=(0,u.v9)(d);return(0,v.jsxs)("form",{className:r,onSubmit:function(n){n.preventDefault();var a=n.target.elements,r=a.name,s=a.number;if(t.some((function(e){return e.name===r.value})))return alert("Sorry, ".concat(r.value," is already in contacts.")),r.value="",void(s.value="");e((0,h.el)({id:l(6),name:r.value,number:s.value})),r.value="",s.value=""},children:[(0,v.jsxs)("label",{className:s,children:["Name",(0,v.jsx)("input",{className:c,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)("label",{className:s,children:["Number",(0,v.jsx)("input",{className:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)("button",{className:i,type:"submit",children:"Add contact"})]})},x="contactsList_box__eWr6h",j="contactsList_list__1yWBb",N="contactsList_button__iD5AT",y=function(){var e=(0,u.v9)(f),t=(0,u.I0)();return(0,v.jsx)("ul",{className:x,children:e.map((function(e){var n=e.id,a=e.name,r=e.number;return(0,v.jsxs)("li",{className:j,children:[(0,v.jsxs)("p",{children:[a,":"]}),(0,v.jsx)("p",{children:r}),(0,v.jsx)("button",{className:N,type:"button",onClick:function(){t((0,h.GK)(n))},children:"Delete"})]},n)}))})},g="contactsFilter_filter__k36Wk",F="contactsFilter_filter__input__B5A+s",k=n(4876),w=function(){var e=(0,u.I0)(),t=(0,u.v9)((function(e){return e.filter}));return(0,v.jsxs)("label",{className:g,htmlFor:"",children:["Find contacts by name:",(0,v.jsx)("input",{className:F,type:"text",value:t,onChange:function(t){e((0,k.h)(t.target.value))}})]})},C=n(7549),A=function(){var e=(0,u.v9)(_),t=(0,u.v9)(p),n=(0,u.I0)();return(0,a.useEffect)((function(){n((0,h.yF)())}),[n]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{children:"Phone book"}),(0,v.jsx)(b,{}),(0,v.jsx)("h2",{children:"Contacts"}),(0,v.jsx)(w,{}),e&&!t&&(0,v.jsx)(C.a,{}),(0,v.jsx)(y,{})]})}}}]);
//# sourceMappingURL=158.09f60a44.chunk.js.map