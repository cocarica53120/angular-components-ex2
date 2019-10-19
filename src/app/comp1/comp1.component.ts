import { Component, OnInit } from '@angular/core';
import { Comp11Component } from './comp11/comp11.component';
import { Comp11Service } from './comp11/comp11.service';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  private comp11s: Comp11Component[];

  constructor(data: Comp11Service) { 
    this.comp11s = [];
    this.comp11s.push(new Comp11Component(data));
    this.comp11s.push(new Comp11Component(data));
  }

  ngOnInit() {
  }

}