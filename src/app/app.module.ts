import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { EjercicioDetalleComponent } from './ejercicio-detalle/ejercicio-detalle.component';
import { EjemplosW3schoolsComponent } from './ejemplos-w3schools/ejemplos-w3schools.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EjerciciosComponent,
    EjercicioDetalleComponent,
    EjemplosW3schoolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
