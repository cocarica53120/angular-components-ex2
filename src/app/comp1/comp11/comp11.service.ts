import { Injectable } from '@angular/core';

@Injectable()
export class Comp11Service {

  private _persons = [
    {
      name: 'toto',
      age: 45
    },
    {
      name: 'titi',
      age: 4
    },
    
  ]
  constructor() { }

  get persons(): any[] {
    console.log('get persons', this._persons)
    return this._persons;
  }
  set persons(tab: any[]) {
    console.log('set persons. this._persons=', this._persons, 'tab=', tab)
    Object.assign(this._persons, tab);
    console.log('set persons', this._persons)
  }

}