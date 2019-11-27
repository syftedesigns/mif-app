import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPage } from './main.page';
import { ModalController } from '@ionic/angular';
import { LineupModalPage } from './modals/lineup.modal.page';
import {ApiService} from '../../services/api.service';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-lineup',
  templateUrl: '../views/lineup.html',
})
export class LineUpPage {
  constructor(
    public modalController: ModalController, 
    public router: Router, 
    public main: MainPage, 
    public api: ApiService,
    public user: UserService
  ) {
    this.getNotices();
  } 
  modal = undefined;
  list = [];
  async presentModal(id) {
    this.modal = await this.modalController.create({
      component: LineupModalPage,
      componentProps: {lineup:id}
    });
    this.modal.present();
  }
  onScroll(e){
    this.main.onScroll(e);
  }

  getNotices(){
    let l = this;
    this.api.get('lineup',{fecha:this.user.user.fecha},function(response){      
      l.list = response;
    });
  }
}
