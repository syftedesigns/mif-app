import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActividadesPage } from '../controllers/actividades.page';
const routes: Routes = [
  {
    path: '',    
    component:ActividadesPage    
  },
];

@NgModule({
  imports: [
  	IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[ActividadesPage],  
  entryComponents:[
    
  ]
})
export class ActividadesPageModule {}