import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ContactoPage } from '../controllers/contacto.page';
const routes: Routes = [
  {
    path: '',    
    component:ContactoPage    
  },
];

@NgModule({
  imports: [
  	IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[ContactoPage],  
})
export class ContactoPageModule {}