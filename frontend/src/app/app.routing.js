"use strict";
var router_1 = require("@angular/router");
var grade_component_1 = require("./components/grade.component");
var home_component_1 = require("./components/home.component");
var about_component_1 = require("./components/about.component");
var logout_component_1 = require("./components/logout.component");
var signup_component_1 = require("./components/signup.component");
var login_component_1 = require("./components/login.component");
var profile_component_1 = require("./components/profile.component");
var list_component_1 = require("./components/list.component");
var theory_intro_1 = require("./components/theory.intro");
var scl_component_1 = require("./components/courses/scl.component");
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
    {
        path: 'logout',
        component: logout_component_1.LogoutComponent
    },
    {
        path: 'grades',
        component: grade_component_1.GradeComponent
    },
    {
        path: 'list/:id',
        component: list_component_1.ListComponent
    },
    {
        path: 'basicMusicTheory/intro',
        component: theory_intro_1.TheoryIntroComponent
    },
    {
        path: 'course/scl',
        component: scl_component_1.SCLComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map