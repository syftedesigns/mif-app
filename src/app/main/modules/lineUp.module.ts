import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LineUpPage } from '../controllers/lineup.page';
const routes: Routes = [
  {
    path: '',    
    component:LineUpPage    
  },
];

@NgModule({
  imports: [
  	IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[LineUpPage],  
  entryComponents:[]
})
export class LineUpPageModule {}