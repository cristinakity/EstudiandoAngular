import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  customer = {
    name: "Jhon Wick",
    age: 40,
    money: 23999540.6533,
    height: 1.8320,
    birthday: new Date(1980,10,3)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
