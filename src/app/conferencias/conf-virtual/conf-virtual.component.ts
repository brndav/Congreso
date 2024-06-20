import { Component, OnInit } from '@angular/core';
import { InfoListTallerVirtualService } from '../info-list-taller-virtual.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conf-virtual',
  templateUrl: './conf-virtual.component.html',
  styleUrls: ['./conf-virtual.component.scss'],
})
export class ConfVirtualComponent  implements OnInit {
  detalleid:any={
  };
  i:string = "";
  constructor(private serviceInfoListTallerVirtual:InfoListTallerVirtualService, private rutaActiva:ActivatedRoute) { 

  }

  ngOnInit() {
this.rutaActiva.paramMap.subscribe(p => {
  this.i=p.get('id')+"";
  console.log (this.i);
  let id= parseInt(this.i);
  this.detalleid=this.serviceInfoListTallerVirtual.gedinfotallvid((id-1));
  console.log(this.detalleid.id)
})
  }
}