import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<h1>{{name}}</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name = 'Emelie';
  ninjaCoder = {
      name: "Emelie",
      belt: "Blue"
  };

yell(e) {
    alert("I am yelling!");
    console.log(e);
}

}
