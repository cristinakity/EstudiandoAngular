import { Component, OnInit } from '@angular/core';

interface Btn {
  isOn:boolean,
  text:string
}

@Component({
  selector: 'ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  btn1:Btn =  { isOn:false, text: "OFF"};
  btn2:Btn =  { isOn:false, text: "OFF"};
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(buttonNumber:number){
    switch(buttonNumber){
      case 1:
        this.btn1.isOn = !this.btn1.isOn;
        this.btn1.text = this.btn1.isOn ? "ON" : "OFF";
        break;
      case 2:
        this.btn2.isOn = !this.btn2.isOn;
        this.btn2.text = this.btn2.isOn ? "ON" : "OFF";
        break;
      default:
        break;
    }
  }

}
