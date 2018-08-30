import {Component, ViewChild} from '@angular/core';
import {
    AlertController,
    Content,
    IonicPage,
    Keyboard,
    LoadingController,
    ModalController,
    Navbar,
    NavController,
    NavParams,
    Platform,
    PopoverController,
    Refresher,
    TextInput
} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import {FlikeUser} from "../../models/flikeUser.model";
import {Message} from "../../models/message.model";
import * as globals from '../../providers/globals/globals';
import {ChatServiceProvider} from "../../providers/chat-service/chat-service";
import {AppPreferences} from "@ionic-native/app-preferences";
import * as moment from 'moment';
import {VariablesProvider} from "../../providers/variables/variables";
import {ChatRoom} from "../../models/chatroom.model";
import {Survey} from "../../components/survey/survey.model";
import {MeetingsProvider} from "../../providers/meetings/meetings";
import {TranslationsProvider} from "../../providers/translations/translations";
import {AdmobProvider} from "../../providers/admob/admob";
import {ErrorLogProvider} from "../../providers/error-log/error-log";

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage {

    @ViewChild('navbar') navBar: Navbar;
    @ViewChild(Content) content: Content;
    @ViewChild('chat_input') messageInput: TextInput;

    user: FlikeUser;
    chatroom: ChatRoom;
    name: string;
    messages: Array<Message> = [];
    globals: any = globals;
    editorMsg:string = "";
    _isOpenEmojiPicker = false;
    emojiHeight:number;
    textHeight:number;

    momentInstance: any = moment;
    survey: Survey;
    limit:number = 30;
    moreMsg:number = 30;

    //translations
    loadMoreMessages:string;
    messageWrite:string;


    //transitionOptions: NativeTransitionOptions;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public db: AngularFireDatabase,
                public prefs: AppPreferences,
                public chatService: ChatServiceProvider,
                public variables: VariablesProvider,
                public popover: PopoverController,
                public meetings: MeetingsProvider,
                public modal: ModalController,
                public alert: AlertController,
                public translate: TranslationsProvider,
                public loader: LoadingController,
                public keyboard: Keyboard,
                public adMob: AdmobProvider,
                private errorHandler: ErrorLogProvider,
                private platform: Platform
    ) {
        this.user = this.variables.user;
        console.log(this.user)
        if (!this.user) this.navCtrl.setRoot("ActivationPage");

        /*this.survey = this.navParams.get("survey");
        if (this.survey) {
            //todo close popovers
        }*/
        this.emojiHeight = 255;
        this.textHeight = 55;

        this.platform.registerBackButtonAction(() => {

            if (!this.navCtrl.canGoBack()) {
                if (this.user.typeOfUser == globals.coach) this.navCtrl.setRoot("CoachPage")
                else this.navCtrl.setRoot("CoacheePage")
            } else this.navCtrl.pop();
        })
    }

    ionViewDidLoad() {

        this.adMob.hideAdmob().catch( error => this.errorHandler.sendError("chatPageLoad - hide adMob",error));
        this.chatroom = this.navParams.get("chatroom");
        this.chatService.updateMsgView(this.chatroom.id,this.user.id);

        if (!this.chatroom) {
            this.chatService.getChatroomData(this.variables.notificationChatroom)
                .subscribe( actionGetChatroomData => {
                    let thisroom = actionGetChatroomData.payload.val()
                    thisroom.id = thisroom.$key;
                    this.chatroom = thisroom;
                    let userAccess: Array<any> = [];
                    for (let key in thisroom.userAccess){
                        //populate Array
                        this.chatService.getUserInfoById(key)
                            .subscribe( actionGetUserInfo => {
                                let userInfo = actionGetUserInfo.payload.val()
                                userInfo.id = key;
                                console.log(userInfo)
                                if (!this.userExist(this.chatroom.userAccess,userInfo.id)) {
                                    userAccess.push(userInfo)
                                }
                            },error => this.errorHandler.sendError("chatPage, getChatroomData - getUserInfoById from notification (subscription)",error))
                    }
                    this.chatroom.userAccess = userAccess;
                    this.getMessages(this.limit,false);
                },error => this.errorHandler.sendError("chatPage, getChatroomData from notification (subscription)",error))
        } else this.getMessages(this.limit,false);
        this.loadMoreMessages = this.translate.getTranslation('loadMoreMessages');
        this.messageWrite = this.translate.getTranslation('messageWrite');
        this.scrollToBottom()
    }


    userExist(array:any,userId){
        let exist = false;
        for (let i = 0; i < array.length; i++){
            if (array[i].id === userId) exist = true;
        }
        return exist
    }

    getMessages(limit:number,loadMore:boolean){
        this.messages = [];
        this.limit = limit;
        let loader = this.loader.create({
            spinner: "bubbles",
            content:this.translate.getTranslation('loading')});
        loader.present();
        this.chatService.getMsgList(this.chatroom.id,this.limit)
            .subscribe( messages => {
                this.populateMessages(messages)
                loader.dismiss()
            },error => this.errorHandler.sendError("chatPage, getMessages - getMsgList subscription",error));
    }

    getMoreMessages(refresher:Refresher){
        this.chatService.getMsgList(this.chatroom.id,this.limit+this.moreMsg)
            .subscribe( messages => {
                this.limit += this.moreMsg;
                this.populateMessages(messages)
                refresher.complete()
            },error => this.errorHandler.sendError("chatPage, getMoreMessages - getMsgList subscription",error))

    }

    populateMessages(messages){
        for (let key in messages) {
            messages[key].id = messages[key].$key;
            this.pushOrUpdateMessage(messages[key]);

        }
        this.messages = messages;

        this.messages.map( message => {

            if (message.survey){

                //if is an Array is why we already transformed it, don't do it again!
                if (message.survey.answers && !(message.survey.answers instanceof Array)){
                    let ans: Array<any> = [];
                    for (let key in message.survey.answers){
                        ans.push({id:key,value:message.survey.answers[key]})
                    }
                    message.survey.answers = ans;
                }
                if (message.survey.options && !(message.survey.options instanceof Array)){
                    let opt: Array<any> = [];
                    for (let key in message.survey.options){
                        opt.push({id:key,value:message.survey.options[key]})
                    }
                    message.survey.options = opt;
                }
                if (message.survey.typeOfQuestion == globals.selectImage.key || message.survey.typeOfQuestion == globals.rank.key) {
                    //calculate the badge for each option
                    for (let i = 0; i<message.survey.options.length; i++) {
                        message.survey.options[i].badge = this.getBadge(message.survey.options[i].id,message.survey.answers)
                    }
                }
                if (message.survey.typeOfQuestion == globals.checkBox.key) {
                    for (let i = 0; i<message.survey.options.length; i++) {
                        message.survey.options[i].checked = this.getChecked(message.survey.options[i].id, message.survey.answers)
                    }
                }
                if (message.survey.typeOfQuestion == globals.radioButton.key) {
                    for (let i = 0; i<message.survey.options.length; i++) {
                        message.survey.options[i].checked = this.getRadioChecked(message.survey.options[i].id, message.survey.answers)
                    }
                }
                if (message.survey.typeOfQuestion == globals.openText.key) {
                    message.survey.userAnswer = this.getOtAnswer(message.survey.answers)
                }
            }
        })

    }

    getChecked(option:string,answers:any){
        let checked = false;
        answers.map( answer => {
            if (answer.id == this.user.id){
                for (let key in answer.value){
                    if (option == key) checked = true;
                }
            }
        });
        return checked;
    }

    getRadioChecked(option:string,answers:any){
        let checked = false;
        answers.map( answer => {
            if (answer.id == this.user.id){
                if (option == answer.value) checked = true;
            }
        });
        return checked;
    }

    getOtAnswer(answers:any) {
        let userAnswer: string;
        answers.map(answer => {
            if (answer.id == this.user.id) userAnswer = answer.value
        })
        return userAnswer;
    }

    getBadge(value:string,answers:any){
        let badge = 0;
        answers.map(answer => {
            if (answer.id == this.user.id){
                for (let key in answer.value){
                    if (value == key) badge = answer.value[key]
                }
            }
        });
        return badge;
    }


    getUserNameById(userID:string) {
        let username = "";
        this.chatroom.userAccess.map(user => {
            if (user.id === userID) username = user.fullname
        });
        return username;
    }

    switchEmojiPicker() {
        this._isOpenEmojiPicker = !this._isOpenEmojiPicker;
        if (!this._isOpenEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.content.resize();
        this.scrollToBottom();
    }

    sendMsg() {

        if (!this.editorMsg.trim()) return;

        let newMsg: Message = {
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

        this.chatService.sendMsg(newMsg,this.chatroom.id,globals.groupAll,this.getUserNameById(newMsg.sender))
            .then((result) => {
            console.log(result)
                //update sent status
                this.pushNewMsg();
            },error => console.log(error))
    }

    pushNewMsg() {
        this.scrollToBottom();
        this.textHeight = 55;
        const element   = document.getElementById('chat_input');
        const textarea  = element.getElementsByTagName('textarea')[0];
        element.style.height      = 33 + "px";
        textarea.style.minHeight  = 33 + "px";
        textarea.style.height     = 33 + "px";
        this.content.resize();

    }

    focus() {
        this._isOpenEmojiPicker = false;
        this.content.resize();
        //this.scrollToBottom();
    }

    change() {
        // get elements
        const element   = document.getElementById('chat_input');
        const textarea  = element.getElementsByTagName('textarea')[0];
        // set default style for textarea

        // limit size to 96 pixels (6 lines of text)
        let scroll_height = textarea.scrollHeight;
        if(scroll_height > 96)
            scroll_height = 96;

        // apply new style
        element.style.height      = Math.max(scroll_height,33) + "px";
        textarea.style.minHeight  = Math.max(scroll_height,33) + "px";
        textarea.style.height     = Math.max(scroll_height,33) + "px";
        this.textHeight    = Math.max(scroll_height+15,55);
        this.content.resize();
    }

    scrollToBottom() {
        setTimeout(() => {
            if (this.content.scrollToBottom) {
                this.content.scrollToBottom();
            }
        }, 400)
    }

    showSurveyPicker(event){
        let popover = this.popover.create("SurveyPickerComponent");
        popover.present({ev:event});
    }

    markSeen(event){
        let alert = this.alert.create({subTitle:this.translate.getTranslation('seenMarked')+moment().format('DD/MM/YYYY - hh:mm')});
        if (this.chatroom.userAccess.length <= 2){
            this.meetings.saveNote(this.user.id,this.getOtherId(),null)
                .then(() => alert.present(),
                        error =>
                            this.errorHandler.sendError("chatPage, markSeen - saveNote promise update single user",error))

        } else {
            let coacheeId:string;
            this.chatroom.userAccess.map( user => {
                if (user.id != this.user.id) coacheeId = user.id;
            });
            /*let popover = this.popover.create(UserSelectComponent,{users:this.chatroom.userAccess});
            popover.present({ev:event});
            popover.onDidDismiss( userSelected => {
                if (userSelected){
                    this.meetings.saveNote(this.user.id,userSelected.userId,null)
                }
            })*/
            this.meetings.saveNote(this.user.id,coacheeId,null)
                .then(null,
                        error =>
                            this.errorHandler.sendError("chatPage, markseen - saveNote promise update multi user",error))

        }

    }

    goToMeeting(event){
        if (this.chatroom.userAccess.length <= 2) {

            this.navCtrl.push("MeetingsPage", {user: this.user, coachee: this.getUserById(this.getOtherId()),chatroom:this.chatroom});
        } else {
            //popover is not showing on android, until finished just take the las user in array which is not self
            let coacheeId:string;
            this.chatroom.userAccess.map( user => {
                if (user.id != this.user.id) coacheeId = user.id;
            });
            /*let popover = this.popover.create(UserSelectComponent,{users:this.chatroom.userAccess});
            popover.present({ev:event});
            popover.onDidDismiss( userSelected => {
                if (userSelected){
                    this.navCtrl.push(MeetingsPage, {user: this.user, coachee: this.getUserById(userSelected.userId),chatroom:this.chatroom});
                }
            })*/
            this.navCtrl.push("MeetingsPage", {user: this.user, coachee: this.getUserById(coacheeId),chatroom:this.chatroom});

        }

    }

    getOtherId(){
        let id:string;
        this.chatroom.userAccess.map( user => {
            if (this.user.id != user.id) id = user.id;
        });
        return id;
    }

    getUserById(id:string){
        let userById: FlikeUser;
        this.chatroom.userAccess.map( user => {
            if (user.id === id) userById = user;
        });
        return userById;
    }

    pushOrUpdateMessage(message:any){
        let indexOfMessage = -1;
        for (let i = 0; i < this.messages.length; i++){
            if (message.id === this.messages[i].id) indexOfMessage = i;
        }
        if (indexOfMessage == -1) this.messages.push(message);
        else this.messages[indexOfMessage] = message
    }
}
