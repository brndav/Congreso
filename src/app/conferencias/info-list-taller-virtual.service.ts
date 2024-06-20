import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoListTallerVirtualService {

infotallv=
[
  {
    id:1,
    titulo:'Una Introducción a los robots de servicio de propósito general',
    imagen:'../../assets/icon/ADOLFO GUZMÁN.jpeg',
    descripcion1: 'El Dr. Adolfo Guzmán Arenas es Ingeniero en Comunicaciones y Electrónica de la ESIME del Instituto Politécnico Nacional (IPN). Obtuvo su Maestría y su Doctorado en Ciencias de la Computación en el Instituto Tecnológico de Massachusetts (MIT), EE.UU. Fue profesor del Departamento de Ingeniería Eléctrica del MIT del Departamento de Inteligencia Mecánica de la Universidad de Edimburgo del Centro de Investigación y Estudios Avanzados del IPN,  donde fundó la Maestría y Doctorado en Computación del Instituto de Investigación en Matemáticas Aplicadas y Sistemas, de la UNAM, donde fue jefe del Departamento de Computación y de la Unidad Interdisciplinaria (UPIICSA) del IPN. Fue director del Centro Científico IBM para América Latina, IBM de México, S.A',
    fecha:'Martes 17 enero 2024',
    hora:'De 11:50:00 hrs. a 12:40:00 hrs.',
    enlace1:  'https://meet.google.com/ctw-ezhh-rox',
    accesso: 'acceso'
  },
  {
    id:2,
    titulo:'TALLER-APLICACIONES DE SENSORES EN ROBÓTICA',
    imagen:'../../assets/icon/ADOLFO GUZMÁN.jpeg',
    descripcion1: 'De 1987–1993 desempeño dando Mantenimiento de equipo de cómputo e instructor de software de cómputo en general e instalación de Redes en diferentes filiales de IBM y de manera independiente hasta la fecha (más de 30 años). Desde 1992 como Docente en el Tecnológico de Estudios superiores de Ecatepec (TESE) Impartiendo diversas materias como: Ingeniería de Software, Bases de Datos, Teleproceso y Redes, Sistemas Abiertos, Análisis y diseño de sistemas, Sistemas Digitales, Arquitectura de computadoras, Teoría general de sistemas, Software de sistemas, Principios eléctricos y aplicaciones digitales, Física General, Matemáticas Discretas, Sistemas Programables. Desde 2002 como docente en el CECyT #3 “Estanislao Ramírez Ruiz” (Voca 3) impartiendo materias como: Dispositivos electrónicos, Redes Digitales, Instrumentación Electrónica, Programación Visual',
    fecha:'Martes 17 enero 2024',
    hora:'De 11:50:00 hrs. a 12:40:00 hrs.',
    enlace1:  'https://meet.google.com/ctw-ezhh-rox',
    accesso: 'llamada'
  },
  {
    id:3,
    titulo:'TALLER-INTEGRAL NEXUS: DESENCADENANDO LA INNOVACIÓN CON IA GENERATIVA',
    imagen:'../../assets/icon/ADOLFO GUZMÁN.jpeg',
    descripcion1: 'Orgullosamente titulado en el Tecnológico de Estudios Superiores de Ecatepec como M.I.S.C. especializado en desarrollo multiplataforma y soluciones tecnológicas avanzadas. Experto en integración de servicios de inteligencia artificial enfocados en la banca, atención a clientes y amplia experiencia en desarrollo de aplicaciones de software. Apasionado por la implementación de soluciones empresariales disruptivas y la integración de tecnologías de IoT de vanguardia para abordar desafíos en la industria de TI',
    fecha:'Martes 17 enero 2024',
    hora:'De 11:50:00 hrs. a 12:40:00 hrs.',
    enlace1:  'https://meet.google.com/ctw-ezhh-rox',
    accesso: 'acceso'
  },
  {
    id:4,
    titulo:'TALLER-INTRODUCCIÓN A ROS Y OPENCV',
    imagen:'../../assets/icon/ADOLFO GUZMÁN.jpeg',
    descripcion1: 'Profesor investigador de tiempo completo en el Departamento de Irrigación de la Universidad Autónoma Chapingo y parte del núcleo académico básico del Programa de Posgrado en Ingeniería Agrícola y Uso Integral del Agua (IAUIA). Graduado como Ingeniero Mecánico en Agricultura (2005) por la Universidad Autónoma Chapingo. Cuenta con Maestría en Ingeniería Agrícola con especialización en visión artificial (2008-2010) y Doctorado en Ingeniería Agrícola con especialización en robótica agrícola (2010-2013) por la Universidad de Agricultura de Tokio (TUA). ',
    fecha:'Martes 17 enero 2024',
    hora:'De 11:50:00 hrs. a 12:40:00 hrs.',
    enlace1:  'https://meet.google.com/ctw-ezhh-rox',
    accesso: 'llamada'
  }
]

  constructor() { }
  gedInfoTallV(){
    return this.infotallv;
  }
  gedinfotallvid(id:number){
    //let i=parseInt(id);
    return this.infotallv[id];
  }
  
  
  
}
