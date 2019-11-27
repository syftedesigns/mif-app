import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { MainPage } from './main.page';
@Component({
  selector: 'app-mapa',
  templateUrl: '../views/mapa.html',
})
export class MapaPage {
  constructor(public router: Router, public main: MainPage, public photoViewer: PhotoViewer) {} 
  
  zoom(){
  	var options = {
		share: true, // default is false
		closeButton: true, // iOS only: default is true
		copyToReference: false // iOS only: default is false
	};
  	this.photoViewer.show('https://www.mallorcaislandfestival.com/img/mapa_app.jpg','Mapa de MIF',options);
  }

  onScroll(e){
    this.main.onScroll(e);
  }
}
