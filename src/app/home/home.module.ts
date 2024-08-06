
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
import { SliderComponent } from '../slider/slider.component';

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
import { ListUsuarioComponent } from '../General/list-usuario.component';
import { ServiciosService } from '../registro/servicio/servicios.service';

// Pie
import { PieComponent } from '../pie/pie.component';
import { PruebassComponent } from '../pruebass/pruebass.component';
import { LoginComponent } from '../login/login/login.component';
import { RegistrousuarioComponent } from '../login/registrousuario/registrousuario.component';
import { PerfilComponent } from '../login/perfil/perfil.component';
import { RegistroasesorComponent } from '../administrador/registroasesor/registroasesor.component';
import { PonenciaComponent } from '../registroPonencia/ponencia/ponencia.component';









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
    CartelesComponent,MenuConfeComponent,ListadoConfeComponent,ConfPresenComponent,CartelVistaComponent,ListConfVirComponent,ListaPonenComponent,DetallePonComponent,ConfVirtualComponent,
    ListUsuarioComponent,SliderComponent,PruebassComponent,
    LoginComponent,RegistrousuarioComponent,PerfilComponent, RegistroasesorComponent,PonenciaComponent],
providers:[ServiciosService],

  })

export class HomePageModule { }
