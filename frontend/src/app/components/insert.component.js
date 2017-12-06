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
var alert_service_1 = require("../services/alert.service");
var router_1 = require("@angular/router");
var InsertComponent = (function () {
    function InsertComponent(router, postsService, alertService) {
        this.router = router;
        this.postsService = postsService;
        this.alertService = alertService;
        this.loading = false;
        this.model = {};
        this.notMatching = false;
        this.musicModel = {};
    }
    InsertComponent.prototype.insert = function () {
        var _this = this;
        this.loading = true;
        this.postsService.createMusic(this.musicModel)
            .subscribe(function (data) {
            _this.alertService.success('Registration Successful', true);
            _this.router.navigate(['/insertMusic']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return InsertComponent;
}());
InsertComponent = __decorate([
    core_1.Component({
        selector: 'insert',
        templateUrl: './html/insert.component.html',
        providers: [posts_service_1.PostsService, alert_service_1.AlertService],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [router_1.Router,
        posts_service_1.PostsService,
        alert_service_1.AlertService])
], InsertComponent);
exports.InsertComponent = InsertComponent;
//# sourceMappingURL=insert.component.js.map