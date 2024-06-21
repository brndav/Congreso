import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from "src/app/interfaces/usuario";
import { environment } from "src/environments/environment";
import { Institucion } from "src/app/interfaces/institucion";


@Injectable({
    providedIn:'root'
})
export class ServiciosService{
    private myAppUrl: string;
    private myApiUrl: string;
    private myApiUrlget: string;
    private myApiUrlgetin: string;
    
    

    constructor(private http:HttpClient) {
        this.myAppUrl= environment.endpoint;
        this.myApiUrl= 'api/usuario'
        this.myApiUrlget= 'api/consulta'
        this.myApiUrlgetin= 'insti/consulta/nom'
        
       
    }

   singIn(user:Usuario): Observable <any> {
   return this.http.post(this.myAppUrl + this.myApiUrl,user, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }).pipe(
    catchError(this.handleError)
  );
}
private handleError1(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getUsuario(): Observable<Usuario[]> {
    
    return this.http.get<Usuario[]>(this.myAppUrl + this.myApiUrlget)
      
  }
  getInstitucion(): Observable<Institucion[]> {
    return this.http.get<Institucion[]>(this.myAppUrl+this.myApiUrlgetin)
   
}




}
