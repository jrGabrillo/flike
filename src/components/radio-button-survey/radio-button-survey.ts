import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../models/message.model";
import {FlikeUser} from "../../models/flikeUser.model";
import * as globals from '../../providers/globals/globals';
import {ChatRoom} from "../../models/chatroom.model";
import {TranslationsProvider} from "../../providers/translations/translations";
import {SurveyProvider} from "../../providers/survey/survey";
import {ErrorLogProvider} from "../../providers/error-log/error-log";


@Component({
    selector: 'radio-button-survey',
    templateUrl: 'radio-button-survey.html'
})
export class RadioButtonSurveyComponent implements OnInit {


    @Input() message: Message;
    @Input() user: FlikeUser;
    globals:any = globals;
    @Input() chatroom: ChatRoom;
    rbAnswer: any;
    selectedOption:string;
    constructor(public translate: TranslationsProvider,
                public survey: SurveyProvider,
                private errorHandler: ErrorLogProvider) {
    }

    ngOnInit(): void {
        console.log(this.message)
    }

    getUserNameById(userID:string) {
        let username = "";
        this.chatroom.userAccess.map(user => {
            if (user.id === userID) username = user.fullname
        });
        return username;
    }

    saveOption(checked,key){
        this.rbAnswer = checked?key:null;
        this.sendAnswer()
    }

    sendAnswer(){
        this.survey.sendAnswer(this.rbAnswer,this.user.id,this.message.id,this.chatroom.id)
            .catch(error => this.errorHandler.sendError("radioButton survey - send answer",error))
    }


}
