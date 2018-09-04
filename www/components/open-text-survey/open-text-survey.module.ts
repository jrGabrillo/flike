import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {OpenTextSurveyComponent} from "./open-text-survey";


@NgModule({
    declarations: [
        OpenTextSurveyComponent
    ],
    imports: [
        IonicPageModule.forChild(OpenTextSurveyComponent)
    ],
    exports: [
        OpenTextSurveyComponent
    ]

})
export class OpenTextSurveyModule {}