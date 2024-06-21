import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/registro/servicio/servicios.service';


@Component({
  selector: 'app-c-robotica',
  templateUrl: './c-robotica.component.html',
  styleUrls: ['./c-robotica.component.scss'],
})
export class CRoboticaComponent  implements OnInit {
  
  constructor( private servicio: ServiciosService) { }

  ngOnInit(): void {
   
  }
}

