import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPage } from './main.page';
import { ModalController } from '@ionic/angular';
import { InfluencersModalPage } from './modals/influencers.modal.page';
import {ApiService} from '../../services/api.service';
@Component({
  selector: 'app-influencers',
  templateUrl: '../views/influencers.html',
})
export class InfluencersPage {
  constructor(
    public modalController: ModalController, 
    public router: Router, 
    public main: MainPage, 
    public api: ApiService
  ) {
    this.getNotices();
  } 
  modal = undefined;
  list = [];
  async presentModal(id) {
    this.modal = await this.modalController.create({
      component: InfluencersModalPage,
      componentProps: {influencer:id}
    });
    this.modal.present();
  }
  onScroll(e){
    this.main.onScroll(e);
  }

  getNotices(){
    let l = this;
    this.api.get('influencers',{},function(response){
      l.list = response;
    });
  }
}
