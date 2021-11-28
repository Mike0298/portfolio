(this["webpackJsonpdiscord-style-portfolio"]=this["webpackJsonpdiscord-style-portfolio"]||[]).push([[0],Array(20).concat([function(A,e,t){},function(A,e,t){},function(A,e,t){},,,,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);var c=t(1),i=t.n(c),s=t(10),a=t.n(s),n=(t(20),t(21),t(22),t(7)),o=t(0),l=function(){return Object(o.jsx)("nav",{children:Object(o.jsxs)("div",{className:"items",children:[Object(o.jsxs)(n.b,{to:"/",className:"item",children:[Object(o.jsx)("div",{className:"item-text",children:"Home"}),Object(o.jsx)("i",{className:"icon ion-md-home"})]}),Object(o.jsx)("div",{className:"divider"}),Object(o.jsxs)(n.b,{to:"/introduction",className:"item",children:[Object(o.jsx)("div",{className:"item-text",children:"About Me"}),Object(o.jsx)("i",{className:"icon ion-md-person"})]}),Object(o.jsxs)(n.b,{to:"/education",className:"item",children:[Object(o.jsx)("div",{className:"item-text",children:"Education"}),Object(o.jsx)("i",{className:"icon ion-ios-school"})]}),Object(o.jsxs)(n.b,{to:"/works",className:"item",children:[Object(o.jsx)("div",{className:"item-text",children:"Work Experiences"}),Object(o.jsx)("i",{className:"icon ion-md-briefcase"})]}),Object(o.jsxs)(n.b,{to:"/projects",className:"item",children:[Object(o.jsx)("div",{className:"item-text",children:"Projects"}),Object(o.jsx)("i",{className:"icon ion-ios-code"})]}),Object(o.jsxs)(n.b,{to:"contact",className:"item",children:[Object(o.jsx)("div",{className:"item-text",children:"Contact"}),Object(o.jsx)("i",{className:"icon ion-ios-mail"})]})]})})},r=t(2),d=t(6),j="IS_LOADING",m="GET_SKILL",h="GET_EDUCATION",p="GET_WORK",b="GET_PROJECT",u="LOADED",x=[{image:"https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",name:"Javascript"},{image:"https://maxcdn.icons8.com/Share/icon/Logos/css31600.png",name:"CSS"},{image:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",name:"ReactJS"},{image:"https://img.icons8.com/color/1600/mongodb.png",name:"MongoDB"},{image:"https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png",name:"NodeJS"},{image:"https://vectorified.com/images/express-js-icon-20.png",name:"ExpressJS"},{image:"https://iconape.com/wp-content/png_logo_vector/microsoft-net-framework-logo.png",name:"Microsoft .NET"},{image:"https://brandslogo.net/wp-content/uploads/2011/06/java-logo-vector.png",name:"Java"},{image:"https://pngimg.com/uploads/mysql/mysql_PNG23.png",name:"MySQL"},{image:"https://www.r-project.org/logo/Rlogo.png",name:"R"}],O=[{university:"MindX Vietnam",type:"Fullstack Web Course ",location:"Hanoi, Vietnam (remote)",start:"2021",end:"2021",gpa:"None"},{university:"University of Technology Sydney",type:"Master of Information Technology",location:"Sydney, Australia",start:"2020",end:"2021",gpa:"5.9/7"},{university:"University of Technology Sydney",type:"Bachelor of Information Technology",location:"Sydney, Australia",start:"2017",end:"2020",gpa:"5.85/7"},{university:"University of Technology Sydney Insearch",type:"Foundation Studies",location:"Sydney, Australia",start:"2016",end:"2017",gpa:"4.4/5"}],g=[{company:"PwC Hanoi",title:"Data Analyst Internship - Full time",location:"Hanoi, Vietnam",start:"12/2019",end:"02/2020",task:["Work with seniors and BAs to develop data models for a bank's project","Data checking, cleaning and manipulation","Attend meeting with client","Assist seniors and BAs by producing the required datasets","Visualize data according to the required specification"],technology:["SQL","R"]},{company:"Sentius Strategy & Services - Hanoi office",title:"Web Development Internship - Full time",location:"Hanoi, Vietnam",start:"11/2018",end:"02/2019",task:["Develop webpage based on given design","Documentation translation"],technology:["HTML","CSS","Javascript"]},{company:"Nam Chau Media",title:"Office Worker - Full time",location:"Hanoi, Vietnam",start:"06/2015",end:"09/2015",task:["Checking airtime of advertisement","Documentation translation","Write contract\u2019s template","Assistance to administrator"],technology:[]}],v=[{title:"Movit",desc:"A small social media website that allow user to review a movie and rate them",task:["Design and setup backend server with ExpressJS and MonggoDB","Design the admin dashboard"],technology:["ReactJS","MongoDB","ExpressJS"],sourceCode:"https://github.com/Mike0298/Movit",note:"Currently fixing other member works"},{title:"Online Mart",desc:"A single page store page which design is similar to those that are in the supermarket self-service kiosk",task:["Design and setup backend server with PHP and mySQL","Design the the shop page with ReactJS"],technology:["ReactJS","PHP","mySQL"],sourceCode:"https://github.com/Mike0298/OnlineMart",note:"Backend server has been shutdown due to out of credit on AWS"},{title:"Bluedit",desc:"A social media allow user to create post and have other users comment on it",task:["Design and setup backend server with ExpressJS and Firebase","Design authentication and user setting in the frontend website with ReactJS"],technology:["ReactJS","ExpressJS","Firebase"],sourceCode:"https://github.com/thetrung2411/bluedit-project",note:"The frontend and backend hosting had been shutdown due to inactivity"}],f=function(A){return{type:m,payload:A}},N=function(A){return{type:h,payload:A}},y=function(A){return{type:p,payload:A}},k=function(A){return{type:b,payload:A}},U=(t(30),t(31),function(A){return Object(o.jsxs)(n.b,{to:"/"+A.page,className:"navButton",children:[A.text,Object(o.jsx)("i",{className:"icon ion-ios-arrow-forward"})]})}),w=function(){return Object(c.useEffect)((function(){document.title="Mike0298's Portfolio",window.scrollTo(0,0)}),[]),Object(o.jsx)("div",{className:"homepage",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("p",{children:"Hello World"}),Object(o.jsx)(U,{page:"introduction",text:"About Me"})]})})},C=(t(32),t.p+"static/media/me.ccca74de.jpg"),Q=t(8),S=(t(33),function(A){var e=A.skills,t=Object(c.useState)(0),i=Object(Q.a)(t,2),s=i[0],a=i[1],n=e.length;if(!Array.isArray(e)||0===n)return null;return Object(o.jsxs)("div",{className:"slider",children:[Object(o.jsx)("i",{className:"icon ion-ios-arrow-back arrow arrow-left",onClick:function(){a(0===s?n-1:s-1)}}),e.map((function(A,e){return Object(o.jsx)("div",{className:e===s?"image active":"image",children:e===s&&Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:A.image,alt:A.name,className:"slider-image"}),Object(o.jsx)("p",{children:A.name})]})},e)})),Object(o.jsx)("i",{className:"icon ion-ios-arrow-forward arrow arrow-right",onClick:function(){a(s===n-1?0:s+1)}})]})}),F=function(){Object(c.useEffect)((function(){document.title="Mike0298 | About Me",window.scrollTo(0,0)}),[]);var A=Object(d.c)((function(A){return A.data.skillData}));return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"top",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("img",{src:C,alt:"me"})}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsxs)("div",{className:"introduction",children:[Object(o.jsx)("div",{className:"name",children:"I'm Hieu, I'm a"}),Object(o.jsx)("div",{className:"effect-container",children:Object(o.jsx)("div",{className:"typing-animation",children:"Junior Developer"})})]}),Object(o.jsx)("div",{className:"paragraph",children:"An university graduate who is looking for an internship or a junior position in IT industry. Have university experience in both web development and software development. Easy to adapt to any workspace and willing to learn new technologies required to do the work."}),Object(o.jsxs)("div",{className:"skill",children:[Object(o.jsx)("h2",{children:"I have experience with"}),Object(o.jsx)(S,{skills:A}),Object(o.jsx)("p",{children:"There are still more to learn!"})]})]})]}),Object(o.jsx)("div",{className:"bottom",children:Object(o.jsx)(U,{page:"education",text:"Education"})})]})},V=(t(34),t(35),function(A){var e=A.item,t=A.id;return Object(o.jsx)("div",{className:"timeline-item ".concat(t%2?"timeline-item-right":"timeline-item-left"),children:Object(o.jsxs)("div",{className:"item-content",children:[Object(o.jsx)("div",{className:"type",children:e.type}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("div",{className:"university",children:e.university}),Object(o.jsxs)("div",{className:"time",children:[e.start," - ",e.end]})]}),Object(o.jsx)("div",{className:"location",children:e.location}),Object(o.jsxs)("div",{className:"gpa",children:["GPA: ",e.gpa]})]})})}),K=function(A){var e=A.educationData;return Object(o.jsx)("div",{className:"timeline",children:e.map((function(A,e){return Object(o.jsx)(V,{item:A,id:e},e)}))})},M=(t(36),function(){Object(c.useEffect)((function(){document.title="Mike0298 | Education",window.scrollTo(0,0)}),[]);var A=Object(d.c)((function(A){return A.data.educationData}));return Object(o.jsxs)("div",{className:"education-container",children:[Object(o.jsx)("div",{className:"title",children:"Education"}),Object(o.jsx)(K,{educationData:A}),Object(o.jsx)("div",{className:"bottom",children:Object(o.jsx)(U,{page:"works",text:"Work Experience"})})]})}),D=(t(37),t(38),t(39),function(A){var e=A.item,t=A.id;return Object(o.jsxs)("div",{className:"accordian-item",id:"item".concat(t),children:[Object(o.jsxs)("a",{href:"#item".concat(t),className:"accordian-item-header",children:[e.title,Object(o.jsx)("i",{className:"icon ion-ios-arrow-forward"}),Object(o.jsx)("i",{className:"icon ion-ios-arrow-down"})]}),Object(o.jsx)("div",{className:"accordian-item-content",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"detail",children:[Object(o.jsx)("div",{children:e.company}),Object(o.jsxs)("div",{className:"time",children:[e.start," - ",e.end]})]}),Object(o.jsx)("div",{className:"location",children:e.location}),Object(o.jsxs)("div",{className:"desc ".concat(0===e.technology.length&&"full"),children:[Object(o.jsxs)("div",{className:"task",children:[Object(o.jsx)("p",{children:"Tasks"}),Object(o.jsx)("ul",{children:e.task.map((function(A,e){return Object(o.jsx)("li",{children:A},e)}))})]}),0!==e.technology.length&&Object(o.jsxs)("div",{className:"techs",children:[Object(o.jsx)("p",{children:"Technology Used"}),Object(o.jsx)("ul",{children:e.technology.map((function(A,e){return Object(o.jsx)("li",{children:A},e)}))})]})]})]})})]})}),E=function(A){var e=A.workData;return Object(o.jsx)("div",{className:"accordian-list",children:e.map((function(A,e){return Object(o.jsx)(D,{item:A,id:e},e)}))})},J=function(){Object(c.useEffect)((function(){document.title="Mike0298 | Works",window.scrollTo(0,0)}),[]);var A=Object(d.c)((function(A){return A.data.workData}));return Object(o.jsxs)("div",{className:"works-container",children:[Object(o.jsx)("div",{className:"title",children:"Work Experience"}),Object(o.jsx)(E,{workData:A}),Object(o.jsx)(U,{page:"projects",text:"Projects"})]})},I=(t(40),t(41),t(42),function(A){var e=A.data;return Object(o.jsxs)("div",{className:"carditem",children:[Object(o.jsx)("div",{className:"project-title",children:e.title}),Object(o.jsx)("div",{className:"desc",children:e.desc}),Object(o.jsxs)("div",{className:"tasks",children:[Object(o.jsx)("p",{children:"My tasks:"}),Object(o.jsx)("ul",{children:e.task.map((function(A,e){return Object(o.jsx)("li",{children:A},e)}))})]}),Object(o.jsxs)("div",{className:"technology",children:[Object(o.jsx)("span",{children:"Technology used: "})," ",e.technology.join(", ")]}),Object(o.jsx)("div",{className:"source",children:Object(o.jsxs)("a",{href:e.sourceCode,target:"_blank",rel:"noreferrer",children:["View on ",Object(o.jsx)("i",{className:"icon ion-logo-github"})]})}),Object(o.jsx)("div",{className:"note",children:e.note})]})}),X=function(A){var e=A.projectData;return Object(o.jsx)("div",{className:"cardlist",children:e.map((function(A,e){return Object(o.jsx)(I,{data:A},e)}))})},G=function(){Object(c.useEffect)((function(){document.title="Mike0298 | Projects",window.scrollTo(0,0)}),[]);var A=Object(d.c)((function(A){return A.data.projectData}));return Object(o.jsxs)("div",{className:"projects-container",children:[Object(o.jsx)("div",{className:"title",children:"Previous Projects"}),Object(o.jsx)(X,{projectData:A}),Object(o.jsx)("div",{className:"bottom",children:Object(o.jsx)(U,{page:"contact",text:"Contact Me"})})]})},B=(t(43),t.p+"static/media/linkedin.dee31da8.png"),R=function(){return Object(c.useEffect)((function(){document.title="Mike0298 | Contact",window.scrollTo(0,0)}),[]),Object(o.jsxs)("div",{className:"contact-container",children:[Object(o.jsx)("div",{className:"title",children:"Contact Me"}),Object(o.jsxs)("div",{className:"details",children:[Object(o.jsx)("h1",{children:"General Details"}),Object(o.jsxs)("div",{className:"details-container",children:[Object(o.jsxs)("div",{className:"details-item",children:[Object(o.jsx)("span",{children:"Name:"}),Object(o.jsx)("p",{children:"Hieu Duc Pham"})]}),Object(o.jsxs)("div",{className:"details-item",children:[Object(o.jsx)("span",{children:"Phone Number:"}),Object(o.jsx)("p",{children:"(+61)403545979"})]}),Object(o.jsxs)("div",{className:"details-item",children:[Object(o.jsx)("span",{children:"Email:"}),Object(o.jsx)("p",{children:"hieuducpham2016@gmail.com"})]})]})]}),Object(o.jsxs)("div",{className:"details",children:[Object(o.jsx)("h1",{children:"Other Media"}),Object(o.jsxs)("div",{className:"details-item icon",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{href:"https://www.linkedin.com/in/hieu-pham-9a82a6174/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:B,alt:"linkedin"})}),Object(o.jsx)("p",{children:"Hieu Pham"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{href:"https://github.com/Mike0298",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"github"})}),Object(o.jsx)("p",{children:"Mike0298"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"discord"}),Object(o.jsx)("p",{children:"\u5927\u9cf3#7777"})]})]})]}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsxs)("a",{href:"https://drive.google.com/file/d/16LobGflfcQtnz_Zmd2TQouMLnahhteaw/view?usp=sharing",target:"_blank",rel:"noreferrer",className:"button",children:["View my Resume",Object(o.jsx)("i",{className:"icon ion-ios-document"})]}),Object(o.jsxs)("a",{href:"https://github.com/Mike0298/portfolio",target:"_blank",rel:"noreferrer",className:"button",children:["View code on",Object(o.jsx)("i",{className:"icon ion-logo-github"})]})]})]})},T=function(){var A=Object(d.b)();return Object(c.useEffect)((function(){A((function(A){A({type:j}),A(f(x)),A(y(g)),A(k(v)),A(N(O)),A({type:u})}))}),[A]),Object(o.jsxs)(n.a,{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)("div",{className:"content-container",children:Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)(w,{})}),Object(o.jsx)(r.b,{path:"/introduction",element:Object(o.jsx)(F,{})}),Object(o.jsx)(r.b,{path:"/education",element:Object(o.jsx)(M,{})}),Object(o.jsx)(r.b,{path:"/works",element:Object(o.jsx)(J,{})}),Object(o.jsx)(r.b,{path:"/projects",element:Object(o.jsx)(G,{})}),Object(o.jsx)(r.b,{path:"/contact",element:Object(o.jsx)(R,{})}),Object(o.jsx)(r.b,{path:"*",element:Object(o.jsx)(r.a,{to:"/"})})]})})]})},W=t(9),Z=t(15),L=t(5),q={skillData:[],educationData:[],workData:[],projectData:[],loading:!1},P=[Z.a],H=Object(W.b)({data:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(L.a)(Object(L.a)({},A),{},{loading:!0});case m:return Object(L.a)(Object(L.a)({},A),{},{skillData:e.payload});case h:return Object(L.a)(Object(L.a)({},A),{},{educationData:e.payload});case p:return Object(L.a)(Object(L.a)({},A),{},{workData:e.payload});case b:return Object(L.a)(Object(L.a)({},A),{},{projectData:e.payload});case u:return Object(L.a)(Object(L.a)({},A),{},{loading:!1});default:return A}}}),Y=Object(W.d)(H,{},Object(W.c)(W.a.apply(void 0,P)));a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(d.a,{store:Y,children:Object(o.jsx)(T,{})})}),document.getElementById("root"))}]),[[44,1,2]]]);
//# sourceMappingURL=main.11536f1d.chunk.js.map