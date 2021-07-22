import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from "jquery";

//importación de todos los componentes
import { AppComponent } from './app.component';
import { CrearUbicacionComponent } from './componentes/crea_ubicacion/crear-ubicacion/crear-ubicacion.component';
import { LocationComponent } from './componentes/location/location.component';



@NgModule({
  declarations: [
    AppComponent,
    CrearUbicacionComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
