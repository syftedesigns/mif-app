import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,ModalController } from '@ionic/angular';


@Component({
  selector: 'app-actividadesModal',
  templateUrl: '../../views/modals/programa.html',
})
export class ProgramaModalPage {
  constructor(public modal : ModalController) {} 

  dismissModal(){
  	this.modal.dismiss();
  }
}
