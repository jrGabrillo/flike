import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Events} from 'ionic-angular';

import 'rxjs/add/operator/toPromise';
import {AngularFireDatabase} from "angularfire2/database";
import {Message} from "../../models/message.model";
import * as moment from 'moment';


@Injectable()
export class ChatServiceProvider {

    constructor(public http: Http,
                public events: Events,
                public db: AngularFireDatabase
    ) {
    }

    getChatroomByGroup(group:string,userID:string){
        const roomsRef = '/chatroomByUser/'+userID+'/'+group
        return this.db.list(roomsRef).snapshotChanges()
    }


    getMsgList(chatroom:string,limit:number) {
        const msgRef = '/messages/'+chatroom;
        return this.db.list(msgRef, ref => ref.orderByChild("timestamp").limitToLast(limit)).snapshotChanges()
    }

    getMoreMessages(chatroom:string,startAt:number,endAt:number){
        const msgRef = '/messages/'+chatroom;
        console.log(startAt,endAt)
        return this.db.list(msgRef,ref => ref.orderByChild("timestamp")).snapshotChanges()
    }

    updateMsgView(chatroom:string,userID:string){
        let viewTimeRef =  this.db.app.database().ref('/chatrooms/'+chatroom+'/userMessageTimestamps/'+userID);
        viewTimeRef.update({viewTimestamp:moment.now()})
    }

    sendMsg(msg: Message, chatroom:string,group:string,senderName:string) {
        let msgRef = this.db.app.database().ref('/messages/'+chatroom);
        let key:string;
        return new Promise( resolve => {
            msgRef.push(msg)
                .then( result => {
                    key = result.toString().substr(result.toString().lastIndexOf('/')+1,result.toString().length)
                    resolve(result)
                },error => resolve(error))
        }).then( result => {
            new Promise( resolve => {
                let chatroomRef = this.db.app.database().ref('/chatrooms/'+chatroom+'/lastMessage');
                chatroomRef.update({lastMessage:msg.message,lastMessageTimestamp:msg.timestamp,lastMessageKey:key})
                    .then(result => resolve(result))
                    .catch( error => resolve(error))
            })
        },error => error.json)
    }

    getChatroomData(chatroom:string) {
        const chatroomRef = '/chatrooms/'+chatroom;
        return this.db.object(chatroomRef).snapshotChanges();
    }

    getUserInfoById(userId:string){
        return this.db.object('/users/'+userId).snapshotChanges()
    }

    pushUserAccess(){
        this.db.app.database().ref('/chatrooms/chatroom_3').set(
            {
                userAccess:{user_1:'admin',user_2:'contributor',user_3:'viewer'},
                type:'group',
                userMessageTimestamps: {user_1:{viewTimestamp:1503248708647}}
            }
        )
    }

}