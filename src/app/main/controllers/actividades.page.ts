import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MainPage } from './main.page';
import { ActividadesModalPage } from './modals/actividades.modal.page';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-actividades',
  templateUrl: '../views/actividades.html',
})
export class ActividadesPage {
  constructor(
    public modalController: ModalController, 
    public router: Router, 
    public main: MainPage, 
    public api: ApiService,    
  ) {
    this.getNotices();    
  } 
  modal = undefined;
  list = [];
  async presentModal(id) {
    this.modal = await this.modalController.create({
      component: ActividadesModalPage,
      componentProps: {actividad:id}
    });
    let m = this.modal;
    this.modal.present();
  }

  onScroll(e){
    this.main.onScroll(e);
  }



  getNotices(){
    let l = this;
    this.api.get('actividades',{},function(response){
      l.list = response;
    });
  }
}
