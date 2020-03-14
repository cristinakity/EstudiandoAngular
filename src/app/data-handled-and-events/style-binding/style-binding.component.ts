import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  text="Texto de ejemplo";
  isSuccess = false;
  successColor="green";
  dangerColor="red";
  theadBackgroundColor = "skyblue";
  colSpan = 2;
  width = "50";
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
