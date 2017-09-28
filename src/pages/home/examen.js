var Examen = (function () {
    function Examen(nom, categorie, resultat, moyenne, ecartType, moyenneInf, moyenneSup) {
        this.nom = nom;
        this.categorie = categorie;
        this.resultat = resultat;
        this.moyenne = moyenne;
        this.moyenneInf = moyenneInf;
        this.moyenneSup = moyenneSup;
        this.ecartType = ecartType;
        this.coordResultat = { x: 0, y: 0 };
        this.coordMoyMax = { x: 0, y: 0 };
        this.coordMoyMin = { x: 0, y: 0 };
        this.coordMoy = { x: 0, y: 0 };
        this.coordLim = { x: 0, y: 0 };
    }
    return Examen;
}());
export { Examen };
//# sourceMappingURL=examen.js.map