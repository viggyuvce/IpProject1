import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GradeComponent} from './components/grade.component';
import {HomeComponent} from './components/home.component';
import {AboutComponent} from './components/about.component';
import {LogoutComponent} from './components/logout.component';
import {SignupComponent} from './components/signup.component';
import {LoginComponent} from './components/login.component';
import {ProfileComponent} from './components/profile.component';
import {ListComponent} from './components/list.component';
import { TheoryIntroComponent } from './components/theory.intro';
import {SCLComponent} from './components/courses/scl.component';
const appRoutes: Routes = [
    {
        path : '',
        component: HomeComponent
    },
    {
        path : 'about',
        component: AboutComponent
    },
    {
        path : 'signup',
        component: SignupComponent
    },
    {
        path : 'login',
        component: LoginComponent
    },
    {
        path : 'profile',
        component: ProfileComponent
    },
    {
        path : 'logout',
        component: LogoutComponent
    },
    {
        path : 'grades',
        component: GradeComponent
    },
    {
        path : 'list/:id',
        component: ListComponent
    },
    {
        path : 'basicMusicTheory/intro',
        component: TheoryIntroComponent
    },
    {
        path : 'course/scl',
        component: SCLComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);