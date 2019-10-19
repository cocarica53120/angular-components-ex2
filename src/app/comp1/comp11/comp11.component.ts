import { Component, OnInit } from '@angular/core';
import { Comp11Service } from './comp11.service';


@Component({
  selector: 'app-comp11',
  templateUrl: './comp11.component.html',
  styleUrls: ['./comp11.component.css']
})
export class Comp11Component implements OnInit {

  constructor(public data: Comp11Service) { 
    // this._data = data;
    console.log('ctor comp11', this, 'data', data );
    console.log('person', data.persons[0])
  }

  
  ngOnInit() {
    console.log('ngOnInit comp11');
  }

}