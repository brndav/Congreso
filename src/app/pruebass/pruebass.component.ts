
import { ServiciosService } from './../registro/servicio/servicios.service';
import { Component, OnInit } from '@angular/core';
import { Ejes } from '../interfaces/ejes';
import { LinEje } from '../interfaces/linea_eje';
import { Linea } from '../interfaces/linea';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ddI } from '../interfaces/ddI';

@Component({
  selector: 'app-pruebass',
  templateUrl: './pruebass.component.html',
  styleUrls: ['./pruebass.component.scss'],
})
export class PruebassComponent  implements OnInit {

  areas: Linea[]= [];
  selectedArea: number=0;
  verSeleccion: number = 0;
  categorias: Ejes[]= [];
  categoriasEjes: LinEje[]= [];
  datos: ddI[] = [];
  descripcionesEje: string[] = [];
  selectedEje: string='';
  constructor( private servicio: ServiciosService,private ruta:ActivatedRoute) { }

  ngOnInit(): void {
this.cargarLineas();

  }

  cargarLineas(): void {
    this.servicio.getLinea().subscribe((areas: Linea[]) => {
      this.areas = areas;
 this.ruta.params.subscribe((params: any) => {
   this.selectedArea = +params.id_linea;
   console.log(this.selectedArea);
    });
  })
}
 
capturar() {

  this.servicio.getidLinea(this.selectedArea).subscribe((response) => {

    this.datos = response as ddI[];

    this.descripcionesEje = this.datos.map(dato => dato.eje.descripcion_eje.trim());

  });

}

  

}