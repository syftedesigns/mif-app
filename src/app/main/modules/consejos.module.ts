import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConsejosPage } from '../controllers/consejos.page';
const routes: Routes = [
  {
    path: '',    
    component:ConsejosPage    
  },
];

@NgModule({
  imports: [
  	IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[ConsejosPage],  
})
export class ConsejosPageModule {}