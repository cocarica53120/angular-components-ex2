import { Moment } from 'moment';

export type Person = {
  name: string,
  birthDate: Moment
}

export type Persons = Person[];
