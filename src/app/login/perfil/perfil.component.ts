import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent  implements OnInit {

  perfiles: any[];
  nuevoPerfil: any = { perfiles: '', estatus_perfil: 1 };
  perfilEditando: any = null; // Variable para almacenar el perfil que se está editando
  nombreUsuario: string = '';

  constructor(private perfilService: PerfilService) {
    this.perfiles = [];
  }




  ngOnInit() {
    this.obtenerPerfiles();
      // Obtener el nombre de usuario almacenado en localStorage
      this.nombreUsuario = localStorage.getItem('nombreUsuario') || '';
  }
  obtenerPerfiles() {
    this.perfilService.getPerfiles().subscribe(
      (data) => {
        this.perfiles = data;
      },
      (error) => {
        console.error('Error al obtener perfiles', error);
      }
    );
  }
  crearPerfil() {
    this.perfilService.crearPerfil(this.nuevoPerfil).subscribe(
      (data) => {
        this.obtenerPerfiles();
        this.nuevoPerfil.perfiles = '';
      },
      (error) => {
        console.error('Error al crear perfil', error);
      }
    );
  }

  toggleStatus(perfil: any) {
    const nuevoEstado = perfil.estatus_perfil ? 0 : 1;
    this.perfilService.actualizarPerfil(perfil.id_perfil, { estatus_perfil: nuevoEstado }).subscribe(
      (data) => {
        perfil.estatus_perfil = nuevoEstado;
      },
      (error) => {
        console.error('Error al actualizar estado del perfil', error);
      }
    );
  }

  editarPerfil(perfil: any) {
    // Copiar el perfil a editar para no modificar el original directamente en la lista
    this.perfilEditando = { ...perfil };
  }

  cancelarEdicion() {
    this.perfilEditando = null;
  }

  actualizarPerfil() {
    if (this.perfilEditando) {
      this.perfilService.actualizarPerfil(this.perfilEditando.id_perfil, this.perfilEditando).subscribe(
        (data) => {
          this.obtenerPerfiles();
          this.perfilEditando = null; // Limpiar el perfil editando después de actualizar
        },
        (error) => {
          console.error('Error al actualizar perfil', error);
        }
      );
    }
  }

  eliminarPerfil(idPerfil: number) {
    if (confirm('¿Estás seguro de eliminar este perfil?')) {
      this.perfilService.eliminarPerfil(idPerfil).subscribe(
        (data) => {
          this.obtenerPerfiles();
        },
        (error) => {
          console.error('Error al eliminar perfil', error);
        }
      );
    }
  }
}

