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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
        console.log("Posts service Initialised");
    }
    PostsService.prototype.getPosts = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.create = function (user) {
        return this.http.post('http://localhost:9889/signup', user)
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.createMusic = function (music) {
        return this.http.post('http://localhost:9889/insertMusic', music)
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getCompletedGrades = function (id) {
        return this.http.get('http://localhost:9889/getCompletedGrades/' + id)
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getCompletedRanks = function (id) {
        return this.http.get('http://localhost:9889/getCompletedRanks/' + id)
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getName = function (id) {
        return this.http.get('http://localhost:9889/getName/' + id)
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getMusicModel = function (grade, rank) {
        return this.http.get('http://localhost:9889/getMusic/' + grade + '/' + rank).map(function (res) { return res.json(); });
    };
    PostsService.prototype.updateRank = function (rank, grade, id) {
        return this.http.get('http://localhost:9889/update/' + id + '/' + grade + '/' + rank);
    };
    PostsService.prototype.logout = function () {
        localStorage.clear();
    };
    PostsService.prototype.check = function () {
        return localStorage.getItem('currentUser');
    };
    return PostsService;
}());
PostsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map