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
var router_1 = require("@angular/router");
var posts_service_1 = require("../services/posts.service");
var GradeComponent = (function () {
    function GradeComponent(router, postService) {
        var _this = this;
        this.router = router;
        this.postService = postService;
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8];
        this.loggedin = false;
        this.loggedout = true;
        this.id = this.postService.check();
        if (this.id != null) {
            this.loggedin = true;
            this.loggedout = false;
            postService.getCompletedGrades(this.id)
                .subscribe(function (data) {
                _this.completedGrades = data;
                console.log(_this.completedGrades);
            }, function (error) {
            });
            postService.getName(this.id)
                .subscribe(function (data) {
                _this.name = data;
            }, function (error) {
            });
        }
    }
    GradeComponent.prototype.checkGrade = function (num) {
        if (num <= this.completedGrades)
            return true;
        else
            return false;
    };
    GradeComponent.prototype.logout = function () {
        this.postService.logout();
        this.router.navigate(['/logout']);
    };
    GradeComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    return GradeComponent;
}());
GradeComponent = __decorate([
    core_1.Component({
        selector: 'grade',
        templateUrl: './html/grade.component.html',
        providers: [posts_service_1.PostsService],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [router_1.Router,
        posts_service_1.PostsService])
], GradeComponent);
exports.GradeComponent = GradeComponent;
//# sourceMappingURL=grade.component.js.map