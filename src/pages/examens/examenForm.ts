import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Examen } from '../home/examen';
import { ExamensService } from '../examens/examens.service';

@Component({
  selector: 'examen-form',
  templateUrl: 'examenForm.html'
})
export class ExamenForm {

	examType: string;
	examInputs: any;
	examen: Examen;
	modify: boolean;
	index: number;

  	constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private examensService: ExamensService) {
  		this.examType = "ecart";
  		this.examInputs = {
  			nom:"",
  			resultat:null,
  			moyenne:null,
  			ecartType:null,
  			quartileSup:null,
  			quartileInf:null
  		};

  		this.modify = typeof navParams.get("index") !== "undefined";
  		if(this.modify){
  			let examsTab = this.examensService.getExamens();
  			this.index = navParams.get("index");
  			this.examInputs.nom = examsTab[this.index].nom;
  			this.examInputs.resultat = examsTab[this.index].resultat;
  			this.examInputs.moyenne = examsTab[this.index].moyenne;
  			this.examInputs.ecartType = examsTab[this.index].ecartType;
  			this.examInputs.quartileSup = examsTab[this.index].moyenneSup;
  			this.examInputs.quartileInf = examsTab[this.index].moyenneInf;
  		}
	}

    dismiss(): void {
        this.viewCtrl.dismiss();
    }

    create(): void {
    	if(	this.examInputs.resultat && this.examInputs.moyenne && 
    		(this.examInputs.ecartType || (this.examInputs.quartileSup && this.examInputs.quartileInf))
    	){
    		if(this.examType === "ecart") {
    			this.examen = new Examen(this.examInputs.nom,"()",+this.examInputs.resultat,+this.examInputs.moyenne,+this.examInputs.ecartType);
    		} else {
    			this.examen = new Examen(this.examInputs.nom,"()",+this.examInputs.resultat,+this.examInputs.moyenne,0,+this.examInputs.quartileInf, +this.examInputs.quartileSup);
    		}
    		if(this.modify){
    			this.examensService.modifyExamen(this.examen, this.index);
    		} else {
    			this.examensService.addExamen(this.examen);
    		}
    		this.dismiss();
    	}
    }

}