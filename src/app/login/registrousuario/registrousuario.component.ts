
import { Component, OnInit } from '@angular/core';
import { RegistrousuarioService } from '../registrousuario.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.scss'],
})
export class RegistrousuarioComponent  implements OnInit {

  nuevoRegistro: any = { registrar: '' };
  instituciones: any[] = []; // Variable para almacenar las instituciones
  usuarioAgregado: boolean = false;
  constructor(private registrousuarioService: RegistrousuarioService, private router: Router) { }

  ngOnInit() {
  this.obtenerInstituciones(); // Llama a la función para obtener instituciones al inicializar
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
      this.usuarioAgregado = true; // Muestra la alerta de usuario agregado
      setTimeout(() => {
        this.usuarioAgregado = false; // Oculta la alerta después de unos segundos
        this.router.navigate(['/login']); // Redirige al componente login
      }, 5000); // Tiempo en milisegundos (5 segundos)
    },
    (error) => {
      console.error('Error al crear usuario', error);
    }
  );
}
}