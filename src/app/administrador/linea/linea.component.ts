import { Component, OnInit } from '@angular/core';
import { LineaService } from './linea.service';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.scss'],
})
export class LineaComponent implements OnInit {
  lineas: any[] = [];
  nuevaLinea: any = { descripcion_linea: '' };
  lineaEditando: any = null;
  nombreUsuario: string = '';

  constructor(private lineaService: LineaService) {}

  ngOnInit() {
    this.obtenerLineas();
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || '';
  }

  obtenerLineas() {
    this.lineaService.getLineas().subscribe(
      (data) => {
        this.lineas = data;
      },
      (error) => {
        console.error('Error al obtener lineas', error);
      }
    );
  }

  crearLinea() {
    this.lineaService.crearLinea(this.nuevaLinea).subscribe(
      (data) => {
        this.obtenerLineas();
        this.nuevaLinea = { descripcion_linea: '' }; // Resetear el formulario
      },
      (error) => {
        console.error('Error al crear linea', error);
      }
    );
  }

  editarLinea(linea: any) {
    // Copiar la línea a editar para no modificar el original directamente en la lista
    this.lineaEditando = { ...linea };
  }

  cancelarEdicion() {
    this.lineaEditando = null;
  }

  actualizarLinea() {
    if (this.lineaEditando) {
      this.lineaService.actualizarLinea(this.lineaEditando.id_linea, this.lineaEditando).subscribe(
        (data) => {
          this.obtenerLineas(); // Actualizar la lista de líneas
          this.lineaEditando = null; // Limpiar después de actualizar
        },
        (error) => {
          console.error('Error al actualizar línea', error);
        }
      );
    }
  }

  eliminarLinea(idLinea: number) {
    if (confirm('¿Estás seguro de eliminar esta línea?')) {
      this.lineaService.eliminarLinea(idLinea).subscribe(
        (data) => {
          this.obtenerLineas(); // Actualizar la lista después de eliminar
        },
        (error) => {
          console.error('Error al eliminar línea', error);
        }
      );
    }
  }
}
