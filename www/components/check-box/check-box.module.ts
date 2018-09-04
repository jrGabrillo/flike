import {NgModule} from "@angular/core";
import {CheckBoxComponent} from "./check-box";
import {IonicPageModule} from "ionic-angular";


@NgModule({
    declarations: [
        CheckBoxComponent
    ],
    imports: [
        IonicPageModule.forChild(CheckBoxComponent)
    ],
    exports: [
        CheckBoxComponent
    ]

})
export class CheckBoxModule {}