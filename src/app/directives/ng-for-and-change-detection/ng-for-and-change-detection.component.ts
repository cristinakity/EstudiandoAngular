import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for-and-change-detection',
  templateUrl: './ng-for-and-change-detection.component.html',
  styleUrls: ['./ng-for-and-change-detection.component.css']
})
export class NgForAndChangeDetectionComponent implements OnInit {
  showAlert: boolean = false;
  alumno = {nombre: '', promedio: 0}

  alumnos = [
    {nombre: 'Juan Perez', promedio: 87},
    {nombre: 'Ana Hernandez', promedio: 98},
    {nombre: 'Armando Mendivil', promedio: 79},
    {nombre: 'Cecilia Arredondo', promedio: 85}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    if(this.alumno.nombre && this.alumno.promedio){      
      this.alumnos.push({nombre: this.alumno.nombre, promedio: this.alumno.promedio});
      this.alumno = {nombre:'',promedio:0}
      this.showAlert = false;
    }else{
      this.showAlert = true;
    }
  }

  onRemove(index:number){
    this.alumnos.splice(index,1);
  }

}
