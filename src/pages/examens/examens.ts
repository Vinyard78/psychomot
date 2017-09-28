import { Component } from '@angular/core';
import { Examen } from '../home/examen';
import { NavController, ModalController } from 'ionic-angular';
import { ExamenForm } from './examenForm';
import { ExamensService } from '../examens/examens.service';

@Component({
    selector: 'page-examens',
    templateUrl: 'examens.html'
})
export class ExamensPage {

	examens: Examen[];

  	constructor(public navCtrl: NavController, public modalCtrl: ModalController, private examensService: ExamensService) {
  		this.examens = examensService.getExamens();
  	}

  	presentExamenForm(): void {
  		let modal = this.modalCtrl.create(ExamenForm);
  		modal.present();
  	}

    remove(index): void {
        this.examensService.removeExamen(index);
    }

    modify(index): void {
        let modal = this.modalCtrl.create(ExamenForm, {"index":index});
        modal.present();
    }

}