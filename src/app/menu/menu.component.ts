import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../registro/servicio/servicios.service';
import { Actividades } from '../interfaces/actividades';
import { AuthService } from '../login/loginusuario.service';
import { ChangeDetectorRef } from '@angular/core';
import { PerfilService } from '../login/perfil.service';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  
actividad: Actividades[]=[];
opcionSeleccionado: string = '0';
verSeleccion: number = 0;
isLoggedIn: boolean = false;
perfiles: any[] = [];
userId: number | null = null;

  constructor(private servicio:ServiciosService,private router: Router,private authService: AuthService,private perfilService: PerfilService, private cdr: ChangeDetectorRef, private http: HttpClient) { }


  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
      this.cdr.detectChanges(); // Forzar la detección de cambios
    });
    //obtener actividades 
    this.servicio.getActividad().subscribe((response) => {
      this.actividad = response;
    });
     // Obtener perfiles
     this.obtenerPerfiles();
  

  this.userId = this.authService.getUserId(); // Asegúrate de que este método exista en AuthService
  }


  obtenerPerfiles(): void {
    this.perfilService.getPerfiles().subscribe(
      (data) => {
        this.perfiles = data;
      },
      (error) => {
        console.error('Error al obtener perfiles', error);
      }
    );
  }

  capturar() {
    const actividadSeleccionada = this.actividad.find((i) => i.id_actividad === +this.opcionSeleccionado);
    if (actividadSeleccionada) {
      this.verSeleccion =actividadSeleccionada.id_actividad;
    }
  }
  
  logout() {
    this.authService.logout();
    // Actualiza el estado de isLoggedIn para ocultar el avatar y menú desplegable
    this.isLoggedIn = false;
    // Redirige a la página de inicio de sesión u otra página adecuada
    this.router.navigate(['/home']);
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }


  // identificacion perfil 
  redirectToProfile(id_perfil: number) {
    const userId = this.authService.getUserId(); // Obtén el id del usuario autenticado
  
    if (userId) {
      this.perfilService.assignProfile(userId, id_perfil).subscribe(response => {
        console.log('Perfil vinculado exitosamente', response);
      }, error => {
        console.error('Error al vincular perfil', error);
      });
    }
  }
  
}
