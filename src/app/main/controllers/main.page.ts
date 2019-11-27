import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: '../views/main.html',
})
export class MainPage {
  newNotif = 0;
  newNotif2 = 0;
  constructor(
    public router: Router,
    public user: UserService,
    public api: ApiService, 
    public photoViewer: PhotoViewer,
    private platform: Platform,
  ) {
    this.platform.ready().then(() => {
        if(!user.isLogin()){          
          this.user.clean();
          this.router.navigateByUrl('boot');
          return;
        }else{
          let l = this;
          var notificationOpenedCallback = function(jsonData) {
             l.getNotif();
          };
          var notificacionReceiveCallback = function(jsonData){
             l.getNotif();  
          }
          if(typeof(window["plugins"])!='undefined'){
            window["plugins"].OneSignal
            .startInit("bab567ad-c17c-49ae-a967-5e49be8aff2c", "mif-app")
            .handleNotificationOpened(notificationOpenedCallback)
            .handleNotificationReceived(notificacionReceiveCallback)
            .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.None)
            .endInit(); 
            window["plugins"].OneSignal.api = api;
            window["plugins"].OneSignal.getIds(function(id){
                window["plugins"].OneSignal.api.actualizar('addGCM',{gcm:id.userId},function(data){console.log(data);},user.user.id);
            });
          }
        }
    });

    this.getNotif();
  }
  classSubHeader = ''; 
  classParentHeader = ''; 
  classParentLateralMenu = '';
  classLateralMenu = '';
  classLateralContent = '';
  actualScroll = 0;
  onscrolling = false;  
  navigate = [    
    {id:'home',label:'<img src="assets/images/logo-light2.png">',link:'main/home'},
    {id:'mapa',label:'MAPA',link:'main/mapa'},
    {id:'actividades',label:'ACTIVIDADES',link:'main/actividades'},
    {id:'consejos',label:'CONSEJOS',link:'main/consejos'},
    {id:'tienda',label:'CARPA MIF',link:'main/tienda'},
    {id:'programa',label:'PROGRAMA',link:'main/programa'},
    {id:'pulsera',label:'PULSERA',link:'main/pulsera'},
    {id:'lineup',label:'LINE UP',link:'main/lineUp'},
    {id:'influencers',label:'INFLUENCERS',link:'main/influencers'},
    {id:'redes',label:'REDES',link:'main/redes'},
    {id:'media',label:'MEDIA',link:'main/media'},
    {id:'perfil',label:'TU PERFIL',link:'main/perfil'},
    {id:'bienvenido',label:'Bienvenido',link:'main/bienvenido'},
    {id:'faqs',label:'FAQS',link:'main/faqs'},
    {id:'contacto',label:'Contacto',link:'main/contacto'},
    {id:'boot',label:'',link:'boot'},
  ];
  label = this.navigate[0].label;  
  activePage = this.navigate[0].id;
  activeAutoBarScroll = true;
  foto = this.user.user.foto;

  getNotif(){
    let l = this;
    this.api.get('consejos_sin_leer',{user_id:this.user.user.id},function(data){
      l.newNotif = data[0];
      console.log(l.newNotif);
    });
    this.api.get('programa_sin_leer',{user_id:this.user.user.id},function(data){
      l.newNotif2 = data[0];
      console.log(l.newNotif2);
    });
  }

  toggleSubmenu(){
  	this.classSubHeader = this.classSubHeader == 'topped'?'':'topped';  	
  	this.classParentHeader = this.classParentHeader == 'menucollapsed'?'':'menucollapsed';  	
    this.activeAutoBarScroll = this.classSubHeader == 'topped'?false:true;
  }
  toggleLateralMenu(){
    this.classParentLateralMenu = this.classParentLateralMenu == 'perspective-right-header'?'':'perspective-right-header';
    this.classLateralMenu = this.classLateralMenu == 'active-menu'?'':'active-menu';
    this.classLateralContent = this.classLateralContent == 'perspective-all-right'?'':'perspective-all-right';
    
  }
  onScroll(e){  
    if(this.activeAutoBarScroll){  
    	var ac = e.detail.scrollTop;
      var act = this.actualScroll;

      if(ac>act){
        this.classSubHeader = 'topped';
        this.classParentHeader = 'menucollapsed';
      }else{
        this.classSubHeader = '';
        this.classParentHeader = '';
      }
    }
  }
  go(id){
    let x = this.navigate.find(y => y.id == id);
    this.label = x.label;
    this.activePage = x.id;
    this.router.navigateByUrl(x.link);
    this.classParentLateralMenu = '';
    this.classLateralMenu = '';
    this.classLateralContent = '';  
  }

  logout(){
    this.user.clean();
    this.toggleLateralMenu();
    this.router.navigateByUrl('boot');
  }

  mapa(){        
    this.photoViewer.show('https://www.mallorcaislandfestival.com/img/mapa_app2.jpg','Mapa de MIF');
  }
}
