import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-switch-case',
  templateUrl: './ng-switch-case.component.html',
  styleUrls: ['./ng-switch-case.component.css']
})
export class NgSwitchCaseComponent implements OnInit {
  opcion:string ="iron-man";
  constructor() { }

  ngOnInit(): void {
  }

}
