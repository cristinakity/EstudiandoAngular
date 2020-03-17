import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'output-properties',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  @Output() change= new EventEmitter();
  log: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange (name) {
    this.name = name
    let message = 'Name changed: ' + this.name
    this.log = message + '<br>' + this.log
    console.log(message)
    this.change.emit();
  }

  onAgeChange (age) {
    this.age = age
    let message = 'Age changed: ' + this.age
    this.log = message + '<br>' + this.log
    console.log(message)
    this.change.emit();
  }
}