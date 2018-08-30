webpackJsonp([5],{

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachPageModule", function() { return CoachPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoachPageModule = /** @class */ (function () {
    function CoachPageModule() {
    }
    CoachPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coach__["a" /* CoachPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coach__["a" /* CoachPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__coach__["a" /* CoachPage */]
            ]
        })
    ], CoachPageModule);
    return CoachPageModule;
}());

//# sourceMappingURL=coach.module.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_variables_variables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_error_log_error_log__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_translations_translations__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_admob_admob__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CoachPage = /** @class */ (function () {
    function CoachPage(navCtrl, prefs, loader, db, variables, errorHandler, alert, translate, admobService) {
        this.navCtrl = navCtrl;
        this.prefs = prefs;
        this.loader = loader;
        this.db = db;
        this.variables = variables;
        this.errorHandler = errorHandler;
        this.alert = alert;
        this.translate = translate;
        this.admobService = admobService;
        this.chatroomByUser = { tabs: { All: "All", group_2: "Class 1", group_3: "Class 2" } };
        this.AllPage = "AllPage";
        this.Group2Page = "Group2Page";
        this.Group3Page = "Group3Page";
        this.globals = __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__;
        this.user = this.variables.user;
        if (!this.user.id)
            this.navCtrl.setRoot("ActivationPage");
    }
    CoachPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.variables.firebaseToken) {
            this.db.app.database().ref('/users/' + this.user.id)
                .update({ firebaseToken: this.variables.firebaseToken, lastConnection: __WEBPACK_IMPORTED_MODULE_8_moment__["now"]() })
                .catch(function (error) { return console.log(error); });
        }
        if (this.user.id) {
            this.getChatroomByUser();
        }
        else {
            this.prefs.fetch(__WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["userPrefs"], "user")
                .then(function (user) {
                if (!user.id)
                    _this.navCtrl.setRoot("ActivationPage");
                else
                    _this.getChatroomByUser();
            });
        }
    };
    CoachPage.prototype.getChatroomByUser = function () {
        var _this = this;
        var ref = '/chatroomByUser/' + this.user.id;
        var chatroomsRef = this.db.object(ref).snapshotChanges()
            .subscribe(function (actionChatroomByUser) {
            if (_this.user.typeOfUser == __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["coachee"] && (_this.chatroomByUser.showAdMob &&
                (!_this.chatroomByUser.quote || _this.chatroomByUser.quote != "") &&
                (!_this.chatroomByUser.quoteImgUrl || _this.chatroomByUser.quoteImgUrl != ""))) {
                _this.admobService.showAdmob().then(function (banner) {
                }).catch(function (error) { return console.log(error); });
            }
            else {
                _this.admobService.hideAdmob().then(function (banner) {
                }).catch(function (error) { return _this.errorHandler.sendError("coachPage, getChatroomByUser - hide adMob subscription", error); });
            }
            if (actionChatroomByUser.payload) {
                _this.chatroomByUser = actionChatroomByUser.payload.val();
            }
            else {
                _this.navCtrl.setRoot("ActivationPage");
            }
            chatroomsRef.unsubscribe();
        }, function (error) {
            _this.errorHandler.sendError("coachPage, getChatroomByUser - chatroomsRef subscription", error);
        });
    };
    CoachPage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alert.create({
            title: this.translate.getTranslation('logoutConfirm'),
            buttons: [{
                    text: this.translate.getTranslation('ok'),
                    handler: function () {
                        _this.db.app.database().ref('/users/' + _this.user.id).update({ firebaseToken: null });
                        _this.variables.user = null;
                        _this.prefs.remove(__WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["userPrefs"], __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["userItem"]);
                        _this.prefs.remove(__WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["userPrefs"], __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["surveys"]);
                        _this.navCtrl.setRoot("ActivationPage");
                    }
                }, this.translate.getTranslation('cancel')]
        });
        confirm.present();
    };
    CoachPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/coach/coach.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button class="logout" ion-button clear (click)="logout()" icon-only>\n      <ion-icon name="log-out" item-left></ion-icon>\n    </button>\n    <ion-title>{{chatroomByUser.customerName}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-tabs tabsPlacement="top" tabsLayout="icon-hide"  *ngIf="user.typeOfUser == globals.coach">\n    <ion-tab [root]="AllPage"    tabTitle="{{chatroomByUser.tabs.All}}"></ion-tab>\n    <ion-tab [root]="Group2Page" tabTitle="{{chatroomByUser.tabs.group_2}}"></ion-tab>\n    <ion-tab [root]="Group3Page" tabTitle="{{chatroomByUser.tabs.group_3}}"></ion-tab>\n  </ion-tabs>\n\n  <ion-nav #Nav *ngIf="user.typeOfUser == globals.coachee" [root]="AllPage"></ion-nav>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-item *ngIf="chatroomByUser.quote"><em [innerHTML]="chatroomByUser.quote"></em></ion-item>\n  <img *ngIf="chatroomByUser.quoteImgUrl" src="{{chatroomByUser.quoteImgUrl}}"/>\n</ion-footer>'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/coach/coach.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences__["a" /* AppPreferences */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__providers_variables_variables__["a" /* VariablesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_error_log_error_log__["a" /* ErrorLogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_translations_translations__["a" /* TranslationsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_admob_admob__["a" /* AdmobProvider */]])
    ], CoachPage);
    return CoachPage;
}());

//# sourceMappingURL=coach.js.map

/***/ })

});
//# sourceMappingURL=5.js.map