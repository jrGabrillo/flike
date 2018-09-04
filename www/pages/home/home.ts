import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

import {FlikeUser} from "../../models/flikeUser.model";
import {AppPreferences} from "@ionic-native/app-preferences";
import {ActivationPage} from "../activation/activation";
import {CoacheePage} from "../coachee/coachee";
import {CoachPage} from "../coach/coach";
import * as globals from '../../providers/globals/globals';
import {VariablesProvider} from "../../providers/variables/variables";
import {TranslationsProvider} from "../../providers/translations/translations";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    rootPage: any;

    //translations
    logoutText:string;

    user:FlikeUser;
    constructor(public platform: Platform,
                public navCtrl: NavController,
                public prefs: AppPreferences,
                public variables: VariablesProvider,
                public translate: TranslationsProvider,
                private db: AngularFireDatabase
                ) {

        this.user = this.variables.user;

        if (!this.user) this.navCtrl.setRoot("ActivationPage")
        else if (this.user.typeOfUser == "Coach") {
            this.rootPage = CoachPage
        }
        else if (this.user.typeOfUser == "Coachee") {
            this.rootPage = CoacheePage
        }
    }

    ionViewDidLoad(){
        this.logoutText = this.translate.getTranslation('logout')
        this.variables.updateFirebaseToken()
    }

    logout(){
        this.db.app.database().ref('/users/'+this.user.id).update({firebaseToken:null})
        this.variables.user = null;
        this.prefs.remove(globals.userPrefs,globals.userItem);
        this.prefs.remove(globals.userPrefs,globals.surveys);
        this.navCtrl.setRoot("ActivationPage");
    }

}
