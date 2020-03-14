import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {
  longText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper pellentesque libero nec sollicitudin. Vivamus semper, ipsum sit amet varius elementum, neque dolor dignissim sem, at pretium lorem odio a elit. Pellentesque in purus nec dui mollis consequat. Cras varius lacus vel ex euismod, in rutrum lacus vehicula. Ut at eros eu dui mollis feugiat. Aliquam eros velit, congue maximus varius a, hendrerit id ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sodales imperdiet mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec lobortis ante posuere nunc imperdiet, et sollicitudin diam ultrices.

  Aenean ac erat ante. Curabitur dui leo, congue at pretium ac, sagittis a erat. Donec vestibulum in metus at vestibulum. Praesent sed ex blandit mi malesuada tempus. Nulla felis odio, ornare nec ultricies at, consequat a lectus. In hac habitasse platea dictumst. Etiam vel leo in ante tincidunt pellentesque ac non diam. Mauris mauris enim, facilisis ut faucibus dictum, faucibus at sapien.
  
  Morbi consequat convallis leo, ut semper ante tincidunt vitae. Etiam fringilla massa id nunc ultrices, et iaculis dui dapibus. Nunc sapien orci, ullamcorper et commodo et, blandit at purus. Ut sem risus, hendrerit a purus in, laoreet tempus eros. Proin gravida imperdiet ex ut eleifend. Vestibulum id nibh quis nibh dapibus pellentesque. Duis consequat eros at velit ullamcorper, in pharetra risus tempus. Vivamus nibh erat, scelerisque et dignissim nec, porta id velit. Cras in lacus rhoncus, pretium ex sed, hendrerit diam. Duis ut massa nisl. Nullam et purus sed elit tempus congue. Donec malesuada eros ligula, eget ullamcorper elit viverra eget.
  
  Sed nec vehicula nulla. Pellentesque euismod auctor est, a aliquet lorem tristique vitae. Suspendisse id tellus imperdiet arcu tincidunt mattis vitae nec sem. Nulla ultricies placerat neque in fringilla. Ut risus elit, dapibus ut ipsum ut, semper tempus mi. Aliquam turpis lorem, lobortis sed ex id, aliquam vestibulum risus. Suspendisse potenti. Sed quis aliquam sapien. Aliquam a placerat dolor. Vivamus quis porta neque. Praesent dapibus sollicitudin risus, quis scelerisque turpis consectetur sit amet. Aliquam vestibulum erat at magna cursus tincidunt. Nunc tincidunt dignissim sollicitudin.
  
  Aliquam metus neque, egestas in ultricies vel, sagittis sed arcu. Maecenas dapibus nibh in tempor semper. Proin quis ante molestie, auctor dolor semper, congue ex. Maecenas arcu metus, tristique condimentum dolor eget, porta tempor dui. Donec aliquam ante a est eleifend efficitur. Vestibulum malesuada, felis a rhoncus fringilla, mi lacus lobortis ex, vel ultrices ligula nisi quis velit. Etiam aliquet, nibh at tempor porta, turpis odio tincidunt tellus, vestibulum hendrerit magna est at nunc. Integer eget dapibus justo. Phasellus a efficitur est. Nam id quam eu sapien lacinia dictum.
  `
  constructor() { }

  ngOnInit(): void {
  }

}
