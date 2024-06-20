import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/registro/servicio/servicios.service';
import { Robot } from'src/app/interfaces/robot';

@Component({
  selector: 'app-c-robotica',
  templateUrl: './c-robotica.component.html',
  styleUrls: ['./c-robotica.component.scss'],
})
export class CRoboticaComponent  implements OnInit {
  robots: any[] = [];
  constructor( private servicio: ServiciosService) { }

  ngOnInit(): void {
    this.servicio.getRobot().subscribe(data => {
      this.robots = data; 
     });
    
    }
  }


