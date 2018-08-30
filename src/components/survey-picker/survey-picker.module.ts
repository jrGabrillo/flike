import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {SurveyPickerComponent} from "./survey-picker";


@NgModule({
    declarations: [
        SurveyPickerComponent
    ],
    imports: [
        IonicPageModule.forChild(SurveyPickerComponent)
    ],
    exports: [
        SurveyPickerComponent
    ]

})
export class SurveyPickerModule {}