import { Injectable } from "@angular/core";
import { Examen } from '../home/examen';

@Injectable()
export class ExamensService {

    examens: Examen[];

    constructor(){
        this.examens = [
            new Examen("BONHOMME DE GOODENOUGH","()",22,22,2),
            new Examen("BONHOMME DE GOODENOUGH","()",8,10,3),
            new Examen("BONHOMME DE GOODENOUGH","()",25,39,0,33,45),
            new Examen("BONHOMME DE GOODENOUGH","()",23,30,0,27,32),
            new Examen("BONHOMME DE GOODENOUGH","()",8,18,0,16,23),
            new Examen("BONHOMME DE GOODENOUGH","()",6.6,12.3,4.4),
            new Examen("BONHOMME DE GOODENOUGH","()",13,15.87,3.15),
            new Examen("BONHOMME DE GOODENOUGH","()",29,29,4.2)
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