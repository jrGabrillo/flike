import { Component } from '@angular/core';
import {Survey} from "./survey.model";
import * as globals from '../../providers/globals/globals'
import {AlertController, NavParams, ViewController} from "ionic-angular";
import {AppPreferences} from "@ionic-native/app-preferences";

@Component({
    selector: 'survey',
    templateUrl: 'survey.html'
})
export class SurveyComponent {

    survey: Survey;
    globals: any = globals;
    surveys:Array<Survey>;

    constructor(public viewCtrl: ViewController,
                public navParams: NavParams,
                public prefs: AppPreferences,
                public alert: AlertController

    ) {
        this.survey = navParams.get("survey") || {id: globals.stringGen(),question : "",typeQuestion: "",options: {},answers: {}}
        console.log(this.survey)
    }

    sendSurvey(){
        console.log(this.survey)
        this.viewCtrl.dismiss({survey:this.survey})
    }
    saveSurvey(ev){
        ev.preventDefault()
        console.log(this.survey)
        this.prefs.fetch(globals.userPrefs,globals.surveys)
            .then( surveys => {
                if (!surveys) this.surveys = [];
                else this.surveys = surveys;
                this.pushOrUpdate(this.survey)
                this.prefs.store(globals.userPrefs,globals.surveys,this.surveys)
                    .then( () => {
                        let alert = this.alert.create({subTitle:"Survey saved"})
                        alert.present()
                    })
            })

    }
    cancel(){
        this.viewCtrl.dismiss()
    }
    addOption(event,type:string){
        event.preventDefault()

        switch (type){
            case globals.checkBox.key:
                if (!this.survey.options.checkbox) this.survey.options.checkbox = []
                this.survey.options.checkBox.push({})
                break;
            case globals.radioButton.key:
                if (!this.survey.options.radioButton) this.survey.options.radioButton = []
                this.survey.options.radioButton.push({})
                break;
            case globals.rank.key:
                if (!this.survey.options.rank) this.survey.options.rank = []
                this.survey.options.rank.push({option:""})
                break;
        }
        console.log(this.survey)

    }

    deleteSurvey(){
        let alert = this.alert.create({title:"Are you sure?",buttons:[
            {text:"Yes",
                handler:()=>{console.log("yes")}},
            {text:"No",
                handler:()=>{console.log("NO")}}
        ]})
        alert.present()
        //todo need a key for deleting the survey
    }

    pushOrUpdate(survey:Survey){
        let indexOfSurvey = -1;
        for (let i = 0; i < this.surveys.length; i++){
            if (survey.id === this.surveys[i].id) indexOfSurvey = i;
        }
        if (indexOfSurvey != -1) this.surveys[indexOfSurvey] = survey;
        else this.surveys.push(survey)
    }
}
