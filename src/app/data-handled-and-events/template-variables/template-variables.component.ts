import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css']
})
export class TemplateVariablesComponent implements OnInit {
  fullName = "";
  constructor() { }

  ngOnInit(): void {
  }

  showFullName(name?:string,lastName?:string){
    console.log("name:" + name + " lastName:" + lastName);
    this.fullName = name + " " + lastName;
  }

}
