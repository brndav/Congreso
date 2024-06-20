


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../../registro/servicio/servicios.service';
import { Usuario } from '../../interfaces/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Institucion } from '../../interfaces/institucion';


@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss'],
})
export class ListUsuarioComponent  implements OnInit {

  
 loginForm= new FormGroup ({
  idusuario: new FormControl(""),
  nombre: new FormControl(""),
  paterno: new FormControl(""),
  materno: new FormControl(""),
  telefono: new FormControl(""),
  correo: new FormControl(""),
  contrasena: new FormControl(""),
  id_institucion: new FormControl(""),

}) 

instituciones: Institucion[] = [];


  opcionSeleccionado: string = '0';

  verSeleccion: number = 0;



constructor(private servicio :ServiciosService){
}


  ngOnInit(): void {
   
    this.servicio.getInstitucion().subscribe((response: Institucion[]) => {

      this.instituciones = response;

    });

  }


  capturar() {

    const institucionSeleccionada = this.instituciones.find((i) => i.id_institucion === +this.opcionSeleccionado);
   

    if (institucionSeleccionada) {

      this.verSeleccion =institucionSeleccionada.id_institucion;
      

    }

  }
  
  

     user:Usuario={
      idusuario: 0,
nombre: '',
paterno:'',
materno: '',
telefono: '',
correo: '',
contrasena: '',
id_institucion:0
}
idusuario:number=0
nombre: string =''
paterno: string=''
materno: string=''
telefono: string=''
correo: string=''
contrasena: string=''
id_institucion: number=0


recupera1(){
 
  this.idusuario=parseInt(this.loginForm.value.idusuario+'',10)
  this.nombre=this.loginForm.value.nombre+''
  this.paterno=this.loginForm.value.paterno+''
  this.materno=this.loginForm.value.materno+''
  this.telefono=this.loginForm.value.telefono+''
  this.correo=this.loginForm.value.correo+''
  this.contrasena=this.loginForm.value.contrasena+''
  this.id_institucion=this.verSeleccion
  
  
this.user.idusuario=this.idusuario
  this.user.nombre=this.nombre
  this.user.paterno=this.paterno
  this.user.materno=this.materno
  this.user.telefono=this.telefono
  this.user.correo=this.correo
  this.user.contrasena=this.contrasena
 this.user.id_institucion = this.id_institucion; 
 

  
  console.log(this.user);
  this.servicio.singIn(this.user).subscribe(data=>{
    console.log(data)
    console.log('datos insertados correctamente')
  },
       
  
  error => {
    console.error('Error al añadir usuario:', error);
  }
)

}

}











