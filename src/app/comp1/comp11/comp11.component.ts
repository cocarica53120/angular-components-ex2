import { Component, OnInit, Input } from '@angular/core';
import { Comp11Service } from './comp11.service';
import { Person, Persons } from './person';


import * as moment from 'moment';
// https://material.angular.io/components/datepicker/overview
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-comp11',
  templateUrl: './comp11.component.html',
  styleUrls: ['./comp11.component.css']
})
export class Comp11Component implements OnInit {

  @Input() title = "comp11";
  @Input() idx: number = 0;
  private person: Person;
  private age: string;
  private startDate;

  constructor(public data: Comp11Service) { 
  }
  
  ngOnInit() {
    // console.log('ngOnInit comp11');
    this.person = this.data.getPerson(this.idx);
    this.age = moment.duration(moment.now() - this.person.birthDate).asYears().toFixed();
    this.startDate = this.person.birthDate.format();//new Date(1990, 0, 1);
  }

  events: string[] = [];

  dateInput(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log('dateInput', event.value)
    this.events.push(`${type}: ${event.value}`);
  }
  dateChange(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log('dateChange', event.value)
    this.events.push(`${type}: ${event.value}`);
    this.person.birthDate = event.value;
    console.log('newBirthdate', this.person.birthDate);
    this.age = moment.duration(moment.now() - this.person.birthDate).asYears().toFixed();
    
  }

}