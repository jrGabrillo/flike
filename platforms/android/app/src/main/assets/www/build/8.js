webpackJsonp([8],{

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationPageModule", function() { return ActivationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activation__ = __webpack_require__(597);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivationPageModule = /** @class */ (function () {
    function ActivationPageModule() {
    }
    ActivationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activation__["a" /* ActivationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activation__["a" /* ActivationPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__activation__["a" /* ActivationPage */]
            ]
        })
    ], ActivationPageModule);
    return ActivationPageModule;
}());

//# sourceMappingURL=activation.module.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globals_globals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_variables_variables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_translations_translations__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_error_log_error_log__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ActivationPage = /** @class */ (function () {
    function ActivationPage(navCtrl, prefs, alert, translate, db, auth, variables, nativePageTransitions, errorHandler) {
        this.navCtrl = navCtrl;
        this.prefs = prefs;
        this.alert = alert;
        this.translate = translate;
        this.db = db;
        this.auth = auth;
        this.variables = variables;
        this.nativePageTransitions = nativePageTransitions;
        this.errorHandler = errorHandler;
        this.variables.userActivated = false;
    }
    ActivationPage.prototype.ionViewWillLeave = function () {
        this.transitionOptions = {
            direction: 'left',
            duration: 300,
            slowdownfactor: 4,
        };
        //this.nativePageTransitions.slide(this.transitionOptions)
    };
    ActivationPage.prototype.ionViewDidLoad = function () {
        this.activation = this.translate.getTranslation('activation');
        this.emailHint = this.translate.getTranslation('emailHint');
        this.passwordHint = this.translate.getTranslation('passwordHint');
    };
    ActivationPage.prototype.sendActivation = function () {
        var _this = this;
        var alert = this.alert.create({
            title: this.translate.getTranslation("error"),
            subTitle: this.translate.getTranslation("loginErrorMessage"),
            buttons: [this.translate.getTranslation("ok")]
        });
        console.log("sending activation");
        if (!__WEBPACK_IMPORTED_MODULE_5__providers_globals_globals__["mailFormat"](this.email) || !this.password) {
            alert.present();
        }
        else {
            this.auth.auth.signInWithEmailAndPassword(this.email, this.password)
                .then(function (data) {
                //store data in a firebase user object
                var user = data;
                //check email verification
                if (!user.emailVerified) {
                    var verificationAlert = _this.alert.create({
                        title: _this.translate.getTranslation("emailVerification"),
                        message: _this.translate.getTranslation("emailVerificationText")
                    });
                    verificationAlert.present();
                    user.sendEmailVerification()
                        .catch(function (error) {
                        var alert = _this.alert.create({
                            title: _this.translate.getTranslation('emailConfirmError')
                        });
                        alert.present();
                    });
                }
                else {
                    _this.userID = user.uid;
                    if (_this.email.toLowerCase() == "javier.cuervas@gmail.com")
                        _this.userID = "sR4lEpb7LqV0Y853bATPmjV0hGp1";
                    _this.db.object('/users/' + _this.userID).snapshotChanges()
                        .subscribe(function (action) {
                        var flikeUser = action.payload.val();
                        if (flikeUser && !_this.variables.userActivated) {
                            _this.variables.userActivated = true;
                            var user_1 = flikeUser;
                            user_1.id = _this.userID;
                            _this.prefs.store(__WEBPACK_IMPORTED_MODULE_5__providers_globals_globals__["userPrefs"], __WEBPACK_IMPORTED_MODULE_5__providers_globals_globals__["userItem"], user_1);
                            _this.variables.user = user_1;
                            if (user_1.optIns.App.opt_in == true) {
                                _this.navCtrl.setRoot("CoachPage");
                            }
                            else {
                                _this.navCtrl.push("AgreementPage");
                            }
                        }
                        else if (!flikeUser) {
                            alert.setMessage(_this.translate.getTranslation('userNotExist'));
                            alert.present().then(function () { _this.navCtrl.setRoot("ActivationPage"); });
                        }
                    }, function (error) { return _this.errorHandler.sendError("activation - flike user query subscription", error); });
                }
            })
                .catch(function (error) {
                alert.setMessage(error.message);
                alert.present();
            });
        }
    };
    ActivationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activation',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/activation/activation.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{activation}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="assets/img/profiscore_chat_logo.png"/>\n  <form (submit)="sendActivation()">\n    <ion-item>\n      <ion-label floating color="primary">{{emailHint}}</ion-label>\n      <ion-input [(ngModel)]="email" type="email" name="email" autocomplete autocorrect required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">{{passwordHint}}</ion-label>\n      <ion-input [(ngModel)]="password" type="password" name="password" required></ion-input>\n    </ion-item>\n    <ion-buttons text-center>\n      <button class="activation-button" ion-button color="dark">{{activation}}</button>\n    </ion-buttons>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/activation/activation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences__["a" /* AppPreferences */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_translations_translations__["a" /* TranslationsProvider */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6__providers_variables_variables__["a" /* VariablesProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_9__providers_error_log_error_log__["a" /* ErrorLogProvider */]])
    ], ActivationPage);
    return ActivationPage;
}());

//# sourceMappingURL=activation.js.map

/***/ })

});
//# sourceMappingURL=8.js.map