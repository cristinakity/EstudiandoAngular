import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'building-reusable-components',
  templateUrl: './building-reusable-components.component.html',
  styleUrls: ['./building-reusable-components.component.css']
})
export class BuildingReusableComponentsComponent implements OnInit {
  log: string = '';
  eventDataActualValue = true;
  emmitCounter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onOutputPropertyChange(){
    this.emmitCounter++;
    let message =this.emmitCounter + "-Output Property Change Raised.";
    this.log = message + '<br>' + this.log
    console.log(message);
  }

  onEventDataChange($event){
    this.eventDataActualValue = $event;
  }

}
