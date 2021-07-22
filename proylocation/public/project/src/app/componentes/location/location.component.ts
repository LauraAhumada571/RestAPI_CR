import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//importación de servicios
import { LocationService } from '../../servicios/location/location.service';
//importación de interfaces
import { Loc } from '../../interfaces/loc/loc';

declare var $;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  private location = <Loc>{};
  private updatelocation = <Loc>{};
  private newlocation = <Loc>{};
  private locations: Loc[] = [];
  private updateLocationForm: FormGroup;
  private createLocationForm: FormGroup;
  private create_modal: boolean = false;
  private update_modal: boolean = false;
  private delete_modal: boolean = false;
  private deletelocation: string;

  constructor(private location_service: LocationService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.updateLocationForm = this.formBuilder.group({
      id: [''],
      name: [''],
      area_m2: [''],
      acceptTerms: [true]
    });

    this.createLocationForm = this.formBuilder.group({
      id: [''],
      name: [''],
      area_m2: [''],
      acceptTerms: [true]
    });
    
    
    this.findLocations();
  }

  // permite obtener los datos del formulario Editar una ubicacion
  get editar() { return this.updateLocationForm.controls; }


  private findLocations(): void {
    
    this.location_service.findLocation()
    .subscribe(dato => {
      const keys = Object.keys(dato); 
      const valores = Object.values(dato);

      this.locations = valores;
    })
  }

  //permite habilitar el modal para editar un registro en la tabla loc de la BD location
  private activate_modal_update(id: string): void{
    for(var i = 0; i < this.locations.length; i++){
      if(this.locations[i].id == id){
        this.location = this.locations[i];
      }
    }
    this.location_service.data_location(this.location);
    this.form_update();
    this.update_modal = true;
  }

  //permite habilitar el modal para eliminar un registro en la tabla loc de la BD location
  private activate_modal_delete(id: string): void{
    this.deletelocation = id;
    this.delete_modal = true;
  }

  //permite habilitar el modal para crear un registro en la tabla loc de la BD location
  private activate_modal_create(id: string): void{
    for(var i = 0; i < this.locations.length; i++){
      if(this.locations[i].id == id){
        return;
      }
    }
    this.create_modal = true;
  }
  

  //llena el formulario para editar una ubicacion
  private form_update(): void{
    this.updateLocationForm = this.formBuilder.group({
      id: [this.location_service.location.id],
      name: [this.location_service.location.name],
      area_m2: [this.location_service.location.area_m2],
      acceptTerms: [true]
    });
  }

  //llena array de los datos a eliminar de una ubicacion
  private form_delete(location: Loc): void{
    this.location_service.location = {
      id: location.id,
      name: location.name,
      area_m2: location.area_m2
    }
  }

  // envia los datos para actualizar una ubicación
 private sendUpdateLocation(): void {

    if (this.updateLocationForm.invalid) {
        return;
    }

    this.update_LocationForm(this.updateLocationForm.value);
    this.location_service.update_location(this.updatelocation)
    .subscribe(dato =>{
      //this.alertas.actualizado();
      this.closeUpdateModal();
      this.findLocations();
    }, error => {
      //this.alertas.error();
      });
  }

  //permite deshabilitar el modal de editar una ubicacion
  private closeUpdateModal(): void{
    this.update_modal = false;
  }

  //permite deshabilitar el modal de elimnar una ubicacion
  private closeDeleteModal(): void{
    this.delete_modal = false;
  }

  //permite deshabilitar el modal de elimnar una ubicacion
  private closeCreateModal(): void{
    this.create_modal = false;
    this.clearModalCreateLocation();
  }

   //permite declarar un array con los datos actualziados de la ubicación
   private update_LocationForm(form): void{
    this.updatelocation = { 
      id: form.id,
      name: String(form.name),
      area_m2: form.area_m2,
    };
  }

  //permite eliminar un dato de la tabla loc
  private sendDeleteLocation(){
    this.location_service.delete_location(this.deletelocation)
    .subscribe(dato =>{
      this.closeDeleteModal();
      this.findLocations();
    }, error => {
      console.log("error", error);
      //this.alertas.error();
      });
  }

  //permite eliminar un dato de la tabla loc
  private sendCreateLocation(location: Loc){
    this.location = {
      id: this.createLocationForm.controls['id'].value,
      name: this.createLocationForm.controls['name'].value,
      area_m2: this.createLocationForm.controls['area_m2'].value,
    }

    this.location_service.create_location(this.location)
    .subscribe(dato =>{
      this.clearModalCreateLocation();
      this.closeCreateModal();
      this.findLocations();
    }, error => {
      console.log("error", error);
      });
  }

  //permite limpiar el formulario para agregar un dato a la tabla loc
  private clearModalCreateLocation(){
    this.createLocationForm.controls['id'].reset();
    this.createLocationForm.controls['name'].reset();
    this.createLocationForm.controls['area_m2'].reset();
  }

}
