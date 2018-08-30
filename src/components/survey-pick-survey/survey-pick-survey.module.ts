import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {SurveyPickSurveyComponent} from "./survey-pick-survey";


@NgModule({
    declarations: [
        SurveyPickSurveyComponent
    ],
    imports: [
        IonicPageModule.forChild(SurveyPickSurveyComponent)
    ],
    exports: [
        SurveyPickSurveyComponent
    ]

})
export class SurveyPickSurveyModule {}