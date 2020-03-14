import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'input-properties',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})
export class InputPropertiesComponent implements OnInit {
  @Input() name: string
  @Input() age: number

  log: string = ''

  constructor () {}

  ngOnInit (): void {}

  onNameChange (name) {
    this.name = name
    let message = 'Name changed: ' + this.name
    this.log = message + '<br>' + this.log
    console.log(message)
  }

  onAgeChange (age) {
    this.age = age
    let message = 'Age changed: ' + this.age
    this.log = message + '<br>' + this.log
    console.log(message)
  }
}
