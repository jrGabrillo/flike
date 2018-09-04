import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CoachPage} from './coach';

@NgModule({
  declarations: [
    CoachPage,
  ],
  imports: [
    IonicPageModule.forChild(CoachPage),
  ],
    exports:[
        CoachPage
    ]
})
export class CoachPageModule {}
