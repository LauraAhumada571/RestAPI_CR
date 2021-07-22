import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LocationComponent } from './componentes/location/location.component';

const routes: Routes = [
  {path: 'location', component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
