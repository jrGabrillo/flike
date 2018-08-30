import {ErrorHandler, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";
import {VariablesProvider} from "../variables/variables";
import * as moment from 'moment';
import { Device } from '@ionic-native/device';

/*
  Generated class for the ErrorLogProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ErrorLogProvider implements ErrorHandler{

    origin: string;
    constructor(private db: AngularFireDatabase,
                private variables: VariablesProvider,
                private device: Device) { }

    handleError(error: any): void {
        console.log(error)
        if (this.variables.user) {
            let e:any = {
                user: this.variables.user.id,
                timestamp: moment.now(),
                model: this.device.model,
                platform: this.device.platform,
                version: this.device.version,
                error: error.toString(),
                origin: this.origin
            }
            let errorRef = '/errors/'
            this.db.app.database().ref(errorRef).push(e)
        }
    }

    sendError(origin:string,error:any){
        this.origin = origin;
        this.handleError(error);
    }

}
