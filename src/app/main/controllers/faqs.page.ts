import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPage } from './main.page';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-faqs',
  templateUrl: '../views/faqs.html',
})
export class FaqsPage {
  constructor(
  	public router: Router, 
  	public main: MainPage,
  	public api: ApiService
  ) {
  	this.getNotices();
  } 
  list = [];
  active = 0;
  onScroll(e){
    this.main.onScroll(e);
  }

  getNotices(){
    let l = this;
    this.api.listar('faqs',{},function(response){
      l.list = response;
    });
  }
}
