import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Message} from "../../models/message.model";
import {FlikeUser} from "../../models/flikeUser.model";
import * as globals from '../../providers/globals/globals';
import {TranslationsProvider} from "../../providers/translations/translations";
import {SurveyProvider} from "../../providers/survey/survey";
import {ChatRoom} from "../../models/chatroom.model";
import {AlertController, Content} from "ionic-angular";
import {ErrorLogProvider} from "../../providers/error-log/error-log";


@Component({
    selector: 'open-text-survey',
    templateUrl: 'open-text-survey.html'
})
export class OpenTextSurveyComponent implements OnInit {


    @Input() message: Message;
    @Input() user: FlikeUser;
    @Input() chatroom: ChatRoom;
    @ViewChild(Content) content: Content;

    globals:any = globals;
    answer: string;
    minLength:string;
    canSend:boolean;
    minWords:string;

    constructor(public translate: TranslationsProvider,
                public survey: SurveyProvider,
                public alert: AlertController,
                private errorHandler: ErrorLogProvider) {
    }

    ngOnInit(): void {
        console.log(this.message)

        this.answer = this.translate.getTranslation("answer");
        this.minLength = this.translate.getTranslation("minLength")+this.message.survey.minLength;
        this.canSend = this.checkIfCanSend();
        this.minWords = this.translate.getTranslation('minWords')+this.message.survey.minWordCount;
    }

    checkLength(event) {
        if (this.message.survey.userAnswer.length >= this.message.survey.maxLength) {
            event.preventDefault()
        }
        this.canSend = this.checkIfCanSend();

    }

    checkIfCanSend(){
        let numWords = this.getNumWords();
        return (this.message.survey.userAnswer.length >= this.message.survey.minLength && numWords >= this.message.survey.minWordCount)
    }

    getNumWords() {
        let original = this.message.survey.userAnswer;
        let numWords = this.message.survey.userAnswer.split(' ');
        this.message.survey.userAnswer = original;
        if (numWords[numWords.length-1] == '') return numWords.length-1;
        else return numWords.length;
    }

    getUserNameById(userID:string) {
        let username = "";
        this.chatroom.userAccess.map(user => {
            if (user.id === userID) username = user.fullname
        });
        return username;
    }

    sendAnswer(){
        if (this.checkIfCanSend()) {
            this.survey.sendAnswer(this.message.survey.userAnswer, this.user.id, this.message.id, this.chatroom.id)
                .then( () => {
                    let alert = this.alert.create({
                        message:this.translate.getTranslation('answerSaved')
                    })
                    alert.present();
                })
                .catch(error => this.errorHandler.sendError("openText survey - send answer",error)   )
        }
        else {
            let alert = this.alert.create({message:this.translate.getTranslation('minRequirements')})
            alert.present()
        }
    }

    change() {
        // get elements
        const element   = document.getElementById('otInput');
        const textarea  = element.getElementsByTagName('textarea')[0];
        // set default style for textarea

        // limit size to 96 pixels (6 lines of text)
        let scroll_height = textarea.scrollHeight;
        if(scroll_height > 96)
            scroll_height = 96;

        // apply new style
        element.style.height      = Math.max(scroll_height,38) + "px";
        textarea.style.minHeight  = Math.max(scroll_height,38) + "px";
        textarea.style.height     = Math.max(scroll_height,38) + "px";
        this.content.resize();
    }
}
