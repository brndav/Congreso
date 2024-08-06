import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private baseUrl = 'http://localhost:300'; // Ajusta la URL base según tu configuración

  constructor(private http: HttpClient) { }

  getPerfiles() {
    return this.http.get<any[]>(`${this.baseUrl}/perf/consulta`);
  }

  crearPerfil(perfil: any) {
    return this.http.post<any>(`${this.baseUrl}/perf/crear`, perfil);
  }

  actualizarPerfil(idPerfil: number, perfil: any) {
    return this.http.put<any>(`${this.baseUrl}/perf/actualizar/${idPerfil}`, perfil);
  }

  eliminarPerfil(idPerfil: number) {
    return this.http.delete<any>(`${this.baseUrl}/perf/eliminar/${idPerfil}`);
  }
  assignProfile(userId: number, perfilId: number) {
    return this.http.post<any>(`${this.baseUrl}/userp/usuario_perfil`, { idusuario: userId, id_perfil: perfilId });
  }
}
