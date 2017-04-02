import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  coders = [
    { name: 'Emelie', belt: 'black' },
    { name: 'Johannes', belt: 'red' },
    { name: 'Charlie', belt: 'purple' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
