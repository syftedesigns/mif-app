import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://www.mallorcaislandfestival.com/app/api/';
  base = 'https://www.mallorcaislandfestival.com/';
  loading = undefined;
  hideLoading = false;
  /*app_usuarios/json_list*/

  constructor(private http: HttpClient, public loadingController: LoadingController) { }

  async presentLoading() {
    if(typeof(this.loading)!='undefined' && this.loading!=undefined){
    	if(!this.hideLoading){
  	    this.loading = await this.loadingController.create({
  	      message: 'Cargando, por favor espere.',
          duration: 6000     
  	    });
  	    await this.loading.present();

  	    const { role, data } = await this.loading.onDidDismiss();

  	    console.log('Loading dismissed!');
      }
	  }
  }

  closeLoading(){
  	if(typeof(this.loading)!='undefined' && this.loading!=undefined){
  		this.loading.dismiss();
  		this.loading = undefined;
  	}
  }

  insert(method,data,callback){
  	this.presentLoading();
  	this.http.post(this.url+method+'/insert_validation',data).subscribe((response:any) => {	    
	    if(!response.success && typeof(callback)!='undefined'){
	    	callback(response);
	    	this.closeLoading();
	    }else{
	    	this.http.post(this.url+method+'/insert',data).subscribe((response:any)=>{
	    		if(typeof(callback)!='undefined'){
		    		if(!response.success){
		    			callback({'success':false,'error_message':'Ocurrio un error interno en el servidor'});
		    		}else{
		    			callback(response);
		    		}
	    		}
	    		this.closeLoading();
	    	});
	    }
	});
  }

  actualizar(method,data,callback,id){
  	this.presentLoading();
  	this.http.post(this.url+method+'/update_validation/'+id,data).subscribe((response:any) => {	    
	    if(!response.success && typeof(callback)!='undefined'){
	    	callback(response);
	    	this.closeLoading();
	    }else{
	    	this.http.post(this.url+method+'/update/'+id,data).subscribe((response:any)=>{
	    		if(typeof(callback)!='undefined'){
		    		if(!response.success){
		    			callback({'success':false,'error_message':'Ocurrio un error interno en el servidor'});
		    		}else{
		    			callback(response);
		    		}
		    		this.closeLoading();
	    		}
	    	});
	    }
	});
  }

  add(method,data,callback){
  	this.insert(method,data,callback);
  }

  edit(method,data,callback,id){
  	this.actualizar(method,data,callback,id);
  }

  listar(method,data,callback){
    data.per_page = '100';
  	this.http.post(this.url+method+'/json_list',data).subscribe((response:any) => {
  		if(typeof(callback)!=='undefined'){
  			response = JSON.parse(response);
  			callback(response);
  		}
  	});
  }

  /*** Custom query to a custom function ****/
  get(method,data,callback){
  	this.presentLoading();
  	this.http.post(this.url+method,data).subscribe((response:any)=>{
		if(typeof(callback)!='undefined'){
    		callback(response);
    		this.closeLoading();
		}
	});
  }
}
