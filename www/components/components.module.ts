import {NgModule} from "@angular/core";
import {CheckBoxComponent} from "./check-box/check-box";
import {EmojiPickerComponent} from "./emoji-picker/emoji-picker";
import {HowMuchSurveyComponent} from "./how-much-survey/how-much-survey";
import {ImageSurveyComponent} from "./image-survey/image-survey";
import {OpenTextSurveyComponent} from "./open-text-survey/open-text-survey";
import {RadioButtonSurveyComponent} from "./radio-button-survey/radio-button-survey";
import {RankSurveyComponent} from "./rank-survey/rank-survey";
import {SurveyComponent} from "./survey/survey";
import {SurveyPickSurveyComponent} from "./survey-pick-survey/survey-pick-survey";
import {SurveyPickerComponent} from "./survey-picker/survey-picker";
import {UserSelectComponent} from "./user-select/user-select";
import {IonicModule} from "ionic-angular";

@NgModule({
    declarations:[
        CheckBoxComponent,
        EmojiPickerComponent,
        HowMuchSurveyComponent,
        ImageSurveyComponent,
        OpenTextSurveyComponent,
        RadioButtonSurveyComponent,
        RankSurveyComponent,
        SurveyComponent,
        SurveyPickSurveyComponent,
        SurveyPickerComponent,
        UserSelectComponent
    ],
    imports:[IonicModule],
    exports: [
        CheckBoxComponent,
        EmojiPickerComponent,
        HowMuchSurveyComponent,
        ImageSurveyComponent,
        OpenTextSurveyComponent,
        RadioButtonSurveyComponent,
        RankSurveyComponent,
        SurveyComponent,
        SurveyPickSurveyComponent,
        SurveyPickerComponent,
        UserSelectComponent

    ]
})

export class ComponentsModule {}