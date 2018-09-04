import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";
import * as moment from 'moment'

@Injectable()
export class MeetingsProvider {

    constructor(public db: AngularFireDatabase) {
    }

    saveNote(coach:string,coachee:string,note:string){
        let minutesRef = this.db.app.database().ref('/meetings/'+coach)
        return minutesRef.push({
            coachee: coachee,
            content: note || '<Seen>',
            recordedAt: moment.now()
        })
    }

}