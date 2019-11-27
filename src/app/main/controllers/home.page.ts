import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPage } from './main.page';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';
import { ActividadesModalPage } from './modals/actividades.modal.page';
import { LineupModalPage } from './modals/lineup.modal.page';
@Component({
  selector: 'app-home',
  templateUrl: '../views/home.html',
})
export class HomePage {
  onloading = true;
  constructor(
  	public router: Router, 
  	public main: MainPage,
  	public user: UserService,
  	public api: ApiService,
    public modalController: ModalController
  ) {
  	this.getNotices(null);
  } 

  list = {hoy:[],semana:[],redes:[]};
  djs = [];
  modal = undefined;

  async presentModal(id) {
    console.log(id);
    this.modal = await this.modalController.create({
      component: ActividadesModalPage,
      componentProps: {actividad:id}
    });
    let m = this.modal;
    this.modal.present();
  }

  async presentModalDj(id) {    
    this.modal = await this.modalController.create({
      component: LineupModalPage,
      componentProps: {lineup:id}
    });
    let m = this.modal;
    this.modal.present();
  }
  
  onScroll(e){
    this.main.onScroll(e);
  }

  getNotices(ev){
    let l = this;
    let f = new Date();
    let ff = f.getFullYear()+'-'+(f.getMonth()+1)+'-'+f.getDate();
    this.djs = [];
    this.api.get('destacados',{fecha:ff,salida:this.user.user.fecha},function(response){
      l.list = response;           
      for(var i in l.list.hoy){
      	if(typeof(l.list.hoy[i].dj)!='undefined'){
      		l.djs.push(l.list.hoy[i].dj);
      	}
      }

      if(ev){
        ev.target.complete();
      }

      l.onloading = false;
    });
  }
}
