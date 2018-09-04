import {Component, Input} from '@angular/core';
import {Message} from "../../models/message.model";
import {FlikeUser} from "../../models/flikeUser.model";
import * as globals from '../../providers/globals/globals';
import {ChatRoom} from "../../models/chatroom.model";
import {SurveyProvider} from "../../providers/survey/survey";
import {AlertController} from "ionic-angular";
import {TranslationsProvider} from "../../providers/translations/translations";
import {ErrorLogProvider} from "../../providers/error-log/error-log";


@Component({
    selector: 'rank-survey',
    templateUrl: 'rank-survey.html'
})
export class RankSurveyComponent {

    @Input() message: Message;
    @Input() user: FlikeUser;
    globals:any = globals;
    @Input() chatroom: ChatRoom;
    numAnswers: number;
    constructor(public survey: SurveyProvider,
                public alert: AlertController,
                public translate: TranslationsProvider,
                private errorHandler: ErrorLogProvider) {

    }

    ngOnInit(){
        this.numAnswers = 0;
    }

    saveOption(event,option){

        let answer = {}
        answer[option.id] = option.badge;
        let userAnswer = this.getUserAnswer()
        for (let key in userAnswer) {
            answer[key] = userAnswer[key]
        }
        this.numAnswers = this.getNumAnswers();

        if (answer[option.id] == 0) {
            if (this.numAnswers >= this.message.survey.maxNumOfAnswers) {
                let alert = this.alert.create({message: this.translate.getTranslation('maxSelections') + this.message.survey.maxNumOfAnswers});
                alert.present();
            }
            else answer[option.id] = this.getHighestValue(answer)+1;
        }
        else {
            answer = this.rubstractOneToAll(answer,answer[option.id]);
            answer[option.id] = 0;
        }
        this.survey.sendAnswer(answer,this.user.id,this.message.id,this.chatroom.id)
            .catch(error => this.errorHandler.sendError("rank survey - send answer",error));
    }

    getNumAnswers(){
        let numAnswers = 0;
        let userAnswer = this.getUserAnswer();

        for (let key in userAnswer){
            if (userAnswer[key] > 0) numAnswers++;
        }
        this.numAnswers = numAnswers;
        return this.numAnswers;
    }

    getHighestValue(answer:any):number{
        let value = 0;
        for (let key in answer){
            if ( answer[key] > value) value =  answer[key]
        }
        return value;
    }
    rubstractOneToAll(answer:any,minValue:number) {
        for (let key in answer) {
            if (answer[key] > minValue) answer[key] -= 1;
        }
        return answer;
    }

    getUserAnswer(){
        let userAnswer:any = {};
        this.message.survey.answers.map(answer => {
            if (answer.id == this.user.id) userAnswer = answer.value;
        })
        return userAnswer
    }


    getUserNameById(userID:string) {
        let username = "";
        this.chatroom.userAccess.map(user => {
            if (user.id === userID) username = user.fullname
        });
        return username;
    }
}
