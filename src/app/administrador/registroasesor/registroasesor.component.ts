import { Component, OnInit } from '@angular/core';
import { RegistrousuarioService } from 'src/app/login/registrousuario.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registroasesor',
  templateUrl: './registroasesor.component.html',
  styleUrls: ['./registroasesor.component.scss'],
})
export class RegistroasesorComponent  implements OnInit {
  form= new FormGroup({});
  nuevoRegistro: any = { registrar: '' };
  instituciones: any[] = []; // Esta 

  constructor(private registrousuarioService: RegistrousuarioService) { }

  ngOnInit() {
    this.obtenerInstituciones(); 
  }
  obtenerInstituciones() {
    this.registrousuarioService.obtenerInstituciones().subscribe(
      (data) => {
        this.instituciones = data; // Almacena las instituciones obtenidas del servicio
      },
      (error) => {
        console.error('Error al obtener instituciones', error);
      }
    );
  }
  
  registrarUsuario() {
    this.registrousuarioService.registrarUsuario(this.nuevoRegistro).subscribe(
      (data) => {
        this.nuevoRegistro = {}; // Limpia el formulario después de registrar
      },
      (error) => {
        console.error('Error al crear usuario', error);
      }
    );
  }
}
