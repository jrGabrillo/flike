import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CoacheePage} from './coachee';

@NgModule({
  declarations: [
    CoacheePage,
  ],
  imports: [
    IonicPageModule.forChild(CoacheePage),
  ],
    exports:[
        CoacheePage
    ]
})
export class CoacheePageModule {}
