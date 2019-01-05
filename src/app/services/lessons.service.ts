import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';


@Injectable()
export class LessonsService {
    constructor(private http: HttpClient,
                private router: Router) { 
    }

    /*
    *  Devuelve la información a través del GET de el usuario que está activo en sesión.
    */
    getListRequests(){
        return this.http.get('https://tutorias.dmcorrales.me/api/api/api.php?class=lessons&q=loadRequests');
    }

    acceptRequest(cod_usuario){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=lessons&q=acceptRequest',{
           cod_usuario: cod_usuario
        });
    }

    getListLessons(){
        return this.http.get('https://tutorias.dmcorrales.me/api/api/api.php?class=lessons&q=getList');
    }

    setNewRequest(cod_usuario, listaMaterias, comentario){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=lessons&q=setNewRequest', {
            cod_usuario: cod_usuario,
            list_subjects: listaMaterias,
            comment_u: comentario
        });
    }
}