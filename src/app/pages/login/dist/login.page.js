"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginPage = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var LoginPage = /** @class */ (function () {
    function LoginPage(socialLoginService) {
        this.socialLoginService = socialLoginService;
    }
    LoginPage.prototype.ngAfterViewInit = function () {
        this.socialLoginService.init();
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: "app-login",
            templateUrl: "login.page.html",
            imports: [
                angular_1.IonicModule,
                common_1.CommonModule
            ],
            standalone: true
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
