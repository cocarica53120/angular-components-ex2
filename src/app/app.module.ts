import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp11Component } from './comp1/comp11/comp11.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, Comp1Component, Comp11Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
