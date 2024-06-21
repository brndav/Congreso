import { MenuTallerComponent } from './../taller/menu-taller/menu-taller.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
   {
    path: '',
    component: HomePage
  }, 
  {
    path: 'Taller',
    component: MenuTallerComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
