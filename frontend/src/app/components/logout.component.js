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
var LogoutComponent = (function () {
    function LogoutComponent(router, postsService) {
        this.router = router;
        this.postsService = postsService;
        this.loading = false;
        this.model = {};
        this.notMatching = false;
    }
    LogoutComponent.prototype.signin = function () {
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
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    core_1.Component({
        selector: 'logout',
        templateUrl: './html/logout.component.html',
        providers: [posts_service_1.PostsService],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [router_1.Router,
        posts_service_1.PostsService])
], LogoutComponent);
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map