import { EjeService } from './eje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eje',
  templateUrl: './eje.component.html',
  styleUrls: ['./eje.component.scss'],
})
export class EjeComponent  implements OnInit {

  ejes: any[] = [];
  nuevoEje: any = { descripcion_eje: '' };
  ejeEditando: any = null;
  nombreUsuario: string = '';

  constructor(private ejeService:EjeService) { }

  ngOnInit() {
    this.obtenerEjes();
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || '';
  }
  obtenerEjes() {
    this.ejeService.getEjes().subscribe(
      (data) => {
        this.ejes = data;
      },
      (error) => {
        console.error('Error al obtener ejes', error);
      }
    );
  }

  crearEje() {
    this.ejeService.crearEje(this.nuevoEje).subscribe(
      (data) => {
        this.obtenerEjes();
        this.nuevoEje = { descripcion_eje: '' }; // Resetear el formulario
      },
      (error) => {
        console.error('Error al crear eje', error);
      }
    );
  }

  editarEje(eje: any) {
    // Copiar la línea a editar para no modificar el original directamente en la lista
    this.ejeEditando = { ...eje };
  }

  cancelarEdicion() {
    this.ejeEditando = null;
  }

  actualizarEje() {
    if (this.ejeEditando) {
      this.ejeService.actualizarEje(this.ejeEditando.id_eje, this.ejeEditando).subscribe(
        (data) => {
          this.obtenerEjes(); // Actualizar la lista de ejes
          this.ejeEditando = null; // Limpiar después de actualizar
        },
        (error) => {
          console.error('Error al actualizar eje', error);
        }
      );
    }
  }

  eliminarEje(idEje: number) {
    if (confirm('¿Estás seguro de eliminar este eje ?')) {
      this.ejeService.eliminarEje(idEje).subscribe(
        (data) => {
          this.obtenerEjes(); // Actualizar la lista después de eliminar
        },
        (error) => {
          console.error('Error al eliminar eje', error);
        }
      );
    }
  }
}
