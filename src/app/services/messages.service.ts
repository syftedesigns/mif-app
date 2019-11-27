import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
	
	constructor(private alertCtrl: AlertController) {
		
	}

	async alert(title,message){
		const alert = await this.alertCtrl.create({
	      header: title,	      
	      message: message,
	      buttons: [{
	      	role:'Cancel',
	      	text:'Cerrar'
	      }]
	    });

		await alert.present();
	}
}
