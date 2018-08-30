import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AdMobFree, AdMobFreeBannerConfig } from "@ionic-native/admob-free";

/*
  Generated class for the AdmobProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AdmobProvider {

    constructor(private admob: AdMobFree) {
    }

    showAdmob(){
        const bannerConfig: AdMobFreeBannerConfig = {
            // add your config here
            // for the sake of this example we will just use the test config
            autoShow: true
        };
        this.admob.banner.config(bannerConfig);

        return this.admob.banner.prepare();
    }

    hideAdmob() {
        return this.admob.banner.remove();
    }

}
