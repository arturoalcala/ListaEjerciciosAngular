import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../ejercicio';
import { EJERCICIOS } from '../collection-ejercicios';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  ejercicio: Ejercicio =
  {
    id: 1,
    name: 'Flexiones'
  };

  ejercicios=EJERCICIOS;

  ejercicioRealizado: Ejercicio;

  ingredientes:Array<string>=["Sal", "Pimienta"];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectEjercicicio(ejercicio: Ejercicio): void {
    console.log("Hiciste ejercicio de tipo: " + ejercicio.name);
    this.ejercicioRealizado = ejercicio;
  }

  agregarIngrediente(ingrediente: string) {
    if (ingrediente && ingrediente.trim() !== null) {
      this.ingredientes.push(ingrediente);
    }
  }
}
