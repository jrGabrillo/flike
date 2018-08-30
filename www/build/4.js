webpackJsonp([4],{

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoacheePageModule", function() { return CoacheePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coachee__ = __webpack_require__(612);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoacheePageModule = /** @class */ (function () {
    function CoacheePageModule() {
    }
    CoacheePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coachee__["a" /* CoacheePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coachee__["a" /* CoacheePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__coachee__["a" /* CoacheePage */]
            ]
        })
    ], CoacheePageModule);
    return CoacheePageModule;
}());

//# sourceMappingURL=coachee.module.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoacheePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_variables_variables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_admob_admob__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_globals_globals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_error_log_error_log__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CoacheePage = /** @class */ (function () {
    function CoacheePage(navCtrl, navParams, prefs, loader, db, variables, admobService, errorHandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.prefs = prefs;
        this.loader = loader;
        this.db = db;
        this.variables = variables;
        this.admobService = admobService;
        this.errorHandler = errorHandler;
        this.chatroomByUser = {};
        this.AllPage = "AllPage";
        this.globals = __WEBPACK_IMPORTED_MODULE_6__providers_globals_globals__;
        this.user = this.variables.user;
        if (!this.user.id)
            this.navCtrl.setRoot("ActivationPage");
    }
    CoacheePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.user.id) {
            this.getChatroomByUser();
        }
        else {
            this.prefs.fetch(__WEBPACK_IMPORTED_MODULE_6__providers_globals_globals__["userPrefs"], "user")
                .then(function (user) {
                if (!user.id)
                    _this.navCtrl.setRoot("ActivationPage");
                else
                    _this.getChatroomByUser();
            });
        }
    };
    CoacheePage.prototype.getChatroomByUser = function () {
        var _this = this;
        var ref = '/chatroomByUser/' + this.user.id;
        console.log(ref);
        var chatroomRef = this.db.object(ref).snapshotChanges()
            .subscribe(function (actionChatroomByUser) {
            _this.chatroomByUser = actionChatroomByUser.payload.val();
            console.log(_this.chatroomByUser);
            if (_this.chatroomByUser.showAdMob &&
                (!_this.chatroomByUser.quote || _this.chatroomByUser.quote != "") &&
                (!_this.chatroomByUser.quoteImgUrl || _this.chatroomByUser.quoteImgUrl != "")) {
                _this.admobService.showAdmob().then(function (banner) {
                }).catch(function (error) { return console.log(error); });
            }
            else {
                _this.admobService.hideAdmob().then(function (banner) {
                }).catch(function (error) { return _this.errorHandler.sendError("coacheePage, getChatroomByUser - hide adMob", error); });
            }
            chatroomRef.unsubscribe();
        }, function (error) {
            _this.errorHandler.sendError("coacheePage, getChatroomByUser - chatroomsRef subscription", error);
        });
    };
    CoacheePage.prototype.logout = function () {
        this.db.app.database().ref('/users/' + this.user.id).update({ firebaseToken: null });
        this.variables.user = null;
        this.prefs.remove(__WEBPACK_IMPORTED_MODULE_6__providers_globals_globals__["userPrefs"], __WEBPACK_IMPORTED_MODULE_6__providers_globals_globals__["userItem"]);
        this.prefs.remove(__WEBPACK_IMPORTED_MODULE_6__providers_globals_globals__["userPrefs"], __WEBPACK_IMPORTED_MODULE_6__providers_globals_globals__["surveys"]);
        this.navCtrl.setRoot("ActivationPage");
    };
    CoacheePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coachee',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/coachee/coachee.html"*/'<ion-header>\n  <ion-navbar>\n    <button (click)="logout()" icon-only>\n      <ion-icon name="log-out" item-left></ion-icon>\n    </button>\n    <ion-title>{{chatroomByUser.customerName}}</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-nav [root]="AllPage"></ion-nav>\n</ion-content>\n\n\n<ion-footer>\n  <ion-item *ngIf="chatroomByUser.quote"><em [innerHTML]="chatroomByUser.quote"></em></ion-item>\n  <img *ngIf="chatroomByUser.quoteImgUrl" src="{{chatroomByUser.quoteImgUrl}}"/>\n</ion-footer>\n'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/coachee/coachee.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences__["a" /* AppPreferences */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__providers_variables_variables__["a" /* VariablesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_admob_admob__["a" /* AdmobProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_error_log_error_log__["a" /* ErrorLogProvider */]])
    ], CoacheePage);
    return CoacheePage;
}());

//# sourceMappingURL=coachee.js.map

/***/ })

});
//# sourceMappingURL=4.js.map