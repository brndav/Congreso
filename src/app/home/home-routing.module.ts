import { MenuComponent } from './../menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ConcursoPrograComponent } from '../concurso-progra/concurso-progra.component';
import { ConcursoRoboticaComponent } from '../concurso-robotica/concurso-robotica.component';
import { MenuTallerComponent } from '../taller/menu-taller/menu-taller.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
