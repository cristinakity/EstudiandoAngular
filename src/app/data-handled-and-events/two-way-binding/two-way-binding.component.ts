import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  data:string = "Two-way binding variable.";
  constructor() { }

  ngOnInit(): void {
  }

}
