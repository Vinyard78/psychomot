import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Examen } from './examen';
import { Point } from './point';
import { DrawSettings } from './drawSettings';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ExamensPage } from '../examens/examens';
import { ExamensService } from '../examens/examens.service';

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

@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {

	canvas: any;
	context: any;
	type: string;
	data: Examen[];
    @ViewChild('canvas') canvasElement: any;

	// Point qui se situe au milieu du canvas
    middlePoint: Point;

	constructor(public navCtrl: NavController, private socialSharing: SocialSharing, private examensService: ExamensService) {
  	}

  	ionViewDidEnter() {
        this.canvas = this.canvasElement.nativeElement;
        this.context = this.canvas.getContext('2d');
  		this.canvas.width = 1500;
   		this.canvas.height = 1500;
   		this.data = this.examensService.getExamens();
        /*[
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

	        new Examen("BONHOMME DE GOODENOUGH","()",22,22,2),
	        new Examen("BONHOMME DE GOODENOUGH","()",8,10,3),
	        new Examen("BONHOMME DE GOODENOUGH","()",25,39,0,33,45),
	        new Examen("BONHOMME DE GOODENOUGH","()",23,30,0,27,32),
	        new Examen("BONHOMME DE GOODENOUGH","()",8,18,0,16,23),
	        new Examen("BONHOMME DE GOODENOUGH","()",6.6,12.3,4.4),
	        new Examen("BONHOMME DE GOODENOUGH","()",13,15.87,3.15),
	        new Examen("BONHOMME DE GOODENOUGH","()",29,29,4.2)
	    ];*/
	    this.middlePoint = {
      		x : this.canvas.width/2,
      		y : this.canvas.height/2
    	};

        /**
         * Calcul des points
         */
        if(this.data.length){
            this.clearCanvas();
            this.type = "MAX"; 
            this.computeCoord(DrawSettings.RETURNHEIGHT,DrawSettings.MAXTEXTWIDTH);
            this.draw();
        }
    }

    // Fonction qui efface le contenu du canvas pour tout mettre en blanc
    clearCanvas(): void {
    	this.context.fillStyle = "rgba(255, 255, 255, 1)";
      	this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
    }

    send(): void {
        let data = this.canvas.toDataURL('image/jpeg');
        //window.location.href = data;
        this.socialSharing.shareViaEmail('Diagramme', 'Diagramme', [''],[],[],data).then(() => {
            
        }).catch(() => {
            
        });
    }

    goToExamensList():void {
        this.navCtrl.push(ExamensPage);
    }

    /*var noteInverse = function(note, moy, inf, sup){
      var div = 2;
      var result = {};
      result.note = inf - (note - sup);
      result.inf = inf;
      result.sup = sup;
      result.moy = moy;
      if(result.note<0){
        result.note = 0;
      }*/
					      /*function recurs(){
					        if(result.note < -0.001){
					          result.inf = inf*div;
					          result.sup = sup*div;
					          result.moy = moy*div;
					          result.note = result.inf - (note*div - result.sup);
					          div+=2;
					          if(result.note < -0.001){
					            recurs();
					          }
					        } else return;
					      }
					      recurs();*/
      
      /*return result;
    };*/

    /*var noteInversed = noteInverse(26,12.3,12.3-4.4,12.3+4.4);*/


    /** 
     * Fonction qui permet de donner les coordonnées d'un point suivant un angle donné sur le cercle trigonométrique 
     * par rapport à un point de départ situé en haut du cercle trigo (rotation positive vers la gauche).
     * 
     * x et y sont les coordonnées du point de départ
     * value est l'angle (ex: Math.PI/4)
     * factor est le facteur d'agrandissement
     */
    convert(value: number, x: number, y:number, factor:number): Point {
        let result = {
        	x : x - factor * (Math.sin(value)),
        	y : y + factor * (1 - Math.cos(value))
        };
      	return result;
    } 

    /* Permet via Pythagore de calculer l'hypothénuse d'un triangle rectangle dont les coordonnées des points sont 
       {(x1,y1),(x1,y2),(x2,y2)}. Cela nous donnera la valeur de la longueur du segment [(x1,y1),(x2,y2)]
    */
    pythagore(x1:number,y1:number,x2:number,y2:number): number {
      	return Math.sqrt(Math.pow(y2-y1,2)+Math.pow(x2-x1,2));
    }

    /* fonction qui permet de calculer les coordonnees des points sur le cercle trigo en fonction de sa distance sur le rayon par rapport au point de reference du cercle */
    calcCoord(point: any, delta: number, index: number, typeProp: string, rayon: number): void {
        point.x = this.data[index][typeProp].x + (this.middlePoint.x - this.data[index][typeProp].x) * delta / rayon;
        point.y = this.data[index][typeProp].y + (this.middlePoint.y - this.data[index][typeProp].y) * delta / rayon;
    }

    computeCoord(returnHeight: number, maxTextWidth:number) {
      	if(this.type === "") {
        	this.type = "MOY";
      	}
      	let typeProp;
      	let denomProp;

      	// Permet de calculer la valeur max d'un pic pour se caler sur cette valeur pour construire les lignes qui se croisent au milieu auquel on ajoute la valeur "exces" définie juste après.
      	let maxValueArray = [];

	    /* Permet de definir les données à utiliser pour créer la figure géométrique de référence, suivant les résultats il sera plus judicieux d'utiliser telle ou telle autre représentation
	    */
	    switch(this.type){
	    	case "MOY": typeProp = 'coordMoy'; denomProp = 'moyenne'; break;
	        case "MIN": typeProp = 'coordMoyMin'; denomProp = 'moyenneInf'; break;
	        case "MAX": typeProp = 'coordMoyMax'; denomProp = 'moyenneSup'; break;
	        case "RES": typeProp = 'coordResultat'; denomProp = 'resultat'; break;
	        default : typeProp = 'coordMoy'; denomProp = 'moyenne'; break;
	    }

	    // style des legendes et textes affiches
	    this.context.font = "20pt Calibri,Geneva,Arial";
      	this.context.fillStyle = "rgb(0,20,180)";
      	//context.strokeStyle = "rgb(0,0,0)";
      	//context.strokeText("Exemple de texte", 10, 20);
     
      	for(let i = 0, length = this.data.length; i < length; i++ ){
	        // Calcul des coordonnées des points de la figure geomertique de base.
	        let value = this.convert(i * 2 * Math.PI / this.data.length,  this.middlePoint.x,  this.middlePoint.y - DrawSettings.FACTOR, DrawSettings.FACTOR);
	        this.data[i][typeProp].y = value.y;
	        this.data[i][typeProp].x = value.x;
	        /**
	         * Calcul des paramètres
	         */ 
	        let rayon = this.pythagore(this.middlePoint.x,this.middlePoint.y,this.data[i][typeProp].x,this.data[i][typeProp].y);  //longueur en pixel du rayon du cercle trigo
	        let norm = rayon / this.data[i][denomProp];        //nombre de pixel pour 1 unite de resultat/moyenne/...
            if(typeof this.data[i][denomProp] === "undefined" && this.data[i].ecartType) {
                norm = denomProp === "moyenneSup" ? rayon / (this.data[i].moyenne + this.data[i].ecartType) : rayon / (this.data[i].moyenne - this.data[i].ecartType);
            }
	        if(this.data[i][denomProp] == 0) norm = 0;
            let maxPixelValue: number;                         //nombre de pixel correspondant à la valeur moyenne sup.
            let minPixelValue: number;                         //nombre de pixel correspondant à la valeur moyenne inf.
            if(this.data[i].ecartType) {
                maxPixelValue = norm * (this.data[i].moyenne + this.data[i].ecartType);    
                minPixelValue = norm * (this.data[i].moyenne - this.data[i].ecartType);    
            } else {
                maxPixelValue = norm * this.data[i].moyenneSup;    
                minPixelValue = norm * this.data[i].moyenneInf;    
            }
	        let moyPixelValue = norm * this.data[i].moyenne;       //nombre de pixel correspondant à la valeur moyenne
	        let resultPixelValue = norm * this.data[i].resultat;   //nombre de pixel correspondant à la valeur resultat
	        let deltaMoy = rayon - moyPixelValue;     //nombre de pixel correspondant à la distance entre le rayon et la valeur moyenne
	        let deltaMax = rayon - maxPixelValue;     //nombre de pixel correspondant à la distance entre le rayon et la valeur moyenne sup.
	        let deltaMin = rayon - minPixelValue;     //nombre de pixel correspondant à la distance entre le rayon et la valeur moyenne inf.
	        let deltaRes = rayon - resultPixelValue;  //nombre de pixel correspondant à la distance entre le rayon et la valeur resultat

	        // Utile pour le calcul des extremités
	        maxValueArray.push(maxPixelValue);

	        // Calcul des coordonnées des points correspondants à la moyenne.
	        this.calcCoord(this.data[i].coordMoy, deltaMoy, i, typeProp, rayon);
	        // Calcul des coordonnées des points correspondants à la moyenne max.
	        this.calcCoord(this.data[i].coordMoyMax, deltaMax, i, typeProp, rayon);
	        // Calcul des coordonnées des points correspondants à la moyenne min.
	        this.calcCoord(this.data[i].coordMoyMin, deltaMin, i, typeProp, rayon);
	        // Calcul des coordonnées des points correspondants aux résultats.
	        this.calcCoord(this.data[i].coordResultat, deltaRes, i, typeProp, rayon);
	    }

        // Calcul des coordonnées des points correspondants aux extrémités des lignes qui se croisent en leur centre.
        for(let i = 0, length = this.data.length; i < length; i++ ){
            var rayon = this.pythagore(this.middlePoint.x,this.middlePoint.y,this.data[i][typeProp].x,this.data[i][typeProp].y);
            var deltaExt = rayon - (Math.max(...maxValueArray) + DrawSettings.EXCES);
            this.data[i].coordLim.x = this.data[i][typeProp].x + (this.middlePoint.x - this.data[i][typeProp].x) * deltaExt / rayon;
            this.data[i].coordLim.y = this.data[i][typeProp].y + (this.middlePoint.y - this.data[i][typeProp].y) * deltaExt / rayon;
        }

        /*(function drawText(returnHeight, maxTextWidth){
        // On ne reduit la zone de texte pas au dela de la taille de 3 lettre M affichees dans la font et le style utilise
        if(maxTextWidth < this.context.measureText("MM").width){
          maxTextWidth = this.context.measureText("MM").width;
        }

        deltaExt-=75;
        
        for(var i = 0, length = data.length; i < length; i++ ){
          
          var text = data[i].nom + " " + data[i].categorie;

          var middleText;

          var textArray = [];
          var isTextPushed = false;

          var text1 = "";
          var text2 = "";
          var textWidth;

          // fonction recursive qui permet de sauter une ou plusieurs lignes du texte si celui-ci est superieur a une longueur max donnee
          (function cut(str){
            isTextPushed = false;
            text1 = str;
            textWidth = this.context.measureText(text1).width;
            if (textWidth > maxTextWidth) {
              if(text1.search(/ /) != -1){
                text1 = text1.split(" ");
                text2 = text2 === "" ? " " + text1.pop() : " " + text1.pop() + text2;
                text1 = text1.join(" ");
                cut(text1);
              } else {
                var temp = text1;
                text1 = text1.substring(0,text1.length/2);
                text2 = temp.substring(temp.length/2) + text2;
                cut(text1);
              }
            } 
            if(text2[0] === " "){
              text2 = text2.substring(1);
            }
            if(!isTextPushed){
              textArray.push(text1);
              if(this.context.measureText(text2).width > maxTextWidth){
                var textTemp = text2;
                text2 = "";
                cut(textTemp);
              } else {
                textArray.push(text2);
              }
              isTextPushed = true;
            }
            return;
          })(text);
          
          textWidth = this.context.measureText(textArray[0]).width;
          middleText = textWidth/2;

          this.context.fillText(
            textArray[0], 
            - middleText + this.data[i][typeProp].x + (this.middlePoint.x - this.data[i][typeProp].x) * deltaExt / rayon, 
            this.data[i][typeProp].y + (this.middlePoint.y - this.data[i][typeProp].y) * deltaExt / rayon
          );

          var line = returnHeight;

          for(var j = 1; j < textArray.length; j++){
            this.context.fillText(
              textArray[j], 
              - middleText + data[i][typeProp].x + (this.middlePoint.x - this.data[i][typeProp].x) * deltaExt / rayon, 
              line + this.data[i][typeProp].y + (this.middlePoint.y - this.data[i][typeProp].y) * deltaExt / rayon
            );
            line+=returnHeight;
          }
        }
        })(returnHeight,maxTextWidth);*/
    }


    drawPoints(style:string, prop:string, fill:boolean, lineWidth:string, cross:boolean): void {
        if(fill){
            this.context.fillStyle = style;
        } else {
            this.context.lineWidth = lineWidth ? lineWidth : "1";
            this.context.strokeStyle = style;
        }
        this.context.beginPath();
        this.context.moveTo(this.data[0][prop].x, this.data[0][prop].y);
        if(cross){
            this.context.lineTo(this.middlePoint.x,this.middlePoint.y);
        }
        for(let i = 1, length = this.data.length; i < length; i++ ){
            if(cross){
                this.context.moveTo(this.data[i][prop].x, this.data[i][prop].y);
                this.context.lineTo(this.middlePoint.x,this.middlePoint.y);
            } else {
                this.context.lineTo(this.data[i][prop].x,this.data[i][prop].y);
            }
        }
        this.context.closePath();
        if(fill){
            this.context.fill();
        } else {
            this.context.stroke();
        }
    }

    /**
     * Tracé des courbes
     */
    draw(): void {
        this.drawPoints("rgba(23, 145, 167, 0.3)","coordMoyMax",true,"",false);
        this.drawPoints("rgba(255, 255, 255, 1)","coordMoyMin",true,"",false);
        this.drawPoints("rgba(255, 0, 0, .5)","coordResultat",true,"",false);
        this.drawPoints("rgba(150, 150, 150, .5)","coordLim",false,"2",true);
        this.drawPoints("rgba(255, 0, 0, 1)","coordResultat",false,"2",false);
        this.drawPoints("rgba(80, 0, 160, .6)","coordMoy",false,"3",false);
    }

    changeTextWidth(val:number): void {
        this.clearCanvas();
        this.computeCoord(DrawSettings.RETURNHEIGHT,val);
        this.draw();
    }

    onClick(type:string):void {
        this.clearCanvas();
        this.type = type; 
        this.computeCoord(DrawSettings.RETURNHEIGHT, DrawSettings.MAXTEXTWIDTH);
        this.draw();
    }
    
    /*downloadDiag(): void {
        this.href = this.canvas.toDataURL('image/jpeg');
    }
    // Bouton de telechargement du diagramme en jpeg
    downloadLnk.addEventListener('click', function(){
        this.href = this.canvas.toDataURL('image/jpeg');
    }, false);*/

}
