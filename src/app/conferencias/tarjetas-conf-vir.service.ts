import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TarjetasConfVirService {
tarjetaConfVir=[
  {
    id:'1',
    foto:'../../assets/icon/ADOLFO GUZMÁN.jpeg',
    titulo:'TALLER-APLICACIONES DE SENSORES EN ROBÓTICA',
    autor:'DR. ADOLFO MELÉNDEZ RAMÍREZ',
    fecha:'Martes 17 enero 2024',
    horario:'De 11:50:00 hrs. a 12:40:00 hrs. ',
    enlace: "/list-conf-vir/id1",
},
{
  id:'2',
    foto:'../../assets/icon/ADOLFO GUZMÁN.jpeg',
    titulo:'TALLER-APLICACIONES DE SENSORES EN ROBÓTICA',
    autor:'DR. ADOLFO MELÉNDEZ RAMÍREZ',
    fecha:'Martes 17 enero 2024',
    horario:'De 11:50:00 hrs. a 12:40:00 hrs. ',
    enlace: "/list-conf-vir/id2",
},
{
  id:'3',
  foto:'../../assets/icon/ADOLFO GUZMÁN.jpeg',
  titulo:'TALLER-APLICACIONES DE SENSORES EN ROBÓTICA',
  autor:'DR. ADOLFO MELÉNDEZ RAMÍREZ',
  fecha:'Martes 17 enero 2024',
  horario:'De 11:50:00 hrs. a 12:40:00 hrs. ',
  enlace: "/list-conf-vir/id3",
},
{
  id:'4',
    foto:'../../assets/icon/ADOLFO GUZMÁN.jpeg',
    titulo:'TALLER-APLICACIONES DE SENSORES EN ROBÓTICA',
    autor:'DR. ADOLFO MELÉNDEZ RAMÍREZ',
    fecha:'Martes 17 enero 2024',
    horario:'De 11:50:00 hrs. a 12:40:00 hrs. ',
    enlace: "/list-conf-vir/id4",
},
{
  id:'5',
    foto:'../../assets/icon/ADOLFO GUZMÁN.jpeg',
    titulo:'TALLER-APLICACIONES DE SENSORES EN ROBÓTICA',
    autor:'DR. ADOLFO MELÉNDEZ RAMÍREZ',
    fecha:'Martes 17 enero 2024',
    horario:'De 11:50:00 hrs. a 12:40:00 hrs. ',
    enlace: "/list-conf-vir/id5",
},
{
  id:'6',
  foto:'../../assets/icon/ADOLFO GUZMÁN.jpeg',
  titulo:'TALLER-APLICACIONES DE SENSORES EN ROBÓTICA',
  autor:'DR. ADOLFO MELÉNDEZ RAMÍREZ',
  fecha:'Martes 17 enero 2024',
  horario:'De 11:50:00 hrs. a 12:40:00 hrs. ',
  enlace: "/list-conf-vir/id6",
},
]
  constructor() { }
  gedtarjetaconfvir(){
    return this.tarjetaConfVir;
  }
  gedtarjetaConfVir(id:number){
    //let i=parseInt(id);
    return this.tarjetaConfVir[id];
  }
}
