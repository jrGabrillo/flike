import {Component, Input} from '@angular/core';
import {Message} from "../../models/message.model";
import {FlikeUser} from "../../models/flikeUser.model";
import {ChatRoom} from "../../models/chatroom.model";
import {TranslationsProvider} from "../../providers/translations/translations";
import {SurveyProvider} from "../../providers/survey/survey";
import * as globals from '../../providers/globals/globals';
import {ErrorLogProvider} from "../../providers/error-log/error-log";



@Component({
  selector: 'check-box',
  templateUrl: 'check-box.html'
})
export class CheckBoxComponent {

    @Input() message: Message;
    @Input() user: FlikeUser;
    globals:any = globals;
    @Input() chatroom: ChatRoom;
    cbAnswer: any;
    constructor(public translate: TranslationsProvider,
                public survey: SurveyProvider,
                private errorHandler: ErrorLogProvider) {
    }

    ngOnInit(): void {
        this.cbAnswer = this.getUserAnswer(null);
    }

    getUserNameById(userID:string) {
        let username = "";
        this.chatroom.userAccess.map(user => {
            if (user.id === userID) username = user.fullname
        });
        return username;
    }

    saveOption(checked,key){
        this.cbAnswer[key] = checked?checked:null;
        this.sendAnswer()
    }

    sendAnswer(){
        this.survey.sendAnswer(this.cbAnswer,this.user.id,this.message.id,this.chatroom.id)
            .catch(error => this.errorHandler.sendError("checkBox survey - send answer",error))

    }
    getUserAnswer(userId){
        let userAnswer:any = {};
        this.message.survey.answers.map(answer => {
            if (userId) {
                if (answer.id == userId) userAnswer = answer.value;
            } else if (answer.id == this.user.id) userAnswer = answer.value;
        });
        return userAnswer
    }
}
