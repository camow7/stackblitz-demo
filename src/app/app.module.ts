import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MDBBootstrapModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
