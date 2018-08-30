import {Component} from '@angular/core';
import {AlertController, IonicPage, NavParams} from 'ionic-angular';
import {FlikeUser} from "../../models/flikeUser.model";
import {MeetingsProvider} from "../../providers/meetings/meetings";
import {TranslationsProvider} from "../../providers/translations/translations";
import * as moment from 'moment'
import {NativePageTransitions} from "@ionic-native/native-page-transitions";
import {AdmobProvider} from "../../providers/admob/admob";
import {ErrorLogProvider} from "../../providers/error-log/error-log";

@IonicPage()
@Component({
    selector: 'page-meetings',
    templateUrl: 'meetings.html',
})
export class MeetingsPage {

    user:FlikeUser;
    note:string;
    coachee: FlikeUser;
    moment: any = moment;
    chatroom:any;
    //tranlations
    messageWrite:string;
    constructor(public navParams: NavParams,
                public meetings: MeetingsProvider,
                public alert: AlertController,
                public translate: TranslationsProvider,
                public nativePageTransitions: NativePageTransitions,
                public adMob: AdmobProvider,
                private errorHandler: ErrorLogProvider ) {
        this.user = this.navParams.get("user");
        this.coachee = this.navParams.get("coachee");
        this.chatroom = this.navParams.get("chatroom");
    }

    ionViewDidLoad() {
        this.messageWrite = this.translate.getTranslation('messageWrite');
    }

    /*ionViewWillLeave() {

        let options: NativeTransitionOptions = {
            direction: 'right',
            duration: 300,
            slowdownfactor: 4,
        };

        this.nativePageTransitions.slide(options)

    }*/

    ionViewWillEnter(){
        this.adMob.hideAdmob().catch( error => this.errorHandler.sendError("meetingsPage, load - hide adMob",error));
    }

    sendNote(){
        this.meetings.saveNote(this.user.id,this.coachee.id,this.note)
            .then( () => {
                let alert = this.alert.create({subTitle:this.translate.getTranslation('noteSaved')});
                alert.present()
            },error => this.errorHandler.sendError("meetings, sendNote - update",error));
        this.note = "";
    }
}
