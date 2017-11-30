import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home.component';
import {AboutComponent} from './components/about.component';
import {SignupComponent} from './components/signup.component';
import {LoginComponent} from './components/login.component';
import {ProfileComponent} from './components/profile.component';
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
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);