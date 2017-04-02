import { Component, OnInit, Input } from '@angular/core';

@Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    homeTitle = "Welcome to the homepage...";

    @Input() ninjaCoder;

    constructor() { }

      ngOnInit() {
      }

}
