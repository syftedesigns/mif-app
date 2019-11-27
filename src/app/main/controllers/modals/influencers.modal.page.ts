import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,ModalController,NavParams } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-influencersModal',
  templateUrl: '../../views/modals/influencers.html',
})
export class InfluencersModalPage {
  d = {};
  constructor(
  	public modal : ModalController,
  	public nv: NavParams,
  	public photoViewer: PhotoViewer
  ) {
  	this.d = nv.get('influencer');
  } 

  zoom(foto){
    this.photoViewer.show(foto);
  }

  dismissModal(){
  	this.modal.dismiss();
  }
}
