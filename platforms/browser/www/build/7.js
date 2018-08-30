webpackJsonp([7],{

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementPageModule", function() { return AgreementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agreement__ = __webpack_require__(598);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgreementPageModule = /** @class */ (function () {
    function AgreementPageModule() {
    }
    AgreementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agreement__["a" /* AgreementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agreement__["a" /* AgreementPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__agreement__["a" /* AgreementPage */]
            ]
        })
    ], AgreementPageModule);
    return AgreementPageModule;
}());

//# sourceMappingURL=agreement.module.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgreementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_variables_variables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_translations_translations__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_error_log_error_log__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AgreementPage = /** @class */ (function () {
    function AgreementPage(navCtrl, alert, db, variables, translate, nativePageTransitions, errorHandler) {
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.db = db;
        this.variables = variables;
        this.translate = translate;
        this.nativePageTransitions = nativePageTransitions;
        this.errorHandler = errorHandler;
        this.user = this.variables.user;
        console.log(this.user);
    }
    AgreementPage.prototype.ionViewWillLeave = function () {
        this.transitionOptions = {
            direction: 'left',
            duration: 300,
            slowdownfactor: 4,
        };
        //this.nativePageTransitions.slide(this.transitionOptions)
    };
    AgreementPage.prototype.ionViewDidLoad = function () {
        this.agree = this.translate.getTranslation('agree');
        this.disagree = this.translate.getTranslation('disagree');
    };
    AgreementPage.prototype.validateAgreement = function (agree) {
        var _this = this;
        var userRef = this.db.app.database().ref('/users/' + this.user.id);
        if (!agree) {
            userRef.update({ 'optIns/App/opt_in': false, 'optIns/App/hasAnswered': 'Weigeren' })
                .catch(function (error) { return _this.errorHandler.sendError("validate agreement - update agreement", error); });
            this.alert.create({
                title: this.translate.getTranslation('accessDenied'),
                subTitle: this.translate.getTranslation('contactMentor'),
                buttons: [this.translate.getTranslation('ok')]
            }).present();
            this.navCtrl.setRoot("ActivationPage");
        }
        else {
            userRef.update({ 'optIns/App/opt_in': true, 'optIns/App/hasAnswered': 'Akkoord' });
            this.navCtrl.setRoot("HomePage");
        }
    };
    AgreementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agreement',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/agreement/agreement.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Agreement</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <img src="{{user.optIns.App.companyImgUrl}}"/>\n  <p>{{user.optIns.App.legalStatement}}</p>\n  <p>\n  </p>\n  <ion-grid>\n    <ion-row align-items-end>\n\n      <ion-col col-6><button ion-button color="secondary" (click)="validateAgreement(true)">{{agree}}</button></ion-col>\n      <ion-col col-6><button ion-button color="danger" (click)="validateAgreement(false)">{{disagree}}</button></ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/agreement/agreement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__providers_variables_variables__["a" /* VariablesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_translations_translations__["a" /* TranslationsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_6__providers_error_log_error_log__["a" /* ErrorLogProvider */]])
    ], AgreementPage);
    return AgreementPage;
}());

//# sourceMappingURL=agreement.js.map

/***/ })

});
//# sourceMappingURL=7.js.map