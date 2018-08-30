webpackJsonp([0],{

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_emoji_emoji__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_chat_service_chat_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_chat_service_chat_service__["a" /* ChatServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__providers_emoji_emoji__["a" /* EmojiProvider */]
            ]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(message, sender, timestamp, typeOfMessage, survey) {
        this.message = message;
        this.sender = sender;
        this.timestamp = timestamp;
        this.typeOfMessage = typeOfMessage;
        this.survey = survey;
    }
    return Message;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlikeUser; });
var FlikeUser = /** @class */ (function () {
    function FlikeUser(id, firstname, fullname, lastname, typeOfUser, email, optIns, legalStatement) {
        this.id = id;
        this.firstname = firstname;
        this.fullname = fullname;
        this.lastname = lastname;
        this.typeOfUser = typeOfUser;
        this.email = email;
        this.optIns = optIns;
        this.legalStatement = legalStatement;
    }
    return FlikeUser;
}());

//# sourceMappingURL=flikeUser.model.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoom; });
var ChatRoom = /** @class */ (function () {
    function ChatRoom(id, name, chatroomImgUrl, indicator, userAccess, userMessageTimestamps) {
        this.id = id;
        this.name = name;
        this.chatroomImgUrl = chatroomImgUrl;
        this.indicator = indicator;
        this.userAccess = userAccess;
        this.userMessageTimestamps = userMessageTimestamps;
    }
    return ChatRoom;
}());

//# sourceMappingURL=chatroom.model.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_preferences__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(viewCtrl, navParams, prefs, alert) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.prefs = prefs;
        this.alert = alert;
        this.globals = __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__;
        this.survey = navParams.get("survey") || { id: __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["stringGen"](), question: "", typeQuestion: "", options: {}, answers: {} };
        console.log(this.survey);
    }
    SurveyComponent.prototype.sendSurvey = function () {
        console.log(this.survey);
        this.viewCtrl.dismiss({ survey: this.survey });
    };
    SurveyComponent.prototype.saveSurvey = function (ev) {
        var _this = this;
        ev.preventDefault();
        console.log(this.survey);
        this.prefs.fetch(__WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["userPrefs"], __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["surveys"])
            .then(function (surveys) {
            if (!surveys)
                _this.surveys = [];
            else
                _this.surveys = surveys;
            _this.pushOrUpdate(_this.survey);
            _this.prefs.store(__WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["userPrefs"], __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["surveys"], _this.surveys)
                .then(function () {
                var alert = _this.alert.create({ subTitle: "Survey saved" });
                alert.present();
            });
        });
    };
    SurveyComponent.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    SurveyComponent.prototype.addOption = function (event, type) {
        event.preventDefault();
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["checkBox"].key:
                if (!this.survey.options.checkbox)
                    this.survey.options.checkbox = [];
                this.survey.options.checkBox.push({});
                break;
            case __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["radioButton"].key:
                if (!this.survey.options.radioButton)
                    this.survey.options.radioButton = [];
                this.survey.options.radioButton.push({});
                break;
            case __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["rank"].key:
                if (!this.survey.options.rank)
                    this.survey.options.rank = [];
                this.survey.options.rank.push({ option: "" });
                break;
        }
        console.log(this.survey);
    };
    SurveyComponent.prototype.deleteSurvey = function () {
        var alert = this.alert.create({ title: "Are you sure?", buttons: [
                { text: "Yes",
                    handler: function () { console.log("yes"); } },
                { text: "No",
                    handler: function () { console.log("NO"); } }
            ] });
        alert.present();
        //todo need a key for deleting the survey
    };
    SurveyComponent.prototype.pushOrUpdate = function (survey) {
        var indexOfSurvey = -1;
        for (var i = 0; i < this.surveys.length; i++) {
            if (survey.id === this.surveys[i].id)
                indexOfSurvey = i;
        }
        if (indexOfSurvey != -1)
            this.surveys[indexOfSurvey] = survey;
        else
            this.surveys.push(survey);
    };
    SurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'survey',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/survey/survey.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Survey</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form>\n    <ion-item>\n      <ion-label floating>Write the question here</ion-label>\n      <ion-input type="text" name="question" [(ngModel)]="survey.question"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Select the type of question</ion-label>\n      <ion-select name="typeQuestion" [(ngModel)]="survey.typeQuestion">\n        <ion-option *ngFor="let type of globals.typeQuestion" value="{{type.key}}">{{type.value}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <div class="options-wrapper">\n      <!--open text with options-->\n      <ion-row *ngIf="survey.typeQuestion === globals.openText.key">\n        <ion-item col-6>\n          <ion-label floating>Minimun lenght</ion-label>\n          <ion-input type="number" name="minLenght" [(ngModel)]="survey.options.minLength"></ion-input>\n        </ion-item>\n        <ion-item col-6>\n          <ion-label floating>Minimun words</ion-label>\n          <ion-input type="number" name="minWords" [(ngModel)]="survey.options.minWords"></ion-input>\n        </ion-item>\n      </ion-row>\n      <!--how much-->\n      <ion-row *ngIf="survey.typeQuestion === globals.howMuch.key">\n        <ion-item col-6>\n          <ion-label floating>Minimun value (empty for no limit)</ion-label>\n          <ion-input type="number" name="minValue" [(ngModel)]="survey.options.minValue"></ion-input>\n        </ion-item>\n        <ion-item col-6>\n          <ion-label floating>Maximun value (empty for no limit)</ion-label>\n          <ion-input type="number" name="maxValue" [(ngModel)]="survey.options.maxValue"></ion-input>\n        </ion-item>\n      </ion-row>\n      <!--multi select-->\n      <div class="checkbox-wrapper" *ngIf="survey.typeQuestion === globals.checkBox.key">\n        <ion-item *ngFor="let checkbox of survey.options.checkbox; let i = index;">\n          <ion-label floating>option {{i+1}}</ion-label>\n          <ion-input [(ngModel)]="survey.options.checkBox[i].option" [ngModelOptions]="{standalone:true}"></ion-input>\n        </ion-item>\n        <button icon-only class="addButton" (click)="addOption($event,globals.checkBox.key)">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </div>\n      <!--single select-->\n      <div class="radioButton-wrapper" *ngIf="survey.typeQuestion === globals.radioButton.key">\n        <ion-item *ngFor="let radioButton of survey.options.radioButton; let i = index;">\n          <ion-label floating>option {{i+1}}</ion-label>\n          <ion-input [(ngModel)]="survey.options.radioButton[i].option" [ngModelOptions]="{standalone:true}"></ion-input>\n        </ion-item>\n        <button icon-only class="addButton" (click)="addOption($event,globals.radioButton.key)">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </div>\n      <!--rank question-->\n      <div class="radioButton-wrapper" *ngIf="survey.typeQuestion === globals.rank.key">\n        <ion-item *ngFor="let rank of survey.options.rank; let i = index;">\n          <ion-label floating>option {{i+1}}</ion-label>\n          <ion-input [(ngModel)]="survey.options.rank[i].option" [ngModelOptions]="{standalone:true}"></ion-input>\n\n        </ion-item>\n        <button icon-only class="addButton" (click)="addOption($event,globals.rank.key)">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </div>\n\n\n    </div>\n\n  </form>\n</ion-content>\n<ion-footer padding>\n  <ion-row class="button-wrapper">\n    <button col-3 ion-button color="danger" (click)="deleteSurvey()">Delete</button>\n    <button col-3 ion-button color="danger" (click)="cancel()">Cancel</button>\n    <button col-3 ion-button color="primary" (click)="saveSurvey($event)">Save</button>\n    <button col-3 ion-button color="secondary" (click)="sendSurvey()">Send</button>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/survey/survey.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_preferences__["a" /* AppPreferences */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SurveyComponent);
    return SurveyComponent;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPickSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_survey__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_preferences__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SurveyPickSurveyComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SurveyPickSurveyComponent = /** @class */ (function () {
    function SurveyPickSurveyComponent(modalCtrl, prefs, viewCtrl) {
        this.modalCtrl = modalCtrl;
        this.prefs = prefs;
        this.viewCtrl = viewCtrl;
        this.surveys = [];
    }
    SurveyPickSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prefs.fetch(__WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["userPrefs"], __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["surveys"])
            .then(function (surveys) {
            _this.surveys = surveys || [{
                    id: __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["stringGen"](),
                    typeQuestion: __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["openText"].key,
                    question: "Example open text question",
                    answers: {},
                    options: {},
                }, {
                    id: __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["stringGen"](),
                    typeQuestion: __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["checkBox"].key,
                    question: "example multiselect question",
                    answers: {},
                    options: {
                        checkBox: [
                            { option: "option 1" },
                            { option: "option 2" },
                            { option: "option 3" },
                        ]
                    },
                }, {
                    id: __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["stringGen"](),
                    typeQuestion: __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["radioButton"].key,
                    question: "example single Select question",
                    answers: {},
                    options: {
                        radioButton: [
                            { option: "option 1" },
                            { option: "option 2" },
                            { option: "option 3" },
                        ]
                    },
                }, {
                    id: __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["stringGen"](),
                    typeQuestion: __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["rank"].key,
                    question: "example rank question",
                    answers: {},
                    options: {
                        rank: [
                            { option: "option 1" },
                            { option: "option 2" },
                            { option: "option 3" },
                            { option: "option 4" },
                        ]
                    },
                }];
            _this.prefs.store(__WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["userPrefs"], __WEBPACK_IMPORTED_MODULE_1__providers_globals_globals__["surveys"], _this.surveys);
        });
    };
    SurveyPickSurveyComponent.prototype.goToSurvey = function (survey) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__survey_survey__["a" /* SurveyComponent */], { survey: survey });
        modal.present();
        this.viewCtrl.dismiss();
    };
    SurveyPickSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'survey-pick-survey',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/survey-pick-survey/survey-pick-survey.html"*/'<ion-list>\n  <button ion-item *ngFor="let survey of surveys" (click)="goToSurvey(survey)">\n    {{survey.question}}\n  </button>\n</ion-list>\n'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/survey-pick-survey/survey-pick-survey.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_preferences__["a" /* AppPreferences */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ViewController */]])
    ], SurveyPickSurveyComponent);
    return SurveyPickSurveyComponent;
}());

//# sourceMappingURL=survey-pick-survey.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_chat_service_chat_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_preferences__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_variables_variables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_meetings_meetings__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_translations_translations__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_admob_admob__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_error_log_error_log__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ChatPage = /** @class */ (function () {
    //transitionOptions: NativeTransitionOptions;
    function ChatPage(navCtrl, navParams, db, prefs, chatService, variables, popover, meetings, modal, alert, translate, loader, keyboard, adMob, errorHandler, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.prefs = prefs;
        this.chatService = chatService;
        this.variables = variables;
        this.popover = popover;
        this.meetings = meetings;
        this.modal = modal;
        this.alert = alert;
        this.translate = translate;
        this.loader = loader;
        this.keyboard = keyboard;
        this.adMob = adMob;
        this.errorHandler = errorHandler;
        this.platform = platform;
        this.messages = [];
        this.globals = __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__;
        this.editorMsg = "";
        this._isOpenEmojiPicker = false;
        this.momentInstance = __WEBPACK_IMPORTED_MODULE_6_moment__;
        this.limit = 30;
        this.moreMsg = 30;
        this.user = this.variables.user;
        console.log(this.user);
        if (!this.user)
            this.navCtrl.setRoot("ActivationPage");
        /*this.survey = this.navParams.get("survey");
        if (this.survey) {
            //todo close popovers
        }*/
        this.emojiHeight = 255;
        this.textHeight = 55;
        this.platform.registerBackButtonAction(function () {
            if (!_this.navCtrl.canGoBack()) {
                if (_this.user.typeOfUser == __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__["coach"])
                    _this.navCtrl.setRoot("CoachPage");
                else
                    _this.navCtrl.setRoot("CoacheePage");
            }
            else
                _this.navCtrl.pop();
        });
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.adMob.hideAdmob().catch(function (error) { return _this.errorHandler.sendError("chatPageLoad - hide adMob", error); });
        this.chatroom = this.navParams.get("chatroom");
        this.chatService.updateMsgView(this.chatroom.id, this.user.id);
        if (!this.chatroom) {
            this.chatService.getChatroomData(this.variables.notificationChatroom)
                .subscribe(function (actionGetChatroomData) {
                var thisroom = actionGetChatroomData.payload.val();
                thisroom.id = thisroom.$key;
                _this.chatroom = thisroom;
                var userAccess = [];
                var _loop_1 = function (key) {
                    //populate Array
                    _this.chatService.getUserInfoById(key)
                        .subscribe(function (actionGetUserInfo) {
                        var userInfo = actionGetUserInfo.payload.val();
                        userInfo.id = key;
                        console.log(userInfo);
                        if (!_this.userExist(_this.chatroom.userAccess, userInfo.id)) {
                            userAccess.push(userInfo);
                        }
                    }, function (error) { return _this.errorHandler.sendError("chatPage, getChatroomData - getUserInfoById from notification (subscription)", error); });
                };
                for (var key in thisroom.userAccess) {
                    _loop_1(key);
                }
                _this.chatroom.userAccess = userAccess;
                _this.getMessages(_this.limit, false);
            }, function (error) { return _this.errorHandler.sendError("chatPage, getChatroomData from notification (subscription)", error); });
        }
        else
            this.getMessages(this.limit, false);
        this.loadMoreMessages = this.translate.getTranslation('loadMoreMessages');
        this.messageWrite = this.translate.getTranslation('messageWrite');
        this.scrollToBottom();
    };
    ChatPage.prototype.userExist = function (array, userId) {
        var exist = false;
        for (var i = 0; i < array.length; i++) {
            if (array[i].id === userId)
                exist = true;
        }
        return exist;
    };
    ChatPage.prototype.getMessages = function (limit, loadMore) {
        var _this = this;
        this.messages = [];
        this.limit = limit;
        var loader = this.loader.create({
            spinner: "bubbles",
            content: this.translate.getTranslation('loading')
        });
        loader.present();
        this.chatService.getMsgList(this.chatroom.id, this.limit)
            .subscribe(function (messages) {
            _this.populateMessages(messages);
            loader.dismiss();
        }, function (error) { return _this.errorHandler.sendError("chatPage, getMessages - getMsgList subscription", error); });
    };
    ChatPage.prototype.getMoreMessages = function (refresher) {
        var _this = this;
        this.chatService.getMsgList(this.chatroom.id, this.limit + this.moreMsg)
            .subscribe(function (messages) {
            _this.limit += _this.moreMsg;
            _this.populateMessages(messages);
            refresher.complete();
        }, function (error) { return _this.errorHandler.sendError("chatPage, getMoreMessages - getMsgList subscription", error); });
    };
    ChatPage.prototype.populateMessages = function (messages) {
        var _this = this;
        for (var key in messages) {
            messages[key].id = messages[key].$key;
            this.pushOrUpdateMessage(messages[key]);
        }
        this.messages = messages;
        this.messages.map(function (message) {
            if (message.survey) {
                //if is an Array is why we already transformed it, don't do it again!
                if (message.survey.answers && !(message.survey.answers instanceof Array)) {
                    var ans = [];
                    for (var key in message.survey.answers) {
                        ans.push({ id: key, value: message.survey.answers[key] });
                    }
                    message.survey.answers = ans;
                }
                if (message.survey.options && !(message.survey.options instanceof Array)) {
                    var opt = [];
                    for (var key in message.survey.options) {
                        opt.push({ id: key, value: message.survey.options[key] });
                    }
                    message.survey.options = opt;
                }
                if (message.survey.typeOfQuestion == __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__["selectImage"].key || message.survey.typeOfQuestion == __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__["rank"].key) {
                    //calculate the badge for each option
                    for (var i = 0; i < message.survey.options.length; i++) {
                        message.survey.options[i].badge = _this.getBadge(message.survey.options[i].id, message.survey.answers);
                    }
                }
                if (message.survey.typeOfQuestion == __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__["checkBox"].key) {
                    for (var i = 0; i < message.survey.options.length; i++) {
                        message.survey.options[i].checked = _this.getChecked(message.survey.options[i].id, message.survey.answers);
                    }
                }
                if (message.survey.typeOfQuestion == __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__["radioButton"].key) {
                    for (var i = 0; i < message.survey.options.length; i++) {
                        message.survey.options[i].checked = _this.getRadioChecked(message.survey.options[i].id, message.survey.answers);
                    }
                }
                if (message.survey.typeOfQuestion == __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__["openText"].key) {
                    message.survey.userAnswer = _this.getOtAnswer(message.survey.answers);
                }
            }
        });
    };
    ChatPage.prototype.getChecked = function (option, answers) {
        var _this = this;
        var checked = false;
        answers.map(function (answer) {
            if (answer.id == _this.user.id) {
                for (var key in answer.value) {
                    if (option == key)
                        checked = true;
                }
            }
        });
        return checked;
    };
    ChatPage.prototype.getRadioChecked = function (option, answers) {
        var _this = this;
        var checked = false;
        answers.map(function (answer) {
            if (answer.id == _this.user.id) {
                if (option == answer.value)
                    checked = true;
            }
        });
        return checked;
    };
    ChatPage.prototype.getOtAnswer = function (answers) {
        var _this = this;
        var userAnswer;
        answers.map(function (answer) {
            if (answer.id == _this.user.id)
                userAnswer = answer.value;
        });
        return userAnswer;
    };
    ChatPage.prototype.getBadge = function (value, answers) {
        var _this = this;
        var badge = 0;
        answers.map(function (answer) {
            if (answer.id == _this.user.id) {
                for (var key in answer.value) {
                    if (value == key)
                        badge = answer.value[key];
                }
            }
        });
        return badge;
    };
    ChatPage.prototype.getUserNameById = function (userID) {
        var username = "";
        this.chatroom.userAccess.map(function (user) {
            if (user.id === userID)
                username = user.fullname;
        });
        return username;
    };
    ChatPage.prototype.switchEmojiPicker = function () {
        this._isOpenEmojiPicker = !this._isOpenEmojiPicker;
        if (!this._isOpenEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    ChatPage.prototype.sendMsg = function () {
        var _this = this;
        if (!this.editorMsg.trim())
            return;
        var newMsg = {
            sender: this.user.id,
            timestamp: Date.now(),
            message: this.editorMsg,
            typeOfMessage: this.globals.typeChat,
            survey: {}
        };
        this.editorMsg = '';
        if (!this._isOpenEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.chatService.sendMsg(newMsg, this.chatroom.id, __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__["groupAll"], this.getUserNameById(newMsg.sender))
            .then(function (result) {
            console.log(result);
            //update sent status
            _this.pushNewMsg();
        }, function (error) { return console.log(error); });
    };
    ChatPage.prototype.pushNewMsg = function () {
        this.scrollToBottom();
        this.textHeight = 55;
        var element = document.getElementById('chat_input');
        var textarea = element.getElementsByTagName('textarea')[0];
        element.style.height = 33 + "px";
        textarea.style.minHeight = 33 + "px";
        textarea.style.height = 33 + "px";
        this.content.resize();
    };
    ChatPage.prototype.focus = function () {
        this._isOpenEmojiPicker = false;
        this.content.resize();
        //this.scrollToBottom();
    };
    ChatPage.prototype.change = function () {
        // get elements
        var element = document.getElementById('chat_input');
        var textarea = element.getElementsByTagName('textarea')[0];
        // set default style for textarea
        // limit size to 96 pixels (6 lines of text)
        var scroll_height = textarea.scrollHeight;
        if (scroll_height > 96)
            scroll_height = 96;
        // apply new style
        element.style.height = Math.max(scroll_height, 33) + "px";
        textarea.style.minHeight = Math.max(scroll_height, 33) + "px";
        textarea.style.height = Math.max(scroll_height, 33) + "px";
        this.textHeight = Math.max(scroll_height + 15, 55);
        this.content.resize();
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ChatPage.prototype.showSurveyPicker = function (event) {
        var popover = this.popover.create("SurveyPickerComponent");
        popover.present({ ev: event });
    };
    ChatPage.prototype.markSeen = function (event) {
        var _this = this;
        var alert = this.alert.create({ subTitle: this.translate.getTranslation('seenMarked') + __WEBPACK_IMPORTED_MODULE_6_moment__().format('DD/MM/YYYY - hh:mm') });
        if (this.chatroom.userAccess.length <= 2) {
            this.meetings.saveNote(this.user.id, this.getOtherId(), null)
                .then(function () { return alert.present(); }, function (error) {
                return _this.errorHandler.sendError("chatPage, markSeen - saveNote promise update single user", error);
            });
        }
        else {
            var coacheeId_1;
            this.chatroom.userAccess.map(function (user) {
                if (user.id != _this.user.id)
                    coacheeId_1 = user.id;
            });
            /*let popover = this.popover.create(UserSelectComponent,{users:this.chatroom.userAccess});
            popover.present({ev:event});
            popover.onDidDismiss( userSelected => {
                if (userSelected){
                    this.meetings.saveNote(this.user.id,userSelected.userId,null)
                }
            })*/
            this.meetings.saveNote(this.user.id, coacheeId_1, null)
                .then(null, function (error) {
                return _this.errorHandler.sendError("chatPage, markseen - saveNote promise update multi user", error);
            });
        }
    };
    ChatPage.prototype.goToMeeting = function (event) {
        var _this = this;
        if (this.chatroom.userAccess.length <= 2) {
            this.navCtrl.push("MeetingsPage", { user: this.user, coachee: this.getUserById(this.getOtherId()), chatroom: this.chatroom });
        }
        else {
            //popover is not showing on android, until finished just take the las user in array which is not self
            var coacheeId_2;
            this.chatroom.userAccess.map(function (user) {
                if (user.id != _this.user.id)
                    coacheeId_2 = user.id;
            });
            /*let popover = this.popover.create(UserSelectComponent,{users:this.chatroom.userAccess});
            popover.present({ev:event});
            popover.onDidDismiss( userSelected => {
                if (userSelected){
                    this.navCtrl.push(MeetingsPage, {user: this.user, coachee: this.getUserById(userSelected.userId),chatroom:this.chatroom});
                }
            })*/
            this.navCtrl.push("MeetingsPage", { user: this.user, coachee: this.getUserById(coacheeId_2), chatroom: this.chatroom });
        }
    };
    ChatPage.prototype.getOtherId = function () {
        var _this = this;
        var id;
        this.chatroom.userAccess.map(function (user) {
            if (_this.user.id != user.id)
                id = user.id;
        });
        return id;
    };
    ChatPage.prototype.getUserById = function (id) {
        var userById;
        this.chatroom.userAccess.map(function (user) {
            if (user.id === id)
                userById = user;
        });
        return userById;
    };
    ChatPage.prototype.pushOrUpdateMessage = function (message) {
        var indexOfMessage = -1;
        for (var i = 0; i < this.messages.length; i++) {
            if (message.id === this.messages[i].id)
                indexOfMessage = i;
        }
        if (indexOfMessage == -1)
            this.messages.push(message);
        else
            this.messages[indexOfMessage] = message;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('navbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Navbar */])
    ], ChatPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* TextInput */])
    ], ChatPage.prototype, "messageInput", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar #navbar>\n    <ion-item no-lines *ngIf="chatroom">\n      <ion-avatar col-2 item-left>\n        <!--<img src="{{chatroom.chatroomImgUrl}}">-->\n        <ion-icon class="profile-icon" name="contact" ios="ios-contact-outline"></ion-icon>\n      </ion-avatar>\n\n      <h2 *ngFor="let userAccess of chatroom.userAccess; let i = index">\n        <span *ngIf="userAccess.id != user.id">{{userAccess.firstname}}<span *ngIf="i < chatroom.userAccess.length && i > 1">,&nbsp;</span></span>\n      </h2>\n      <div *ngIf="user.typeOfUser == globals.coach" class="indicator" [ngStyle]="{\'background-color\':chatroom.indicator}" item-end></div>\n\n      <button  *ngIf="user.typeOfUser == globals.coach" item-end icon-only ion-button clear (click)="markSeen($event)">\n        <ion-icon name="eye"></ion-icon>\n      </button>\n      <button col-1 *ngIf="user.typeOfUser == globals.coach" item-end icon-only ion-button clear (click)="goToMeeting($event)">\n        <img src="assets/img/agent_32px.png" class="handshake"/>\n      </button>\n    </ion-item>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-icon name="arrow-down" class="arrow-get-more"></ion-icon>\n  <ion-refresher (ionRefresh)="getMoreMessages($event)">\n    <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="{{loadMoreMessages}}"\n            refreshingSpinner="bubbles"\n            refreshingText="{{loadMoreMessages}}">\n\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class="message-wrap">\n\n    <div *ngFor="let m of messages; let i = index"\n         class="message"\n         [class.left]=" user.id !== m.sender "\n         [class.right]=" user.id === m.sender ">\n      <!--<button class="load-more" ion-button clear *ngIf="i == 0" (click)="getMessages(limit+moreMsg,true)">{{loadMoreMessages}}</button>-->\n      <!--<img class="user-img" [src]="msg.userImgUrl" alt="" src="">-->\n      <!--<ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>-->\n      <div class="msg-detail" *ngIf="m.typeOfMessage == globals.typeChat">\n        <div class="msg-info">\n          <p>\n            {{getUserNameById(m.sender)}},&nbsp;{{momentInstance(m.timestamp).fromNow()}}</p>\n        </div>\n        <div class="msg-content">\n          <span class="triangle"></span>\n          <p class="line-breaker ">{{m.message}}</p>\n        </div>\n      </div>\n\n      <div class="survey-detail" *ngIf="m.typeOfMessage == globals.typeSurvey">\n        <div class="msg-info">\n          <p>\n            {{getUserNameById(m.sender)}},&nbsp;{{momentInstance(m.timestamp).fromNow()}}</p>\n        </div>\n        <div>\n          <open-text-survey    *ngIf="m.survey.typeOfQuestion == globals.openText.key"    [message]="m" [user]="user" [chatroom]="chatroom" class="survey-msg"></open-text-survey>\n          <image-survey        *ngIf="m.survey.typeOfQuestion == globals.selectImage.key" [message]="m" [user]="user" [chatroom]="chatroom" class="survey-msg"></image-survey>\n          <radio-button-survey *ngIf="m.survey.typeOfQuestion == globals.radioButton.key" [message]="m" [user]="user" [chatroom]="chatroom" class="survey-msg"></radio-button-survey>\n          <check-box           *ngIf="m.survey.typeOfQuestion == globals.checkBox.key"    [message]="m" [user]="user" [chatroom]="chatroom" class="survey-msg"></check-box>\n          <how-much-survey     *ngIf="m.survey.typeOfQuestion == globals.howMuch.key"     [message]="m" [user]="user" [chatroom]="chatroom" class="survey-msg"></how-much-survey>\n          <rank-survey         *ngIf="m.survey.typeOfQuestion == globals.rank.key"        [message]="m" [user]="user" [chatroom]="chatroom" class="survey-msg"></rank-survey>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer id="footer" no-border [style.height]="_isOpenEmojiPicker ? emojiHeight : textHeight">\n  <ion-grid class="input-wrap">\n    <ion-row>\n      <ion-col col-2>\n        <button ion-button clear icon-only item-right\n                (click)="switchEmojiPicker()" >\n          <ion-icon  name="happy"></ion-icon>\n        </button>\n\n      </ion-col>\n      <!--<ion-col col-1 *ngIf="user.typeOfUser == globals.coach">\n        <button ion-button clear icon-only item-right (click)="showSurveyPicker($event)">\n          <ion-icon name="attach"></ion-icon>\n        </button>\n      </ion-col>-->\n      <ion-col>\n        <ion-textarea\n                id="chat_input"\n                #chat_input\n                placeholder="{{messageWrite}}"\n                [(ngModel)]="editorMsg"\n                (keyup.enter)="sendMsg()"\n                (ionFocus)="focus()"\n                (input)="change()"\n        ></ion-textarea>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button clear icon-only item-right\n                (click)="sendMsg()" >\n          <ion-icon  name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <emoji-picker *ngIf="_isOpenEmojiPicker" [(ngModel)]="editorMsg"></emoji-picker>\n</ion-footer>'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_preferences__["a" /* AppPreferences */],
            __WEBPACK_IMPORTED_MODULE_4__providers_chat_service_chat_service__["a" /* ChatServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_variables_variables__["a" /* VariablesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_meetings_meetings__["a" /* MeetingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_translations_translations__["a" /* TranslationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_10__providers_admob_admob__["a" /* AdmobProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_error_log_error_log__["a" /* ErrorLogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__check_box_check_box__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emoji_picker_emoji_picker__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_much_survey_how_much_survey__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_survey_image_survey__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__open_text_survey_open_text_survey__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__radio_button_survey_radio_button_survey__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rank_survey_rank_survey__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__survey_survey__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__survey_pick_survey_survey_pick_survey__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__survey_picker_survey_picker__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_select_user_select__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__check_box_check_box__["a" /* CheckBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_2__emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__how_much_survey_how_much_survey__["a" /* HowMuchSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_4__image_survey_image_survey__["a" /* ImageSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_5__open_text_survey_open_text_survey__["a" /* OpenTextSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_6__radio_button_survey_radio_button_survey__["a" /* RadioButtonSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_7__rank_survey_rank_survey__["a" /* RankSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__survey_survey__["a" /* SurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_9__survey_pick_survey_survey_pick_survey__["a" /* SurveyPickSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_10__survey_picker_survey_picker__["a" /* SurveyPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__user_select_user_select__["a" /* UserSelectComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["f" /* IonicModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__check_box_check_box__["a" /* CheckBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_2__emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__how_much_survey_how_much_survey__["a" /* HowMuchSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_4__image_survey_image_survey__["a" /* ImageSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_5__open_text_survey_open_text_survey__["a" /* OpenTextSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_6__radio_button_survey_radio_button_survey__["a" /* RadioButtonSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_7__rank_survey_rank_survey__["a" /* RankSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__survey_survey__["a" /* SurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_9__survey_pick_survey_survey_pick_survey__["a" /* SurveyPickSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_10__survey_picker_survey_picker__["a" /* SurveyPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__user_select_user_select__["a" /* UserSelectComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message_model__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_flikeUser_model__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_chatroom_model__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_translations_translations__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_survey_survey__ = __webpack_require__(414);
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








var CheckBoxComponent = /** @class */ (function () {
    function CheckBoxComponent(translate, survey, errorHandler) {
        this.translate = translate;
        this.survey = survey;
        this.errorHandler = errorHandler;
        this.globals = __WEBPACK_IMPORTED_MODULE_6__providers_globals_globals__;
    }
    CheckBoxComponent.prototype.ngOnInit = function () {
        this.cbAnswer = this.getUserAnswer(null);
    };
    CheckBoxComponent.prototype.getUserNameById = function (userID) {
        var username = "";
        this.chatroom.userAccess.map(function (user) {
            if (user.id === userID)
                username = user.fullname;
        });
        return username;
    };
    CheckBoxComponent.prototype.saveOption = function (checked, key) {
        this.cbAnswer[key] = checked ? checked : null;
        this.sendAnswer();
    };
    CheckBoxComponent.prototype.sendAnswer = function () {
        var _this = this;
        this.survey.sendAnswer(this.cbAnswer, this.user.id, this.message.id, this.chatroom.id)
            .catch(function (error) { return _this.errorHandler.sendError("checkBox survey - send answer", error); });
    };
    CheckBoxComponent.prototype.getUserAnswer = function (userId) {
        var _this = this;
        var userAnswer = {};
        this.message.survey.answers.map(function (answer) {
            if (userId) {
                if (answer.id == userId)
                    userAnswer = answer.value;
            }
            else if (answer.id == _this.user.id)
                userAnswer = answer.value;
        });
        return userAnswer;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_message_model__["a" /* Message */])
    ], CheckBoxComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_flikeUser_model__["a" /* FlikeUser */])
    ], CheckBoxComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_chatroom_model__["a" /* ChatRoom */])
    ], CheckBoxComponent.prototype, "chatroom", void 0);
    CheckBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'check-box',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/check-box/check-box.html"*/'\n<ion-item class="survey-body" text-wrap>\n  <h3> <!--*ngIf="user.typeOfUser == globals.coachee"-->{{message.message}}</h3>\n  <h2>{{message.survey.question}}</h2>\n  <p *ngFor="let a of message.survey.answers" class="student-answer">\n      <span *ngIf="user.typeOfUser == globals.coach" >\n          <span *ngIf="getUserNameById(a.id) != \'\'"><b>{{getUserNameById(a.id)}}:</b>&nbsp;{{globals.getObjectKeyString(getUserAnswer(a.id))}}</span>\n      </span>\n  </p>\n</ion-item>\n\n<ion-list>\n  <ion-item *ngFor="let o of message.survey.options">\n    <ion-label>{{o.value}}</ion-label>\n    <ion-checkbox [checked]="o.checked" (ionChange)="saveOption($event.checked,o.id)"></ion-checkbox>\n\n  </ion-item>\n</ion-list>'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/check-box/check-box.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_translations_translations__["a" /* TranslationsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_survey_survey__["a" /* SurveyProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_error_log_error_log__["a" /* ErrorLogProvider */]])
    ], CheckBoxComponent);
    return CheckBoxComponent;
}());

//# sourceMappingURL=check-box.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_emoji_emoji__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMOJI_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return EmojiPickerComponent; }),
    multi: true
};
var EmojiPickerComponent = /** @class */ (function () {
    function EmojiPickerComponent(emojiProvider) {
        this.emojiArr = [];
        this.emojiArr = emojiProvider.getEmojis();
    }
    EmojiPickerComponent.prototype.writeValue = function (obj) {
        this._content = obj;
    };
    EmojiPickerComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._content);
    };
    EmojiPickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    EmojiPickerComponent.prototype.setValue = function (val) {
        this._content += val;
        if (this._content) {
            this._onChanged(this._content);
        }
    };
    EmojiPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'emoji-picker',
            providers: [EMOJI_PICKER_VALUE_ACCESSOR],template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/emoji-picker/emoji-picker.html"*/'<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n      <ion-slide *ngFor="let items of emojiArr">\n        <span class="emoji-item"\n              (click)="setValue(item)"\n              *ngFor="let item of items">\n          {{item}}\n        </span>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</div>'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/emoji-picker/emoji-picker.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_emoji_emoji__["a" /* EmojiProvider */]])
    ], EmojiPickerComponent);
    return EmojiPickerComponent;
}());

//# sourceMappingURL=emoji-picker.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowMuchSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message_model__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_flikeUser_model__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_chatroom_model__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_survey_survey__ = __webpack_require__(414);
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







var HowMuchSurveyComponent = /** @class */ (function () {
    function HowMuchSurveyComponent(survey, errorHandler) {
        this.survey = survey;
        this.errorHandler = errorHandler;
        this.globals = __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__;
    }
    HowMuchSurveyComponent.prototype.ngOnInit = function () {
        this.getUserAnswer();
    };
    HowMuchSurveyComponent.prototype.sendAnswer = function () {
        var _this = this;
        this.survey.sendAnswer(this.answer, this.user.id, this.message.id, this.chatroom.id)
            .catch(function (error) { return _this.errorHandler.sendError("howMuch survey - send answer", error); });
        this.getUserAnswer();
    };
    HowMuchSurveyComponent.prototype.getUserNameById = function (userID) {
        var username = "";
        this.chatroom.userAccess.map(function (user) {
            if (user.id === userID)
                username = user.fullname;
        });
        return username;
    };
    HowMuchSurveyComponent.prototype.getUserAnswer = function () {
        var _this = this;
        this.message.survey.answers.map(function (answer) {
            if (answer.id == _this.user.id)
                _this.answer = answer.value;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_message_model__["a" /* Message */])
    ], HowMuchSurveyComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_flikeUser_model__["a" /* FlikeUser */])
    ], HowMuchSurveyComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_chatroom_model__["a" /* ChatRoom */])
    ], HowMuchSurveyComponent.prototype, "chatroom", void 0);
    HowMuchSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'how-much-survey',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/how-much-survey/how-much-survey.html"*/'<ion-item-group>\n  <ion-item class="survey-body" text-wrap>\n    <h3> <!--*ngIf="user.typeOfUser == globals.coachee">-->{{message.message}}</h3>\n    <h2>{{message.survey.question}}</h2>\n    <p *ngFor="let a of message.survey.answers" class="student-answer">\n        <span *ngIf="user.typeOfUser == globals.coach" >\n            <span *ngIf="getUserNameById(a.id) != \'\'"><b>{{getUserNameById(a.id)}}:</b>&nbsp;{{a.value}}</span>\n        </span>\n    </p>\n  </ion-item>\n\n  <ion-item class="input-wrap">\n    <ion-range min="{{message.survey.range.startAt}}"\n               max="{{message.survey.range.stopAt}}"\n               step="{{message.survey.range.step}}"\n               [(ngModel)]="answer"\n               pin="true"\n               (ionBlur)="sendAnswer($event)"\n    >\n      <ion-icon range-left name="remove"></ion-icon>\n      <ion-icon range-right name="add"></ion-icon>\n    </ion-range>\n  </ion-item>\n\n</ion-item-group>'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/how-much-survey/how-much-survey.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_survey_survey__["a" /* SurveyProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_error_log_error_log__["a" /* ErrorLogProvider */]])
    ], HowMuchSurveyComponent);
    return HowMuchSurveyComponent;
}());

//# sourceMappingURL=how-much-survey.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message_model__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_flikeUser_model__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_chatroom_model__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_translations_translations__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_survey_survey__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_error_log_error_log__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ImageSurveyComponent = /** @class */ (function () {
    function ImageSurveyComponent(survey, alert, translate, errorHandler) {
        this.survey = survey;
        this.alert = alert;
        this.translate = translate;
        this.errorHandler = errorHandler;
        this.globals = __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__;
    }
    ImageSurveyComponent.prototype.ngOnInit = function () {
        console.log(this.message);
        this.numAnswers = 0;
    };
    ImageSurveyComponent.prototype.saveOption = function (event, option) {
        var _this = this;
        var answer = {};
        answer[option.id] = option.badge;
        var userAnswer = this.getUserAnswer();
        for (var key in userAnswer) {
            answer[key] = userAnswer[key];
        }
        this.numAnswers = this.getNumAnswers();
        if (answer[option.id] == 0) {
            if (this.numAnswers >= this.message.survey.maxNumOfAnswers) {
                var alert_1 = this.alert.create({ message: this.translate.getTranslation('maxSelections') + this.message.survey.maxNumOfAnswers });
                alert_1.present();
            }
            else
                answer[option.id] = this.getHighestValue(answer) + 1;
        }
        else {
            answer = this.rubstractOneToAll(answer, answer[option.id]);
            answer[option.id] = 0;
        }
        this.survey.sendAnswer(answer, this.user.id, this.message.id, this.chatroom.id)
            .catch(function (error) { return _this.errorHandler.sendError("image survey - send answer", error); });
    };
    ImageSurveyComponent.prototype.getNumAnswers = function () {
        var numAnswers = 0;
        var userAnswer = this.getUserAnswer();
        for (var key in userAnswer) {
            if (userAnswer[key] > 0)
                numAnswers++;
        }
        this.numAnswers = numAnswers;
        return this.numAnswers;
    };
    ImageSurveyComponent.prototype.getHighestValue = function (answer) {
        var value = 0;
        for (var key in answer) {
            if (answer[key] > value)
                value = answer[key];
        }
        return value;
    };
    ImageSurveyComponent.prototype.rubstractOneToAll = function (answer, minValue) {
        for (var key in answer) {
            if (answer[key] > minValue)
                answer[key] -= 1;
        }
        return answer;
    };
    ImageSurveyComponent.prototype.getUserAnswer = function () {
        var _this = this;
        var userAnswer = {};
        this.message.survey.answers.map(function (answer) {
            if (answer.id == _this.user.id)
                userAnswer = answer.value;
        });
        return userAnswer;
    };
    ImageSurveyComponent.prototype.getUserNameById = function (userID) {
        var username = "";
        this.chatroom.userAccess.map(function (user) {
            if (user.id === userID)
                username = user.fullname;
        });
        return username;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_message_model__["a" /* Message */])
    ], ImageSurveyComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_flikeUser_model__["a" /* FlikeUser */])
    ], ImageSurveyComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_chatroom_model__["a" /* ChatRoom */])
    ], ImageSurveyComponent.prototype, "chatroom", void 0);
    ImageSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'image-survey',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/image-survey/image-survey.html"*/'\n<ion-item class="survey-body" text-wrap>\n  <h3> <!--*ngIf="user.typeOfUser == globals.coachee"-->{{message.message}}</h3>\n  <h2>{{message.survey.question}}</h2>\n  <p *ngFor="let a of message.survey.answers" class="student-answer">\n      <span *ngIf="user.typeOfUser == globals.coach">\n          <span *ngIf="getUserNameById(a.id) != \'\'"><b>{{getUserNameById(a.id)}}:</b>&nbsp;{{globals.getObjectString(a.value)}}</span>\n      </span>\n  </p>\n</ion-item>\n\n<ion-grid>\n    <ion-row wrap>\n        <ion-col class="survey-img-col" *ngFor="let o of message.survey.options">\n            <ion-label class="image-title">{{o.value.title}}</ion-label>\n            <div class="survey-image-wrap" (click)="saveOption($event,o)">\n                <img class="img-option" src="{{o.value.imgUrl}}" [ngClass]="{\'option-selected\':o.badge > 0}"/>\n                <ion-badge class="survey-badge" *ngIf="message.survey.mustBeInOrder && o.badge > 0">{{o.badge}}</ion-badge>\n            </div>\n\n            <p class="footnote">{{o.value.footNote}}</p>\n        </ion-col>\n    </ion-row>\n\n\n</ion-grid>'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/image-survey/image-survey.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_survey_survey__["a" /* SurveyProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_translations_translations__["a" /* TranslationsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_error_log_error_log__["a" /* ErrorLogProvider */]])
    ], ImageSurveyComponent);
    return ImageSurveyComponent;
}());

//# sourceMappingURL=image-survey.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenTextSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message_model__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_flikeUser_model__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_translations_translations__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_survey_survey__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_chatroom_model__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_error_log_error_log__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OpenTextSurveyComponent = /** @class */ (function () {
    function OpenTextSurveyComponent(translate, survey, alert, errorHandler) {
        this.translate = translate;
        this.survey = survey;
        this.alert = alert;
        this.errorHandler = errorHandler;
        this.globals = __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__;
    }
    OpenTextSurveyComponent.prototype.ngOnInit = function () {
        console.log(this.message);
        this.answer = this.translate.getTranslation("answer");
        this.minLength = this.translate.getTranslation("minLength") + this.message.survey.minLength;
        this.canSend = this.checkIfCanSend();
        this.minWords = this.translate.getTranslation('minWords') + this.message.survey.minWordCount;
    };
    OpenTextSurveyComponent.prototype.checkLength = function (event) {
        if (this.message.survey.userAnswer.length >= this.message.survey.maxLength) {
            event.preventDefault();
        }
        this.canSend = this.checkIfCanSend();
    };
    OpenTextSurveyComponent.prototype.checkIfCanSend = function () {
        var numWords = this.getNumWords();
        return (this.message.survey.userAnswer.length >= this.message.survey.minLength && numWords >= this.message.survey.minWordCount);
    };
    OpenTextSurveyComponent.prototype.getNumWords = function () {
        var original = this.message.survey.userAnswer;
        var numWords = this.message.survey.userAnswer.split(' ');
        this.message.survey.userAnswer = original;
        if (numWords[numWords.length - 1] == '')
            return numWords.length - 1;
        else
            return numWords.length;
    };
    OpenTextSurveyComponent.prototype.getUserNameById = function (userID) {
        var username = "";
        this.chatroom.userAccess.map(function (user) {
            if (user.id === userID)
                username = user.fullname;
        });
        return username;
    };
    OpenTextSurveyComponent.prototype.sendAnswer = function () {
        var _this = this;
        if (this.checkIfCanSend()) {
            this.survey.sendAnswer(this.message.survey.userAnswer, this.user.id, this.message.id, this.chatroom.id)
                .then(function () {
                var alert = _this.alert.create({
                    message: _this.translate.getTranslation('answerSaved')
                });
                alert.present();
            })
                .catch(function (error) { return _this.errorHandler.sendError("openText survey - send answer", error); });
        }
        else {
            var alert_1 = this.alert.create({ message: this.translate.getTranslation('minRequirements') });
            alert_1.present();
        }
    };
    OpenTextSurveyComponent.prototype.change = function () {
        // get elements
        var element = document.getElementById('otInput');
        var textarea = element.getElementsByTagName('textarea')[0];
        // set default style for textarea
        // limit size to 96 pixels (6 lines of text)
        var scroll_height = textarea.scrollHeight;
        if (scroll_height > 96)
            scroll_height = 96;
        // apply new style
        element.style.height = Math.max(scroll_height, 38) + "px";
        textarea.style.minHeight = Math.max(scroll_height, 38) + "px";
        textarea.style.height = Math.max(scroll_height, 38) + "px";
        this.content.resize();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_message_model__["a" /* Message */])
    ], OpenTextSurveyComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_flikeUser_model__["a" /* FlikeUser */])
    ], OpenTextSurveyComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__models_chatroom_model__["a" /* ChatRoom */])
    ], OpenTextSurveyComponent.prototype, "chatroom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* Content */])
    ], OpenTextSurveyComponent.prototype, "content", void 0);
    OpenTextSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'open-text-survey',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/open-text-survey/open-text-survey.html"*/'<ion-item-group>\n  <ion-item class="survey-body" text-wrap>\n    <h3> <!--*ngIf="user.typeOfUser == globals.coachee">-->{{message.message}}</h3>\n    <h2>{{message.survey.question}}</h2>\n    <p *ngFor="let a of message.survey.answers" class="student-answer">\n        <span *ngIf="user.typeOfUser == globals.coach" >\n            <span *ngIf="getUserNameById(a.id) != \'\'"><b>{{getUserNameById(a.id)}}:</b>&nbsp;{{a.value}}</span>\n        </span>\n    </p>\n\n  </ion-item>\n  <ion-grid class="input-wrap">\n    <ion-row>\n      <ion-item no-lines>\n        <ion-textarea col-11\n                      id="otInput"\n                      [(ngModel)]="message.survey.userAnswer"\n                      (keyup.enter)="sendAnswer()"\n                      placeholder="{{answer}}"\n                      (keypress)="checkLength($event)"\n                      (input)="change()">\n        </ion-textarea>\n        <button class="button-send"\n                col-2 ion-button clear icon-only item-right\n                (click)="sendAnswer()" >\n          <ion-icon  name="send"></ion-icon>\n        </button>\n      </ion-item>\n      <span class="max-length">{{message.survey.maxLength - message.survey.userAnswer.length}}</span>\n\n    </ion-row>\n    <ion-row>\n      <span class="min-length" *ngIf="message.survey.minLength && message.survey.userAnswer.length < message.survey.minLength">{{minLength}}</span>\n      <span class="min-length" *ngIf="getNumWords() < message.survey.minWordCount">{{minWords}}</span>\n    </ion-row>\n  </ion-grid>\n\n</ion-item-group>\n'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/open-text-survey/open-text-survey.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_translations_translations__["a" /* TranslationsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_survey_survey__["a" /* SurveyProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_error_log_error_log__["a" /* ErrorLogProvider */]])
    ], OpenTextSurveyComponent);
    return OpenTextSurveyComponent;
}());

//# sourceMappingURL=open-text-survey.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message_model__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_flikeUser_model__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_chatroom_model__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_translations_translations__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_survey_survey__ = __webpack_require__(414);
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








var RadioButtonSurveyComponent = /** @class */ (function () {
    function RadioButtonSurveyComponent(translate, survey, errorHandler) {
        this.translate = translate;
        this.survey = survey;
        this.errorHandler = errorHandler;
        this.globals = __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__;
    }
    RadioButtonSurveyComponent.prototype.ngOnInit = function () {
        console.log(this.message);
    };
    RadioButtonSurveyComponent.prototype.getUserNameById = function (userID) {
        var username = "";
        this.chatroom.userAccess.map(function (user) {
            if (user.id === userID)
                username = user.fullname;
        });
        return username;
    };
    RadioButtonSurveyComponent.prototype.saveOption = function (checked, key) {
        this.rbAnswer = checked ? key : null;
        this.sendAnswer();
    };
    RadioButtonSurveyComponent.prototype.sendAnswer = function () {
        var _this = this;
        this.survey.sendAnswer(this.rbAnswer, this.user.id, this.message.id, this.chatroom.id)
            .catch(function (error) { return _this.errorHandler.sendError("radioButton survey - send answer", error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_message_model__["a" /* Message */])
    ], RadioButtonSurveyComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_flikeUser_model__["a" /* FlikeUser */])
    ], RadioButtonSurveyComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_chatroom_model__["a" /* ChatRoom */])
    ], RadioButtonSurveyComponent.prototype, "chatroom", void 0);
    RadioButtonSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'radio-button-survey',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/radio-button-survey/radio-button-survey.html"*/'\n<ion-item class="survey-body" text-wrap>\n  <h3> <!--*ngIf="user.typeOfUser == globals.coachee"-->{{message.message}}</h3>\n  <h2>{{message.survey.question}}</h2>\n  <p *ngFor="let a of message.survey.answers" class="student-answer">\n      <span *ngIf="user.typeOfUser == globals.coach" >\n          <span *ngIf="getUserNameById(a.id) != \'\'"><b>{{getUserNameById(a.id)}}:</b>&nbsp;{{a.value}}</span>\n      </span>\n  </p>\n</ion-item>\n\n<ion-list radio-group>\n  <ion-item *ngFor="let o of message.survey.options">\n    <ion-label>{{o.value}}</ion-label>\n    <ion-radio checked="{{o.checked}}" (ionSelect)="saveOption($event,o.id)"></ion-radio>\n\n  </ion-item>\n</ion-list>'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/radio-button-survey/radio-button-survey.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_translations_translations__["a" /* TranslationsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_survey_survey__["a" /* SurveyProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_error_log_error_log__["a" /* ErrorLogProvider */]])
    ], RadioButtonSurveyComponent);
    return RadioButtonSurveyComponent;
}());

//# sourceMappingURL=radio-button-survey.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message_model__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_flikeUser_model__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_chatroom_model__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_survey_survey__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_translations_translations__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_error_log_error_log__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RankSurveyComponent = /** @class */ (function () {
    function RankSurveyComponent(survey, alert, translate, errorHandler) {
        this.survey = survey;
        this.alert = alert;
        this.translate = translate;
        this.errorHandler = errorHandler;
        this.globals = __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__;
    }
    RankSurveyComponent.prototype.ngOnInit = function () {
        this.numAnswers = 0;
    };
    RankSurveyComponent.prototype.saveOption = function (event, option) {
        var _this = this;
        var answer = {};
        answer[option.id] = option.badge;
        var userAnswer = this.getUserAnswer();
        for (var key in userAnswer) {
            answer[key] = userAnswer[key];
        }
        this.numAnswers = this.getNumAnswers();
        if (answer[option.id] == 0) {
            if (this.numAnswers >= this.message.survey.maxNumOfAnswers) {
                var alert_1 = this.alert.create({ message: this.translate.getTranslation('maxSelections') + this.message.survey.maxNumOfAnswers });
                alert_1.present();
            }
            else
                answer[option.id] = this.getHighestValue(answer) + 1;
        }
        else {
            answer = this.rubstractOneToAll(answer, answer[option.id]);
            answer[option.id] = 0;
        }
        this.survey.sendAnswer(answer, this.user.id, this.message.id, this.chatroom.id)
            .catch(function (error) { return _this.errorHandler.sendError("rank survey - send answer", error); });
    };
    RankSurveyComponent.prototype.getNumAnswers = function () {
        var numAnswers = 0;
        var userAnswer = this.getUserAnswer();
        for (var key in userAnswer) {
            if (userAnswer[key] > 0)
                numAnswers++;
        }
        this.numAnswers = numAnswers;
        return this.numAnswers;
    };
    RankSurveyComponent.prototype.getHighestValue = function (answer) {
        var value = 0;
        for (var key in answer) {
            if (answer[key] > value)
                value = answer[key];
        }
        return value;
    };
    RankSurveyComponent.prototype.rubstractOneToAll = function (answer, minValue) {
        for (var key in answer) {
            if (answer[key] > minValue)
                answer[key] -= 1;
        }
        return answer;
    };
    RankSurveyComponent.prototype.getUserAnswer = function () {
        var _this = this;
        var userAnswer = {};
        this.message.survey.answers.map(function (answer) {
            if (answer.id == _this.user.id)
                userAnswer = answer.value;
        });
        return userAnswer;
    };
    RankSurveyComponent.prototype.getUserNameById = function (userID) {
        var username = "";
        this.chatroom.userAccess.map(function (user) {
            if (user.id === userID)
                username = user.fullname;
        });
        return username;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_message_model__["a" /* Message */])
    ], RankSurveyComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_flikeUser_model__["a" /* FlikeUser */])
    ], RankSurveyComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_chatroom_model__["a" /* ChatRoom */])
    ], RankSurveyComponent.prototype, "chatroom", void 0);
    RankSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'rank-survey',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/rank-survey/rank-survey.html"*/'\n<ion-item class="survey-body" text-wrap>\n  <h3> <!--*ngIf="user.typeOfUser == globals.coachee"-->{{message.message}}</h3>\n  <h2>{{message.survey.question}}</h2>\n  <p *ngFor="let a of message.survey.answers" class="student-answer">\n      <span *ngIf="user.typeOfUser == globals.coach" >\n          <span *ngIf="getUserNameById(a.id) != \'\'"><b>{{getUserNameById(a.id)}}:</b>&nbsp;{{globals.getObjectString(a.value)}}</span>\n      </span>\n  </p>\n</ion-item>\n\n<ion-grid>\n  <ion-row>\n    <ion-item *ngFor="let o of message.survey.options">\n      <!--<ion-label class="image-title">{{o.value.Title}}</ion-label>-->\n      <ion-row class="survey-rank-wrap" (click)="saveOption($event,o)">\n        <ion-badge col-1 class="rank-badge">{{o.badge>0?o.badge:"&nbsp;"}}</ion-badge>\n        <p col-8 text-wrap>{{o.value}}</p>\n\n      </ion-row>\n\n      <!--<p class="footnote">{{o.value.Footnote}}</p>-->\n    </ion-item>\n  </ion-row>\n\n\n</ion-grid>'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/rank-survey/rank-survey.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_survey_survey__["a" /* SurveyProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_translations_translations__["a" /* TranslationsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_error_log_error_log__["a" /* ErrorLogProvider */]])
    ], RankSurveyComponent);
    return RankSurveyComponent;
}());

//# sourceMappingURL=rank-survey.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_pick_survey_survey_pick_survey__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_survey__ = __webpack_require__(595);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyPickerComponent = /** @class */ (function () {
    function SurveyPickerComponent(popover, modal, viewCtrl) {
        this.popover = popover;
        this.modal = modal;
        this.viewCtrl = viewCtrl;
    }
    SurveyPickerComponent.prototype.newSurvey = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__survey_survey__["a" /* SurveyComponent */]);
        modal.present();
        this.viewCtrl.dismiss();
    };
    SurveyPickerComponent.prototype.pickSurvey = function (event) {
        var _this = this;
        var popover = this.popover.create(__WEBPACK_IMPORTED_MODULE_2__survey_pick_survey_survey_pick_survey__["a" /* SurveyPickSurveyComponent */]);
        popover.present({ ev: event });
        popover.onDidDismiss(function () { return _this.viewCtrl.dismiss(); });
    };
    SurveyPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'survey-picker',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/survey-picker/survey-picker.html"*/'<ion-list>\n  <button ion-item (click)="newSurvey()">New survey</button>\n  <button ion-item (click)="pickSurvey($event)">Pick survey</button>\n</ion-list>\n'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/survey-picker/survey-picker.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], SurveyPickerComponent);
    return SurveyPickerComponent;
}());

//# sourceMappingURL=survey-picker.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserSelectComponent = /** @class */ (function () {
    function UserSelectComponent(navParams, viewCtrl, prefs) {
        var _this = this;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.prefs = prefs;
        this.global = __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__;
        this.users = this.navParams.get("users");
        console.log(this.users);
        this.prefs.fetch(__WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__["userPrefs"], __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__["userItem"])
            .then(function (user) {
            _this.user = user;
        });
    }
    UserSelectComponent.prototype.selectUser = function (user) {
        this.viewCtrl.dismiss({ userId: user.id });
    };
    UserSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-select',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/user-select/user-select.html"*/'<ion-list class="users-list">\n  <p class="user-select" *ngFor="let u of users" (click)="selectUser(u)">\n    <span *ngIf="u.id !=  user.id && u.typeOfUser == global.coachee">{{u.fullname}}</span></p>\n</ion-list>\n'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/components/user-select/user-select.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences__["a" /* AppPreferences */]])
    ], UserSelectComponent);
    return UserSelectComponent;
}());

//# sourceMappingURL=user-select.js.map

/***/ })

});
//# sourceMappingURL=0.js.map