"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.SearchDetailPage = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var camera_1 = require("@capacitor/camera");
var backButtonBar_component_1 = require("src/app/core/components/back-button-bar/backButtonBar.component");
var SearchDetailPage = /** @class */ (function () {
    function SearchDetailPage(route, foodsService, actionSheetCtrl, fileStoreService) {
        this.route = route;
        this.foodsService = foodsService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.fileStoreService = fileStoreService;
        this.selectedTime = 0;
        this.formGroup = new forms_1.FormGroup({
            uesr_id: new forms_1.FormControl(null, [forms_1.Validators.required]),
            food_id: new forms_1.FormControl(null, [forms_1.Validators.required]),
            photo: new forms_1.FormControl(null),
            file: new forms_1.FormControl(null),
            meal_time: new forms_1.FormControl(null),
            meal_ev: new forms_1.FormControl(null),
            servings: new forms_1.FormControl(1),
            date: new forms_1.FormControl() // 클릭날짜 얻어오기
        });
        this.mealTimeItem = ["아침", "점심", "저녁", "간식"];
        this.mealEveItem = ["균형잡힌", "탄수화물", "단백질", "지방", "폭식"];
        this.mealTime = [true, false, false, false];
        this.mealEv = [true, false, false, false, false];
    }
    SearchDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.foodDetail$ = this.foodsService.foodDetail$;
        this.route.params.subscribe(function (params) {
            _this.id = params['id']; // URL에서 받아온 값을 number 타입으로 변환하여 id 변수에 할당합니다.
        });
    };
    SearchDetailPage.prototype.ngAfterViewInit = function () {
        this.foodsService.foodsFindOne(this.id);
    };
    SearchDetailPage.prototype.addServings = function () {
        this.formGroup.value.servings += 0.5;
    };
    SearchDetailPage.prototype.minusServings = function () {
        if (this.formGroup.value.servings <= 1)
            return;
        this.formGroup.value.servings -= 0.5;
    };
    SearchDetailPage.prototype.mealTimeToogle = function (index) {
        for (var i = 0; i < this.mealTime.length; i++) {
            if (i === index) {
                this.mealTime[i] = true;
            }
            else {
                this.mealTime[i] = false;
            }
        }
    };
    SearchDetailPage.prototype.mealEvToogle = function (index) {
        this.mealEv[index] = !this.mealEv[index];
    };
    SearchDetailPage.prototype.presentActionSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            cssClass: 'action-sheet-custom',
                            buttons: [
                                {
                                    cssClass: 'btn-custom',
                                    icon: 'camera',
                                    text: '카메라',
                                    role: 'destructive',
                                    data: {
                                        action: 'delete'
                                    },
                                    handler: function () {
                                        _this.takeCamera();
                                    }
                                },
                                {
                                    cssClass: 'btn-custom',
                                    icon: 'images',
                                    text: '겔러리',
                                    data: {
                                        action: 'share'
                                    },
                                    handler: function () {
                                        _this.takePhoto();
                                    }
                                },
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchDetailPage.prototype.takePhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, camera_1.Camera.getPhoto({
                            source: camera_1.CameraSource.Photos,
                            quality: 90,
                            allowEditing: false,
                            resultType: camera_1.CameraResultType.Base64
                        })];
                    case 1:
                        image = _a.sent();
                        this.formGroup.patchValue({
                            photo: image.base64String
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    SearchDetailPage.prototype.takeCamera = function () {
        return __awaiter(this, void 0, void 0, function () {
            var image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, camera_1.Camera.getPhoto({
                            source: camera_1.CameraSource.Camera,
                            quality: 200,
                            allowEditing: false,
                            resultType: camera_1.CameraResultType.Base64
                        })];
                    case 1:
                        image = _a.sent();
                        this.formGroup.patchValue({
                            photo: image.base64String
                        });
                        console.log(this.formGroup.value.photo);
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    SearchDetailPage.prototype.store = function () {
        this.fileStoreService.upload(this.formGroup.value.photo);
    };
    SearchDetailPage = __decorate([
        core_1.Component({
            selector: 'app-search-detail',
            templateUrl: 'searchDetail.page.html',
            imports: [angular_1.IonicModule, common_1.CommonModule, backButtonBar_component_1.BackButtonBarComponent, forms_1.FormsModule],
            standalone: true,
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], SearchDetailPage);
    return SearchDetailPage;
}());
exports.SearchDetailPage = SearchDetailPage;
