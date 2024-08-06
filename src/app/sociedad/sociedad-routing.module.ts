import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SociedadPage } from './sociedad.page';

const routes: Routes = [
  {
    path: '',
    component: SociedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SociedadPageRoutingModule {}
