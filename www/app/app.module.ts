import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, Keyboard} from 'ionic-angular';
import {MyApp} from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ChatServiceProvider} from '../providers/chat-service/chat-service';
import {MeetingsProvider} from '../providers/meetings/meetings';
import {SurveyProvider} from '../providers/survey/survey';
import {VariablesProvider} from '../providers/variables/variables';
import {TranslationsProvider} from '../providers/translations/translations';
import {EmojiProvider} from '../providers/emoji/emoji';
import {AdmobProvider} from '../providers/admob/admob';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {Http, HttpModule} from "@angular/http";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {AppPreferences} from "@ionic-native/app-preferences";
import {AdMobFree} from "@ionic-native/admob-free";
import {Network} from "@ionic-native/network";
import {NativePageTransitions} from "@ionic-native/native-page-transitions";
import {Push} from "@ionic-native/push";
import {ErrorLogProvider} from '../providers/error-log/error-log';
import {Firebase} from "@ionic-native/firebase";
import {Device} from "@ionic-native/device";

//some previous configurations
export function translateFactory(http: HttpClient): TranslateLoader {
    return new TranslateHttpLoader(http,'assets/i18n/','.json')
}

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyAlkdDhXG5qnlJ036jU61z6FOxZLp-LgXw",
    authDomain: "flike-69352.firebaseapp.com",
    databaseURL: "https://flike-69352.firebaseio.com",
    projectId: "flike-69352",
    storageBucket: "flike-69352.appspot.com",
    messagingSenderId: "516446777485"
};

@NgModule({
  declarations: [
      MyApp,
  ],
  imports: [
      HttpModule,
      BrowserModule,
      HttpClientModule,
      IonicModule.forRoot(MyApp,{
          backButtonText: "",
          pageTransition: 'wp-transition'
      }),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularFireModule.initializeApp(firebaseConfig),
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: (translateFactory),
              deps: [Http]
          }
      }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
  ],
  providers: [
      StatusBar,
      SplashScreen,
      AppPreferences,
      {provide: ErrorHandler, useClass: ErrorLogProvider},
      TranslateService,
      EmojiProvider,
      ChatServiceProvider,
      VariablesProvider,
      VariablesProvider,
      AdMobFree,
      AdmobProvider,
      SurveyProvider,
      TranslationsProvider,
      MeetingsProvider,
      Network,
      NativePageTransitions,
      Push,
      ErrorLogProvider,
      Keyboard,
      Firebase,
      Device,
  ]
})
export class AppModule {}
