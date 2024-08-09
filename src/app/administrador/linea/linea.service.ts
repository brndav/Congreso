import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LineaService {

  private baseUrl = 'http://localhost:300';

  constructor(private http: HttpClient) { }

    getLineas() {
      return this.http.get<any[]>(`${this.baseUrl}/linea/consulta`);
    }
  
    crearLinea(linea: any) {
      return this.http.post<any>(`${this.baseUrl}/linea/crear`, linea);
    }
  
    actualizarLinea(idLinea: number, linea: any) {
      return this.http.put<any>(`${this.baseUrl}/linea/actualizar/${idLinea}`, linea);
    }
  
    eliminarLinea(idLinea: number) {
      return this.http.delete<any>(`${this.baseUrl}/linea/eliminar/${idLinea}`);
    }
}

