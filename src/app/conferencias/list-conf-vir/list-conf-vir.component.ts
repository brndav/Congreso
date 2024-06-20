
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarjetasConfVirService } from '../tarjetas-conf-vir.service';

@Component({
  selector: 'app-list-conf-vir',
  templateUrl: './list-conf-vir.component.html',
  styleUrls: ['./list-conf-vir.component.scss'],
})
export class ListConfVirComponent  implements OnInit {

  detalleid:any={
  };
  i:string = "";
  constructor(private serviceTarjetasConfVir: TarjetasConfVirService, private rutaActiva:ActivatedRoute) { 

  }


  ngOnInit() {
    this.rutaActiva.paramMap.subscribe(p => {
      this.i=p.get('id')+"";
      console.log (this.i);
      let id= parseInt(this.i);
      this.detalleid=this.serviceTarjetasConfVir.gedtarjetaConfVir((id-1));
      console.log(this.detalleid.id)
    })
  }}
