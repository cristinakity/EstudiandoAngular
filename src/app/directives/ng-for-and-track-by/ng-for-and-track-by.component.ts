import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for-and-track-by',
  templateUrl: './ng-for-and-track-by.component.html',
  styleUrls: ['./ng-for-and-track-by.component.css']
})
export class NgForAndTrackByComponent implements OnInit {

  teachers = [];
  alumns = [];

  constructor() { }

  ngOnInit(): void {
  }

  loadTeachers(){
    this.teachers = [
      {name:'Jones',    class:'History and Literature'},
      {name:'Smith',    class:'Chemical and Physical Biology'},
      {name:'Holmes',   class:'Neurobiology'},
      {name:'McGregor', class:'Social Studies'},
      {name:'Gilbert',  class:'Math 1'},
      {name:'Sontag',   class:'Spanish'},
      {name:'Gates',    class:'Math 2'},
      {name:'Segal',    class:'Math 3'}
    ];
  }

  loadAlumns(){
    this.alumns = [
      {name:'Annie J. Russell',     finalGrade:'89'},
      {name:'David J. King',        finalGrade:'100'},
      {name:'Timothy K. Hicks',     finalGrade:'76'},
      {name:'Thomas O. McLaughlin', finalGrade:'98'},
      {name:'Christopher F. Dix',   finalGrade:'70'},
      {name:'Lois J. Brokaw',       finalGrade:'90'},
      {name:'Eloise A. Hobson',     finalGrade:'79'},
      {name:'Edward E. Hoerner',    finalGrade:'85'}
    ];
  }

  trackAlumns(index, alumn){
    return alumn ? alumn.name : undefined;
  }

}
