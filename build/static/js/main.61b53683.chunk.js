(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{217:function(e,t,a){},253:function(e,t,a){e.exports=a(427)},264:function(e,t,a){},371:function(e,t,a){},420:function(e,t,a){},421:function(e,t,a){},422:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){},426:function(e,t,a){},427:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(40),o=a.n(c),l=a(59),u=a(19),s=a(219),i=a(24),m={route:"",loggedIn:!1,currentUser:""};var p={userData:{}};var h=a(242),d={cards:[]};var f={filter:""};var E=Object(l.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE":case"LIKE":return Object(i.a)({},e,{userData:e.userData=t.value});default:return e}},card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"READ":return Object(i.a)({},e,{cards:e.cards=t.value});case"POST":return Object(i.a)({},e,{cards:e.cards=[].concat(Object(h.a)(e.cards),[t.value])});case"UPVOTE":return Object(i.a)({},e,{cards:e.cards=e.cards.map((function(e){return e._id===t.value._id&&(e=t.value),e}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE":return Object(i.a)({},e,{route:e.route=t.route});case"AUTHENTICATE":return Object(i.a)({},e,{loggedIn:e.loggedIn=!0},e,{currentUser:e.currentUser=t.value});default:return e}},nav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTERFETCH":return Object(i.a)({},e,{filter:e.filter=t.value});default:return e}}}),v=a(18),g=a(52),b=a(73),w=a(69),x=a(16),j=a.n(x),O=a(29),k=function(){var e=Object(u.b)(),t=(Object(g.g)(),Object(u.c)((function(e){return e.auth.loggedIn})),Object(n.useState)({})),a=Object(b.a)(t,2),r=a[0],c=a[1];return{handleInputChange:function(e){e.preventDefault(),c(Object(i.a)({},r,Object(w.a)({},e.target.name,e.target.value)))},handleSubmit:function(t,a){console.log(r),t.preventDefault(),e(function(e,t){return function(){var a=Object(O.a)(j.a.mark((function a(n){var r,c;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("http://localhost:8000/api/auth/".concat(e),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return r=a.sent,a.next=6,r.json();case 6:c=a.sent,console.log(c),200===c.status&&(window.sessionStorage.token=c.token,n({type:"AUTHENTICATE",value:c.user})),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log("Authenticate Error",a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(a,r))}}},y=a(441),C=a(440),S=a(437),F=a(436),I=a(428),T=a(442),R=a(60),A=(a(264),function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),a=t[0],c=t[1],o=k(),l=o.handleInputChange,u=o.handleSubmit;return r.a.createElement(y.a,{columns:2,divided:!0,id:"entry-grid"},r.a.createElement(y.a.Column,{id:"left-entry-column"},r.a.createElement(C.a,{id:"description-menu",vertical:!0,secondary:!0},r.a.createElement(C.a.Item,{icon:"search",name:"Follow your interests."}),r.a.createElement(C.a.Item,{icon:"users",name:"Hear what other people are talking about."}),r.a.createElement(C.a.Item,{icon:"comment outline",name:"Join the conversation."}))),r.a.createElement(y.a.Column,{id:"right-entry-column"},r.a.createElement(y.a.Row,null,r.a.createElement(S.a,{id:"entry-form",onSubmit:function(e){return u(e,a)}},r.a.createElement(S.a.Field,null,r.a.createElement(F.a,{focus:!0,placeholder:"Email",type:"email",name:"email",onChange:l})),r.a.createElement(S.a.Field,null,r.a.createElement(F.a,{focus:!0,placeholder:"Password",type:"password",name:"password",onChange:l})),r.a.createElement(S.a.Field,null,r.a.createElement(I.a,{onClick:function(){return c("login")}},"Log in")))),r.a.createElement(y.a.Row,{id:"right-column-bottom-row"},r.a.createElement("div",{id:"description"},r.a.createElement(T.a,{as:"h1"},r.a.createElement(R.a,{name:"sticky note"})),r.a.createElement(T.a,{as:"h1"},"See what's happening in the world right now")),r.a.createElement("div",{id:"modal-buttons"},r.a.createElement("p",null,"Join Community Cards today."),r.a.createElement(v.b,{to:"/register"},r.a.createElement(I.a,{id:"register-button"},"Register")),r.a.createElement(v.b,{to:"/login"},r.a.createElement(I.a,{id:"login-button"},"Log in"))))),r.a.createElement(y.a.Row,{id:"footer"},r.a.createElement("h6",null,"About"),r.a.createElement("h6",null,"About"),r.a.createElement("h6",null,"About"),r.a.createElement("h6",null,"About"),r.a.createElement("h6",null,"About"),r.a.createElement("h6",null,"About")))}),P=a(438),N=(a(371),function(){var e=window.location.pathname.substring(1),t=k(),a=t.handleInputChange,n=t.handleSubmit;return r.a.createElement(P.a,{open:!0,id:"auth-modal"},r.a.createElement(P.a.Content,null,r.a.createElement(S.a,{onSubmit:function(t){return n(t,e)}},r.a.createElement("h3",null,"Create Your Account"),r.a.createElement(S.a.Field,null,r.a.createElement(F.a,{focus:!0,type:"text",name:"username",placeholder:"Username",onChange:a})),r.a.createElement(S.a.Field,null,r.a.createElement(F.a,{type:"email",name:"email",placeholder:"Email",onChange:a})),r.a.createElement(S.a.Field,null,r.a.createElement(F.a,{type:"password",name:"password",placeholder:"Password",onChange:a})),r.a.createElement(I.a,null,"Submit"))))}),L=(a(420),function(){var e=window.location.pathname.substring(1),t=k(),a=t.handleInputChange,n=t.handleSubmit;return r.a.createElement("div",{id:"login"},r.a.createElement("div",{id:"login-header"},r.a.createElement(T.a,{as:"h2"},r.a.createElement(R.a,{name:"sticky note"})),r.a.createElement("h2",null,"Log in to Community Cards")),r.a.createElement(S.a,{onSubmit:function(t){return n(t,e)}},r.a.createElement(S.a.Field,null,r.a.createElement(F.a,{focus:!0,type:"email",name:"email",placeholder:"email",onChange:a})),r.a.createElement(S.a.Field,null,r.a.createElement(F.a,{focus:!0,type:"password",name:"password",placeholder:"password",onChange:a})),r.a.createElement(I.a,null,"Log in")))}),U=(a(421),function(){var e=Object(u.c)((function(e){return e.auth.currentUser}));return r.a.createElement(C.a,{vertical:!0,secondary:!0,id:"nav"},r.a.createElement(C.a.Item,{icon:"sticky note"}),r.a.createElement(v.c,{exact:!0,to:"/home",className:"item"},r.a.createElement(R.a,{name:"home"}),"Home"),r.a.createElement(v.c,{exact:!0,to:"/explore",className:"item"},r.a.createElement(R.a,{name:"globe"}),"Explore"),r.a.createElement(v.c,{exact:!0,to:"/".concat(e),className:"item"},r.a.createElement(R.a,{name:"user circle"}),"Profile"),r.a.createElement(v.c,{exact:!0,to:"/logout",className:"item"},r.a.createElement(R.a,{name:"sign out"}),"Log out"),r.a.createElement(v.c,{exact:!0,to:"/create",className:"item"},r.a.createElement(R.a,{name:"plus"}),"Create a Card"))}),D=function(){var e=Object(u.b)(),t=Object(n.useState)({}),a=Object(b.a)(t,2),r=a[0],c=a[1];return{handleInputChange:function(e){var t=e.currentTarget.value.match(/[#]\S[a-zA-Z]*/g),a=t&&t.map((function(e){return e.substring(1)}));r.tags=a,e.preventDefault(),c(Object(i.a)({},r,Object(w.a)({},e.target.name,e.target.value)))},handleSubmit:function(t,a){t.preventDefault(),e(function(e,t){return function(){var a=Object(O.a)(j.a.mark((function a(n){var r,c;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("http://localhost:8000/api/card/".concat(t),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json","auth-token":window.sessionStorage.token}});case 3:return r=a.sent,a.next=6,r.json();case 6:c=a.sent,n({type:"POST",value:c}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log("Authenticate Error",a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(r,a))}}},H=function(){var e=Object(u.b)();return{upvote:function(t){var a,n;console.log(t),e((a=t._id,function(){var e=Object(O.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(a),e.next=4,fetch("http://localhost:8000/api/card/upvote/".concat(a),{method:"PUT",headers:{"auth-token":window.sessionStorage.token}});case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,t({type:"UPVOTE",value:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())),e((n=t.user_username,function(){var e=Object(O.a)(j.a.mark((function e(t){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(n),e.next=4,fetch("http://localhost:8000/api/user/like/".concat(n),{method:"PUT",headers:{"auth-token":window.sessionStorage.token}});case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,t({type:"PROFILE",value:r}),console.log(r),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()))},follow:function(t){var a;e((a=t,function(){var e=Object(O.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(a),e.next=4,fetch("http://localhost:8000/api/user/follow/".concat(a),{method:"PUT",headers:{"auth-token":window.sessionStorage.token}});case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,t({type:"PROFILE",value:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}())),e(function(e){return function(){var t=Object(O.a)(j.a.mark((function t(a,n){var r,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:8000/api/user/followed/".concat(e),{method:"PUT",headers:{"auth-token":window.sessionStorage.token}});case 3:return r=t.sent,t.next=6,r.json();case 6:c=t.sent,a({type:"PROFILE",value:c}),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,a){return t.apply(this,arguments)}}()}(t))}}},J=function(e){var t=e.card,a=H().upvote;return r.a.createElement(R.a,{name:"heart outline",onClick:function(){return a(t)}})},_=(a(422),function(){return r.a.createElement(R.a,{name:"heart",id:"upvoted"})}),z=a(240),G=a.n(z),V=function(e){var t=e.card;return r.a.createElement("p",null,G()(t.body,/(#\S[a-zA-Z]*)/gi,(function(e,t){return r.a.createElement(v.b,{to:"/tagged/".concat(e.substring(1)),key:t,className:"tag"},e)})))},W=(a(423),function(){var e=Object(u.b)(),t=Object(g.h)(),a=Object(u.c)((function(e){return e.card.cards})),c="/explore"===t.path,o="/home"===t.path,l="/:username"===t.path,s="/:username/likes"===t.path,i=t.params.username;Object(n.useEffect)((function(){c&&e(function(){var e=Object(O.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8000/api/card/all",{headers:{"auth-token":window.sessionStorage.token}});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log(n),t({type:"READ",value:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()),o&&e(function(){var e=Object(O.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8000/api/card/personal",{headers:{"auth-token":window.sessionStorage.token}});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log(n),t({type:"READ",value:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()),l&&e(function(e){return function(){var t=Object(O.a)(j.a.mark((function t(a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:8000/api/card/profile/".concat(e),{headers:{"auth-token":window.sessionStorage.token}});case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,console.log(r),a({type:"READ",value:r}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(i)),s&&e(function(e){return function(){var t=Object(O.a)(j.a.mark((function t(a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:8000/api/card/likes/".concat(e),{headers:{"auth-token":window.sessionStorage.token}});case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,console.log(r),a({type:"READ",value:r}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(i)),console.log(s)}),[t.path]);var m=a&&a.map((function(e,t){return r.a.createElement(y.a.Row,{id:"card-row",key:t},r.a.createElement(v.b,{to:"/".concat(e.user_username)},r.a.createElement(R.a,{name:"user circle"})),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"user-user-options"},e.user_username," ",r.a.createElement(R.a,{name:"chevron down"})),r.a.createElement(V,{card:e}),r.a.createElement("div",{className:"card-menu"},e.upvoted?r.a.createElement(_,null):r.a.createElement(J,{card:e}))))}));return r.a.createElement(r.a.Fragment,null,m)}),Z=(a(217),function(){var e=D(),t=e.handleInputChange,a=e.handleSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a.Row,{id:"home-row"},"Home"),r.a.createElement(y.a.Row,{id:"home-menu"},r.a.createElement(R.a,{name:"user circle outline"}),r.a.createElement(S.a,{onSubmit:function(e){return a(e,"/post")}},r.a.createElement(S.a.Field,null,r.a.createElement(F.a,{type:"text",name:"body",placeholder:"What's happening?",onChange:t})),r.a.createElement(I.a,null,"Submit"))),r.a.createElement(W,null))}),B=function(e){var t=e.userToFollow,a=H().follow;return r.a.createElement(I.a,{onClick:function(){return a(t)}},"Follow")},K=function(){return r.a.createElement(I.a,null,"Following")},Y=a(241),q=(a(424),function(){var e=Object(g.h)(),t=Object(u.b)(),a=window.location.pathname,c=Object(u.c)((function(e){return e.user.userData}));Object(u.c)((function(e){return e.auth.currentUser}));return Object(n.useEffect)((function(){var e;t((e=a,function(){var t=Object(O.a)(j.a.mark((function t(a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:8000/api/user/profile".concat(e),{headers:{"auth-token":window.sessionStorage.token}});case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,a({type:"PROFILE",value:r}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()))}),[c.followers&&c.followers.length]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a.Row,{id:"top"},r.a.createElement(v.c,{to:"/home"},r.a.createElement(R.a,{name:"arrow left"})),r.a.createElement("div",null,r.a.createElement("h3",null,c.username),r.a.createElement("small",null," 0 posts"))),r.a.createElement(y.a.Row,{id:"banner"},r.a.createElement(Y.a,{src:"https://media.tacdn.com/media/attractions-splice-spp-674x446/07/88/4d/9a.jpg",fluid:!0})),r.a.createElement(y.a.Row,{id:"information"},r.a.createElement(R.a,{name:"user circle"}),r.a.createElement("div",{className:"information-text"},r.a.createElement("div",null,r.a.createElement("h3",null,c.username),r.a.createElement("p",null,c.email)),c.isFollowing?r.a.createElement(K,null):r.a.createElement(B,{userToFollow:c.username})),r.a.createElement("div",{className:"profile-stats"},r.a.createElement("span",{className:"num"},c.following&&c.following.length)," Following ",r.a.createElement("span",{className:"num"},c.followers&&c.followers.length)," Followers"),r.a.createElement(C.a,{pointing:!0,secondary:!0,id:"profile-nav"},r.a.createElement(v.c,{exact:!0,to:"/".concat(e.params.username)},"Cards"),r.a.createElement(v.c,{exact:!0,to:"/".concat(e.params.username,"/likes")},"Likes"))),r.a.createElement(W,null))}),M=function(){var e=Object(u.c)((function(e){return e.card.cards}));return r.a.createElement(y.a,{columns:3,divided:!0,id:"layout-grid"},r.a.createElement(y.a.Column,{id:"left-column"},r.a.createElement(U,null)),r.a.createElement(y.a.Column,{id:"center-column"},r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/home",component:Z}),r.a.createElement(g.b,{exact:!0,path:"/explore",component:W}),r.a.createElement(g.b,{exact:!0,path:["/:username","/:username/likes"],component:q})),0===e.length?r.a.createElement(y.a.Row,{id:"home-intro"},r.a.createElement("h3",null,"Welcome to Community Cards"),r.a.createElement("p",null,"This is a twitter clone that captures the essentials of twitter")):null),r.a.createElement(y.a.Column,{id:"layout-right-column"}))};a(425),a(426);var Q=function(){var e=Object(u.c)((function(e){return e.auth.loggedIn}));return r.a.createElement(v.a,null,r.a.createElement(g.b,{exact:!0,path:["/","/register"],component:A}),r.a.createElement(g.b,{exact:!0,path:"/register",component:N}),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/login",component:L}),r.a.createElement(g.b,{exact:!0,path:["/home","/explore","/:username","/:username/likes"],component:M})),e?r.a.createElement(g.a,{to:"/home"}):null)},X=Object(l.d)(E,Object(l.a)(s.a));o.a.render(r.a.createElement(u.a,{store:X},r.a.createElement(Q,null)),document.getElementById("root"))}},[[253,1,2]]]);
//# sourceMappingURL=main.61b53683.chunk.js.map