import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../models/message.model";
import {FlikeUser} from "../../models/flikeUser.model";
import * as globals from '../../providers/globals/globals';
import {ChatRoom} from "../../models/chatroom.model";
import {SurveyProvider} from "../../providers/survey/survey";
import {ErrorLogProvider} from "../../providers/error-log/error-log";


@Component({
    selector: 'how-much-survey',
    templateUrl: 'how-much-survey.html'
})
export class HowMuchSurveyComponent implements OnInit{

    @Input() message: Message;
    @Input() user: FlikeUser;
    globals:any = globals;
    @Input() chatroom: ChatRoom;
    answer: string;
    constructor(public survey: SurveyProvider,
                private errorHandler: ErrorLogProvider) {
    }

    ngOnInit(){
        this.getUserAnswer();
    }

    sendAnswer(){
        this.survey.sendAnswer(this.answer,this.user.id,this.message.id,this.chatroom.id)
            .catch(error => this.errorHandler.sendError("howMuch survey - send answer",error));
        this.getUserAnswer();
    }

    getUserNameById(userID:string) {
        let username = "";
        this.chatroom.userAccess.map(user => {
            if (user.id === userID) username = user.fullname
        });
        return username;
    }

    getUserAnswer(){
        this.message.survey.answers.map( answer =>{
            if (answer.id == this.user.id) this.answer = answer.value;
        })
    }

}
