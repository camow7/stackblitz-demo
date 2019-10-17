import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MDBBootstrapModule.forRoot(), RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ProfileComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
