import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPage } from './main.page';
@Component({
  selector: 'app-bienvenido',
  templateUrl: '../views/bienvenido.html',
})
export class BienvenidoPage {
  constructor(public router: Router, public main: MainPage) {} 
  
  onScroll(e){
    this.main.onScroll(e);
  }
}
