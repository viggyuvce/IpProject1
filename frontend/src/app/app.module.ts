import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';
import {HttpModule}     from '@angular/http';

import {FinalGradeComponent} from './components/final.grade';
import {LogoutComponent} from './components/logout.component';
import { AppComponent }  from './app.component';
import { HomeComponent}  from './components/home.component'
import {AboutComponent}  from './components/about.component'
import {SignupComponent} from './components/signup.component';
import {LoginComponent} from './components/login.component';
import {ProfileComponent} from './components/profile.component';
import {GradeComponent} from './components/grade.component';
import {ListComponent} from './components/list.component';
import {TheoryIntroComponent} from './components/theory.intro';
import {SCLComponent} from './components/courses/scl.component';
import {NoteDurationComponent} from './components/courses/noteDuration.component';
import {MeasuresComponent} from './components/courses/measures.component';
import {FinalComponent} from './components/courses/final.component';
import {InsertComponent} from './components/insert.component';
import {MusicComponent} from './components/music.component';
import {routing} from './app.routing';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent,HomeComponent, ListComponent,AboutComponent, SignupComponent, GradeComponent,LoginComponent, ProfileComponent
                ,LogoutComponent, TheoryIntroComponent,SCLComponent, NoteDurationComponent, MeasuresComponent,
                FinalComponent, InsertComponent, MusicComponent, FinalGradeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
