import { Component, Input, OnInit } from '@angular/core';
import { Ejercicio } from '../ejercicio';

@Component({
  selector: 'app-ejercicio-detalle',
  templateUrl: './ejercicio-detalle.component.html',
  styleUrls: ['./ejercicio-detalle.component.css']
})
export class EjercicioDetalleComponent implements OnInit {

  @Input() ejercicioRealizado: Ejercicio;

  constructor() { }

  ngOnInit(): void {
  }

}
