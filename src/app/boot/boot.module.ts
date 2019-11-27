import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BootPage,LoginPage, RegistroPage, RecoverPage } from './boot.page';

const routes: Routes = [
  {
    path: '',
    component: BootPage
  },
  {
  	path:'login',
  	component:LoginPage
  },
  {
    path:'registro',
    component:RegistroPage
  },
  {
    path:'recover',
    component:RecoverPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[BootPage,LoginPage,RegistroPage, RecoverPage],
  entryComponents:[
   
  ]
})
export class BootPageModule {}
