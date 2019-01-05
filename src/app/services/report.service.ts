import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ReportService {
    constructor(private http: HttpClient) { }
    

    /*
    * Recibe por parámetro usuario y contraseña para así enviar solicitud al proxyService. 
    */
    generateReport(cod_tutor: number, nom_materia:string, observaciones_generales:string, listado_estudiantes:string) {
      console.log("**"+listado_estudiantes)
      return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=reports&q=generateReport', {
        cod_tutor: cod_tutor,
        nom_materia: nom_materia,
        observaciones_generales: observaciones_generales,
        listado_estudiantes: listado_estudiantes
       });
    }

    getListReports(){
      return this.http.get('https://tutorias.dmcorrales.me/api/api/api.php?class=reports&q=getListReports');
    }

}