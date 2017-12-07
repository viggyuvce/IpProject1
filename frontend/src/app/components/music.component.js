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
var platform_browser_1 = require("@angular/platform-browser");
var MusicComponent = (function () {
    function MusicComponent(route, router, postService, sanitizer) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.postService = postService;
        this.sanitizer = sanitizer;
        this.music = {};
        this.loggedin = false;
        this.loggedout = true;
        this.id = this.postService.check();
        console.log(this.id);
        if (this.id != null) {
            this.loggedin = true;
            this.loggedout = false;
            postService.getName(this.id)
                .subscribe(function (data) {
                _this.name = data;
            }, function (error) {
            });
            this.route.params.subscribe(function (params) {
                _this.grade = params['grade'];
                _this.igrade = Number.parseInt(_this.grade);
            });
            this.route.params.subscribe(function (params) {
                _this.rank = params['rank'];
                _this.irank = Number.parseInt(_this.rank);
                if (_this.rank == '5') {
                    _this.nextRank = 1;
                    _this.nextGrade = _this.igrade + 1;
                }
                else {
                    _this.nextGrade = _this.igrade;
                    _this.nextRank = _this.irank + 1;
                }
            });
            postService.getMusicModel(this.grade, this.rank)
                .subscribe(function (data) {
                _this.music = data;
                console.log(_this.music.link);
                _this.sanitizedLink = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.music.link);
                console.log(_this.sanitizedLink);
            }, function (error) {
            });
        }
    }
    MusicComponent.prototype.downloadMp3 = function () {
        // this.postService.getMp3(this.post.id).subscribe()
        window.open("http://localhost:9889/download/mp3/" + this.music.id);
    };
    MusicComponent.prototype.downloadSheet = function () {
        window.open("http://localhost:9889/download/sheet/" + this.music.id);
    };
    MusicComponent.prototype.update = function () {
        this.postService.updateRank(this.nextRank, this.nextGrade, this.id).subscribe(function (data) {
            console.log("done");
        }, function (error) {
            console.log("error");
        });
        this.router.navigate(['/list/' + this.nextGrade]);
    };
    MusicComponent.prototype.logout = function () {
        this.postService.logout();
        this.router.navigate(['/logout']);
    };
    MusicComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    return MusicComponent;
}());
MusicComponent = __decorate([
    core_1.Component({
        selector: 'music',
        templateUrl: './html/music.component.html',
        providers: [posts_service_1.PostsService],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        posts_service_1.PostsService,
        platform_browser_1.DomSanitizer])
], MusicComponent);
exports.MusicComponent = MusicComponent;
//# sourceMappingURL=music.component.js.map