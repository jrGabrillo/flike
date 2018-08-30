webpackJsonp([9],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorLogProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables_variables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ErrorLogProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ErrorLogProvider = /** @class */ (function () {
    function ErrorLogProvider(db, variables, device) {
        this.db = db;
        this.variables = variables;
        this.device = device;
    }
    ErrorLogProvider.prototype.handleError = function (error) {
        console.log(error);
        if (this.variables.user) {
            var e = {
                user: this.variables.user.id,
                timestamp: __WEBPACK_IMPORTED_MODULE_4_moment__["now"](),
                model: this.device.model,
                platform: this.device.platform,
                version: this.device.version,
                error: error.toString(),
                origin: this.origin
            };
            var errorRef = '/errors/';
            this.db.app.database().ref(errorRef).push(e);
        }
    };
    ErrorLogProvider.prototype.sendError = function (origin, error) {
        this.origin = origin;
        this.handleError(error);
    };
    ErrorLogProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__variables_variables__["a" /* VariablesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */]])
    ], ErrorLogProvider);
    return ErrorLogProvider;
}());

//# sourceMappingURL=error-log.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TranslationsProvider = /** @class */ (function () {
    function TranslationsProvider(translate) {
        this.translate = translate;
    }
    TranslationsProvider.prototype.setTranslations = function (language) {
        var _this = this;
        this.globalLanguage = language;
        this.translate.getTranslation(this.globalLanguage).
            subscribe(function (translations) {
            _this.translations = translations.json();
        });
    };
    TranslationsProvider.prototype.getTranslation = function (value) {
        var val = "";
        for (var key in this.translations) {
            if (key === value)
                val = this.translations[key];
        }
        return val;
    };
    TranslationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], TranslationsProvider);
    return TranslationsProvider;
}());

//# sourceMappingURL=translations.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activation/activation.module": [
		583,
		8
	],
	"../pages/agreement/agreement.module": [
		584,
		7
	],
	"../pages/all/all.module": [
		585,
		6
	],
	"../pages/chat/chat.module": [
		586,
		0
	],
	"../pages/coach/coach.module": [
		587,
		5
	],
	"../pages/coachee/coachee.module": [
		588,
		4
	],
	"../pages/group2/group2.module": [
		589,
		3
	],
	"../pages/group3/group3.module": [
		590,
		2
	],
	"../pages/meetings/meetings.module": [
		591,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 198;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPrefs", function() { return userPrefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userItem", function() { return userItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "surveys", function() { return surveys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coach", function() { return coach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coachee", function() { return coachee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeChat", function() { return typeChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeSurvey", function() { return typeSurvey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupAll", function() { return groupAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_2", function() { return group_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_3", function() { return group_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openText", function() { return openText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBox", function() { return checkBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radioButton", function() { return radioButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectImage", function() { return selectImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank", function() { return rank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "howMuch", function() { return howMuch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeQuestion", function() { return typeQuestion; });
/* harmony export (immutable) */ __webpack_exports__["stringGen"] = stringGen;
/* harmony export (immutable) */ __webpack_exports__["mailFormat"] = mailFormat;
/* harmony export (immutable) */ __webpack_exports__["getObjectString"] = getObjectString;
/* harmony export (immutable) */ __webpack_exports__["getObjectKeyString"] = getObjectKeyString;

var api = "";
//dictionarys
var userPrefs = "user";
//items
var userItem = "user";
var surveys = "surveys";
var coach = "Coach";
var coachee = "Coachee";
var typeChat = "Chat";
var typeSurvey = "Survey";
var groupAll = "All";
var group_2 = "group_2";
var group_3 = "group_3";
var openText = { key: "openText", value: "Open text" };
var checkBox = { key: "checkBox", value: "Multi select" };
var radioButton = { key: "radioButton", value: "Single select" };
var selectImage = { key: "selectImage", value: "Select image\"" };
var rank = { key: "rank", value: "Rank question" };
var howMuch = { key: "howMuch", value: "How much question" };
var typeQuestion = [{ key: openText.key, value: openText.value },
    { key: checkBox.key, value: checkBox.value },
    { key: radioButton.key, value: radioButton.value },
    { key: selectImage.key, value: selectImage.value },
    { key: rank.key, value: rank.value },
    { key: howMuch.key, value: howMuch.value }
];
function stringGen() {
    var text = " ";
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 15; i++)
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
}
function mailFormat(value) {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    return !(value && value != "" && (value.length <= 5 || !EMAIL_REGEXP.test(value)));
}
function getObjectString(object) {
    var result = "";
    for (var key in object) {
        if (object[key] != 0)
            result += key + ": " + object[key] + "; ";
    }
    return result;
}
function getObjectKeyString(object) {
    var result = "";
    for (var key in object) {
        if (object[key] != 0)
            result += key + "; ";
    }
    return result;
}
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyProvider = /** @class */ (function () {
    function SurveyProvider(db) {
        this.db = db;
    }
    SurveyProvider.prototype.sendAnswer = function (answer, coachee, messageId, chatroom) {
        var path = '/messages/' + chatroom + '/' + messageId + '/survey/answers/' + coachee;
        return this.db.app.database().ref(path).set(answer);
    };
    SurveyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SurveyProvider);
    return SurveyProvider;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatServiceProvider = /** @class */ (function () {
    function ChatServiceProvider(http, events, db) {
        this.http = http;
        this.events = events;
        this.db = db;
    }
    ChatServiceProvider.prototype.getChatroomByGroup = function (group, userID) {
        var roomsRef = '/chatroomByUser/' + userID + '/' + group;
        return this.db.list(roomsRef).snapshotChanges();
    };
    ChatServiceProvider.prototype.getMsgList = function (chatroom, limit) {
        var msgRef = '/messages/' + chatroom;
        return this.db.list(msgRef, function (ref) { return ref.orderByChild("timestamp").limitToLast(limit); }).snapshotChanges();
    };
    ChatServiceProvider.prototype.getMoreMessages = function (chatroom, startAt, endAt) {
        var msgRef = '/messages/' + chatroom;
        console.log(startAt, endAt);
        return this.db.list(msgRef, function (ref) { return ref.orderByChild("timestamp"); }).snapshotChanges();
    };
    ChatServiceProvider.prototype.updateMsgView = function (chatroom, userID) {
        var viewTimeRef = this.db.app.database().ref('/chatrooms/' + chatroom + '/userMessageTimestamps/' + userID);
        viewTimeRef.update({ viewTimestamp: __WEBPACK_IMPORTED_MODULE_5_moment__["now"]() });
    };
    ChatServiceProvider.prototype.sendMsg = function (msg, chatroom, group, senderName) {
        var _this = this;
        var msgRef = this.db.app.database().ref('/messages/' + chatroom);
        var key;
        return new Promise(function (resolve) {
            msgRef.push(msg)
                .then(function (result) {
                key = result.toString().substr(result.toString().lastIndexOf('/') + 1, result.toString().length);
                resolve(result);
            }, function (error) { return resolve(error); });
        }).then(function (result) {
            new Promise(function (resolve) {
                var chatroomRef = _this.db.app.database().ref('/chatrooms/' + chatroom + '/lastMessage');
                chatroomRef.update({ lastMessage: msg.message, lastMessageTimestamp: msg.timestamp, lastMessageKey: key })
                    .then(function (result) { return resolve(result); })
                    .catch(function (error) { return resolve(error); });
            });
        }, function (error) { return error.json; });
    };
    ChatServiceProvider.prototype.getChatroomData = function (chatroom) {
        var chatroomRef = '/chatrooms/' + chatroom;
        return this.db.object(chatroomRef).snapshotChanges();
    };
    ChatServiceProvider.prototype.getUserInfoById = function (userId) {
        return this.db.object('/users/' + userId).snapshotChanges();
    };
    ChatServiceProvider.prototype.pushUserAccess = function () {
        this.db.app.database().ref('/chatrooms/chatroom_3').set({
            userAccess: { user_1: 'admin', user_2: 'contributor', user_3: 'viewer' },
            type: 'group',
            userMessageTimestamps: { user_1: { viewTimestamp: 1503248708647 } }
        });
    };
    ChatServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ChatServiceProvider);
    return ChatServiceProvider;
}());

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmobProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AdmobProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AdmobProvider = /** @class */ (function () {
    function AdmobProvider(admob) {
        this.admob = admob;
    }
    AdmobProvider.prototype.showAdmob = function () {
        var bannerConfig = {
            // add your config here
            // for the sake of this example we will just use the test config
            autoShow: true
        };
        this.admob.banner.config(bannerConfig);
        return this.admob.banner.prepare();
    };
    AdmobProvider.prototype.hideAdmob = function () {
        return this.admob.banner.remove();
    };
    AdmobProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], AdmobProvider);
    return AdmobProvider;
}());

//# sourceMappingURL=admob.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeetingsProvider = /** @class */ (function () {
    function MeetingsProvider(db) {
        this.db = db;
    }
    MeetingsProvider.prototype.saveNote = function (coach, coachee, note) {
        var minutesRef = this.db.app.database().ref('/meetings/' + coach);
        return minutesRef.push({
            coachee: coachee,
            content: note || '<Seen>',
            recordedAt: __WEBPACK_IMPORTED_MODULE_3_moment__["now"]()
        });
    };
    MeetingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MeetingsProvider);
    return MeetingsProvider;
}());

//# sourceMappingURL=meetings.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmojiProvider = /** @class */ (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    EmojiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EmojiProvider);
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(438);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export translateFactory */
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_chat_service_chat_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_meetings_meetings__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_survey_survey__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_variables_variables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_translations_translations__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_emoji_emoji__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_admob_admob__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_preferences__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_admob_free__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_page_transitions__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_push__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_error_log_error_log__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_firebase__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_device__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























//some previous configurations
function translateFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyAlkdDhXG5qnlJ036jU61z6FOxZLp-LgXw",
    authDomain: "flike-69352.firebaseapp.com",
    databaseURL: "https://flike-69352.firebaseio.com",
    projectId: "flike-69352",
    storageBucket: "flike-69352.appspot.com",
    messagingSenderId: "516446777485"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: "",
                    pageTransition: 'wp-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/activation/activation.module#ActivationPageModule', name: 'ActivationPage', segment: 'activation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agreement/agreement.module#AgreementPageModule', name: 'AgreementPage', segment: 'agreement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all/all.module#AllPageModule', name: 'AllPage', segment: 'all', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach/coach.module#CoachPageModule', name: 'CoachPage', segment: 'coach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coachee/coachee.module#CoacheePageModule', name: 'CoacheePage', segment: 'coachee', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/group2/group2.module#Group2PageModule', name: 'Group2Page', segment: 'group2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/group3/group3.module#Group3PageModule', name: 'Group3Page', segment: 'group3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meetings/meetings.module#MeetingsPageModule', name: 'MeetingsPage', segment: 'meetings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (translateFactory),
                        deps: [__WEBPACK_IMPORTED_MODULE_16__angular_http__["a" /* Http */]]
                    }
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_preferences__["a" /* AppPreferences */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_25__providers_error_log_error_log__["a" /* ErrorLogProvider */] },
                __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["c" /* TranslateService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_emoji_emoji__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_chat_service_chat_service__["a" /* ChatServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_variables_variables__["a" /* VariablesProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_variables_variables__["a" /* VariablesProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_13__providers_admob_admob__["a" /* AdmobProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_survey_survey__["a" /* SurveyProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_translations_translations__["a" /* TranslationsProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_meetings_meetings__["a" /* MeetingsProvider */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_25__providers_error_log_error_log__["a" /* ErrorLogProvider */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_device__["a" /* Device */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 252,
	"./af.js": 252,
	"./ar": 253,
	"./ar-dz": 254,
	"./ar-dz.js": 254,
	"./ar-kw": 255,
	"./ar-kw.js": 255,
	"./ar-ly": 256,
	"./ar-ly.js": 256,
	"./ar-ma": 257,
	"./ar-ma.js": 257,
	"./ar-sa": 258,
	"./ar-sa.js": 258,
	"./ar-tn": 259,
	"./ar-tn.js": 259,
	"./ar.js": 253,
	"./az": 260,
	"./az.js": 260,
	"./be": 261,
	"./be.js": 261,
	"./bg": 262,
	"./bg.js": 262,
	"./bn": 263,
	"./bn.js": 263,
	"./bo": 264,
	"./bo.js": 264,
	"./br": 265,
	"./br.js": 265,
	"./bs": 266,
	"./bs.js": 266,
	"./ca": 267,
	"./ca.js": 267,
	"./cs": 268,
	"./cs.js": 268,
	"./cv": 269,
	"./cv.js": 269,
	"./cy": 270,
	"./cy.js": 270,
	"./da": 271,
	"./da.js": 271,
	"./de": 272,
	"./de-at": 273,
	"./de-at.js": 273,
	"./de-ch": 274,
	"./de-ch.js": 274,
	"./de.js": 272,
	"./dv": 275,
	"./dv.js": 275,
	"./el": 276,
	"./el.js": 276,
	"./en-au": 277,
	"./en-au.js": 277,
	"./en-ca": 278,
	"./en-ca.js": 278,
	"./en-gb": 279,
	"./en-gb.js": 279,
	"./en-ie": 280,
	"./en-ie.js": 280,
	"./en-nz": 281,
	"./en-nz.js": 281,
	"./eo": 282,
	"./eo.js": 282,
	"./es": 283,
	"./es-do": 284,
	"./es-do.js": 284,
	"./es.js": 283,
	"./et": 285,
	"./et.js": 285,
	"./eu": 286,
	"./eu.js": 286,
	"./fa": 287,
	"./fa.js": 287,
	"./fi": 288,
	"./fi.js": 288,
	"./fo": 289,
	"./fo.js": 289,
	"./fr": 290,
	"./fr-ca": 291,
	"./fr-ca.js": 291,
	"./fr-ch": 292,
	"./fr-ch.js": 292,
	"./fr.js": 290,
	"./fy": 293,
	"./fy.js": 293,
	"./gd": 294,
	"./gd.js": 294,
	"./gl": 295,
	"./gl.js": 295,
	"./gom-latn": 296,
	"./gom-latn.js": 296,
	"./he": 297,
	"./he.js": 297,
	"./hi": 298,
	"./hi.js": 298,
	"./hr": 299,
	"./hr.js": 299,
	"./hu": 300,
	"./hu.js": 300,
	"./hy-am": 301,
	"./hy-am.js": 301,
	"./id": 302,
	"./id.js": 302,
	"./is": 303,
	"./is.js": 303,
	"./it": 304,
	"./it.js": 304,
	"./ja": 305,
	"./ja.js": 305,
	"./jv": 306,
	"./jv.js": 306,
	"./ka": 307,
	"./ka.js": 307,
	"./kk": 308,
	"./kk.js": 308,
	"./km": 309,
	"./km.js": 309,
	"./kn": 310,
	"./kn.js": 310,
	"./ko": 311,
	"./ko.js": 311,
	"./ky": 312,
	"./ky.js": 312,
	"./lb": 313,
	"./lb.js": 313,
	"./lo": 314,
	"./lo.js": 314,
	"./lt": 315,
	"./lt.js": 315,
	"./lv": 316,
	"./lv.js": 316,
	"./me": 317,
	"./me.js": 317,
	"./mi": 318,
	"./mi.js": 318,
	"./mk": 319,
	"./mk.js": 319,
	"./ml": 320,
	"./ml.js": 320,
	"./mr": 321,
	"./mr.js": 321,
	"./ms": 322,
	"./ms-my": 323,
	"./ms-my.js": 323,
	"./ms.js": 322,
	"./my": 324,
	"./my.js": 324,
	"./nb": 325,
	"./nb.js": 325,
	"./ne": 326,
	"./ne.js": 326,
	"./nl": 327,
	"./nl-be": 328,
	"./nl-be.js": 328,
	"./nl.js": 327,
	"./nn": 329,
	"./nn.js": 329,
	"./pa-in": 330,
	"./pa-in.js": 330,
	"./pl": 331,
	"./pl.js": 331,
	"./pt": 332,
	"./pt-br": 333,
	"./pt-br.js": 333,
	"./pt.js": 332,
	"./ro": 334,
	"./ro.js": 334,
	"./ru": 335,
	"./ru.js": 335,
	"./sd": 336,
	"./sd.js": 336,
	"./se": 337,
	"./se.js": 337,
	"./si": 338,
	"./si.js": 338,
	"./sk": 339,
	"./sk.js": 339,
	"./sl": 340,
	"./sl.js": 340,
	"./sq": 341,
	"./sq.js": 341,
	"./sr": 342,
	"./sr-cyrl": 343,
	"./sr-cyrl.js": 343,
	"./sr.js": 342,
	"./ss": 344,
	"./ss.js": 344,
	"./sv": 345,
	"./sv.js": 345,
	"./sw": 346,
	"./sw.js": 346,
	"./ta": 347,
	"./ta.js": 347,
	"./te": 348,
	"./te.js": 348,
	"./tet": 349,
	"./tet.js": 349,
	"./th": 350,
	"./th.js": 350,
	"./tl-ph": 351,
	"./tl-ph.js": 351,
	"./tlh": 352,
	"./tlh.js": 352,
	"./tr": 353,
	"./tr.js": 353,
	"./tzl": 354,
	"./tzl.js": 354,
	"./tzm": 355,
	"./tzm-latn": 356,
	"./tzm-latn.js": 356,
	"./tzm.js": 355,
	"./uk": 357,
	"./uk.js": 357,
	"./ur": 358,
	"./ur.js": 358,
	"./uz": 359,
	"./uz-latn": 360,
	"./uz-latn.js": 360,
	"./uz.js": 359,
	"./vi": 361,
	"./vi.js": 361,
	"./x-pseudo": 362,
	"./x-pseudo.js": 362,
	"./yo": 363,
	"./yo.js": 363,
	"./zh-cn": 364,
	"./zh-cn.js": 364,
	"./zh-hk": 365,
	"./zh-hk.js": 365,
	"./zh-tw": 366,
	"./zh-tw.js": 366
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 557;

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_preferences__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globals_globals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_variables_variables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_translations_translations__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__ = __webpack_require__(412);
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












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, prefs, translate, variables, network, alert, push, errorHandler) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.prefs = prefs;
        this.translate = translate;
        this.variables = variables;
        this.network = network;
        this.alert = alert;
        this.push = push;
        this.errorHandler = errorHandler;
        this.translate.globalLanguage = 'nl';
        this.translate.setTranslations(this.translate.globalLanguage);
        this.initializeApp();
        __WEBPACK_IMPORTED_MODULE_8_moment__["locale"](this.translate.globalLanguage);
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.network.onDisconnect().subscribe(function () {
                var alert = _this.alert.create({
                    title: _this.translate.getTranslation('error'),
                    message: _this.translate.getTranslation('noInternet')
                });
                alert.present();
            });
            _this.statusBar.styleDefault();
            _this.prefs.fetch(__WEBPACK_IMPORTED_MODULE_5__providers_globals_globals__["userPrefs"], "user").then(function (user) {
                if (user) {
                    _this.variables.user = user;
                    _this.rootPage = "CoachPage";
                }
                else
                    _this.rootPage = "ActivationPage";
                _this.splashScreen.hide();
                _this.pushSetUp();
            });
        });
    };
    MyApp.prototype.pushSetUp = function () {
        var _this = this;
        var options = {
            android: {
                senderID: '516446777485',
                sound: 'true'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'true'
            }
        };
        console.log(options);
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            console.log(notification);
            console.log(_this.variables.notificationChatroom);
            /*if (this.variables.notificationChatroom != notification.additionalData.chatroom){
                console.log("local not")

                this.localNotifications
                    .schedule({
                    title: notification.title,
                    text: notification.message,
                    at: moment.now(),
                    data: notification.additionalData
                });
                this.localNotifications.on('click',notData => {
                    this.variables.notificationChatroom = notData.chatroom;
                    this.rootPage = ChatPage;
                })*/
            _this.variables.notificationChatroom = notification.additionalData.chatroom;
            _this.rootPage = "ChatPage";
        }, function (notError) { return _this.errorHandler.sendError("appComponent - onNotification", notError); });
        pushObject.on('registration').subscribe(function (registration) {
            _this.variables.firebaseToken = registration.registrationId;
        }, function (regError) { return _this.errorHandler.sendError("appComponent - onRegistration", regError); });
        pushObject.on('error').subscribe(function (error) { return _this.errorHandler.sendError("appComponent - error", error); });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/app/app.html"*/'<ion-nav #nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/rufogabrillo/Desktop/projects/flike-pg/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_preferences__["a" /* AppPreferences */],
            __WEBPACK_IMPORTED_MODULE_7__providers_translations_translations__["a" /* TranslationsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_variables_variables__["a" /* VariablesProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_11__providers_error_log_error_log__["a" /* ErrorLogProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariablesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VariablesProvider = /** @class */ (function () {
    function VariablesProvider(db) {
        this.db = db;
    }
    VariablesProvider.prototype.updateFirebaseToken = function () {
        var _this = this;
        if (this.firebaseToken) {
            var tokenRef_1 = '/users/' + this.user.id;
            var updateToken = this.db.object(tokenRef_1).snapshotChanges()
                .subscribe(function (actionUser) {
                if (actionUser.payload.val().firebaseToken != _this.firebaseToken) {
                    _this.db.app.database().ref(tokenRef_1).update({ firebaseToken: _this.firebaseToken });
                }
            });
            updateToken.unsubscribe();
        }
    };
    VariablesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], VariablesProvider);
    return VariablesProvider;
}());

//# sourceMappingURL=variables.js.map

/***/ })

},[421]);
//# sourceMappingURL=main.js.map