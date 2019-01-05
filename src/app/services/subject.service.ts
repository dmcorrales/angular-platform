import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';


export interface subject {
    nombre_materia : string,
}


@Injectable()
export class SubjectService {

    constructor(private http: HttpClient,
        private router: Router) { }
    
    getSubjects(){
        return this.http.get('https://tutorias.dmcorrales.me/api/api/api.php?class=materias&q=loadSubjects');
    }

    setSubjects(cod_info_materia, nombre_materia){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=materias&q=setSubjects', {
            cod_info_materia: cod_info_materia,
            nombre_materia: nombre_materia
        });
    }

    removeSubject(cod_info_materia){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=materias&q=removeSubject', { 
            cod_info_materia : cod_info_materia
    })
    }

    getSubjectsById(cod_user): Observable<any>{
        return this.http.get('https://tutorias.dmcorrales.me/api/api/api.php?class=materias&q=loadSubjectsById&id='+cod_user);
    }


    getSubjectsPerUser(){
        return this.http.get('https://tutorias.dmcorrales.me/api/api/api.php?class=materias&q=loadSubjectsPerUser');
    }

    setSubjectsPerUser(cod_usuario, cod_info_materia){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=materias&q=setSubjectPerUser',{
            cod_usuario : cod_usuario,
            cod_info_materia: cod_info_materia
        })
    }

    removeSubjectsPerUser(cod_usuario, cod_info_materia){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=materias&q=removeSubjectPerUser',{
            cod_usuario : cod_usuario,
            cod_info_materia: cod_info_materia
        })
    }

}
