import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPage } from './main.page';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-redes',
  templateUrl: '../views/redes.html',
})
export class RedesPage {
  onloading = true;
  constructor(    
    public router: Router, 
    public main: MainPage, 
    public api: ApiService
  ) {
    this.getNotices(null);
  } 
  list = [];
  onScroll(e){
    this.main.onScroll(e);
  }
  getNotices(ev){
    let l = this;
    this.api.get('redes',{},function(response){
      l.list = response;
      if(ev){
        ev.target.complete();
      }
      l.onloading = false;
    });    
  }
}
