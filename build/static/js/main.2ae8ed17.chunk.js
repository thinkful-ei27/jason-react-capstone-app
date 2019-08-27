(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){e.exports=a(234)},132:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(94),c=a.n(s),o=a(9),i=(a(132),a(6)),l=a(7),u=a(10),m=a(8),p=a(11),h=function(){return{type:"RESET"}},d=function(){return{type:"TOGGLE_SIGNIN"}},b="https://fortune-cards-server.herokuapp.com/",f=a(91),g=a(92),E=a(18),y=a(96),O=a.n(y),v=a(46),j=function(e){return e.ok?e:e.headers.has("content-type")&&e.headers.get("content-type").startsWith("application/json")?e.json().then(function(e){return Promise.reject(e)}):Promise.reject({code:e.status,message:e.statusText})},N=function(){try{localStorage.removeItem("authToken")}catch(e){}},k="SET_AUTH_TOKEN",w="CLEAR_AUTH",S=function(){return{type:w}},T="AUTH_REQUEST",C="AUTH_SUCCESS",_="AUTH_ERROR",I="FETCH_HISTORY",U="FETCH_HISTORY_SUCCESS",D=function(e){return{type:U,history:e}},R="FETCH_HISTORY_ERROR",H="SAVE_HISTORY_REQUEST",x="SAVE_HISTORY_SUCCESS",L=function(){return{type:x}},A="SAVE_HISTORY_ERROR",q=function(e,t){var a=O()(e),n=a.user.username,r=a.user.history;t(function(e){return{type:k,authToken:e}}(e)),t(function(e){return{type:C,currentUser:e}}(n)),t(D(r)),function(e){try{localStorage.setItem("authToken",e)}catch(t){}}(e)},G=function(e,t){return function(a){return a({type:T}),fetch("".concat(b,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then(function(e){return j(e)}).then(function(e){return e.json()}).then(function(e){var t=e.authToken;a({type:"TOGGLE_LOGIN"}),q(t,a)}).catch(function(e){var t=e.code,n=401===t?"Incorrect username or password":"Unable to login, please try again";return a({type:_,error:e}),new v.a({_error:{code:t,message:n}})})}},M=function(e){return function(t){return t({type:I}),fetch("".concat(b,"/auth/?id=").concat(e,"/")).then(function(e){return e.ok?e.json():Promise.reject("Something went wrong")}).then(function(e){return t(D(e))}).catch(function(e){var t=e.code,a=e.message;return Promise.reject(new v.a({_error:{code:t,message:a}}))})}},F=function(e){return e?void 0:"Required"},P=function(e){return""!==e.trim()?void 0:"Cannot be empty"},Q=function(e){return e.trim()===e?void 0:"Cannot start or end with whitespace"},Y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleSubmit,a=e.error,n=r.a.createElement("p",{className:"empty-div"});return a&&(n=r.a.createElement("p",{className:"error-text"},"Error: ".concat(a.message))),r.a.createElement("div",{className:"register-container"},r.a.createElement("form",{className:"form-container",onSubmit:t},n,r.a.createElement("label",{className:"label"},"User Name"),r.a.createElement(f.a,{component:"input",name:"username",label:"username",type:"text",className:"username",validators:[F,P]}),r.a.createElement("br",null),r.a.createElement("label",{className:"label"},"Password"),r.a.createElement(f.a,{component:"input",name:"password",type:"password",className:"password",validators:[F,P]}),r.a.createElement("br",null),r.a.createElement("button",{name:"signup-button",type:"submit",className:"signup-button",disabled:this.props.pristine||this.props.submitting},"Join")))}}]),t}(r.a.Component),K=Object(g.a)({form:"register",onSubmit:function(e,t){return t((a=e.username,n=e.password,function(e){return fetch("".concat(b,"/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:n})}).then(function(e){return j(e)}).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){var t=e.code,a=e.message;return Promise.reject(new v.a({_error:{code:t,message:a}}))})})).then(function(){return t(G(e.username,e.password))}).then(function(){return t(d())});var a,n},onSubmitFail:function(e,t){return t(Object(E.a)("login","username"))}})(Y);var W=Object(o.b)(function(e){return{login:e.tarot.login}})(K),J=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props.dispatch;var a=this.props.handleSubmit;return this.props.error&&(e=r.a.createElement("div",{className:"form-error","aria-live":"polite"},this.props.error)),!0===this.props.login?!0===this.props.signIn?r.a.createElement(W,null):r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{className:"form-container",onSubmit:a},e,r.a.createElement("button",{name:"newuser-button",id:"newuser-button",type:"button",className:"newuser-button",onClick:function(){t(d())}},"Register"),r.a.createElement("label",{className:"label"},"User Name"),r.a.createElement(f.a,{component:"input",name:"username",label:"username",type:"text",className:"username",validators:[F,P,Q]}),r.a.createElement("br",null),r.a.createElement("label",{className:"label"},"Password"),r.a.createElement(f.a,{component:"input",name:"password",type:"password",className:"password",validators:[F,P,Q]}),r.a.createElement("br",null),r.a.createElement("button",{name:"login-button",id:"login-button",type:"submit",className:"login-button",disabled:this.props.pristine||this.props.submitting},"Sign In"))):r.a.createElement("div",null)}}]),t}(r.a.Component);var B=Object(g.a)({form:"login",onSubmit:function(e,t){t(G(e.username,e.password))},onSubmitFail:function(e,t){t(Object(E.a)("login","username"))}})(J),V=Object(o.b)(function(e){return{login:e.tarot.login,signIn:e.tarot.signIn}})(B),X=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(!0!==this.props.login&&this.props.cardsDealt.length>0)return r.a.createElement("section",{className:"query-container"},r.a.createElement("h3",null,"Your query:"),r.a.createElement("p",{className:"display-query"},this.props.textQuery));if(!0!==this.props.login){var e=this.props.handleSubmit;return r.a.createElement("section",{className:"query-container"},r.a.createElement("form",{onSubmit:e},r.a.createElement(f.a,{component:"input",name:"textQuery",className:"text-query",type:"text",placeholder:"Ask a question.",value:this.props.textQuery}),r.a.createElement("label",{className:"spreadNumber-label"},"number of cards to deal: "),r.a.createElement(f.a,{component:"input",name:"spreadNumber",className:"spread-number",type:"number",placeholder:"all",min:1,max:78,value:this.props.spreadNumber}),r.a.createElement("br",null),r.a.createElement("button",{name:"deal-button",id:"deal-button",type:"submit",className:"deal-button"},"Deal")))}return r.a.createElement("div",null)}}]),t}(r.a.Component);var z=Object(g.a)({form:"query",onSubmit:function(e,t){t(function(e){return{type:"TRIM_DECK",values:e}}(e.spreadNumber)),t({type:"TAKE_QUERY",textQuery:e.textQuery}),t({type:"SHUFFLE_DECK"})}})(X),$=Object(o.b)(function(e){return{login:e.tarot.login,deck:e.tarot.deck,cardsDealt:e.tarot.cardsDealt,textQuery:e.tarot.textQuery,spreadNumber:e.tarot.spreadNumber}})(z),Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1,error:null,errorInfo:null},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",null,r.a.createElement("h2",null,"Something went wrong."),r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),r.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),t}(r.a.Component),ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(){a.props.dispatch(S()),a.props.dispatch(h())},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement("div",{className:"user-links"},r.a.createElement("button",{className:"header-link",id:"custom-button",href:"#",onClick:function(t){return e.props.dispatch({type:"OPEN_HISTORY"})}},this.props.currentUser),r.a.createElement("button",{className:"header-link",id:"logout-button",href:"#",onClick:function(t){return e.handleLogout(t)}},"logout")):r.a.createElement("button",{className:"header-link",id:"member-login-button",href:"#",onClick:function(t){return e.props.dispatch({type:"TOGGLE_LOGIN"})}},"Member Login")}}]),t}(r.a.Component);var te=Object(o.b)(function(e){return{currentUser:e.auth.currentUser}})(ee),ae=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit;return r.a.createElement("div",{className:"header-container"},r.a.createElement("header",{className:"App-header"},r.a.createElement("nav",null,r.a.createElement("a",{className:"header-link purchase-link",href:"https://www.publikwerks.com/thelema-tarot-deck/tarot-deck-pre-order"},"Purchase Deck"),r.a.createElement(te,null)),r.a.createElement("form",{className:"searchBar",onSubmit:e}),r.a.createElement("h1",{className:"banner"},"FORTUNE CARDS")))}}]),t}(r.a.Component),ne=Object(g.a)({form:"search",onSubmit:function(e,t){t({type:"MAKE_SEARCH",searchTerm:e.searchTerm})}})(ae),re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).currentUser=a.props.currentUser,a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props.params.currentUser,a=this.props.params.cardsDealt;this.props.error&&(e=r.a.createElement("div",{className:"form-error","aria-live":"polite"},this.props.error));r.a.createElement("div",{className:"empty-div"});var n=this.props.handleSubmit;return a.length?null===t?r.a.createElement("div",{className:"login-prompt"},r.a.createElement("h3",null,"Sign in to save your readings!")):r.a.createElement("div",{className:"history-form-container"},r.a.createElement("form",{className:"history-form",onSubmit:n},e,r.a.createElement("label",null,"Comments:"),r.a.createElement(f.a,{component:"input",name:"comments",type:"text",className:"comments",placeholder:"We'll see..."}),r.a.createElement("button",{name:"saveHistory",className:"save-history",id:"save-history",type:"submit"},"Save"))):r.a.createElement("div",null)}}]),t}(r.a.Component);re=Object(g.a)({form:"save",onSubmit:function(e,t){t(function(e){return{type:H,values:e}}()),t(function(e){return function(t,a){var n=a().auth.currentUser,r=a().auth.authToken,s=a().tarot.cardsDealt,c=e.comments,o=a().tarot.textQuery;return fetch("".concat(b,"/auth"),{mode:"no-cors",method:"PUT",headers:{authorization:"Bearer ".concat(r),"Content-Type":"application/json"},body:JSON.stringify({username:n,comments:c,query:o,cardsDealt:s})}).then(function(e){return j(e)}).then(function(e){return e.json()}).then(function(e){var a=e.authToken;return q(a,t)}).then(function(){return t(L())}).then(function(){return t(M(n))}).catch(function(e){N()})}}(e)).then(t(L()))}})(re);Object(o.b)()(re);function se(e){var t="";if(e.facing>=0)switch(e.facing){case 0:t="Facing upward.";break;case 1:t="Facing to the right.";break;case 2:t="Facing downward.";break;case 3:t="Facing to the left."}return r.a.createElement("div",{className:"card-description-box",id:e.id},r.a.createElement("h3",null,e.id),r.a.createElement("h4",null,e.name),r.a.createElement("h5",null,t),r.a.createElement("p",{className:"desc-text"},e.desc))}function ce(e){var t="card-image card-itself rotate".concat(e.facing);return r.a.createElement("img",{className:t,src:e.img,alt:e.name})}var oe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.state.expanded?a.setState({expanded:!1}):a.setState({expanded:!0})},a.state={expanded:!1,card:a.props},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",{className:"empty-div"});return e=!0===this.state.expanded?r.a.createElement("div",{onClick:this.handleClick},r.a.createElement(ce,this.state.card),r.a.createElement(se,this.state.card)):r.a.createElement("div",{onClick:this.handleClick},r.a.createElement(ce,this.state.card)),r.a.createElement("div",{className:"card-popUp",key:this.state.card.name},e)}}]),t}(r.a.Component),ie=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;e=this.props.cardsDealt.length>0?r.a.createElement("div",null,r.a.createElement("h2",{className:"reading-heading"},"Your Reading"),r.a.createElement("p",null,"Click the card to toggle description.")):r.a.createElement("div",{className:"empty-div"});var t={cardsDealt:this.props.cardsDealt,currentUser:this.props.currentUser},a=this.props.cardsDealt.map(function(e,t){return r.a.createElement("li",{className:"card-block",key:e.name},r.a.createElement("span",{className:"position-indicator"},"Card position: ",t+1),r.a.createElement(oe,e))});return r.a.createElement("section",{className:"reading-display"},e,r.a.createElement("ul",{className:"spread"},a),r.a.createElement(re,{params:t}))}}]),t}(r.a.Component);var le=Object(o.b)(function(e){return{cardsDealt:e.tarot.deck.slice(0,e.tarot.spreadNumber),currentUser:e.auth.currentUser}})(ie),ue=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=r.a.createElement("div",{className:"empty-div"});return this.props.cardsDealt&&this.props.cardsDealt.length>0&&(t=r.a.createElement("button",{className:"reset-button",id:"reset-button",href:"#",onClick:function(t){return e.props.dispatch(h())}},"Clear Reading")),t}}]),t}(r.a.Component);var me=Object(o.b)(function(e){return{cardsDealt:e.tarot.cardsDealt}})(ue),pe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.user;return!0===this.props.readingHistory?r.a.createElement("section",{className:"history-container"},r.a.createElement("h2",null,t,"'s reading history"),r.a.createElement(function(){return e.props.history.length>0?e.props.history.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",null,"Q: ",e.query),r.a.createElement("p",null,"Date: ",e.createdAt))}):r.a.createElement("div",null)},null)):r.a.createElement("div",null)}}]),t}(r.a.Component);var he=Object(o.b)(function(e){return{readingHistory:e.tarot.readingHistory,user:e.auth.currentUser,history:e.auth.history}})(pe);function de(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"copy-info"},"All images and text \xa9 2019 Publikwerks, LLC."))}var be=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return!1===this.props.showInfo?r.a.createElement("div",null):r.a.createElement("aside",null,r.a.createElement("section",{className:"landing-modal"},r.a.createElement("button",{className:"hide-info",id:"hide-info",href:"#",onClick:function(t){return e.props.dispatch({type:"TOGGLE_INFO"})}},"hide info"),r.a.createElement("h3",null,"DO WHAT THOU WILL SHALL BE THE WHOLE OF THE LAW."),r.a.createElement("p",null," Science, historically adversarial towards Mysticism, is now finding common ground between the two. Through the phenomenon known as Nonlocal Entanglement Physicists know that all things are connected outside of time and space. Even a small change in one part of the Universe instantly affects every other part of the Universe. The best Science can say is that every place is right here, and every time is right now. The past, the present, and the future are all being created at the same time. Mystics have long known that everything is connected, saying, \u201cAs above, so below,\u201d and that \u201cthe Microcosm reflects the Macrocosm, and the Macrocosm reflects the Microcosm.\u201d Within the smallest part of any thing is a bit of the Infinte. This idea of the Whole represented in the Part is the basic theory behind Entanglement and Divination. If one has an accurate enough model of the Universe, they may periodically consult it to understand the bigger picture. The Tarot is a proven model for the examination of these patterns."),r.a.createElement("h3",null,"Love is the Law. Love under WILL.")))}}]),t}(r.a.Component);var fe=Object(o.b)(function(e){return{showInfo:e.tarot.showInfo}})(be),ge=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadDeck()}},{key:"loadDeck",value:function(){var e=this;return fetch("".concat(b,"/tarotDeck")).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(t){return e.props.dispatch({type:"SET_DECK",deck:t})}).catch(function(t){return e.setState({error:"could not load deck"})})}},{key:"render",value:function(){return r.a.createElement("main",{className:"App"},r.a.createElement(ne,null),r.a.createElement(Z,null,r.a.createElement(V,null)),r.a.createElement(fe,null),r.a.createElement($,null),r.a.createElement(me,null),r.a.createElement(le,null),r.a.createElement(me,null),r.a.createElement(he,null),r.a.createElement(de,null))}}]),t}(n.Component);var Ee=Object(o.b)(function(e){return{deck:e.tarot.deck}})(ge),ye=a(12),Oe=a(93),ve=a(98),je=a(50),Ne=a(233),ke={showInfo:!1,spreadNumber:0,cardsDealt:[],history:[],deck:[{id:"0",name:"fool",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"1",name:"magus",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"2",name:"heirophant",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"3",name:"empress",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"4",name:"emperor",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"5",name:"fifth",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"6",name:"sixth",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"7",name:"seventh",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"8",name:"eighth",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"9",name:"ninth",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"10",name:"wheel of fortune",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0}]},we={authToken:null,currentUser:null,error:null,loading:!1,cardsDealt:[],spreadNumber:0};var Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ye.d,Te=Object(ye.c)({form:Oe.a,tarot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;if("RESET"===t.type)return Object.assign({},e,{spreadNumber:0,textQuery:null,cardsDealt:[]});if("SHUFFLE_DECK"===t.type){var a=Ne(e.deck);return a.map(function(e){return e.facing=Math.floor(Math.random()*Math.floor(4))}),Object.assign({},e,{deck:Object(je.a)(a)})}if("SET_DECK"===t.type){var n=Ne(t.deck);return n.map(function(e){return e.facing=Math.floor(Math.random()*Math.floor(4))}),Object.assign({},e,{deck:Object(je.a)(n)})}return"TRIM_DECK"===t.type?Object.assign({},e,{spreadNumber:t.values,cardsDealt:Object(je.a)(e.deck.slice(0,t.values))}):"TAKE_QUERY"===t.type?Object.assign({},e,{textQuery:t.textQuery}):"MAKE_SEARCH"===t.type?Object.assign({},e,{searchTerm:t.searchTerm}):"TOGGLE_LOGIN"===t.type?!0===e.login?Object.assign({},e,{login:!1}):Object.assign({},e,{login:!0}):"TOGGLE_SIGNIN"===t.type?e.signin?Object.assign({},e,{signIn:!e.signIn}):Object.assign({},e,{signIn:!0}):"OPEN_HISTORY"===t.type?!0===e.readingHistory?Object.assign({},e,{readingHistory:!1}):Object.assign({},e,{readingHistory:!0}):"TOGGLE_INFO"===t.type?!1===e.showInfo?Object.assign({},e,{showInfo:!0}):Object.assign({},e,{showInfo:!1}):e},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;return t.type===k?Object.assign({},e,{authToken:t.authToken}):t.type===w?Object.assign({},e,{authToken:null,currentUser:null}):t.type===T?Object.assign({},e,{loading:!0,error:null}):t.type===C?Object.assign({},e,{loading:!1,currentUser:t.currentUser}):t.type===_?Object.assign({},e,{loading:!1,error:t.error}):t.type===I?Object.assign({},e,{loading:!0,error:null}):t.type===U?Object.assign({},e,{loading:!1,history:t.history}):t.type===R?Object.assign({},e,{loading:!1,error:t.error}):t.type===H?Object.assign({},e,{loading:!0,error:null}):t.type===x?Object.assign({},e,{loading:!1,spreadNumber:0,textQuery:null,cardsDealt:[]}):t.type===A?Object.assign({},e,{loading:!1,error:t.error}):e}}),Ce=Object(ye.e)(Te,Se(Object(ye.a)(ve.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{store:Ce},r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[124,1,2]]]);
//# sourceMappingURL=main.2ae8ed17.chunk.js.map