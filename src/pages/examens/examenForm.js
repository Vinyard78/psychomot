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
import { NavController, ViewController } from 'ionic-angular';
var ExamenForm = (function () {
    function ExamenForm(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.examType = "ecart";
    }
    ExamenForm.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ExamenForm;
}());
ExamenForm = __decorate([
    Component({
        selector: 'examen-form',
        templateUrl: 'examenForm.html'
    }),
    __metadata("design:paramtypes", [NavController, ViewController])
], ExamenForm);
export { ExamenForm };
//# sourceMappingURL=examenForm.js.map