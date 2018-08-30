import { Component } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";
import { FlikeUser } from "../../models/flikeUser.model";
import { AppPreferences } from "@ionic-native/app-preferences";
import * as globals from '../../providers/globals/globals';

@Component({
    selector: 'user-select',
    templateUrl: 'user-select.html'
})
export class UserSelectComponent {

    users: Array<FlikeUser>;
    user: FlikeUser;
    global: any = globals;
    constructor(public navParams: NavParams,
                public viewCtrl: ViewController,
                public prefs: AppPreferences) {
        this.users = this.navParams.get("users")
        console.log(this.users)
        this.prefs.fetch(globals.userPrefs,globals.userItem)
            .then( user => {
                this.user = user;
            })
    }

    selectUser(user){
        this.viewCtrl.dismiss({userId:user.id})
    }

}

