import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {TranslateService} from "@ngx-translate/core";


@Injectable()
export class TranslationsProvider {

    translations:any;
    globalLanguage: string;
    constructor(public translate: TranslateService) {

    }

    setTranslations(language:string){
        this.globalLanguage = language;
        this.translate.getTranslation(this.globalLanguage).
        subscribe( translations => {
            this.translations = translations.json()
        })

    }

    getTranslation(value:string){
        let val:string = "";
        for (let key in this.translations){
            if (key === value) val = this.translations[key]
        }
        return val;
    }

}
