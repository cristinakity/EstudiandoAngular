import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent implements OnInit {
  colSpan = 2;
  width = "200";
  title="Title attribute";
  imageLink = "https://duckduckgo.com/assets/logo_homepage.normal.v108.svg";
  paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  constructor() { }

  ngOnInit(): void {
  }

}
