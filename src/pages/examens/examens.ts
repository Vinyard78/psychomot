import { Component } from '@angular/core';
import { Examen } from '../home/examen';
import { NavController, ModalController } from 'ionic-angular';
import { ExamenForm } from './examenForm';

@Component({
  selector: 'page-examens',
  templateUrl: 'examens.html'
})
export class ExamensPage {

	examens: Examen[];

  	constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  		this.examens = [new Examen("BONHOMME DE GOODENOUGH","()",22,22,2),
          new Examen("BONHOMME DE GOODENOUGH","()",8,10,3),
          new Examen("BONHOMME DE GOODENOUGH","()",25,39,0,33,45),
          new Examen("BONHOMME DE GOODENOUGH","()",23,30,0,27,32),
          new Examen("BONHOMME DE GOODENOUGH","()",8,18,0,16,23),
          new Examen("BONHOMME DE GOODENOUGH","()",6.6,12.3,4.4),
          new Examen("BONHOMME DE GOODENOUGH","()",13,15.87,3.15),
          new Examen("BONHOMME DE GOODENOUGH","()",29,29,4.2)];
  	}

  	add():void {
  		//this.examens.push(new Examen("BONHOMME DE GOODENOUGH","()",22,22,2));
  	}

  	presentExamenForm() {
  		let modal = this.modalCtrl.create(ExamenForm);
  		modal.present();
  	}

}