import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
let red = typeof(localStorage.user)=='undefined'?'boot':'main/home';
const routes: Routes = [
  { path: '', redirectTo: red, pathMatch: 'full' },
  { path: 'boot', loadChildren: './boot/boot.module#BootPageModule' },
  { path: 'main', loadChildren: './main/modules/main.module#MainPageModule' }, 
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, { 
  	preloadingStrategy: PreloadAllModules,
  	useHash:true
  })],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
