import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {RankSurveyComponent} from "./rank-survey";


@NgModule({
    declarations: [
        RankSurveyComponent
    ],
    imports: [
        IonicPageModule.forChild(RankSurveyComponent)
    ],
    exports: [
        RankSurveyComponent
    ]

})
export class RankSurveyModule {}