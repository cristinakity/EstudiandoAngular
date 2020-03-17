import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'passing-event-data',
  templateUrl: './passing-event-data.component.html',
  styleUrls: ['./passing-event-data.component.css']
})
export class PassingEventDataComponent implements OnInit {
  @Output() change = new EventEmitter();
  @Input() isOn:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isOn = !this.isOn;
    this.change.emit(this.isOn);
  }

}
