import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [

    {
        path: 'adminPanel',
        redirectTo: '/admin',
        pathMatch: 'full'
    },
        {
        path: 'login',
        redirectTo: '/signin/login',
        pathMatch: 'full'
        },
        {
        path: 'user',
        redirectTo: '/user',
        pathMatch: 'full'
        },
        {
        path: '**',
        redirectTo: '/signin/login',
        pathMatch: 'full'   
        }

];

export const GeneralRouting = RouterModule.forRoot(routes);