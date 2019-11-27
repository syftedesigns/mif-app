import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPage } from './main.page';
@Component({
  selector: 'app-contacto',
  templateUrl: '../views/contacto.html',
})
export class ContactoPage {
  constructor(public router: Router, public main: MainPage) {} 
  
  onScroll(e){
    this.main.onScroll(e);
  }
}
