import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {RadioButtonSurveyComponent} from "./radio-button-survey";


@NgModule({
    declarations: [
        RadioButtonSurveyComponent
    ],
    imports: [
        IonicPageModule.forChild(RadioButtonSurveyComponent)
    ],
    exports: [
        RadioButtonSurveyComponent
    ]

})
export class RadioButtonSurveyModule {}