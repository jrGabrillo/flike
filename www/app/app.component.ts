import {Component} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppPreferences} from "@ionic-native/app-preferences"
import * as globals from '../providers/globals/globals';
import {VariablesProvider} from "../providers/variables/variables";
import {TranslationsProvider} from "../providers/translations/translations";
import * as moment from 'moment';
import {Network} from "@ionic-native/network";
import {Push, PushObject, PushOptions} from "@ionic-native/push";
import {ErrorLogProvider} from "../providers/error-log/error-log";

@Component({
    templateUrl: 'app.html'

})
export class MyApp {

    public rootPage: any;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public prefs: AppPreferences,
        public translate: TranslationsProvider,
        private variables: VariablesProvider,
        public network: Network,
        public alert: AlertController,
        private push: Push,
        private errorHandler: ErrorLogProvider
    ) {
        this.translate.globalLanguage = 'nl';
        this.translate.setTranslations(this.translate.globalLanguage);
        this.initializeApp();
        moment.locale(this.translate.globalLanguage)

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.network.onDisconnect().subscribe(() => {
                let alert = this.alert.create({
                    title: this.translate.getTranslation('error'),
                    message: this.translate.getTranslation('noInternet')
                });
                alert.present();
            });
            this.statusBar.styleDefault();
            this.prefs.fetch(globals.userPrefs,"user").then( user => {
                if ( user ) {
                    this.variables.user = user;
                    this.rootPage = "CoachPage"
                }
                else this.rootPage = "ActivationPage";
                this.splashScreen.hide();
                this.pushSetUp()

            })
        });
    }

    pushSetUp() {
        const options: PushOptions = {
            android: {
                senderID: '516446777485',
                sound: 'true'
            },
            ios: {
                senderID: '516446777485',
                alert: 'true',
                badge: true,
                sound: 'true'
            }
        };
        const pushObject: PushObject = this.push.init(options);

        pushObject.on('notification').subscribe((notification: any) => {
            console.log(notification)
            console.log(this.variables.notificationChatroom)
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

                this.variables.notificationChatroom = notification.additionalData.chatroom;
                this.rootPage = "ChatPage";

        },(notError) => this.errorHandler.sendError("appComponent - onNotification",notError));

        pushObject.on('registration').subscribe((registration: any) => {
            this.variables.firebaseToken = registration.registrationId;
        },(regError) => this.errorHandler.sendError("appComponent - onRegistration",regError));

        pushObject.on('error').subscribe(error => this.errorHandler.sendError("appComponent - error",error));
    }

}