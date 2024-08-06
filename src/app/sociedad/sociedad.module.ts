import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SociedadPageRoutingModule } from './sociedad-routing.module';

import { SociedadPage } from './sociedad.page';
import { EncabezadoSocComponent } from './encabezado-soc/encabezado-soc.component';
import { CongresoAnteComponent } from './congreso-ante/congreso-ante.component';
import { CongresoSocComponent } from './congreso-soc/congreso-soc.component';
import { MenuSocComponent } from './menu-soc/menu-soc.component';
import { MembresiaSocComponent } from './membresia-soc/membresia-soc.component';
import { CursoSocComponent } from './curso-soc/curso-soc.component';
import { InicioSocComponent } from './inicio-soc/inicio-soc.component';

import { PieSocComponent } from './pie-soc/pie-soc.component';
import { MesaDirecComponent } from './mesa-direc/mesa-direc.component';
import { PagosSocComponent } from './pagos-soc/pagos-soc.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SociedadPageRoutingModule
  ],
  declarations: [SociedadPage,EncabezadoSocComponent,CongresoAnteComponent,CongresoSocComponent,MenuSocComponent,MembresiaSocComponent,CursoSocComponent,
    InicioSocComponent,PieSocComponent,MesaDirecComponent,PagosSocComponent
  ]
})
export class SociedadPageModule {}
