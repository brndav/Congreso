
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { Component, NgModule } from '@angular/core';

// vista general de componentes del congreso 
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

import { ListaPonenComponent } from './ponencias/lista-ponen/lista-ponen.component';

// vista general sociedad 
import { MesaDirecComponent } from './sociedad/mesa-direc/mesa-direc.component';
import { MembresiaSocComponent } from './sociedad/membresia-soc/membresia-soc.component';
import { PagosSocComponent } from './sociedad/pagos-soc/pagos-soc.component';
import { CongresoSocComponent } from './sociedad/congreso-soc/congreso-soc.component';
import { CongresoAnteComponent } from './sociedad/congreso-ante/congreso-ante.component';
import { CursoSocComponent } from './sociedad/curso-soc/curso-soc.component';


import { HomePage } from './home/home.page';

//iniciar sesión 
import { LoginComponent } from './login/login/login.component';

//registros
//registro general 
import { RegistrousuarioComponent } from './login/registrousuario/registrousuario.component';

//registro antiguo general 
import { ListUsuarioComponent } from './General/list-usuario.component';

//vistas administrador 
import { PerfilComponent } from './login/perfil/perfil.component';

//pruebas
import { PruebassComponent } from './pruebass/pruebass.component';
// guar para retringir  vistas 
import { AuthGuard } from './auth.guard';
import { PonenciaComponent } from './registroPonencia/ponencia/ponencia.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  //iniciar sesion 
  {
    path: 'login',
    component: LoginComponent
  },

  // congreso 
  {
    path: 'list-usuarios',
    component: ListUsuarioComponent
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
 
  // registros 
  {
    path: 'formulario/:id',
    component: PruebassComponent
  },
  // registro ant general 
  {
    path: 'generalf',
    component:ListUsuarioComponent
  },
  // registro usuarios 
   {
   path:'registrousuario',
     component:RegistrousuarioComponent
  },
// registro actividad 
{
  path:'registroAct',
  component:PonenciaComponent
},


// vistas administrador 
{ path: 'perfiles', component: PerfilComponent, canActivate: [AuthGuard] },
  
     // sociedad 
  
  {
    path: 'sociedad',
    loadChildren: () => import('./sociedad/sociedad.module').then( m => m.SociedadPageModule)
  },
  {
  path: 'mesa-direc', component: MesaDirecComponent
},
{
  path: 'membresia', component: MembresiaSocComponent
},
{
  path: 'pagos', component: PagosSocComponent
},
{
  path: 'congresos', component: CongresoSocComponent
},
{
  path: 'congreso-ante', component: CongresoAnteComponent
},
{
  path: 'cursos', component: CursoSocComponent
},
{
  path: 'perfil', component: PerfilComponent
},


  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [AuthGuard], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
