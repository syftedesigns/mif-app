import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../services/api.service';
import {UserService} from '../services/user.service';
import {MessagesService} from '../services/messages.service';

@Component({
  selector: 'app-boot',
  templateUrl: './views/boot.html',
})
export class BootPage {
  //Get Fechas
  fechas = [];
  constructor(public router: Router, public api: ApiService, public user: UserService) {
    //Validar si ya tiene fecha
    if(typeof(user.user.fecha)!='undefined'){
      //this.goLogin(user.user.fecha);
      console.log(user.user.fecha)
    }
    if(user.isLogin()){
      //this.router.navigateByUrl('main/home');    
    }
    let ff = this;
    this.api.listar('fechas',{},function(data){
      ff.fechas = data;
    });

  }
  activateMenu = '';
  showDates(){
  	if(this.activateMenu=='active-menu'){
  		this.activateMenu = '';
  	}else{
  		this.activateMenu = 'active-menu';
  	}  	
  }

  goLogin(id){
    this.user.set('fecha',id);
    this.router.navigateByUrl('boot/login');  	
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './views/login.html',
})
export class LoginPage {

  data = {        
    fecha:"",
    telefono:"",
    password:""
  };

  constructor(
    public router: Router, 
    public api: ApiService, 
    public user: UserService,
    public msj: MessagesService
  ){
    if(typeof(user.user.fecha)=='undefined'){
      this.router.navigateByUrl('boot');    
    }else{
      this.data.fecha = user.user.fecha;
    }
  }

  login(){
    let l = this;
    this.api.get('login',this.data,function(response){
      if(response.success){
        l.user.save(response.data);
        l.router.navigateByUrl('/main/home');
      }else{
        l.msj.alert('Error',response.msj);
      }
    });
  }

}


/************* Registro ******************/

@Component({
  selector: 'app-registro',
  templateUrl: './views/registro.html',
})
export class RegistroPage {

  data = { 
    id:"",   
    instituto: "",
    localidad: "",
    nombre: "",
    password: "",
    password2: "",
    telefono: "",
    numero_grupo:"",
    app_fechas_salida_id:"",
    fecha:""
  };
  hidePassword=true;
  constructor(
    public router: Router, 
    public api: ApiService, 
    public user: UserService,
    public msj: MessagesService
  ) { 
    if(typeof(user.user.fecha)=='undefined'){
      this.router.navigateByUrl('boot');    
    }else{
      this.data.app_fechas_salida_id = user.user.fecha;
      this.data.fecha = user.user.fecha;
    }
  }

  register(){
    let r = this;
    this.api.insert('app_usuarios',this.data,function(data){
      if(!data.success){
        r.msj.alert('Error',data.error_message);
      }else{
        r.data.id = data.primary_key_value;
        r.user.save(r.data);
        r.router.navigateByUrl('main/home'); 
      }
    });
  }
}

/************* FIN Registro ******************/

/************* Recover ******************/
@Component({
  selector: 'app-recover',
  templateUrl: './views/recover.html',
})
export class RecoverPage {
  data = {telefono:''}
  constructor(
    public router: Router, 
    public api: ApiService, 
    public user: UserService,
    public msj: MessagesService
  ) { 
    
  }

  recover(){
    let l = this;
    this.api.get('recover',this.data,function(response){
      if(response.success){
        l.msj.alert('Datos enviados',response.msj);       
      }else{
        l.msj.alert('Error',response.msj);
      }
    });
  }
}

/************* FIN Recover ******************/