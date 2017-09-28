var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Examen } from '../home/examen';
var ExamensService = (function () {
    function ExamensService() {
        this.examens = [
            new Examen("BONHOMME DE GOODENOUGH", "()", 22, 22, 2),
            new Examen("BONHOMME DE GOODENOUGH", "()", 8, 10, 3),
            new Examen("BONHOMME DE GOODENOUGH", "()", 25, 39, 0, 33, 45),
            new Examen("BONHOMME DE GOODENOUGH", "()", 23, 30, 0, 27, 32),
            new Examen("BONHOMME DE GOODENOUGH", "()", 8, 18, 0, 16, 23),
            new Examen("BONHOMME DE GOODENOUGH", "()", 6.6, 12.3, 4.4),
            new Examen("BONHOMME DE GOODENOUGH", "()", 13, 15.87, 3.15),
            new Examen("BONHOMME DE GOODENOUGH", "()", 29, 29, 4.2)
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
    ExamensService.prototype.getExamens = function () {
        return this.examens;
    };
    ExamensService.prototype.setExamens = function (newExamTab) {
        this.examens = newExamTab;
    };
    return ExamensService;
}());
ExamensService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ExamensService);
export { ExamensService };
//# sourceMappingURL=examens.service.js.map