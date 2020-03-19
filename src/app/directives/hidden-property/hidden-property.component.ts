import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hidden-property',
  templateUrl: './hidden-property.component.html',
  styleUrls: ['./hidden-property.component.css']
})
export class HiddenPropertyComponent implements OnInit {
  isOn:boolean;
  text:string="OFF";
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.isOn = !this.isOn;
    this.text = this.isOn ? "ON" : "OFF";
  }

}
