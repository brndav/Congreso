import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EjeService {
  private baseUrl = 'http://localhost:300';

  constructor(private http: HttpClient) { }
  getEjes() {
    return this.http.get<any[]>(`${this.baseUrl}/eje/consulta`);
  }

  crearEje(eje: any) {
    return this.http.post<any>(`${this.baseUrl}/eje/crear`, eje);
  }

  actualizarEje(idEje: number, eje: any) {
    return this.http.put<any>(`${this.baseUrl}/eje/actualizar/${idEje}`, eje);
  }

  eliminarEje(idEje: number) {
    return this.http.delete<any>(`${this.baseUrl}/eje/eliminar/${idEje}`);
  }

}
