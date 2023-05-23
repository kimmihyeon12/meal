"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var socialLogin_service_1 = require("./services/socialLogin.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(environmentInjector) {
        this.environmentInjector = environmentInjector;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss'],
            imports: [
                angular_1.IonicModule,
                http_1.HttpClientModule
            ],
            providers: [
                socialLogin_service_1.SocialLoginService,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
            ],
            standalone: true
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
