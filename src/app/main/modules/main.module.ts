import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MainPage } from '../controllers/main.page';
import { ActividadesModalPage } from '../controllers/modals/actividades.modal.page';
import { LineupModalPage } from '../controllers/modals/lineup.modal.page';
const routes: Routes = [
  {
    path: '',    
    component:MainPage,
    children:[
      {
        path:'home',
        children:[{
          path:'',
          loadChildren:'./home.module#HomePageModule'
        }]      
      },
      {
        path:'mapa',
        children:[{
          path:'',
          loadChildren:'./mapa.module#MapaPageModule'
        }]
      },
      {
        path:'actividades',
        children:[{
          path:'',
          loadChildren:'./actividades.module#ActividadesPageModule'
        }]
      },
      {
        path:'consejos',
        children:[{
          path:'',
          loadChildren:'./consejos.module#ConsejosPageModule'
        }]
      },
      {
        path:'tienda',
        children:[{
          path:'',
          loadChildren:'./tienda.module#TiendaPageModule'
        }]
      },
      {
        path:'programa',
        children:[{
          path:'',
          loadChildren:'./programa.module#ProgramaPageModule'
        }]
      },
      {
        path:'pulsera',
        children:[{
          path:'',
          loadChildren:'./pulsera.module#PulseraPageModule'
        }]
      },
      {
        path:'lineUp',
        children:[{
          path:'',
          loadChildren:'./lineUp.module#LineUpPageModule'
        }]
      },
      {
        path:'influencers',
        children:[{
          path:'',
          loadChildren:'./influencers.module#InfluencersPageModule'
        }]
      },
      {
        path:'redes',
        children:[{
          path:'',
          loadChildren:'./redes.module#RedesPageModule'
        }]
      },
      {
        path:'media',
        children:[{
          path:'',
          loadChildren:'./media.module#MediaPageModule'
        }]
      },
      {
        path:'perfil',
        children:[{
          path:'',
          loadChildren:'./perfil.module#PerfilPageModule'
        }]
      },
      {
        path:'bienvenido',
        children:[{
          path:'',
          loadChildren:'./bienvenido.module#BienvenidoPageModule'
        }]
      },
      {
        path:'faqs',
        children:[{
          path:'',
          loadChildren:'./faqs.module#FaqsPageModule'
        }]
      },
      {
        path:'contacto',
        children:[{
          path:'',
          loadChildren:'./contacto.module#ContactoPageModule'
        }]
      },


    ],    
  }
];

@NgModule({
  imports: [
  	IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[MainPage,ActividadesModalPage,LineupModalPage],  
  exports:[RouterModule],
  entryComponents:[
    ActividadesModalPage,
    LineupModalPage
  ],
})
export class MainPageModule {}
