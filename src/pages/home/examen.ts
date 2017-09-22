import { Point } from './Point';

export class Examen {

      nom: string;
      categorie: string;
      resultat: number;
      moyenne: number;
      moyenneInf: number;
      moyenneSup: number;
      coordResultat: Point;
      coordMoyMax: Point;
      coordMoyMin: Point;
      coordMoy: Point;
      coordLim: Point;

      constructor(nom: string, categorie: string, resultat: number, moyenne: number, moyenneInf: number, moyenneSup: number) {
            this.nom = nom;
            this.categorie = categorie;
            this.resultat = resultat;
            this.moyenne = moyenne;
            this.moyenneInf = moyenneInf;
            this.moyenneSup = moyenneSup;
            this.coordResultat = { x : 0, y : 0};
            this.coordMoyMax = { x : 0, y : 0};
            this.coordMoyMin = { x : 0, y : 0};
            this.coordMoy = { x : 0, y : 0};
            this.coordLim = { x : 0, y : 0};
      }
}