import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,ModalController,NavParams} from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


@Component({
  selector: 'app-fotosModal',
  templateUrl: '../../views/modals/fotos.html',
})
export class FotosModalPage {
  constructor(
  	public modal : ModalController,
  	private navParams: NavParams,
    public photoViewer: PhotoViewer
  ) {
  	this.fotos = navParams.get('gal');  	
  } 
  fotos = {};

  zoom(foto){
    this.photoViewer.show(foto);
  }

  dismissModal(){
  	this.modal.dismiss();
  }
}
