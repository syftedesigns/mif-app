import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	user = {
		'id':'',
		'nombre':'',		
		'fecha':'',
		'foto':'assets/images/pictures/0s.png'
	};
	
	constructor() {
		this.load();
		console.log(this.user);
	}

	load(){
		if(typeof(localStorage.user)!=='undefined'){
			if(typeof(localStorage.user)=='string'){
				this.user = JSON.parse(localStorage.user);
			}else{
				this.user = localStorage.user;
			}
		}
	}

	save(data){
		if(typeof(data.foto)=='undefined'){
			data.foto = 'assets/images/pictures/0s.png';
		}
		localStorage.user = JSON.stringify(data);
		this.load();
	}

	set(field,val){
		this.user[field] = val;
		this.save(this.user);
	}

	clean(){
		localStorage.removeItem('user');		
	}

	isLogin(){
		let ret =  typeof(this.user.id)=='undefined' || this.user.id==''?false:true;
		ret = typeof(this.user.fecha)=='undefined' || this.user.fecha==''?false:true;
		return ret;
	}
}
