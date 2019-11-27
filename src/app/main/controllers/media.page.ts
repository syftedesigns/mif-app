import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPage } from './main.page';
import { ModalController } from '@ionic/angular';
import { FotosModalPage } from './modals/fotos.modal.page';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-media',
  templateUrl: '../views/media.html',
})
export class MediaPage {
  constructor(
    public modalController: ModalController, 
    public router: Router, 
    public main: MainPage,
    public api: ApiService
  ) {
    this.getNotices();
  } 
  list = [];
  modal = undefined;
  async presentModal(gal) {
    this.modal = await this.modalController.create({
      component: FotosModalPage,
      componentProps: {gal:gal}
    });
    this.modal.present();
  }
  onScroll(e){
    this.main.onScroll(e);
  }

  getNotices(){
    let l = this;
    this.api.get('multimedia',{},function(response){
      l.list = response;
    });
  }
}
