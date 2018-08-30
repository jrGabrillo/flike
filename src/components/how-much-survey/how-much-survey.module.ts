import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {HowMuchSurveyComponent} from "./how-much-survey";


@NgModule({
    declarations: [
        HowMuchSurveyComponent
    ],
    imports: [
        IonicPageModule.forChild(HowMuchSurveyComponent)
    ],
    exports: [
        HowMuchSurveyComponent
    ]

})
export class HowMuchSurveyModule {}