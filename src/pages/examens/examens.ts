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
  		this.examens = [];
  	}

  	add():void {
  		//this.examens.push(new Examen("BONHOMME DE GOODENOUGH","()",22,22,2));
  	}

  	presentExamenForm() {
  		let modal = this.modalCtrl.create(ExamenForm);
  		modal.present();
  	}

}