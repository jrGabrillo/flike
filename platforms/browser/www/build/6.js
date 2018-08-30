webpackJsonp([6],{

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPageModule", function() { return AllPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all__ = __webpack_require__(599);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllPageModule = /** @class */ (function () {
    function AllPageModule() {
    }
    AllPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all__["a" /* AllPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all__["a" /* AllPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__all__["a" /* AllPage */]
            ]
        })
    ], AllPageModule);
    return AllPageModule;
}());

//# sourceMappingURL=all.module.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_variables_variables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_chat_service_chat_service__ = __webpack_require__(415);
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









var AllPage = /** @class */ (function () {
    function AllPage(navCtrl, prefs, db, loader, app, variables, chatService, translate, alert, errorHandler) {
        this.navCtrl = navCtrl;
        this.prefs = prefs;
        this.db = db;
        this.loader = loader;
        this.app = app;
        this.variables = variables;
        this.chatService = chatService;
        this.translate = translate;
        this.alert = alert;
        this.errorHandler = errorHandler;
        this.globals = __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__;
        this.chatRooms = [];
        this.user = this.variables.user;
        if (!this.user)
            this.navCtrl.setRoot("ActivationPage");
    }
    AllPage.prototype.ionViewDidLoad = function () {
        this.getChatrooms();
    };
    AllPage.prototype.getChatrooms = function () {
        var _this = this;
        var loader = this.loader.create({
            spinner: "bubbles",
            content: this.translate.getTranslation('loading')
        });
        loader.present();
        this.chatService.getChatroomByGroup(__WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["groupAll"], this.user.id)
            .subscribe(function (rooms) {
            rooms.map(function (chatroom) {
                //we are updating last viewed message here because of the reloading
                //of chatrooms when data changed
                //this.chatService.updateMsgView(chatroom.id,this.user.id);
                var room = {
                    id: chatroom.payload.key,
                    name: chatroom.payload.val().name,
                    chatroomImgUrl: chatroom.payload.val().chatroomImgUrl,
                    indicator: chatroom.payload.val().indicator,
                    //lastMessage : {},
                    userAccess: [],
                    userMessageTimestamps: []
                };
                _this.chatService.getChatroomData(chatroom.payload.key)
                    .subscribe(function (actionGetChatroomData) {
                    var thisroom = actionGetChatroomData.payload.val();
                    //joinning all the info in an object for the array
                    room.lastMessage = chatroom.payload.val().lastMessage;
                    var _loop_1 = function (key) {
                        //populate Array
                        _this.chatService.getUserInfoById(key)
                            .subscribe(function (actionGetUserInfo) {
                            var userInfo = actionGetUserInfo.payload.val();
                            userInfo.id = key;
                            if (!_this.userExist(room.userAccess, userInfo.id)) {
                                room.userAccess.push(userInfo);
                            }
                        }, function (error) { return _this.errorHandler.sendError("getChatrooms - getUserInfoById subscription", error); });
                    };
                    //room.lastMessage = thisroom.lastMessage || {lastMessage:""};
                    for (var key in thisroom.userAccess) {
                        _loop_1(key);
                    }
                    for (var key in thisroom.userMessageTimestamps) {
                        //save lastMessageTimestamp. If we got a 0 value we don't overwrite it anymore to keep
                        //track of message not read (0 is de default value for a non read message)
                        if (key != _this.user.id && _this.lastMessageTimestamp != 0)
                            _this.lastMessageTimestamp = thisroom.userMessageTimestamps[key].viewTimestamp;
                        //populate array
                        var timestamp = { id: key, viewTimestamp: thisroom.userMessageTimestamps[key].viewTimestamp };
                        if (!_this.userExist(room.userMessageTimestamps, timestamp.id)) {
                            room.userMessageTimestamps.push(timestamp);
                        }
                    }
                    _this.pushOrUpdate(room);
                }, function (error) {
                    _this.errorHandler.sendError("getChatrooms - getChatroomData subscription", error);
                    _this.prefs.remove(__WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["userPrefs"], __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["userItem"]);
                    var nav = _this.app.getRootNav();
                    nav.setRoot("ActivationPage");
                    loader.dismiss();
                });
            });
            loader.dismiss();
        }, function (error) {
            _this.errorHandler.sendError("getChatrooms - getChatroomsByGroup subscription", error);
            _this.prefs.remove(__WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["userPrefs"], __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["userItem"]);
            var nav = _this.app.getRootNav();
            nav.setRoot("ActivationPage");
            loader.dismiss();
        });
    };
    AllPage.prototype.pushOrUpdate = function (room) {
        var indexOfRoom = -1;
        for (var i = 0; i < this.chatRooms.length; i++) {
            if (room.id === this.chatRooms[i].id)
                indexOfRoom = i;
        }
        if (indexOfRoom != -1)
            this.chatRooms[indexOfRoom] = room;
        else
            this.chatRooms.push(room);
    };
    AllPage.prototype.goToChatroom = function (chatroom) {
        var activeNavs = this.app.getRootNavs();
        activeNavs[0].push("ChatPage", { chatroom: chatroom });
    };
    AllPage.prototype.userExist = function (array, userId) {
        var exist = false;
        for (var i = 0; i < array.length; i++) {
            if (array[i].id === userId)
                exist = true;
        }
        return exist;
    };
    AllPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all',template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/all/all.html"*/'<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let room of chatRooms" (click)="goToChatroom(room)">\n      <ion-avatar item-start>\n        <ion-icon *ngIf="!room.chatroomImgUrl" name="contact" ios="ios-contact-outline" class="profile-icon"></ion-icon>\n        <img *ngIf="room.chatroomImgUrl" [src]="room.chatroomImgUrl"/>\n      </ion-avatar>\n      <h2 *ngFor="let userAccess of room.userAccess; let i = index">\n        <span *ngIf="userAccess.id != user.id">{{userAccess.firstname}}<span *ngIf="i < room.userAccess.length && i > 1">,&nbsp;</span></span>\n      </h2>\n      <br>\n      <p [innerHTML]="room.lastMessage" [ngClass]="{\'messageNotRead\':lastMessageTimestamp == 0}"></p>\n      <div *ngIf="user.typeOfUser == globals.coach" class="indicator" item-end [ngStyle]="{\'background-color\':room.indicator}"></div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/pages/all/all.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_preferences__["a" /* AppPreferences */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_5__providers_variables_variables__["a" /* VariablesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_chat_service_chat_service__["a" /* ChatServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_translations_translations__["a" /* TranslationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_error_log_error_log__["a" /* ErrorLogProvider */]])
    ], AllPage);
    return AllPage;
}());

//# sourceMappingURL=all.js.map

/***/ })

});
//# sourceMappingURL=6.js.map