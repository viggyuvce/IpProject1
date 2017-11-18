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
var UserComponent = (function () {
    function UserComponent() {
        this.name = 'Vignesh';
        this.email = 'ibalvignesh@yahoo.com';
        this.address = {
            street: 'G 1402, 3rd Cross, HAL NewTownship, Marathahalli',
            city: 'Bengaluru',
            state: 'Karnataka'
        };
        this.hobbies = ['Music', 'Movies', 'Walking'];
        this.showHobbies = false;
    }
    UserComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies == false)
            this.showHobbies = true;
        else
            this.showHobbies = false;
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "<h1>Hello {{name}}</h1>\n    <p>Email : {{email}}</p>\n    <p>{{address.street}}</p>\n    <p>{{address.city}}</p>\n    <p>{{address.state}}</p>\n    <button (click)=\"toggleHobbies()\">{{showHobbies ? \"Hide Hobbies\" : \"Show Hobbies\"}}</button>\n    <div *ngIf=\"showHobbies\">\n    <h4>Hobbies</h4>\n    <ul>\n        <li *ngFor = \"let hobby of hobbies\">\n            {{hobby}}\n        </li>\n    </ul>\n    </div>\n    <form>\n        <label>Name: </label><br/>\n        <input type=\"text\" name=\"name\" [(ngModel)]=\"name\"/><br/>\n        <label>Email: </label><br/>\n        <input type=\"text\" name=\"email\" [(ngModel)]=\"email\"/><br/>\n        <label>Street: </label><br/>\n        <input type=\"text\" name=\"addressStreet\" [(ngModel)]=\"address.street\"/><br/>\n    </form>\n  ",
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map