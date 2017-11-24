import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';
import {HttpModule}     from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent}  from './components/home.component'
import {AboutComponent}  from './components/about.component'
import {SignupComponent} from './components/signup.component';
import {LoginComponent} from './components/login.component';

import {routing} from './app.routing';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent,HomeComponent, AboutComponent, SignupComponent, LoginComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
