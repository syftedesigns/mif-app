import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MainPage } from './main.page';
import { ProgramaModalPage } from './modals/programa.modal.page';
import { ActividadesModalPage } from './modals/actividades.modal.page';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-programa',
  templateUrl: '../views/programa.html',
})

export class ProgramaPage {
  days = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB','DOM'];
  dias = [];
  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  daysAr = [];
  activeMonth = 0;  
  avisos = [];
  notif = [0,0,0,0,0,0,0];
  gran = {};
  constructor(
    public modalController: ModalController, 
    public router: Router, 
    public main: MainPage,
    public api: ApiService,
    public user: UserService
  ) {
    this.getNotices();
  } 

  getNotices(){
    let l = this;
    this.api.hideLoading = true;

    this.api.get('programacion',{fecha:this.user.user.fecha,user:this.user.user.id},function(data){      
      let x = 0;
      let y = 0;
      let hoy = new Date().getDate();
      l.dias = [];
      l.daysAr = [];
      l.activeMonth = 0;
      l.avisos = [];
      l.notif = [0,0,0,0,0,0,0];
      l.gran = {};
      for(var i in data){
        l.gran = data[i][0];
      }
      for(var i in data){
        let f = new Date(i);        
        let dia = f.getDate();        
        let dias = l.days[f.getDay()];
        let label = 'Programación del '+dia+' de '+l.meses[f.getMonth()];
        l.dias.push({dia:dia ,dias: dias,label: label,programa:data[i]});        
        if(dia==hoy){
          l.activeMonth = y;
          l.gran = data[i][0];
        }
        y++; 
      }
      y = 0;
      for(var i in data){  
        let dia = new Date(i).getDate();                
        for(var k in data[i]){
          l.avisos[data[i][k].proid] = data[i][k].avisame; 
          console.log(dia+'=='+hoy+' && '+data[i][k].recordatorio+'!=null');
          if(dia==hoy && data[i][k].recordatorio!=null){            
            l.notif[y]+= data[i][k].recordatorio.leido=='0'?1:0;
          }
        }
        y++;
      }
    });
  }

  async presentModal(id) {
    //Desmarcar notificacion
    let l = this;
    if(id.recordatorio!=null && id.recordatorio.leido==0){
      this.api.get('leer_programa',{id:id.recordatorio.id},function(){
        l.main.getNotif();
        l.getNotices();
      });
    }
    this.modal = await this.modalController.create({
      component: ActividadesModalPage,
      componentProps: {actividad:id}
    });
    let m = this.modal;
    this.modal.present();
  }

  toggleAviso(proid){
    this.api.get('desactivarAviso/'+this.user.user.id+'/'+proid,{},function(data){});
  }
  
  onScroll(e){
    this.main.onScroll(e);
  }

  modal = undefined;
  async detalle() {
    this.modal = await this.modalController.create({
      component: ProgramaModalPage,
      componentProps: {/* Params */}
    });
    this.modal.present();
  }
}
