import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProgramaPage } from '../controllers/programa.page';
import { ProgramaModalPage } from '../controllers/modals/programa.modal.page';
const routes: Routes = [
  {
    path: '',    
    component:ProgramaPage    
  },
];

@NgModule({
  imports: [
  	IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[ProgramaPage,ProgramaModalPage],
  entryComponents:[
    ProgramaModalPage
  ]  
})
export class ProgramaPageModule {}