import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,ModalController,NavParams } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


@Component({
  selector: 'app-actividadesModal',
  templateUrl: '../../views/modals/actividades.html',
})
export class ActividadesModalPage {
  d = {
  	lugar:[0,0]
  };

  colores = ['Sin color','Amarillo','Verde','Azul','Rojo','Negro'];
  coloresbg = ['','bg-yellow-dark','bg-green-dark','bg-blue-dark','bg-red-dark','bg-black-dark'];
  constructor(
    public modal : ModalController,
    private navParams: NavParams,
    public photoViewer: PhotoViewer
  ) {
  	this.d = navParams.get('actividad');  
    console.log(this.d);	
  }

  zoom(foto){
    this.photoViewer.show(foto);
  }
  dismissModal(){
  	this.modal.dismiss();
  }
}
