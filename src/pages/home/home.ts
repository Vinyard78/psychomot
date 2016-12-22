import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

export class Point {
	x:number;
	y:number;
}

export class Examen {

	nom:string;
	categorie:string;
	resultat:number;
	moyenne:number;
	moyenneInf:number;
	moyenneSup:number;
	coordResultat:Point;
	coordMoyMax:Point;
	coordMoyMin:Point;
	coordMoy:Point;
	coordLim:Point;
}

const EXAMENS: Examen[] = [
    {nom:"SOMATOGNOSIES",categorie:"(schéma corporel)",resultat:16,moyenne:17,moyenneInf:17-2,moyenneSup:17+2,coordResultat:{ x:0, y:0 },coordMoyMax:{ x:0, y:0 },coordMoyMin:{ x:0, y:0 },coordMoy:{ x:0, y:0 },coordLim:{ x:0, y:0 }},
    {nom:"BONHOMME DE GOODENOUGH",categorie:"(schéma corporel)",resultat:4,moyenne:6,moyenneInf:6-2,moyenneSup:6+2,coordResultat:{ x:0, y:0 },coordMoyMax:{ x:0, y:0 },coordMoyMin:{ x:0, y:0 },coordMoy:{ x:0, y:0 },coordLim:{ x:0, y:0 }},
    {nom:"M ABC 2",categorie:"(coordinations globales et fines, équilibre)",resultat:7,moyenne:10,moyenneInf:10-3,moyenneSup:10+3,coordResultat:{ x:0, y:0 },coordMoyMax:{ x:0, y:0 },coordMoyMin:{ x:0, y:0 },coordMoy:{ x:0, y:0 },coordLim:{ x:0, y:0 }},
    {nom:"EMG",categorie:"(coordinations globales et fines, équilibre)",resultat:5,moyenne:10.5,moyenneInf:10.5-1.25,moyenneSup:10.5+1.25,coordResultat:{ x:0, y:0 },coordMoyMax:{ x:0, y:0 },coordMoyMin:{ x:0, y:0 },coordMoy:{ x:0, y:0 },coordLim:{ x:0, y:0 }},
    {nom:"SANTUCCI",categorie:"(graphisme)",resultat:3,moyenne:4,moyenneInf:3,moyenneSup:11,coordResultat:{ x:0, y:0 },coordMoyMax:{ x:0, y:0 },coordMoyMin:{ x:0, y:0 },coordMoy:{ x:0, y:0 },coordLim:{ x:0, y:0 }},
    {nom:"FIGURE DE REY B - COPIE",categorie:"(graphisme)",resultat:10,moyenne:0,moyenneInf:0,moyenneSup:16,coordResultat:{ x:0, y:0 },coordMoyMax:{ x:0, y:0 },coordMoyMin:{ x:0, y:0 },coordMoy:{ x:0, y:0 },coordLim:{ x:0, y:0 }},
    {nom:"FIGURE DE REY B - MÉMOIRE",categorie:"(graphisme)",resultat:0,moyenne:0,moyenneInf:0,moyenneSup:9.5,coordResultat:{ x:0, y:0 },coordMoyMax:{ x:0, y:0 },coordMoyMin:{ x:0, y:0 },coordMoy:{ x:0, y:0 },coordLim:{ x:0, y:0 }}
    /*new Examen("","",36,22,22-2,22+2),
    new Examen("","",2,10,10-3,10+3),
    new Examen("","",35,39,39-6,39+6),
    new Examen("","",18,11.6,11.6-4.3,11.6+4.3),
    new Examen("","",8,15.7,15.7-3.27,15.7+3.27),
    new Examen("","",27,29,29-4.2,29+4.2)*/
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  	constructor(public navCtrl: NavController) {

  	}

  	exams = EXAMENS;
    

}
