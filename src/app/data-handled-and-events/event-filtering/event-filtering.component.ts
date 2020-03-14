import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-filtering',
  templateUrl: './event-filtering.component.html',
  styleUrls: ['./event-filtering.component.css']
})
export class EventFilteringComponent implements OnInit {
  isPrimary = true;
  log: string;
  clicks = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clicks ++;
    this.log = "Click event.<br/>" + this.log;
    console.log("Click event");
  }

  clearLog(){
    this.log = "";
    console.log("Clear log");
  }

  onKeyPressParameters($event){
    this.log = "KeyPress event." + $event.key + "<br/>" + this.log;
    console.log("KeyPress event"+ $event);
    console.log($event);
  }

  onKeyPress(){
    this.log = "KeyPress event.<br/>" + this.log;
    console.log("KeyPress event");
  }
}
