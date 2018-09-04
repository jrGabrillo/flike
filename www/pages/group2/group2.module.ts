import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {Group2Page} from './group2';

@NgModule({
  declarations: [
    Group2Page,
  ],
  imports: [
    IonicPageModule.forChild(Group2Page),
  ],
    exports:[
        Group2Page
    ]
})
export class Group2PageModule {}
