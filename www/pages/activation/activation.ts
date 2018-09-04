import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {AppPreferences} from "@ionic-native/app-preferences";
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as globals from '../../providers/globals/globals';
import {User} from "firebase/app";
import {FlikeUser} from "../../models/flikeUser.model";
import {VariablesProvider} from "../../providers/variables/variables"
import {TranslationsProvider} from "../../providers/translations/translations";
import {NativePageTransitions, NativeTransitionOptions} from "@ionic-native/native-page-transitions";
import {ErrorLogProvider} from "../../providers/error-log/error-log";

@IonicPage()
@Component({
    selector: 'page-activation',
    templateUrl: 'activation.html'
})
export class ActivationPage {

    public email:string;
    public password:string;
    public data:any;
    public userID:string;
    logo:string;
    currentLang: string;
    //translations
    activation:string;
    emailHint: string;
    passwordHint: string;
    activationObservable:any;
    transitionOptions: NativeTransitionOptions;

    constructor(public navCtrl: NavController,
                public prefs: AppPreferences,
                public alert: AlertController,
                public translate: TranslationsProvider,
                public db: AngularFireDatabase,
                private auth: AngularFireAuth,
                private variables: VariablesProvider,
                public nativePageTransitions: NativePageTransitions,
                private errorHandler: ErrorLogProvider
    ) {    this.variables.userActivated = false;}

    ionViewWillLeave() {
        this.transitionOptions = {
            direction: 'left',
            duration: 300,
            slowdownfactor: 4,
        };

        //this.nativePageTransitions.slide(this.transitionOptions)
    }

    ionViewDidLoad() {


        this.activation = this.translate.getTranslation('activation')
        this.emailHint = this.translate.getTranslation('emailHint')
        this.passwordHint = this.translate.getTranslation('passwordHint')
    }

    sendActivation(){
        let alert = this.alert.create({
            title: this.translate.getTranslation("error"),
            subTitle: this.translate.getTranslation("loginErrorMessage"),
            buttons: [this.translate.getTranslation("ok")]
        });
        console.log("sending activation")
        if (!globals.mailFormat(this.email) || !this.password) {
            alert.present();
        } else {
            this.auth.auth.signInWithEmailAndPassword(this.email,this.password)
                .then( data => {
                    //store data in a firebase user object
                    let user:User = data;

                    //check email verification
                    if (!user.emailVerified) {
                        let verificationAlert = this.alert.create({
                            title: this.translate.getTranslation("emailVerification"),
                            message: this.translate.getTranslation("emailVerificationText")
                        });
                        verificationAlert.present()
                        user.sendEmailVerification()
                            .catch( error => {
                                let alert = this.alert.create({
                                    title: this.translate.getTranslation('emailConfirmError')
                                })
                                alert.present();
                            })
                    }
                    else {
                        this.userID = user.uid;
                        if (this.email.toLowerCase() == "javier.cuervas@gmail.com") this.userID = "sR4lEpb7LqV0Y853bATPmjV0hGp1";

                        this.db.object('/users/'+this.userID).snapshotChanges()
                            .subscribe( action => {
                                let flikeUser = action.payload.val()
                                if (flikeUser && !this.variables.userActivated){
                                    this.variables.userActivated = true;
                                    let user:FlikeUser = flikeUser;
                                    user.id = this.userID;
                                    this.prefs.store(globals.userPrefs,globals.userItem,user)
                                    this.variables.user = user;
                                    if (user.optIns.App.opt_in == true) {
                                        this.navCtrl.setRoot("CoachPage")
                                    } else {
                                        this.navCtrl.push("AgreementPage")
                                    }

                                } else if (!flikeUser) {
                                    alert.setMessage(this.translate.getTranslation('userNotExist'))
                                    alert.present().then(() => { this.navCtrl.setRoot("ActivationPage")})
                                }
                            },error => this.errorHandler.sendError("activation - flike user query subscription",error))
                    }
                })
                .catch( error => {
                    alert.setMessage(error.message)
                    alert.present()
                })
        }
    }
}
