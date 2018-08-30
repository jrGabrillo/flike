import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ImageSurveyComponent} from "./image-survey";


@NgModule({
    declarations: [
        ImageSurveyComponent
    ],
    imports: [
        IonicPageModule.forChild(ImageSurveyComponent)
    ],
    exports: [
        ImageSurveyComponent
    ]

})
export class ImageSurveyModule {}