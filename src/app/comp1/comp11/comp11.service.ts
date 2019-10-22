import { Injectable } from '@angular/core';
import { Person, Persons } from './person';
import * as moment from 'moment';

@Injectable()
export class Comp11Service {

  private _persons: Persons = [
    {
      name: 'toto',
      birthDate: moment.utc("02-25-1995", "MM-DD-YYYY"),
    },
    {
      name: 'titi',
      birthDate: moment.utc("12-05-2005", "MM-DD-YYYY"),
    }
  ]
  constructor() { }

  get persons(): Persons {
    return this._persons;
  }
  set persons(tab: Persons) {
    Object.assign(this._persons, tab);
  }

  getPerson(id: number): Person {
    return this.persons[id];
  }

  addPerson(person: Person) {
    this.persons.push(person);
  }

}