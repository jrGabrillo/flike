import {NgModule} from "@angular/core";
import {EmojiPickerComponent} from "./emoji-picker";
import {IonicPageModule} from "ionic-angular";


@NgModule({
    declarations: [
        EmojiPickerComponent
    ],
    imports: [
        IonicPageModule.forChild(EmojiPickerComponent)
    ],
    exports: [
        EmojiPickerComponent
    ]

})
export class EmojiPickerModule{}