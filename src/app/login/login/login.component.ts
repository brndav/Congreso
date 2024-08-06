import { Component } from '@angular/core';
import { AuthService } from '../loginusuario.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {
  correo: string = ''; // Inicialización vacía
  contrasena: string = ''; // Inicialización vacía
  loggedIn: boolean = false;
  nombreUsuario: string = '';

  constructor(private authService: AuthService, private router: Router,private cdr: ChangeDetectorRef) {  }

  

  onLogin() {
    this.authService.login(this.correo, this.contrasena).subscribe(
      (response: any) => {
        console.log('Respuesta del servidor:', response);

        if (response && response.token) {
          // Almacena el token en localStorage
          localStorage.setItem('auth_token', response.token);

           // Establece el estado de autenticación como true
           this.loggedIn = true;

          // Guarda el nombre de usuario en localStorage
          this.nombreUsuario = response.msg.split(',')[1].trim();

           // Mostrar mensaje de bienvenida
           alert(`Bienvenido, ${this.nombreUsuario}!`);

          localStorage.setItem('nombreUsuario', this.nombreUsuario);

          // Redirigir a la página de perfil o a donde sea necesario
          this.router.navigate(['/home']);
          this.cdr.detectChanges();
        } else {
          // Mostrar mensaje de alerta si la contraseña es incorrecta
          alert('Contraseña incorrecta. Por favor, inténtelo de nuevo.');
        }
      },
      error => {
        console.error('Error al intentar iniciar sesión:', error);
        // Mostrar mensaje de alerta si ocurre un error durante el inicio de sesión
        alert('Error en el inicio de sesión. Por favor, inténtelo de nuevo.');
      }
    );
  }
}