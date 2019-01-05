import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';


export interface subject {
    nombre_materia : string,
}


@Injectable()
export class ScheduleService {

    constructor(private http: HttpClient,
        private router: Router) { }
    
    getSchedulePerUser(id: number){
        return this.http.get('https://tutorias.dmcorrales.me/api/api/api.php?class=schedule&q=loadSchedulePerUser&id='+ id);
    }

    insertSchedulePerUser(cod_usuario, dia_semana, hrs_semana){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=schedule&q=insertSchedule', {
            cod_usuario: cod_usuario,
            dia_semana: dia_semana,
            hrs_semana: hrs_semana
        });
    }

    removeSchedulePerUser(cod_info_horario){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=schedule&q=removeSchedulePerUser', { 
            cod_info_horario : cod_info_horario
    })
    }

   

}
