import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {UserSelectComponent} from "./user-select";


@NgModule({
    declarations: [
        UserSelectComponent
    ],
    imports: [
        IonicPageModule.forChild(UserSelectComponent)
    ],
    exports: [
        UserSelectComponent
    ]

})
export class UserSelectModule {}