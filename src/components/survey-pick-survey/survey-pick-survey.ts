import {Component, OnInit} from '@angular/core';
import {Survey} from "../survey/survey.model";
import * as globals from '../../providers/globals/globals'
import {ModalController, ViewController} from "ionic-angular";
import {SurveyComponent} from "../survey/survey";
import {AppPreferences} from "@ionic-native/app-preferences";
/**
 * Generated class for the SurveyPickSurveyComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'survey-pick-survey',
    templateUrl: 'survey-pick-survey.html'
})
export class SurveyPickSurveyComponent implements OnInit{

    text: string;
    surveys:Array<Survey> = []

    constructor(public modalCtrl: ModalController,public prefs:AppPreferences,
                public viewCtrl: ViewController) {  }

    ngOnInit(){
        this.prefs.fetch(globals.userPrefs,globals.surveys)
            .then( surveys => {
                this.surveys = surveys || [{
                    id: globals.stringGen(),
                    typeQuestion: globals.openText.key ,
                    question: "Example open text question",
                    answers: {},
                    options: {},
                },{
                    id:globals.stringGen(),
                    typeQuestion: globals.checkBox.key ,
                    question: "example multiselect question",
                    answers: {},
                    options: {
                        checkBox: [
                            {option: "option 1"},
                            {option: "option 2"},
                            {option: "option 3"},
                        ]
                    },
                },{
                    id:globals.stringGen(),
                    typeQuestion: globals.radioButton.key ,
                    question: "example single Select question",
                    answers: {},
                    options: {
                        radioButton: [
                            {option: "option 1"},
                            {option: "option 2"},
                            {option: "option 3"},
                        ]
                    },
                },{
                    id:globals.stringGen(),
                    typeQuestion: globals.rank.key ,
                    question: "example rank question",
                    answers: {},
                    options: {
                        rank: [
                            {option: "option 1"},
                            {option: "option 2"},
                            {option: "option 3"},
                            {option: "option 4"},
                        ]
                    },
                }]
                this.prefs.store(globals.userPrefs,globals.surveys,this.surveys)
            })
    }

    goToSurvey(survey){
        let modal = this.modalCtrl.create(SurveyComponent,{survey:survey})
        modal.present();
        this.viewCtrl.dismiss();
    }

}
