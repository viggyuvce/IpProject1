"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var final_grade_1 = require("./components/final.grade");
var logout_component_1 = require("./components/logout.component");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home.component");
var about_component_1 = require("./components/about.component");
var signup_component_1 = require("./components/signup.component");
var login_component_1 = require("./components/login.component");
var profile_component_1 = require("./components/profile.component");
var grade_component_1 = require("./components/grade.component");
var list_component_1 = require("./components/list.component");
var theory_intro_1 = require("./components/theory.intro");
var scl_component_1 = require("./components/courses/scl.component");
var noteDuration_component_1 = require("./components/courses/noteDuration.component");
var measures_component_1 = require("./components/courses/measures.component");
var final_component_1 = require("./components/courses/final.component");
var insert_component_1 = require("./components/insert.component");
var music_component_1 = require("./components/music.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, list_component_1.ListComponent, about_component_1.AboutComponent, signup_component_1.SignupComponent, grade_component_1.GradeComponent, login_component_1.LoginComponent, profile_component_1.ProfileComponent,
            logout_component_1.LogoutComponent, theory_intro_1.TheoryIntroComponent, scl_component_1.SCLComponent, noteDuration_component_1.NoteDurationComponent, measures_component_1.MeasuresComponent,
            final_component_1.FinalComponent, insert_component_1.InsertComponent, music_component_1.MusicComponent, final_grade_1.FinalGradeComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map