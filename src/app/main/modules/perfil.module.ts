import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PerfilPage } from '../controllers/perfil.page';
const routes: Routes = [
  {
    path: '',    
    component:PerfilPage    
  },
];

@NgModule({
  imports: [
  	IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[PerfilPage],  
})
export class PerfilPageModule {}