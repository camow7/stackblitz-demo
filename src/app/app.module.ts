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

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const paths: {}[] = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent}
];

  var firebaseConfig = {
    apiKey: "AIzaSyDrv6vg4gUl4hCjMN3Bq5qLRYuRr7T2fn4",
    authDomain: "camandstackblitz.firebaseapp.com",
    databaseURL: "https://camandstackblitz.firebaseio.com",
    projectId: "camandstackblitz",
    storageBucket: "camandstackblitz.appspot.com",
    messagingSenderId: "155136640336",
    appId: "1:155136640336:web:307c5e04c7c0cc0b70d855",
    measurementId: "G-Y2VZ5FB93Z"
  };



@NgModule({
  imports:      [ BrowserModule, FormsModule, MDBBootstrapModule.forRoot(), RouterModule.forRoot(paths),
                      AngularFireModule.initializeApp(firebaseConfig), AngularFireDatabaseModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ProfileComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
