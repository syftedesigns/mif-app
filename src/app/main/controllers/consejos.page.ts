import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPage } from './main.page';
import {ApiService} from '../../services/api.service';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-consejos',
  templateUrl: '../views/consejos.html',
})
export class ConsejosPage {
  constructor(    
    public router: Router, 
    public main: MainPage, 
    public api: ApiService,
    public user: UserService
  ) {
    this.getNotices(null);
  } 
  list = [];
  onScroll(e){
    this.main.onScroll(e);
  }

  getNotices(ev){
    let l = this;
    this.api.listar('consejos',{user:this.user.user.id},function(response){
      l.list = response;
      l.main.getNotif();
      if(ev){
        ev.target.complete();        
      }
    });
  }
}
