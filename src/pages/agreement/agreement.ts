import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {FlikeUser} from "../../models/flikeUser.model";
import {AngularFireDatabase} from "angularfire2/database";
import {VariablesProvider} from "../../providers/variables/variables";
import {TranslationsProvider} from "../../providers/translations/translations";
import {NativePageTransitions, NativeTransitionOptions} from "@ionic-native/native-page-transitions";
import {ErrorLogProvider} from "../../providers/error-log/error-log";


@IonicPage()
@Component({
    selector: 'page-agreement',
    templateUrl: 'agreement.html',
})
export class AgreementPage {

    user:FlikeUser;

    //translations
    agree:string;
    disagree:string;
    transitionOptions: NativeTransitionOptions;

    constructor(public navCtrl: NavController,
                public alert: AlertController,
                public db: AngularFireDatabase,
                public variables: VariablesProvider,
                public translate: TranslationsProvider,
                public nativePageTransitions: NativePageTransitions,
                private errorHandler: ErrorLogProvider

    ) {
        this.user = this.variables.user;
        console.log(this.user)
    }

    ionViewWillLeave() {
        this.transitionOptions = {
            direction: 'left',
            duration: 300,
            slowdownfactor: 4,
        };
        //this.nativePageTransitions.slide(this.transitionOptions)
    }

    ionViewDidLoad() {
        this.agree = this.translate.getTranslation('agree');
        this.disagree = this.translate.getTranslation('disagree')
    }

    validateAgreement(agree:boolean){
        let userRef = this.db.app.database().ref('/users/'+this.user.id);
        if (!agree){
            userRef.update({'optIns/App/opt_in':false,'optIns/App/hasAnswered':'Weigeren'})
                .catch(error => this.errorHandler.sendError("validate agreement - update agreement",error));
            this.alert.create({
                title: this.translate.getTranslation('accessDenied'),
                subTitle: this.translate.getTranslation('contactMentor'),
                buttons: [this.translate.getTranslation('ok')]
            }).present();
            this.navCtrl.setRoot("ActivationPage");
        } else {
            userRef.update({'optIns/App/opt_in':true,'optIns/App/hasAnswered':'Akkoord'} );
            this.navCtrl.setRoot("HomePage")
        }
    }

}
