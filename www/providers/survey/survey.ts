import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";


@Injectable()
export class SurveyProvider {

    constructor(public db: AngularFireDatabase) {

    }

    sendAnswer(answer: any, coachee:string, messageId:string, chatroom:string) {
        let path = '/messages/'+chatroom+'/'+messageId+'/survey/answers/'+coachee;
        return this.db.app.database().ref(path).set(answer);
    }
}

