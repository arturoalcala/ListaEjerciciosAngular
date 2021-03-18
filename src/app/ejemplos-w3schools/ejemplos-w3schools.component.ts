import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-w3schools',
  templateUrl: './ejemplos-w3schools.component.html',
  styleUrls: ['./ejemplos-w3schools.component.css']
})
export class EjemplosW3schoolsComponent implements OnInit {

  // Number Types
  decimalValue: number = 10;
  hexaDecimalValue: number = 0xf10b;
  binaryValue: number = 0b110100;
  octalValue: number = 0o410;

  // String Types
  firstName: string = "Kunal";
  lastName: string = 'Chowdhury';
  message: string = `Hi, my name is: ${this.firstName} ${this.lastName}`;

  // Boolean Types
  isPrimaryAccount: boolean = true;
  hasCards: boolean = false;

  // Any Types
  dynamicList: any[] = [ "Kunal Chowdhury", 21, true ];

  // Array Types
  marks1: number[] = [80, 85, 75];
  marks2: Array<number> = [80, 85, 75];

  // Tuple Types
  person: [string, number] = ["Kunal", 2018];

  // Ejemplos
  points:number[]= [1,15,19,2,40, 9.0];

  constructor() { }

  ngOnInit(): void {
  }

}
