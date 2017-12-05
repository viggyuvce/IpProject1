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
var ListComponent = (function () {
    function ListComponent(router, route, postService) {
        var _this = this;
        this.router = router;
        this.route = route;
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
            postService.getCompletedRanks(this.id)
                .subscribe(function (data) {
                _this.completedRanks = data;
                console.log(_this.completedRanks);
            }, function (error) {
            });
            postService.getName(this.id)
                .subscribe(function (data) {
                _this.name = data;
            }, function (error) {
            });
            this.route.params.subscribe(function (params) {
                _this.currentPageGrade = Number.parseInt(params['id']);
                console.log(_this.currentPageGrade);
            });
        }
    }
    ListComponent.prototype.check = function (num) {
        if (this.currentPageGrade < this.completedGrades)
            return true;
        if (num <= this.completedRanks)
            return true;
        else
            return false;
    };
    ListComponent.prototype.logout = function () {
        this.postService.logout();
        this.router.navigate(['/logout']);
    };
    ListComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: './html/list.component.html',
        providers: [posts_service_1.PostsService],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        posts_service_1.PostsService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map