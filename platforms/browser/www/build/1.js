webpackJsonp([1],{

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsPageModule", function() { return MeetingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meetings__ = __webpack_require__(615);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MeetingsPageModule = /** @class */ (function () {
    function MeetingsPageModule() {
    }
    MeetingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meetings__["a" /* MeetingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meetings__["a" /* MeetingsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__meetings__["a" /* MeetingsPage */]
            ]
        })
    ], MeetingsPageModule);
    return MeetingsPageModule;
}());

//# sourceMappingURL=meetings.module.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_meetings_meetings__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translations_translations__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_admob_admob__ = __webpack_require__(416);
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








var MeetingsPage = /** @class */ (function () {
    function MeetingsPage(navParams, meetings, alert, translate, nativePageTransitions, adMob, errorHandler) {
        this.navParams = navParams;
        this.meetings = meetings;
        this.alert = alert;
        this.translate = translate;
        this.nativePageTransitions = nativePageTransitions;
        this.adMob = adMob;
        this.errorHandler = errorHandler;
        this.moment = __WEBPACK_IMPORTED_MODULE_4_moment__;
        this.user = this.navParams.get("user");
        this.coachee = this.navParams.get("coachee");
        this.chatroom = this.navParams.get("chatroom");
    }
    MeetingsPage.prototype.ionViewDidLoad = function () {
        this.messageWrite = this.translate.getTranslation('messageWrite');
    };
    /*ionViewWillLeave() {

        let options: NativeTransitionOptions = {
            direction: 'right',
            duration: 300,
            slowdownfactor: 4,
        };

        this.nativePageTransitions.slide(options)

    }*/
    MeetingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.adMob.hideAdmob().catch(function (error) { return _this.errorHandler.sendError("meetingsPage, load - hide adMob", error); });
    };
    MeetingsPage.prototype.sendNote = function () {
        var _this = this;
        this.meetings.saveNote(this.user.id, this.coachee.id, this.note)
            .then(function () {
            var alert = _this.alert.create({ subTitle: _this.translate.getTranslation('noteSaved') });
            alert.present();
        }, function (error) { return _this.errorHandler.sendError("meetings, sendNote - update", error); });
        this.note = "";
    };
    MeetingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meetings',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/meetings/meetings.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-title>{{coachee.fullname}}</ion-title>\n      <div class="indicator" [ngStyle]="{\'background-color\':chatroom.indicator}" item-end></div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Meeting minutes\n      </ion-card-title>\n      <p>{{moment().format(\'DD-MM-YYYY hh:mm\')}}</p>\n\n    </ion-card-header>\n\n    <ion-row>\n      <ion-textarea col-9 [(ngModel)]="note" (keyup.enter)="sendNote()" placeholder="{{messageWrite}}">\n\n      </ion-textarea>\n      <button col-2 ion-button clear icon-only item-right\n              (click)="sendNote()" >\n        <ion-icon  name="send"></ion-icon>\n      </button>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/meetings/meetings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_meetings_meetings__["a" /* MeetingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_translations_translations__["a" /* TranslationsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_6__providers_admob_admob__["a" /* AdmobProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_error_log_error_log__["a" /* ErrorLogProvider */]])
    ], MeetingsPage);
    return MeetingsPage;
}());

//# sourceMappingURL=meetings.js.map

/***/ })

});
//# sourceMappingURL=1.js.map