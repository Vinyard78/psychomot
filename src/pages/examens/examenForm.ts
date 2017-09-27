import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'examen-form',
  templateUrl: 'examenForm.html'
})
export class ExamenForm {

  	constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  	}

    dismiss(): void {
        this.viewCtrl.dismiss();
    }

}