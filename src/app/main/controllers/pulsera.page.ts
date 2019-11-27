import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPage } from './main.page';
import {ApiService} from '../../services/api.service';
@Component({
  selector: 'app-pulsera',
  templateUrl: '../views/pulsera.html',
})
export class PulseraPage {
  constructor(
  	public router: Router, 
  	public main: MainPage,
  	public api: ApiService
  ) {
  	this.getNotices(null);
  } 
  pulsera = '';
  pulsera2 = '';
  onScroll(e){
    this.main.onScroll(e);
  }

  getNotices(ev){
    let l = this;
    this.api.get('params/pulsera',{},function(response){
      l.pulsera = response.text;      
    });
    this.api.get('params/pulsera2',{},function(response){
      l.pulsera2 = response.text;      
    });
  }

  slidesDidLoad(slides) {
    slides.startAutoplay();
  }
}
