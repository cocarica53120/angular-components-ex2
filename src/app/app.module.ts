import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp11Component } from './comp1/comp11/comp11.component';
import { Comp11Service } from './comp1/comp11/comp11.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
                  BrowserAnimationsModule,
                  MatSliderModule, MatDatepickerModule,
                  MatNativeDateModule,
                ],
  declarations: [ AppComponent, HelloComponent, Comp1Component, Comp11Component ],
  bootstrap:    [ AppComponent ],
  providers: [Comp11Service]
})
export class AppModule { }
