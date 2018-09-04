import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController} from 'ionic-angular';
import {AppPreferences} from "@ionic-native/app-preferences";
import {FlikeUser} from "../../models/flikeUser.model";
import {AngularFireDatabase} from "angularfire2/database";
import * as globals from '../../providers/globals/globals';
import {VariablesProvider} from "../../providers/variables/variables";
import {ErrorLogProvider} from "../../providers/error-log/error-log";
import {TranslationsProvider} from "../../providers/translations/translations";
import * as moment from 'moment'
import {AdmobProvider} from "../../providers/admob/admob";


@IonicPage()
@Component({
    selector: 'page-coach',
    templateUrl: 'coach.html',

})
export class CoachPage {
    user:FlikeUser;
    chatroomByUser:any = {tabs:{All:"All",group_2:"Class 1",group_3:"Class 2"}};
    AllPage = "AllPage";
    Group2Page = "Group2Page";
    Group3Page = "Group3Page";
    globals:any = globals;

    constructor(public navCtrl: NavController,
                public prefs: AppPreferences,
                public loader: LoadingController,
                public db: AngularFireDatabase,
                public variables: VariablesProvider,
                private errorHandler: ErrorLogProvider,
                private alert: AlertController,
                private translate: TranslationsProvider,
                private admobService: AdmobProvider,

    ) {

        this.user = this.variables.user;
        if (!this.user.id) this.navCtrl.setRoot("ActivationPage")
    }

    ionViewDidLoad() {
        if (this.variables.firebaseToken){
            this.db.app.database().ref('/users/'+this.user.id)
                .update({firebaseToken : this.variables.firebaseToken,lastConnection:moment.now()})
                .catch( error => console.log(error))
        }

        if (this.user.id){
            this.getChatroomByUser()
        } else {
            this.prefs.fetch(globals.userPrefs,"user")
                .then (user => {
                    if (!user.id) this.navCtrl.setRoot("ActivationPage")
                    else this.getChatroomByUser()
                })
        }
    }

    getChatroomByUser(){
        let ref =   '/chatroomByUser/'+this.user.id;
        let chatroomsRef = this.db.object(ref).snapshotChanges()
            .subscribe( actionChatroomByUser => {

                if (this.user.typeOfUser == globals.coachee && (
                        this.chatroomByUser.showAdMob &&
                        (!this.chatroomByUser.quote || this.chatroomByUser.quote != "") &&
                        (!this.chatroomByUser.quoteImgUrl || this.chatroomByUser.quoteImgUrl != ""))
                   ) {
                    this.admobService.showAdmob().then( banner => {
                    }).catch( error => console.log(error));
                } else {
                    this.admobService.hideAdmob().then( banner => {
                    }).catch( error => this.errorHandler.sendError("coachPage, getChatroomByUser - hide adMob subscription",error));
                }

                if (actionChatroomByUser.payload){
                    this.chatroomByUser = actionChatroomByUser.payload.val();
                } else {
                    this.navCtrl.setRoot("ActivationPage")
                }
                chatroomsRef.unsubscribe();
            },error => {
                this.errorHandler.sendError("coachPage, getChatroomByUser - chatroomsRef subscription",error)
            })
    }

    logout(){
        let confirm = this.alert.create({
            title: this.translate.getTranslation('logoutConfirm'),
            buttons: [{
                text:this.translate.getTranslation('ok'),
                handler: () => {
                    this.db.app.database().ref('/users/'+this.user.id).update({firebaseToken:null})
                    this.variables.user = null;
                    this.prefs.remove(globals.userPrefs,globals.userItem);
                    this.prefs.remove(globals.userPrefs,globals.surveys);
                    this.navCtrl.setRoot("ActivationPage");
                }
        },this.translate.getTranslation('cancel')]
        });
        confirm.present()
    }

}
