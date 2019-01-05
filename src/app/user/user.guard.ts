import { Injectable } from '@angular/core';
import {  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable'; 
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators' 
import { Router } from '@angular/router'
@Injectable()
export class UserGuard implements CanActivate{
constructor(private userService: UserService,
            private router: Router){
}

canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.userService.quienSoy().pipe(map(res =>{
            //VALIDACIÓN BÁSICA , REDIRECCIÓN PARA LOS CASOS SEGÚN RANGO.
            if(res.id > 0 && res.rango < 3){
                return true;
           // }else if(res.id > 0 && res.rango >= 1 && res.rango <= 2){
            //    this.router.navigate(['/user'])
             //   return false;
            }else{
                console.log("3")
                this.router.navigate(['/login'])
                return false;
            }
        }));
    }
}