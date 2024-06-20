// Componentes prinicpales 
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Pagina Home
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
//encabezado y menu prinicpal
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { MenuComponent } from '../menu/menu.component';

//Pagina de inicio
import { InicioComponent } from '../inicio/inicio.component';

//Menu general de actividades
import { MenuTallerComponent } from '../taller/menu-taller/menu-taller.component';
import { MenuConfeComponent } from '../conferencias/menu-confe/menu-confe.component';

// Menus de actividades virtuales y presenciales 
import { ListaPonenComponent } from './../ponencias/lista-ponen/lista-ponen.component';
import { ListConfVirComponent } from './../conferencias/list-conf-vir/list-conf-vir.component';
import { ListadoConfeComponent } from '../conferencias/listado-confe/listado-confe.component';
import { ListTallerVirComponent } from '../taller/list-taller-vir/list-taller-vir.component';
import { ListadoTalleresComponent } from '../taller/listado-talleres/listado-talleres.component';
import { CartelesComponent } from '../carteles/carteles.component';


//vista general de cada actvidad
import { ConfPresenComponent } from './../conferencias/conf-presen/conf-presen.component';
import { TallerComponent } from '../taller/taller.component';
import { TallerVirtualComponent } from '../taller/taller-virtual/taller-virtual.component';
import { ConcursoPrograComponent } from '../concurso-progra/concurso-progra.component';
import { ConcursoRoboticaComponent } from '../concurso-robotica/concurso-robotica.component';
import { CartelVistaComponent } from '../carteles/cartel-vista/cartel-vista.component';
import { ConfVirtualComponent } from '../conferencias/conf-virtual/conf-virtual.component';
import { DetallePonComponent } from '../ponencias/detalle-pon/detalle-pon.component';

//Componentes Formulario
import { ListUsuarioComponent } from '../Formulario/General/list-usuario.component';
import { PonenciaComponent } from '../Formulario/ponencia/ponencia.component';
import { RTallerComponent } from '../Formulario/r-taller/r-taller.component';
import { RCartelesComponent } from '../Formulario/r-carteles/r-carteles.component';
import { ConferenciaMComponent } from '../Formulario/conferencia-m/conferencia-m.component';
import { CRoboticaComponent } from '../Formulario/c-robotica/c-robotica.component';
import { CProgramacionComponent } from '../Formulario/c-programacion/c-programacion.component';
import { ServiciosService } from '../registro/servicio/servicios.service';

// Pie
import { PieComponent } from '../pie/pie.component';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  declarations: [HomePage,EncabezadoComponent,PieComponent,TallerComponent,TallerVirtualComponent,ConcursoPrograComponent,ConcursoRoboticaComponent,MenuComponent,ListadoTalleresComponent,InicioComponent,MenuTallerComponent,ListTallerVirComponent,
    CartelesComponent,MenuConfeComponent,ListadoConfeComponent,ConfPresenComponent,CartelVistaComponent,ListConfVirComponent,ListaPonenComponent,DetallePonComponent,ConfVirtualComponent,ListUsuarioComponent,PonenciaComponent,CRoboticaComponent,CProgramacionComponent,RTallerComponent,RCartelesComponent,ConferenciaMComponent],
providers:[ServiciosService],

  })

export class HomePageModule { }
