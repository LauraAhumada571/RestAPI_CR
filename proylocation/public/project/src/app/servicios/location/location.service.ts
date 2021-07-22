import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Loc } from '../../interfaces/loc/loc';
import { map } from 'rxjs/operators';
import { ServerBackendService } from '../../servicios/server-backend/server-backend.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient,
    private server: ServerBackendService) { }

    public location = <Loc>{};

  //consumiendo servicio por url para consultar las ofertas laborales del sistema
  public findLocation(){
    return this.http.get<Loc[]>(`${this.server.dominio}/findLocations`)
    .pipe(map(res => res));
  }

  //permite almacenar los datos de una ubicacion 
  public data_location(location: Loc){
    this.location = location;
  }

  //permite actualizar los datos de una ubicacion 
  public update_location(location: Loc){
    return this.http.put<Loc[]>(`${this.server.dominio}/updateLocation`, location)
    .pipe(map(res => res));
  }

  //permite eliminar los datos de una ubicacion 
  public delete_location(id: string){
    return this.http.delete(`${this.server.dominio}/deleteLocation/${id}`)
    .pipe(map(res => res));
  }

  //permite crear un resgitro de una ubicacion 
  public create_location(location: Loc){
    console.log(location);
    return this.http.post(`${this.server.dominio}/createLocation`, location)
    .pipe(map(res => res));
  }
}
