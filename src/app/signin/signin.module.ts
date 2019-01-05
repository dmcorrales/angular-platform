import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// COMPONENTES
import { LoginComponent } from './login/login.component'
import { SigninComponent } from './signin.component'

//ENRUTAMIENTOS
import { SigninRouting } from './signin.routing'

//SERVICIOS
import { AuthenticationService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';
import { SigninGuard } from './signin.guard';
import { RegistroComponent } from './registro/registro.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SigninRouting,
    ReactiveFormsModule,
    MDBBootstrapModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    LoginComponent,
    SigninComponent,
    RegistroComponent
  ],
  providers:[
    AuthenticationService,
    NotificationService,
    SigninGuard
  ]
})

export class SigninModule {}
