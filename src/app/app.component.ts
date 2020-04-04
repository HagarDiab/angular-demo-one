import { Component } from '@angular/core';

@Component({ //decorator imported from @angular/core -- built in in angular
  selector: 'app-root', //will be html tag to represent app.component.html content
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // template: '<h1> app command </h1>'
  // styles:[
  //   'h1{ background-color: blue; }'
  // ]
})
export class AppComponent {
  title = 'demo-one';  //by default public
  name = 'Mohammed';
  divColor = 'blue';

  onClick(ev){
    console.log(ev);
  }
}
