(function(e){function t(t){for(var r,o,l=t[0],n=t[1],c=t[2],f=0,d=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,l=1;l<a.length;l++){var n=a[l];0!==s[n]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},s={app:0},i=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=n;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1195:function(e,t,a){e.exports=a.p+"img/avatar.55221557.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"careerfy-wrapper"},[a("Header"),a("router-view"),a("Footer")],1),a("Register"),a("Login")],1)},i=[],o=(a("d3b7"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"careerfy-header-one",attrs:{id:"careerfy-header"}},[a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"row"},[a("aside",{staticClass:"col-md-2"},[a("router-link",{attrs:{to:"/"}},[a("a",{staticClass:"careerfy-logo",attrs:{href:"#"}},[a("img",{attrs:{src:"images/logo.png",alt:""}})])])],1),a("aside",{staticClass:"col-md-6"},[a("nav",{staticClass:"careerfy-navigation"},[e._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"careerfy-navbar-collapse-1"}},[a("ul",{staticClass:"navbar-nav"},[e._m(2),e._m(3),e._m(4),e._m(5),a("li",[a("router-link",{attrs:{to:"/contact-us"}},[a("a",{attrs:{href:"#"}},[e._v("Contact")])])],1)])])])]),a("aside",{staticClass:"col-md-4"},[a("div",{staticClass:"careerfy-right"},[a("ul",{staticClass:"careerfy-user-section"},[""==e.isLoggedIn?a("li",[a("a",{staticClass:"careerfy-color careerfy-open-signin-tab",attrs:{href:"#"},on:{click:e.showRegistrationForm}},[e._v("Register")])]):e._e(),""==e.isLoggedIn?a("li",[a("a",{staticClass:"careerfy-color careerfy-open-signup-tab",attrs:{href:"#"},on:{click:e.showLoginForm}},[e._v("Sign in")])]):e._e(),e.isLoggedIn?a("li",[a("img",{staticClass:"avatar",attrs:{src:e.avatar_img,alt:"Avatar"}})]):e._e()]),e._m(6)])])])])])}),l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("aside",{staticClass:"col-md-4",staticStyle:{"margin-right":"0px"}},[a("select",[a("option",[e._v("EN")]),a("option",[e._v("BN")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#careerfy-navbar-collapse-1","aria-expanded":"false"}},[a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"active"},[a("a",{attrs:{href:"#"}},[e._v("Home")]),a("ul",{staticClass:"sub-menu"},[a("li",[a("a",{attrs:{href:"#"}},[e._v("Demo Careerfy")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Demo Hireright")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Demo Jobshub")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Demo BelovedJobs")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Demo JobsOnline")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Demo JobSearch")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Demo JobFinder")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[e._v("Pages")]),a("ul",{staticClass:"sub-menu"},[a("li",[a("a",{attrs:{href:"#"}},[e._v("About Us")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("CV Packages")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Faq's")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Grid")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Grid W/filter")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Listings")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Detail")]),a("ul",{staticClass:"sub-menu"},[a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Detail I")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Detail II")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Detail III")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Detail IV")])])])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Packages")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[e._v("For Candidates")]),a("ul",{staticClass:"sub-menu"},[a("li",[a("a",{attrs:{href:"#"}},[e._v("Applied Jobs")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Changed Password")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("CV Manager")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Alert")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Profile Setting")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Candidate Resume")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Saved Jobs")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Candidate Listings")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Candidate Grid")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Candidate Detail")]),a("ul",{staticClass:"sub-menu"},[a("li",[a("a",{attrs:{href:"#"}},[e._v("Candidate Detail I")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Candidate Detail II")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Candidate Detail III")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Candidate Detail IV")])])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[e._v("For Employers")]),a("ul",{staticClass:"sub-menu"},[a("li",[a("a",{attrs:{href:"#"}},[e._v("Employer List")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Employer Grid")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Employer Detail")]),a("ul",{staticClass:"sub-menu"},[a("li",[a("a",{attrs:{href:"#"}},[e._v("Employer Detail I")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Employer Detail II")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Employer Detail III")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Employer Detail IV")])])])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Transactions")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Employer Resumes")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Profile Setting")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Package Payment")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Packages")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Employer New Job")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Menage Jobs")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Employer Confitmation")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"careerfy-simple-btn careerfy-bgcolor",attrs:{href:"#"}},[a("span",[a("i",{staticClass:"careerfy-icon careerfy-arrows-2"}),e._v(" Post Job")])])}],n=a("1195"),c=a.n(n),u={name:"Header",data:function(){return{avatar_img:c.a}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn}},methods:{showLoginForm:function(){console.log("login btn pressed"),document.getElementById("JobSearchModalSignup").classList.add("fade-in"),document.body.classList.add("careerfy-modal-active")},showRegistrationForm:function(){console.log("login btn pressed"),document.getElementById("JobSearchModalLogin").classList.add("fade-in"),document.body.classList.add("careerfy-modal-active")}}},f=u,d=(a("8baf"),a("2877")),v=Object(d["a"])(f,o,l,!1,null,null,null),m=v.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"careerfy-footer-one",attrs:{id:"careerfy-footer"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"careerfy-footer-widget"},[a("div",{staticClass:"row"},[a("aside",{staticClass:"widget col-md-4 widget_contact_info"},[a("div",{staticClass:"widget_contact_wrap"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:"images/footer-logo.png",alt:""}})]),a("p",[e._v("Sed consequat sapien faus quam bibendum convallis quis in nulla. Pellentesque volutpat odio eget diam cursus semper. Sed coquat sapien faucibus quam.")]),a("a",{staticClass:"careerfy-classic-btn careerfy-bgcolor",attrs:{href:"#"}},[e._v("Learn more")])],1)]),e._m(0),e._m(1),e._m(2)])]),e._m(3)])])},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"widget col-md-3 widget_nav_manu"},[a("div",{staticClass:"footer-widget-title"},[a("h2",[e._v("Quick Links")])]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[e._v("Shortcodes")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Page")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Page Alternative")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Resume Page")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Blog")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Contact")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"widget col-md-3 widget_nav_manu"},[a("div",{staticClass:"footer-widget-title"},[a("h2",[e._v("For Candidates")])]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[e._v("Browse Jobs")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Browse Categories")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Submit Resume")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Candidate Dashboard")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Alerts")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("My Bookmarks")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"widget col-md-2 widget_nav_manu"},[a("div",{staticClass:"footer-widget-title"},[a("h2",[e._v("For Employers")])]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[e._v("Browse Candidates")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Employer Dashboard")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Add Job")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Job Packages")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"careerfy-copyright"},[a("p",[e._v("Copyrights © 2018 All Rights Reserved by "),a("a",{staticClass:"careerfy-color",attrs:{href:"#"}},[e._v("EyeCix")])]),a("ul",{staticClass:"careerfy-social-network"},[a("li",[a("a",{staticClass:"careerfy-bgcolorhover fa fa-facebook",attrs:{href:"#"}})]),a("li",[a("a",{staticClass:"careerfy-bgcolorhover fa fa-twitter",attrs:{href:"#"}})]),a("li",[a("a",{staticClass:"careerfy-bgcolorhover fa fa-dribbble",attrs:{href:"#"}})]),a("li",[a("a",{staticClass:"careerfy-bgcolorhover fa fa-linkedin",attrs:{href:"#"}})]),a("li",[a("a",{staticClass:"careerfy-bgcolorhover fa fa-instagram",attrs:{href:"#"}})])])])}],g={name:"Footer",data:function(){return{}}},y=g,_=Object(d["a"])(y,h,p,!1,null,null,null),C=_.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"careerfy-modal fade careerfy-typo-wrap",attrs:{id:"JobSearchModalLogin"}},[a("div",{staticClass:"modal-inner-area"},[e._v(" ")]),a("div",{staticClass:"modal-content-area"},[a("div",{staticClass:"modal-box-area"},[a("div",{staticClass:"careerfy-modal-title-box"},[a("h2",[e._v("Signup to your account")]),a("span",{staticClass:"modal-close",on:{click:e.closeModal}},[a("i",{staticClass:"fa fa-times"})])]),a("form",[a("div",{staticClass:"careerfy-user-form careerfy-user-form-coltwo"},[a("ul",[a("li",[a("label",[e._v("First Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{value:"Enter Your Name",onblur:"if(this.value == '') { this.value ='Enter Your Name'; }",onfocus:"if(this.value =='Enter Your Name') { this.value = ''; }",type:"text"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),a("i",{staticClass:"careerfy-icon careerfy-user"})]),a("li",[a("label",[e._v("Last Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{value:"Enter Your Name",onblur:"if(this.value == '') { this.value ='Enter Your Name'; }",onfocus:"if(this.value =='Enter Your Name') { this.value = ''; }",type:"text"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),a("i",{staticClass:"careerfy-icon careerfy-user"})]),a("li",[a("label",[e._v("Email Address:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{value:"Enter Your Email Address",onblur:"if(this.value == '') { this.value ='Enter Your Email Address'; }",onfocus:"if(this.value =='Enter Your Email Address') { this.value = ''; }",type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("i",{staticClass:"careerfy-icon careerfy-mail"})]),a("li",[a("label",[e._v("Phone Number:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{value:"Enter Your Phone Number",onblur:"if(this.value == '') { this.value ='Enter Your Phone Number'; }",onfocus:"if(this.value =='Enter Your Phone Number') { this.value = ''; }",type:"text"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),a("i",{staticClass:"careerfy-icon careerfy-technology"})]),a("li",{staticClass:"careerfy-user-form-coltwo-full"},[a("label",[e._v("Categories:")]),a("div",{staticClass:"careerfy-profile-select"},[a("select",[a("option",[e._v("Employee")]),a("option",[e._v("Employer")])])])]),a("li",{staticClass:"careerfy-user-form-coltwo-full"},[a("input",{attrs:{type:"button",value:"Sign Up"},on:{click:e.register}})])])])])])])])])},w=[],E={name:"Register",data:function(){return{firstName:"",lastName:"",email:"",phone:""}},methods:{closeModal:function(){document.getElementById("JobSearchModalLogin").classList.remove("fade-in")},register:function(){var e=this,t=this.email,a=this.phone,r=this.firstName,s=this.lastName;this.$store.dispatch("register",{firstName:r,lastName:s,email:t,phone:a}).then((function(){return e.$router.push("/")})).catch((function(e){return console.log(e)}))}}},P=E,x=Object(d["a"])(P,b,w,!1,null,null,null),S=x.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"careerfy-modal fade careerfy-typo-wrap",attrs:{id:"JobSearchModalSignup"}},[a("div",{staticClass:"modal-inner-area"},[e._v(" ")]),a("div",{staticClass:"modal-content-area"},[a("div",{staticClass:"modal-box-area"},[a("div",{staticClass:"careerfy-modal-title-box"},[a("h2",[e._v("Login to your account")]),a("span",{staticClass:"modal-close",on:{click:e.closeModal}},[a("i",{staticClass:"fa fa-times"})])]),a("form",[a("hr"),a("div",{staticClass:"careerfy-user-form"},[a("ul",[a("li",[a("label",[e._v("Email Address:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",value:"Enter Your Email Address",onblur:"if(this.value == '') { this.value ='Enter Your Email Address'; }",onfocus:"if(this.value =='Enter Your Email Address') { this.value = ''; }"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),a("i",{staticClass:"careerfy-icon careerfy-mail"})]),a("li",[a("label",[e._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",value:"Enter Password",onblur:"if(this.value == '') { this.value ='Enter Password'; }",onfocus:"if(this.value =='Enter Password') { this.value = ''; }"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("i",{staticClass:"careerfy-icon careerfy-multimedia"})]),a("li",[a("input",{attrs:{type:"button",value:"Sign In"},on:{click:e.login}})])]),a("div",{staticClass:"clearfix"}),a("div",{staticClass:"careerfy-user-form-info"},[a("p",[e._v("Forgot Password? | "),a("a",{attrs:{href:"#"},on:{click:e.hideLoginAndShowRegistration}},[e._v("Sign Up")])]),e._m(0)])])])])])])},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"careerfy-checkbox"},[a("input",{attrs:{type:"checkbox",id:"r10",name:"rr"}}),a("label",{attrs:{for:"r10"}},[a("span"),e._v(" Remember Password")])])}],N={name:"Login",data:function(){return{username:"",password:""}},computed:{},methods:{closeModal:function(){document.getElementById("JobSearchModalSignup").classList.remove("fade-in")},hideLoginAndShowRegistration:function(){document.getElementById("JobSearchModalSignup").classList.remove("fade-in"),document.getElementById("JobSearchModalSignup").classList.add("fade"),document.getElementById("JobSearchModalLogin").classList.add("fade-in")},login:function(){var e=this,t=this.email,a=this.password;this.$store.dispatch("login",{email:t,password:a}).then((function(){console.log("closing modal"),e.closeModal()})).catch((function(e){return console.log(e)}))}},mounted:function(){}},J=N,L=Object(d["a"])(J,I,k,!1,null,null,null),A=L.exports,$={name:"App",components:{Header:m,Footer:C,Login:A,Register:S},created:function(){this.$http.interceptors.response.use(void 0,(function(e){return new Promise((function(t,a){throw 401===e.status&&e.config&&!e.config.__isRetryRequest&&(this.$store.dispatch("logout"),t()),e}))}))}},Y=$,D=Object(d["a"])(Y,s,i,!1,null,null,null),O=D.exports,j=a("2f62"),M=a("bc3a"),R=a.n(M);r["a"].use(j["a"]);var F=new j["a"].Store({state:{status:"",token:localStorage.getItem("token")||"",user:{}},mutations:{auth_request:function(e){e.status="loading"},auth_success:function(e,t,a){e.status="success",e.token=t,e.user=a},auth_error:function(e){e.status="error"},logout:function(e){e.status="",e.token=""}},actions:{login:function(e,t){var a=e.commit;return new Promise((function(e,t){a("auth_request"),a("auth_success","token","user"),e()}))},register:function(e,t){var a=e.commit;return new Promise((function(e,r){a("auth_request"),console.log("register action ----- ",t),R()({url:"http://localhost:3000/register",data:t,method:"POST"}).then((function(t){var r=t.data.token,s=t.data.user;localStorage.setItem("token",r),R.a.defaults.headers.common["Authorization"]=r,a("auth_success",r,s),e(t)})).catch((function(e){a("auth_error",e),localStorage.removeItem("token"),r(e)}))}))},logout:function(e){var t=e.commit;return new Promise((function(e,a){t("logout"),localStorage.removeItem("token"),delete R.a.defaults.headers.common["Authorization"],e()}))}},getters:{isLoggedIn:function(e){return!!e.token},authStatus:function(e){return e.status}}}),q=a("8c4f"),B=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},H=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"careerfy-banner careerfy-typo-wrap"},[a("span",{staticClass:"careerfy-banner-transparent"}),a("div",{staticClass:"careerfy-banner-caption"},[a("div",{staticClass:"container"},[a("h1",[e._v("Aim Higher. Reach Farther. Dream Bigger.")]),a("p",[e._v("A better career is out there. We'll help you find it to use.")]),a("form",{staticClass:"careerfy-banner-search"},[a("ul",[a("li",[a("input",{attrs:{value:"Job Title, Keywords, or Company",onblur:"if(this.value == '') { this.value ='Job Title, Keywords, or Company'; }",onfocus:"if(this.value =='Job Title, Keywords, or Company') { this.value = ''; }",type:"text"}})]),a("li",[a("input",{attrs:{value:"City, State or ZIP",onblur:"if(this.value == '') { this.value ='City, State or ZIP'; }",onfocus:"if(this.value =='City, State or ZIP') { this.value = ''; }",type:"text"}}),a("i",{staticClass:"careerfy-icon careerfy-location"})]),a("li",[a("div",{staticClass:"careerfy-select-style"},[a("select",[a("option",[e._v("Categories")]),a("option",[e._v("Categories")]),a("option",[e._v("Categories")])])])]),a("li",{staticClass:"careerfy-banner-submit"},[a("input",{attrs:{type:"button",value:""}}),a("i",{staticClass:"careerfy-icon careerfy-search"})])])]),a("div",{staticClass:"careerfy-banner-btn"},[a("a",{staticClass:"careerfy-bgcolorhover",attrs:{href:"#"}},[a("i",{staticClass:"careerfy-icon careerfy-up-arrow"}),e._v(" Upload Your Resume")]),a("a",{staticClass:"careerfy-bgcolorhover",attrs:{href:"#"}},[a("i",{staticClass:"careerfy-icon careerfy-portfolio"}),e._v(" Hiring? Post a job for free")])])])])])}],T={name:"Home",components:{Header:m,Footer:C,Login:A,Register:S},data:function(){return{}},methods:{},mounted:function(){}},U=T,W=Object(d["a"])(U,B,H,!1,null,null,null),G=W.exports,V=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"careerfy-main-content"},[a("div",{staticClass:"careerfy-main-section map-full"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{attrs:{id:"map"}})])])]),a("div",{staticClass:"careerfy-main-section careerfy-contact-form-full-section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"careerfy-contact-info-sec"},[a("h2",[e._v("Contact Information")]),a("p",[e._v("Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos...")]),a("ul",{staticClass:"careerfy-contact-info-list"},[a("li",[a("i",{staticClass:"careerfy-icon careerfy-placeholder"}),e._v(" International Noel Nawab Street Los Alamitos CA 90720, USA")]),a("li",[a("i",{staticClass:"careerfy-icon careerfy-mail"}),a("a",{attrs:{href:"#"}},[e._v("Email: Info@Website.Com")])]),a("li",[a("i",{staticClass:"careerfy-icon careerfy-technology"}),e._v(" Call: 123.456.78910")]),a("li",[a("i",{staticClass:"careerfy-icon careerfy-fax"}),e._v(" Fax: (800) 123 4567 89")])]),a("div",{staticClass:"careerfy-contact-media"},[a("a",{staticClass:"careerfy-icon careerfy-facebook-logo",attrs:{href:"#"}}),a("a",{staticClass:"careerfy-icon careerfy-twitter-logo",attrs:{href:"#"}}),a("a",{staticClass:"careerfy-icon careerfy-linkedin-button",attrs:{href:"#"}}),a("a",{staticClass:"careerfy-icon careerfy-dribbble-logo",attrs:{href:"#"}})])]),a("div",{staticClass:"careerfy-contact-form"},[a("h2",[e._v("We want to hear form you!")]),a("form",[a("ul",[a("li",[a("input",{attrs:{value:"Enter Your Name",onblur:"if(this.value == '') { this.value ='Enter Your Name'; }",onfocus:"if(this.value =='Enter Your Name') { this.value = ''; }",type:"text"}}),a("i",{staticClass:"careerfy-icon careerfy-user"})]),a("li",[a("input",{attrs:{value:"Subject",onblur:"if(this.value == '') { this.value ='Subject'; }",onfocus:"if(this.value =='Subject') { this.value = ''; }",type:"text"}}),a("i",{staticClass:"careerfy-icon careerfy-user"})]),a("li",[a("input",{attrs:{value:"Enter Your Email Address",onblur:"if(this.value == '') { this.value ='Enter Your Email Address'; }",onfocus:"if(this.value =='Enter Your Email Address') { this.value = ''; }",type:"text"}}),a("i",{staticClass:"careerfy-icon careerfy-mail"})]),a("li",[a("input",{attrs:{value:"Enter Your Phone Number",onblur:"if(this.value == '') { this.value ='Enter Your Phone Number'; }",onfocus:"if(this.value =='Enter Your Phone Number') { this.value = ''; }",type:"text"}}),a("i",{staticClass:"careerfy-icon careerfy-technology"})]),a("li",{staticClass:"careerfy-contact-form-full"},[a("textarea",[e._v("Track your results on the local or global market , depending on your needs. You can track everything in the most popular search engines - Google, Bing, Yahoo and Yandex. Improve your search performance and increase traffic with our turn-key. Positionly is the only solution on the market that provides a simple and transparent way to monitor.the effectiveness.")])]),a("li",[a("input",{attrs:{type:"submit",value:"Submit"}})])])])])])])])]),a("div",{staticClass:"careerfy-main-section careerfy-partner-slider-full"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("section",{staticClass:"careerfy-fancy-title"},[a("h2",[e._v("Find the one that’s right for you.")]),a("p",[e._v("A better career is out there. We'll help you find it to use.")])]),a("div",{staticClass:"careerfy-partner-slider"},[a("div",{staticClass:"careerfy-partner-slider-layer"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"extra-images/partner-logo-1.png",alt:""}})])]),a("div",{staticClass:"careerfy-partner-slider-layer"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"extra-images/partner-logo-2.png",alt:""}})])]),a("div",{staticClass:"careerfy-partner-slider-layer"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"extra-images/partner-logo-3.png",alt:""}})])]),a("div",{staticClass:"careerfy-partner-slider-layer"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"extra-images/partner-logo-4.png",alt:""}})])]),a("div",{staticClass:"careerfy-partner-slider-layer"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"extra-images/partner-logo-5.png",alt:""}})])]),a("div",{staticClass:"careerfy-partner-slider-layer"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"extra-images/partner-logo-6.png",alt:""}})])]),a("div",{staticClass:"careerfy-partner-slider-layer"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"extra-images/partner-logo-3.png",alt:""}})])])])])])])]),a("div",{staticClass:"careerfy-main-section contact-service-full"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"contact-service"},[a("ul",{staticClass:"row"},[a("li",{staticClass:"col-md-4"},[a("h2",[e._v("Want to join us?")]),a("i",{staticClass:"careerfy-icon careerfy-user-2"}),a("a",{attrs:{href:"#"}},[e._v("Careers")])]),a("li",{staticClass:"col-md-4"},[a("h2",[e._v("Read our latest news")]),a("i",{staticClass:"careerfy-icon careerfy-newspaper"}),a("a",{attrs:{href:"#"}},[e._v("Our Blog")])]),a("li",{staticClass:"col-md-4"},[a("h2",[e._v("Have questions?")]),a("i",{staticClass:"careerfy-icon careerfy-discuss-issue"}),a("a",{attrs:{href:"#"}},[e._v("Our FAQ")])])])])])])])])])}],K={name:"Contact",data:function(){return{}}},Z=K,Q=Object(d["a"])(Z,V,z,!1,null,null,null),X=Q.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    Profile Page\n")])},te=[],ae={name:"Profile",data:function(){return{}}},re=ae,se=Object(d["a"])(re,ee,te,!1,null,null,null),ie=se.exports;r["a"].use(q["a"]);var oe=new q["a"]({mode:"history",routes:[{path:"/",name:"home",component:G},{path:"/profile",name:"profile",component:ie,meta:{requiresAuth:!0}},{path:"/contact-us",name:"contactUs",component:X}]});oe.beforeEach((function(e,t,a){if(e.matched.some((function(e){return e.meta.requiresAuth}))){if(F.getters.isLoggedIn)return void a();a("/login")}else a()}));var le=oe;r["a"].prototype.$http=R.a;var ne=localStorage.getItem("token");ne&&(r["a"].prototype.$http.defaults.headers.common["Authorization"]=ne),r["a"].config.productionTip=!1,r["a"].use(q["a"]),new r["a"]({render:function(e){return e(O)},router:le,store:F}).$mount("#app")},"845b":function(e,t,a){},"8baf":function(e,t,a){"use strict";a("845b")}});
//# sourceMappingURL=app.ecdad065.js.map