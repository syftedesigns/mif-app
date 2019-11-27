import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MainPage } from './main.page';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import {MessagesService} from '../../services/messages.service';

import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

@Component({
  selector: 'app-perfil',
  templateUrl: '../views/perfil.html',
})
export class PerfilPage {
  data = {
  	nombre:'',
  	app_fechas_salida_id:'',
  	s3a5cb5d6:''
  }
  fechas = [];
  hidePassword = true;
  constructor(    
    public router: Router, 
    public main: MainPage, 
    public api: ApiService,
    public user: UserService,
    public msj: MessagesService,
    private camera: Camera, 
    private file: File,
    private filePath: FilePath,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private platform: Platform,
    private toastController: ToastController,
    private ref: ChangeDetectorRef
  ) {
    this.getNotices();
  }   

  getNotices(){
  	let l = this;
  	this.api.listar('app_usuarios',{'user':this.user.user.id},function(data){  		
  		console.log(data);
  		if(data.length>0){
  			l.data = data[0];
  			l.data.app_fechas_salida_id = l.data.s3a5cb5d6;
  		}
  	});

  	this.api.listar('fechas',{},function(data){
      l.fechas = data;
    });
  }

  update(){
  	let r = this;  	
    this.api.actualizar('app_usuarios',this.data,function(data){    	
      if(!data.success){
        r.msj.alert('Error',data.error_message);
      }else{
        let user = {
				'id':r.user.user.id,
				'nombre':r.data.nombre,		
				'fecha':r.data.app_fechas_salida_id
			};
		  r.user.save(user);
		  r.msj.alert('Completado','Usuario actualizado con éxito');
      }

    },this.user.user.id);
  }
  
  onScroll(e){
    this.main.onScroll(e);
  }

  images = [];

  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }
  
    async selectImage() {
      const actionSheet = await this.actionSheetController.create({
          header: "Selecciona un lugar",
          buttons: [{
                  text: 'Cargar desde galeria',
                  handler: () => {
                      this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                  }
              },
              {
                  text: 'Usar Camara',
                  handler: () => {
                      this.takePicture(this.camera.PictureSourceType.CAMERA);
                  }
              },
              {
                  text: 'Cancel',
                  role: 'cancel'
              }
          ]
      });
      await actionSheet.present();
    }

    takePicture(sourceType: PictureSourceType) {
      var options: CameraOptions = {
          quality: 75,
          targetWidth: 200,
          targetHeight: 200,
          allowEdit : true,
          sourceType: sourceType,
          saveToPhotoAlbum: false,
          correctOrientation: true
      };
   
      this.camera.getPicture(options).then(imagePath => {
          if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
              this.filePath.resolveNativePath(imagePath)
                  .then(filePath => {
                      let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                      let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                  });
          } else {
              var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
              var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
              this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          }
      });
   
  }

  createFileName() {
      var d = new Date(),
          n = d.getTime(),
          newFileName = n + ".jpg";
      return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
      this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
          this.updateStoredImages(newFileName);
      }, error => {
          this.presentToast('Error while storing file.');
      });
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

    updateStoredImages(name) {
      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);
      this.user.user.foto = resPath;
      this.user.save(this.user.user); 
      this.main.foto = this.user.user.foto;     
      console.log(resPath);

      /*this.storage.get('images').then(images => {
          let arr = JSON.parse(images);
          if (!arr) {
              let newImages = [name];
              this.storage.set('images', JSON.stringify(newImages));
          } else {
              arr.push(name);
              this.storage.set('images', JSON.stringify(arr));
          }
   
          let filePath = this.file.dataDirectory + name;
          let resPath = this.pathForImage(filePath);
   
          let newEntry = {
              name: name,
              path: resPath,
              filePath: filePath
          };
   
          this.images = [newEntry, ...this.images];
          this.ref.detectChanges(); // trigger change detection cycle
      });*/
  }
}
