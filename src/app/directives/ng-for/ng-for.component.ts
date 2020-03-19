import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  exportsValues = [
  {name: 'index', type: 'number', description: 'Es el indice del elemento actual de la iteracion.'},
  {name: 'first', type: 'boolean', description: 'Es true cuando el item actual es el primero de la iteracion.'},
  {name: 'last', type: 'boolean', description: 'Es true cuando el item actual es el ultimo elemento de la iteracion.'},
  {name: 'even', type: 'boolean', description: 'Es true cuando el indice del item actual es par.'},
  {name: 'odd', type: 'boolean', description: 'Es true cuando el indice del item actual es impar.'}
  ];

  alumnos = [
    {nombre: 'Juan Perez', promedio: 87},
    {nombre: 'Ana Hernandez', promedio: 98},
    {nombre: 'Armando Mendivil', promedio: 79},
    {nombre: 'Cecilia Arredondo', promedio: 85}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
