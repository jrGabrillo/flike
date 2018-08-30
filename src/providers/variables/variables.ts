import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {FlikeUser} from "../../models/flikeUser.model";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class VariablesProvider {
    public user: FlikeUser;
    public firebaseToken:string;
    notificationChatroom: any;
    userActivated:boolean;

    constructor(public db:AngularFireDatabase) {
    }
    updateFirebaseToken(){
        if (this.firebaseToken){
            let tokenRef = '/users/'+this.user.id
            let updateToken = this.db.object(tokenRef).snapshotChanges()
                .subscribe( actionUser => {
                    if (actionUser.payload.val().firebaseToken != this.firebaseToken){
                        this.db.app.database().ref(tokenRef).update({firebaseToken:this.firebaseToken})
                    }
                })
            updateToken.unsubscribe();
        }

    }

}