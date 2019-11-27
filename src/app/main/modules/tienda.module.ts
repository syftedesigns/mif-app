import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TiendaPage } from '../controllers/tienda.page';
const routes: Routes = [
  {
    path: '',    
    component:TiendaPage    
  },
];

@NgModule({
  imports: [
  	IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[TiendaPage],  
})
export class TiendaPageModule {}