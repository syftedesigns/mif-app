import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,ModalController,NavParams } from '@ionic/angular';
import { ActividadesModalPage } from './actividades.modal.page';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-lineupModal',
  templateUrl: '../../views/modals/lineup.html',
})
export class LineupModalPage {
  d = {}
  modalAct = undefined;
  constructor(
    public modal : ModalController,
    public modal2 : ModalController,
    private navParams: NavParams,
    public photoViewer: PhotoViewer
  ) {
  	this.d = navParams.get('lineup');  	
  } 

  async presentModal(id) {
    this.modalAct = await this.modal2.create({
      component: ActividadesModalPage,
      componentProps: {actividad:id}
    });
    let m = this.modalAct;
    this.modalAct.present();
  }

  zoom(foto){
    this.photoViewer.show(foto);
  }

  dismissModal(){
  	this.modal.dismiss();
  }
}
