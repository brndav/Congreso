import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/registro/servicio/servicios.service';
import { Registro } from 'src/app/interfaces/registro';
import { Exposicion } from 'src/app/interfaces/exposicion';
import { Presentacion } from 'src/app/interfaces/presentacion';
import { ddI } from 'src/app/interfaces/ddI';
import { Linea } from 'src/app/interfaces/linea';
import { Usuario } from 'src/app/interfaces/usuario';
import {Autor} from 'src/app/interfaces/autores';

@Component({
  selector: 'app-ponencia',
  templateUrl: './ponencia.component.html',
  styleUrls: ['./ponencia.component.scss'],
})
export class PonenciaComponent  implements OnInit {
  
   loginForm= new FormGroup({
    id_registros: new FormControl(""),
    titulo: new FormControl(""),
    resumen: new FormControl(""),
    descripcion: new FormControl(""),
    abstract: new FormControl(""),
    resena_curricular: new FormControl(""),
    foto: new FormControl(""),
    id_usuario: new FormControl(""),
    id_actividad_cat: new FormControl(""),
    id_linea_eje: new FormControl(""),
    id_forma: new FormControl(""),
    id_modalidad:new FormControl(""),
    
  })
  presen: Presentacion[]=[];
  opcionSeleccionado: string = '0';
  verSeleccion: number = 0;

  expo:Exposicion[]=[];
  opcionSeleccionado2: string = '0';
  verSeleccion2: number = 0;

  areas: Linea[]= [];
  selectedArea: number=0;
  idLineaEje: number = 0;
  datos: ddI[] = [];
  descripcionesEje: { id_eje: number, descripcion_eje: string }[] = [];
  selectedEje: string='';
  verSeleccion3: number =0;

  showTables: boolean = false;

  persona: Usuario[]=[];
  autor: any[]=[];
  datos2: Autor[] = [];
  detallesaut: {id_autores: number,nombre: string, paterno: string, materno: string}[] = [];

  

  
   

  constructor(private servicio: ServiciosService, private ruta:ActivatedRoute) { 

  }
  ngOnInit(): void {
         
      this.servicio.getPresentacion().subscribe((response) =>{
      this.presen=response;
    }); 

    this.servicio.getExposicion().subscribe((response) =>{
      this.expo=response;
    });
    
    this.cargarLineas();

 this.verUsuario();
 this.capturar5();
    
  }
  cargarLineas(): void {
    this.servicio.getLinea().subscribe((areas: Linea[]) => {
      this.areas = areas;
 this.ruta.params.subscribe((params: any) => {
   this.selectedArea = +params.id_linea;
   console.log(this.selectedArea);
    });
  })
}
 


  capturar(){
    const presentacionSeleccionada = this.presen.find((i) => i.id_forma === +this.opcionSeleccionado);

    if (presentacionSeleccionada){
      this.verSeleccion= presentacionSeleccionada.id_forma;
    }
  }
  capturar2(){
    const exposicionSeleccionada = this.expo.find((e) => e.id_modalidad === +this.opcionSeleccionado2);

    if (exposicionSeleccionada){
      this.verSeleccion2= exposicionSeleccionada.id_modalidad;
    }    
  }
  capturar3(): void {
    this.servicio.getidLinea(this.selectedArea).subscribe((response) => {
      this.datos = response as ddI[];
      this.descripcionesEje = this.datos.map(dato => ({
        id_eje: dato.eje.id_eje,
        descripcion_eje: dato.eje.descripcion_eje.trim()
      }));
    });
  }
  capturar4(): void{
    const idLineaEjeEncontrado = this.datos.find(dato => dato.eje.id_eje === +this.selectedEje);
        if (idLineaEjeEncontrado) {
          this.verSeleccion3= idLineaEjeEncontrado.id_linea_eje
          
  
  }
  }
  toggleTables() {
    this.showTables = !this.showTables;
  }
verUsuario(){
  this.servicio.getUsuario(). subscribe((data) => {
    this.persona = data
  });
}

agregarAutor(idusuario:number):void {
  this. servicio.agregarAutor(idusuario).subscribe((response) => { 
    console.log('Autor agregado:', response);
    this.capturar5();
  });
}
 eliminarAutor(id_autores:number):void {
  this.servicio.deleteAutor(id_autores).subscribe((response) => {
    console.log('Autor eliminado:', response);
    this.capturar5();
  });
}
capturar5(): void {
  this.servicio.getAutor().subscribe((autoresResponse) => {
    this.datos2 = autoresResponse;
    this.detallesaut = this.datos2.map(autor => ({
      id_autores: autor.id_autores,
      nombre: autor.usuario.nombre,
      paterno: autor.usuario.paterno,
      materno: autor.usuario.materno
    }));
  });
}
  
    
 form: Registro={
  id_registros:0,
    titulo: '', 
    resumen:'',   
    abstract: '',
    resena_curricular: '',
    foto:'',
    id_usuario: 0,
    id_actividad_cat: 0,
    id_linea_eje: 0,
    id_forma:0,
    id_modalidad:0
   
 }
 id_registros: number=0;
    titulo: string='';
    resumen: string='';
    abstract: string='';
    resena_curricular: string='';
    foto: string='';
    id_usuario: number=0;
    id_actividad_cat: number=0;
    id_linea_eje: number=0;
    id_forma:number=0;
    id_modalidad:number=0
   
    

    Obtener(){
      this.id_registros=parseInt(this.loginForm.value.id_registros+'',10)
      this.titulo=this.loginForm.value.titulo+''
      this.resumen=this.loginForm.value.resumen+''
      this.abstract=this.loginForm.value.abstract+''
      this.resena_curricular=this.loginForm.value.resena_curricular+''
      this.foto=this.loginForm.value.foto+''
      this.id_usuario=parseInt(this.loginForm.value.id_usuario+'',10)
      this.id_actividad_cat=parseInt(this.loginForm.value.id_actividad_cat+'',10)
      this.id_linea_eje=this.verSeleccion3;
      this.id_forma=this.verSeleccion;
      this.id_modalidad=this.verSeleccion2;
      

      this.form.id_registros=this.id_registros
      this.form.titulo=this.titulo
      this.form.resumen=this.resumen
      this.form.abstract=this.abstract
      this.form.resena_curricular=this.resena_curricular
      this.form.foto=this.foto
      this.form.id_usuario=this.id_usuario
      this.form.id_actividad_cat=this.id_actividad_cat
      this.form.id_linea_eje=this.id_linea_eje
      this.form.id_forma=this.id_forma
      this.form.id_modalidad=this.id_modalidad;
    

      console.log(this.form);
      this.servicio.registro().subscribe(data=>{
        console.log(data)
        console.log('datos insertados correctamente')
      },
      error => {
        console.error('Error al añadir usuario:', error);
      })


    }


   
 
}
