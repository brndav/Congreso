import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:300'; 
  private tokenKey = 'auth_token';
  private isLoggedInSubject: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) { 
    const token = localStorage.getItem(this.tokenKey);
    this.isLoggedInSubject = new BehaviorSubject<boolean>(!!token);
  }
  
  login(correo: string, contrasena: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/login`, { correo, contrasena })
    .pipe(
      tap(res => {
      // Almacena el token en localStorage al iniciar sesión exitosamente
      console.log('Login response:', res); 
        localStorage.setItem(this.tokenKey, res.token);
        console.log('Stored token after login:', localStorage.getItem(this.tokenKey));
        this.isLoggedInSubject.next(true);
      })
    );
  }

  logout() {
    // Elimina el token del localStorage al cerrar sesión
    localStorage.removeItem(this.tokenKey);
    this.isLoggedInSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem(this.tokenKey);
    return this.isLoggedInSubject.asObservable();
  }

  getToken(): string | null {
    // Obtiene el token del localStorage
    return localStorage.getItem(this.tokenKey);
  }
  getUserId(): number | null {
    const token = this.getToken();
    if (!token) {
      console.error('No token found');
      return null;
    }
  
    try {
      const payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payload));
      if (decodedPayload && decodedPayload.idusuario) {
        return decodedPayload.idusuario;
      } else {
        console.error('idusuario not found in token payload');
        return null;
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}