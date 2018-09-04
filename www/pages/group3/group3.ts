import {Component} from '@angular/core';
import {App, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AppPreferences} from "@ionic-native/app-preferences";
import {ChatRoom} from "../../models/chatroom.model";
import {AngularFireDatabase} from "angularfire2/database";
import * as globals from '../../providers/globals/globals';
import {FlikeUser} from "../../models/flikeUser.model";
import {VariablesProvider} from "../../providers/variables/variables";
import {ChatServiceProvider} from "../../providers/chat-service/chat-service";
import {TranslationsProvider} from "../../providers/translations/translations";
import {ErrorLogProvider} from "../../providers/error-log/error-log";


@IonicPage()
@Component({
    selector: 'page-group3',
    templateUrl: 'group3.html',
})
export class Group3Page {

    user:FlikeUser;
    chatRooms: Array<ChatRoom>;
    globals: any = globals;
    lastMessageTimestamp:number;


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public prefs: AppPreferences,
                public db: AngularFireDatabase,
                public loader: LoadingController,
                public app: App,
                public variables: VariablesProvider,
                public chatService: ChatServiceProvider,
                public translate: TranslationsProvider,
                private errorHandler: ErrorLogProvider
    ) {
        this.chatRooms = [];
        this.user = this.variables.user;
        if (!this.user) this.navCtrl.setRoot("ActivationPage")
    }


    ionViewWillEnter() {


    }

    ionViewDidLoad() {
        this.getChatrooms();
    }

    getChatrooms(){
        let loader = this.loader.create({
            spinner: "Bubbles",
            content:this.translate.getTranslation('loading')});
        loader.present();
        this.chatService.getChatroomByGroup(globals.group_3,this.user.id)
            .subscribe( rooms => {
                rooms.map( chatroom => {
                    //we are updating last viewed message here because of the unexpected reloading
                    //of chatrooms when data changed
                    //this.chatService.updateMsgView(chatroom.id,this.user.id);
                    let room: ChatRoom = {
                        id: chatroom.payload.key,
                        name : chatroom.payload.val().name,
                        chatroomImgUrl : chatroom.payload.val().chatroomImgUrl,
                        indicator : chatroom.payload.val().indicator,
                        //lastMessage : {},
                        userAccess : [],
                        userMessageTimestamps : []
                    }

                    this.chatService.getChatroomData(chatroom.payload.key)
                        .subscribe( actionThisroom => {
                            let thisroom = actionThisroom.payload.val()
                            //joinning all the info in an object for the array
                            room.lastMessage = chatroom.payload.val().lastMessage
                            //room.lastMessage = thisroom.lastMessage || {lastMessage:""};
                            for (let key in thisroom.userAccess){
                                //populate Array
                                this.chatService.getUserInfoById(key)
                                    .subscribe( actionUserInfo => {
                                        let userInfo = actionUserInfo.payload.val()
                                        userInfo.id = key;
                                        if (!this.userExist(room.userAccess,userInfo.id)) {
                                            room.userAccess.push(userInfo)
                                        }
                                    })
                            }
                            for (let key in thisroom.userMessageTimestamps){
                                //save lastMessageTimestamp. If we got a 0 value we don't overwrite it anymore to keep
                                //track of message not read (0 is de default value for a non read message)
                                if (key != this.user.id && this.lastMessageTimestamp != 0) this.lastMessageTimestamp = thisroom.userMessageTimestamps[key].viewTimestamp;
                                //populate array
                                let timestamp = {id:key,viewTimestamp:thisroom.userMessageTimestamps[key].viewTimestamp}
                                if (!this.userExist(room.userMessageTimestamps,timestamp.id)){
                                    room.userMessageTimestamps.push(timestamp)
                                }
                            }
                            this.pushOrUpdate(room)
                        },error => {
                            this.errorHandler.sendError("group2, getChatRoomData - subscription",error);
                            this.prefs.remove(globals.userPrefs,globals.userItem);
                            let nav = this.app.getRootNav();
                            nav.setRoot("ActivationPage");
                            loader.dismiss();
                        })
                })
                loader.dismiss()
            },error => {
                this.errorHandler.sendError("group2, getChatroomByGroup - subscription",error);
                this.prefs.remove(globals.userPrefs,globals.userItem);
                let nav = this.app.getRootNav();
                nav.setRoot("ActivationPage");
                loader.dismiss();
            })
    }

    pushOrUpdate(room:ChatRoom){
        let indexOfRoom = -1;
        for (let i = 0; i < this.chatRooms.length; i++){
            if (room.id === this.chatRooms[i].id) indexOfRoom = i;
        }
        if (indexOfRoom != -1) this.chatRooms[indexOfRoom] = room;
        else this.chatRooms.push(room)
    }

    goToChatroom(chatroom:ChatRoom){
        let activeNavs = this.app.getRootNavs()
        activeNavs[0].push("ChatPage",{chatroom:chatroom})
    }

    userExist(array:any,userId){
        let exist = false;
        for (let i = 0; i < array.length; i++){
            if (array[i].id === userId) exist = true;
        }
        return exist
    }


}
