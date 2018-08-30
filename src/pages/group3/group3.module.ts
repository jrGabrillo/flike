import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {Group3Page} from './group3';

@NgModule({
  declarations: [
    Group3Page,
  ],
  imports: [
    IonicPageModule.forChild(Group3Page),
  ],
    exports:[
        Group3Page
    ]
})
export class Group3PageModule {}
