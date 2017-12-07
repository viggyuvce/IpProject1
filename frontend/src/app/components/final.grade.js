"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var posts_service_1 = require("../services/posts.service");
//import {AlertService} from '../services/alert.service';
var router_1 = require("@angular/router");
//import {User} from '../models/user';
var FinalGradeComponent = (function () {
    function FinalGradeComponent(router, route, postsService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.postsService = postsService;
        this.loading = false;
        this.model = {};
        this.notMatching = false;
        this.loggedin = false;
        this.loggedout = true;
        this.id = this.postsService.check();
        console.log(this.id);
        if (this.id != null) {
            this.loggedin = true;
            this.loggedout = false;
            postsService.getName(this.id)
                .subscribe(function (data) {
                _this.name = data;
            }, function (error) {
            });
        }
        this.route.params.subscribe(function (params) {
            _this.grade = params['grade'];
        });
    }
    FinalGradeComponent.prototype.downloadCertificate = function () {
        // this.postService.getMp3(this.post.id).subscribe()
        window.open("http://localhost:9889/download/certificate/" + this.grade);
    };
    FinalGradeComponent.prototype.signin = function () {
        this.loading = true;
        this.router.navigate(['/login']);
        /*
        this.postsService.create(this.model)
                .subscribe(
                    data => {
                        this.alertService.success('Registration Successful',true)
                        this.router.navigate(['/login']);
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    }
                )*/
    };
    FinalGradeComponent.prototype.logout = function () {
        this.postsService.logout();
        this.router.navigate(['/logout']);
    };
    FinalGradeComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    return FinalGradeComponent;
}());
FinalGradeComponent = __decorate([
    core_1.Component({
        selector: 'logout',
        templateUrl: './html/final.grade.html',
        providers: [posts_service_1.PostsService],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        posts_service_1.PostsService])
], FinalGradeComponent);
exports.FinalGradeComponent = FinalGradeComponent;
//# sourceMappingURL=final.grade.js.map