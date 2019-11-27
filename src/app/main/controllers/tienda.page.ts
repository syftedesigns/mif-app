import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPage } from './main.page';
import { ApiService } from '../../services/api.service';
declare var window;
@Component({
  selector: 'app-tienda',
  templateUrl: '../views/tienda.html',
})
export class TiendaPage {
  active = 3;
  constructor(    
    public router: Router, 
    public main: MainPage, 
    public api: ApiService,    
  ) {
    this.getNotices();
  } 
  productos = [];
  telefonos = '';
  onScroll(e){
    this.main.onScroll(e);
  }

  getNotices(){
    let l = this;
    this.api.get('tienda',{},function(response){
      l.productos = response;
    });

    this.api.get('params/TelefonosInteres',{},function(response){
      response = response.text;
      response = response.replace(/<ul>/g,'[');
      response = response.replace(/"/g,'\\"');
      response = response.replace(/<\/ul>/g,']');
      response = response.replace(/<li>/g,'{"text":"');
      response = response.replace(/<\/li>/g,'"},');
      response = response.substring(0,response.length-4)+']';      
      console.log(response);
      response = JSON.parse(response);      
      l.telefonos = response;
    });
  }

  share(p){
    // this is the complete list of currently supported params you can pass to the plugin (all optional)
    var options = {
      message: 'Mira este producto',
      subject: p.titulo,
      url: 'https://mallorcaislandfestival.com/tienda/productos/producto-'+p.id,
    };
    if(typeof(window.plugins)!='undefined'){
      window.plugins.socialsharing.shareWithOptions(options, function(){},function(){});
    }
  }
}
