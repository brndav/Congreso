import { Registro } from './../../interfaces/registro';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from "src/app/interfaces/usuario";
import { environment } from "src/environments/environment";
import { Institucion } from "src/app/interfaces/institucion";
import { Presentacion } from 'src/app/interfaces/presentacion';
import { Exposicion } from 'src/app/interfaces/exposicion';
import { Usuario1 } from 'src/app/interfaces/Usuario1';
import { Linea } from 'src/app/interfaces/linea';
import { LinEje } from 'src/app/interfaces/linea_eje';
import { Actividades } from 'src/app/interfaces/actividades';
import {Autor} from 'src/app/interfaces/autores'
@Injectable({
    providedIn:'root'
})
export class ServiciosService{
  
    private myAppUrl: string;
    private myApiUrl: string;
    private myApiUrlget: string;
    private myApiUrlgetin: string;
    private myApiUrlreg: string;
    private myApiUrlpre: string;
    private myApiUrlexp: string;
    private myApiUrllogin: string;
    private myApiUrllin: string;
    private myApiUrleje: string;
    private myApiUrllinej: string;
    private myApiUrlact: string;
    private myApiUrlautor: string;
    private myApiUrlgetaut: string;
    private myApiUrldeletau: string 

    
    constructor(private http:HttpClient) {
        this.myAppUrl= environment.endpoint;
        this.myApiUrl= 'api/usuario'
        this.myApiUrllogin= 'api/login'
        this.myApiUrlget= 'api/vista'
        this.myApiUrlget= 'api/consulta'
        this.myApiUrlgetin= 'insti/consulta/nom'
        this.myApiUrlreg= 'regis/crear'
        this.myApiUrlpre= 'formap/consulta/descrip'
        this.myApiUrlexp= 'modexp/consulta/descrip'
        this.myApiUrllin= 'linea/consulta/descrip'
        this.myApiUrllinej= 'lineje/filtrar'
        this.myApiUrleje= 'eje/consulta/descrip'
        this.myApiUrlact= 'activ/filtrar'

        this.myApiUrlautor= 'autor/crear'
        this.myApiUrlgetaut= 'autor/detalles'
        this.myApiUrldeletau= 'autor/'

      
       
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
getActividad(): Observable<Actividades[]>{
  return this.http.get<Actividades[]>(this.myAppUrl+this.myApiUrlact)
}
registro(form:Registro): Observable <any>{
  console.log (form);
  return this.http.post(this.myAppUrl + this.myApiUrlreg,form,
   {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      catchError(this.handleError)
    );

}
getPresentacion(): Observable <Presentacion[]>{
  return this.http.get<Presentacion[]>(this.myAppUrl + this.myApiUrlpre)
}
  
getExposicion(): Observable<Exposicion[]>{
  return this.http.get<Exposicion[]>(this.myAppUrl + this.myApiUrlexp)
}

getLinea(): Observable< Linea[]>{
  return this.http.get<Linea[]>(this.myAppUrl + this.myApiUrllin)
}
getidLinea(id:number): Observable<LinEje[]>{
  console.log("id_linea"+id)
  return this.http.get<LinEje[]>(this.myAppUrl + this.myApiUrllinej + "/"+id)
}

login(user: Usuario1): Observable<string> {
  return this.http.post<string>(this.myApiUrl + this.myApiUrllogin, user);
}

agregarAutor(id:number): Observable<any>{
  return this.http.post<any>(this.myAppUrl + this.myApiUrlautor,{
    idusuario:id});
}
getAutor(): Observable<Autor[]> {
  return this.http.get<Autor[]>(this.myAppUrl + this.myApiUrlgetaut)
}
deleteAutor(id_autores: number): Observable<any> {
  return this.http.delete<any>(`${this.myAppUrl}${this.myApiUrldeletau}${id_autores}`)
}
}