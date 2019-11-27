import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BienvenidoPage } from '../controllers/bienvenido.page';
const routes: Routes = [
  {
    path: '',    
    component:BienvenidoPage    
  },
];

@NgModule({
  imports: [
  	IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[BienvenidoPage],  
})
export class BienvenidoPageModule {}