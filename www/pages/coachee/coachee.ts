import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AppPreferences} from "@ionic-native/app-preferences";
import {ActivationPage} from "../activation/activation";
import {FlikeUser} from "../../models/flikeUser.model";
import {VariablesProvider} from "../../providers/variables/variables";
import {AngularFireDatabase} from "angularfire2/database";
import {AdmobProvider} from "../../providers/admob/admob";
import * as globals from '../../providers/globals/globals';
import {ErrorLogProvider} from "../../providers/error-log/error-log";


@IonicPage()
@Component({
    selector: 'page-coachee',
    templateUrl: 'coachee.html',
})
export class CoacheePage {

    user:FlikeUser;
    chatroomByUser:any = {};
    AllPage = "AllPage";
    globals:any = globals;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public prefs: AppPreferences,
                public loader: LoadingController,
                public db: AngularFireDatabase,
                public variables: VariablesProvider,
                private admobService: AdmobProvider,
                private errorHandler: ErrorLogProvider

    ) {

        this.user = this.variables.user;
        if (!this.user.id) this.navCtrl.setRoot("ActivationPage")
    }



    ionViewDidLoad() {

        if (this.user.id){
            this.getChatroomByUser()

        } else {
            this.prefs.fetch(globals.userPrefs,"user")
                .then (user => {
                    if (!user.id) this.navCtrl.setRoot("ActivationPage");
                    else this.getChatroomByUser()
                })
        }

    }

    getChatroomByUser(){
        let ref =   '/chatroomByUser/'+this.user.id;

        console.log(ref)
        let chatroomRef = this.db.object(ref).snapshotChanges()
            .subscribe( actionChatroomByUser => {

                this.chatroomByUser = actionChatroomByUser.payload.val();
                console.log(this.chatroomByUser)
                if (this.chatroomByUser.showAdMob &&
                    (!this.chatroomByUser.quote || this.chatroomByUser.quote != "") &&
                    (!this.chatroomByUser.quoteImgUrl || this.chatroomByUser.quoteImgUrl != "")) {
                    this.admobService.showAdmob().then( banner => {
                    }).catch( error => console.log(error));
                } else {
                    this.admobService.hideAdmob().then( banner => {
                    }).catch( error => this.errorHandler.sendError("coacheePage, getChatroomByUser - hide adMob",error));
                }
                chatroomRef.unsubscribe();
            },error => {
                this.errorHandler.sendError("coacheePage, getChatroomByUser - chatroomsRef subscription",error)
            })
    }

    logout(){
        this.db.app.database().ref('/users/'+this.user.id).update({firebaseToken:null})
        this.variables.user = null;
        this.prefs.remove(globals.userPrefs,globals.userItem);
        this.prefs.remove(globals.userPrefs,globals.surveys);
        this.navCtrl.setRoot("ActivationPage");
    }
}
