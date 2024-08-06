import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistroasesorService {

  private baseUrl = 'http://localhost:300'; // 
  
  constructor(private http: HttpClient) { }

  registrarUsuario(registrar: any): Observable<any> {
    // Encripta la contraseña antes de enviarla al servidor
    registrar.contrasena = (registrar.contrasena, 10);
    
    return this.http.post<any>(`${this.baseUrl}/api/crear`, registrar);
  }

  obtenerInstituciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/insti/consulta/nom`);
  }

}
