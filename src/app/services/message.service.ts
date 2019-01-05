import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MessageService {
    constructor(private http: HttpClient) { }

    insertMessage(type:number, text:string, c_e: string, c_r: string) {
     
      return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=messages&q=insertMessage', {
        type: type,
        text: text,
        c_e: c_e,
        c_r: c_r
       });
    }


    loadPublicMessages(c_r){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=messages&q=loadPublicMessages',{
            c_r: c_r
        })
    }

}