import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/registro/servicio/servicios.service';
import { Institucion } from 'src/app/interfaces/institucion';

@Component({
  selector: 'app-r-carteles',
  templateUrl: './r-carteles.component.html',
  styleUrls: ['./r-carteles.component.scss'],
})
export class RCartelesComponent  implements OnInit {
  instituciones: Institucion[] = [];

  opcionSeleccionado: string  = '0';
    verSeleccion: number       = 0;
  
  constructor(private servicio: ServiciosService) { }

  ngOnInit(): void {
    this.servicio.getInstitucion().subscribe((response: Institucion[]) => {
      this.instituciones = response;
    });
  }
  capturar() {

    const institucionSeleccionada = this.instituciones.find((i) => i.id_institucion === +this.opcionSeleccionado);
  
    if (institucionSeleccionada) {
  
      this.verSeleccion = institucionSeleccionada.id_institucion;
      console.log(this.verSeleccion)
    }
  }
  
 
}