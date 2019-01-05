import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';


export interface subject {
    nombre_materia : string,
}


@Injectable()
export class RatingService {

    constructor(private http: HttpClient,
        private router: Router) { }
    
        getGlobalPointsPerUser(id: number){
        return this.http.get('https://tutorias.dmcorrales.me/api/api/api.php?class=rating&q=loadRatingPerUser&id='+ id);
        }

        setPointsPerUser(cod_e, cod_r, points){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=rating&q=setRatingPerUser',{
            u_e : cod_e,
            u_r : cod_r,
            points: points
            });   
        }


   

}
