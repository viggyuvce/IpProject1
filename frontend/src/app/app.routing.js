"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home.component");
var about_component_1 = require("./components/about.component");
var signup_component_1 = require("./components/signup.component");
var login_component_1 = require("./components/login.component");
var profile_component_1 = require("./components/profile.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map