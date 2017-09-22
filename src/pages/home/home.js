var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export var Point = (function () {
    function Point() {
    }
    return Point;
}());
export var Examen = (function () {
    function Examen() {
    }
    return Examen;
}());
var EXAMENS = [
    { nom: "SOMATOGNOSIES", categorie: "(schéma corporel)", resultat: 16, moyenne: 17, moyenneInf: 17 - 2, moyenneSup: 17 + 2, coordResultat: { x: 0, y: 0 }, coordMoyMax: { x: 0, y: 0 }, coordMoyMin: { x: 0, y: 0 }, coordMoy: { x: 0, y: 0 }, coordLim: { x: 0, y: 0 } },
    { nom: "BONHOMME DE GOODENOUGH", categorie: "(schéma corporel)", resultat: 4, moyenne: 6, moyenneInf: 6 - 2, moyenneSup: 6 + 2, coordResultat: { x: 0, y: 0 }, coordMoyMax: { x: 0, y: 0 }, coordMoyMin: { x: 0, y: 0 }, coordMoy: { x: 0, y: 0 }, coordLim: { x: 0, y: 0 } },
    { nom: "M ABC 2", categorie: "(coordinations globales et fines, équilibre)", resultat: 7, moyenne: 10, moyenneInf: 10 - 3, moyenneSup: 10 + 3, coordResultat: { x: 0, y: 0 }, coordMoyMax: { x: 0, y: 0 }, coordMoyMin: { x: 0, y: 0 }, coordMoy: { x: 0, y: 0 }, coordLim: { x: 0, y: 0 } },
    { nom: "EMG", categorie: "(coordinations globales et fines, équilibre)", resultat: 5, moyenne: 10.5, moyenneInf: 10.5 - 1.25, moyenneSup: 10.5 + 1.25, coordResultat: { x: 0, y: 0 }, coordMoyMax: { x: 0, y: 0 }, coordMoyMin: { x: 0, y: 0 }, coordMoy: { x: 0, y: 0 }, coordLim: { x: 0, y: 0 } },
    { nom: "SANTUCCI", categorie: "(graphisme)", resultat: 3, moyenne: 4, moyenneInf: 3, moyenneSup: 11, coordResultat: { x: 0, y: 0 }, coordMoyMax: { x: 0, y: 0 }, coordMoyMin: { x: 0, y: 0 }, coordMoy: { x: 0, y: 0 }, coordLim: { x: 0, y: 0 } },
    { nom: "FIGURE DE REY B - COPIE", categorie: "(graphisme)", resultat: 10, moyenne: 0, moyenneInf: 0, moyenneSup: 16, }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
{
    nom: "FIGURE DE REY B - MÉMOIRE", categorie;
    "(graphisme)", resultat;
    0, moyenne;
    0, moyenneInf;
    0, moyenneSup;
    9.5, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 };
}
;
export var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.data2 = EXAMENS;
    }
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }), 
        __metadata('design:paramtypes', [NavController])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map