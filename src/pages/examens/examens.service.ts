import { Injectable } from "@angular/core";
import { Examen } from '../home/examen';

@Injectable()
export class ExamensService {

    examens: Examen[];

    constructor(){
        this.examens = [
            /*new Examen("BONHOMME DE GOODENOUGH","()",22,22,2),
            new Examen("BONHOMME DE GOODENOUGH","()",8,10,3),
            new Examen("BONHOMME DE GOODENOUGH","()",25,39,0,33,45),
            new Examen("BONHOMME DE GOODENOUGH","()",23,30,0,27,32),
            new Examen("BONHOMME DE GOODENOUGH","()",8,18,0,16,23),
            new Examen("BONHOMME DE GOODENOUGH","()",6.6,12.3,4.4),
            new Examen("BONHOMME DE GOODENOUGH","()",13,15.87,3.15),
            new Examen("BONHOMME DE GOODENOUGH","()",29,29,4.2)*/
        ];

        /*
            new Examen("BONHOMME DE GOODENOUGH","()",17,22,22-2,22+2),
            new Examen("SOMATOGNOSIES","(schéma corporel)",1,10,10-3,10+3),
            new Examen("CHARLOPP ATWELL","()",44,39,33,45),
            new Examen("M ABC 2","(coordinations globales et fines, équilibre)",18,30,27,32),
            new Examen("EMG","(coordinations globales et fines, équilibre)",9.5,18,16,23),
            new Examen("M ABC 2","(coordinations globales et fines, équilibre)",noteInversed.note,noteInversed.moy,noteInversed.inf,noteInversed.sup),
            new Examen("M ABC 2","(coordinations globales et fines, équilibre)",7,15.87,15.87-3.15,15.87+3.15),
            new Examen("M ABC 2","(coordinations globales et fines, équilibre)",31,29,29-4.2,29+4.2),
            new Examen("M ABC 2","(coordinations globales et fines, équilibre)",3.15,1.09,1.09-1.02,1.09+1.02),
            new Examen("M ABC 2","(coordinations globales et fines, équilibre)",0.15,0.47,0.47-0.23,0.47+0.23)
        */

        /*const EXAMENS: Examen[] = [
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
        //]; 
    }

    public getExamens(): Examen[] {
        return this.examens;
    } 

    public setExamens(newExamTab: Examen[]):void {
        this.examens = newExamTab;
    }

    public removeExamen(index:number): void {
        this.examens.splice(index,1);
    }

    public addExamen(newExam: Examen): void {
        this.examens.push(newExam);
    }

    public modifyExamen(exam: Examen, index:number):void {
        this.examens.splice(index,1);
        this.examens.splice(index,0,exam);
    }

}