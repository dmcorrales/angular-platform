import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin.component';
import { SigninGuard } from './signin.guard';
import { RegistroComponent} from './registro/registro.component'


const SiginRoutes: Routes = [
    { 
    path: 'signin', 
    component: SigninComponent,
    canActivate: [SigninGuard],
    children: 
    [ {path: 'login', component: LoginComponent},
      {path: 'registro',component: RegistroComponent} ]
    }
];

export const SigninRouting = RouterModule.forRoot(SiginRoutes);
