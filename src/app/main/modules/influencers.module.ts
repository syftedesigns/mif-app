import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InfluencersPage } from '../controllers/influencers.page';
import { InfluencersModalPage } from '../controllers/modals/influencers.modal.page';
const routes: Routes = [
  {
    path: '',    
    component:InfluencersPage    
  },
];

@NgModule({
  imports: [
  	IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[InfluencersPage,InfluencersModalPage],
  entryComponents:[
    InfluencersModalPage
  ]  
})
export class InfluencersPageModule {}