(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={form:"Filter_form__30cdg"}},12:function(t,e,n){t.exports={title:"Notification_title__2vOHA"}},19:function(t,e,n){},2:function(t,e,n){t.exports={contact_form:"ContactForm_contact_form__2qj8b",input_name:"ContactForm_input_name__JCTER",button:"ContactForm_button__1007G"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(10),s=n.n(o),r=(n(18),n(19),n(13)),i=n(3),u=n(4),l=n(6),m=n(5),b=n(9),d=n(23),h=n(2),j=n.n(h),f=n(0),p=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={id:"",name:"",number:""},t.inputFormId=Object(d.a)(),t.handleInputChangeEvent=function(e){var n,a=e.currentTarget,c=a.name,o=a.value;t.setState((n={},Object(b.a)(n,c,o),Object(b.a)(n,"id",Object(d.a)()),n))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.contact_form,children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{className:j.a.input_name,children:"Name"}),Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:this.state.name,onChange:this.handleInputChangeEvent,required:!0})]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{className:j.a.input_name,children:"Number"}),Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:this.state.number,onChange:this.handleInputChangeEvent,required:!0})]}),Object(f.jsx)("button",{type:"submit",className:j.a.button,children:"Add contact"})]})}}]),n}(a.Component),O=n(11),_=n.n(O),C=function(t){var e=t.value,n=t.onChange;return Object(f.jsx)("form",{className:_.a.form,children:Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{children:"Find contacts by name"}),Object(f.jsx)("input",{type:"text",value:e,onChange:n})]})})},x=n(7),g=n.n(x),v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{className:g.a.contact_list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(f.jsxs)("li",{className:g.a.contact_item,children:[Object(f.jsxs)("span",{children:[e,": ",a]}),Object(f.jsx)("button",{type:"button",onClick:function(){return n(c)},className:g.a.button,children:"Delete"})]},c)}))})},y=n(12),S=n.n(y),N=function(t){var e=t.message;return Object(f.jsx)("h3",{className:S.a.title,children:e})},k=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts")):t.setState((function(t){return{contacts:[e].concat(Object(r.a)(t.contacts))}}))},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{onSubmit:this.formSubmitHandler}),Object(f.jsx)("h2",{children:"Contacts"}),this.state.contacts.length>0?Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)(C,{value:this.state.filter,onChange:this.changeFilter}),Object(f.jsx)(v,{contacts:this.getVisibleContacts(),onDeleteContact:this.deleteContact})]}):Object(f.jsx)(N,{message:"Empty contacts list"})]})}}]),n}(a.Component);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={contact_list:"ContactsList_contact_list__252_C",contact_item:"ContactsList_contact_item__sU5hE",button:"ContactsList_button__2Uuuy"}}},[[21,1,2]]]);
//# sourceMappingURL=main.006a910b.chunk.js.map