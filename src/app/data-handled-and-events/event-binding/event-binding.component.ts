import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
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
