import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PulseraPage } from '../controllers/pulsera.page';
const routes: Routes = [
  {
    path: '',    
    component:PulseraPage    
  },
];

@NgModule({
  imports: [
  	IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[PulseraPage],  
})
export class PulseraPageModule {}