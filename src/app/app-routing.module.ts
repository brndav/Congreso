
import { ListaPonenComponent } from './ponencias/lista-ponen/lista-ponen.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConcursoPrograComponent } from './concurso-progra/concurso-progra.component';
import { ConcursoRoboticaComponent } from './concurso-robotica/concurso-robotica.component';
import { MenuTallerComponent } from './taller/menu-taller/menu-taller.component';
import { TallerComponent } from './taller/taller.component';
import { ListadoTalleresComponent } from './taller/listado-talleres/listado-talleres.component';
import { ListTallerVirComponent } from './taller/list-taller-vir/list-taller-vir.component';
import { TallerVirtualComponent } from './taller/taller-virtual/taller-virtual.component';
import { CartelesComponent } from './carteles/carteles.component';
import { MenuConfeComponent } from './conferencias/menu-confe/menu-confe.component';
import { ConfPresenComponent } from './conferencias/conf-presen/conf-presen.component';
import { ListadoConfeComponent } from './conferencias/listado-confe/listado-confe.component';
import { CartelVistaComponent } from './carteles/cartel-vista/cartel-vista.component';
import { ListConfVirComponent } from './conferencias/list-conf-vir/list-conf-vir.component';
import { ConfVirtualComponent } from './conferencias/conf-virtual/conf-virtual.component';
import { DetallePonComponent } from './ponencias/detalle-pon/detalle-pon.component';
import { ListUsuarioComponent } from './Formulario/General/list-usuario.component';
import { PonenciaComponent } from './Formulario/ponencia/ponencia.component';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'concursoprogra',
    component: ConcursoPrograComponent
  },
  {
    path: 'concursorobotica',
    component: ConcursoRoboticaComponent
  },
  {
    path: 'menutaller',
    component: MenuTallerComponent
  },
  {
    path: 'listadotaller',
    component: ListadoTalleresComponent
  },
  {
    path: 'tallerpresen',
    component: TallerComponent
  },
  {
    path: 'listtallervirtual',
    component: ListTallerVirComponent
  },
  {
    path: 'tallervirtual',
    component: TallerVirtualComponent
  },
  {
    path: 'listacarteles',
    component: CartelesComponent
  },
  {
    path: 'menuconfe',
    component: MenuConfeComponent
  },
  {
    path: 'listaconfe',
    component: ListadoConfeComponent
  },
  {
    path: 'confpresen',
    component: ConfPresenComponent
  },
  {
    path: 'confvirtual',
    component: ConfVirtualComponent
  },
  {
    path: 'cartelvista',
    component: CartelVistaComponent
  },
  {
    path: 'listaconfevir',
    component: ListConfVirComponent
  },
  {
    path: 'listaponen',
    component: ListaPonenComponent
  },
  {
    path: 'detallepon',
    component: DetallePonComponent
  },
  // { path: '', component: ListUsuarioComponent },
  // { path: 'ponencia', component: PonenciaComponent } // Ruta para el componente de ponencia
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
