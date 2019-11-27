import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MediaPage } from '../controllers/media.page';
import { FotosModalPage } from '../controllers/modals/fotos.modal.page';
const routes: Routes = [
  {
    path: '',    
    component:MediaPage    
  },
];

@NgModule({
  imports: [
  	IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[MediaPage,FotosModalPage],  
  entryComponents:[
    FotosModalPage
  ]
})
export class MediaPageModule {}