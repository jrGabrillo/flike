import { Component } from '@angular/core';
import {ModalController, PopoverController, ViewController} from "ionic-angular";
import {SurveyPickSurveyComponent} from "../survey-pick-survey/survey-pick-survey";
import {SurveyComponent} from "../survey/survey";


@Component({
    selector: 'survey-picker',
    templateUrl: 'survey-picker.html'
})
export class SurveyPickerComponent {

    text: string;

    constructor(public popover: PopoverController,public modal: ModalController,
                public viewCtrl: ViewController) {

    }

    newSurvey(){
        let modal = this.modal.create(SurveyComponent);
        modal.present();
        this.viewCtrl.dismiss();
    }

    pickSurvey(event){
        let popover = this.popover.create(SurveyPickSurveyComponent);
        popover.present({ev:event})
        popover.onDidDismiss(()=> this.viewCtrl.dismiss())
    }

}
