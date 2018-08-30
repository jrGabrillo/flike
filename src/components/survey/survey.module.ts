import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {SurveyComponent} from "./survey";


@NgModule({
    declarations: [
        SurveyComponent
    ],
    imports: [
        IonicPageModule.forChild(SurveyComponent)
    ],
    exports: [
        SurveyComponent
    ]

})
export class SurveyModule {}