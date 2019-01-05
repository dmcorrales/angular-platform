import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }
    

    /*
    * Recibe por parámetro usuario y contraseña para así enviar solicitud al proxyService. 
    */
    login(username: string, password: string) {
      return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=session&q=setSession', {
        emailAddress: username,
        password: password
       });
    }

    logout() {
        return this.http.get('https://tutorias.dmcorrales.me/api/api/api.php?class=session&q=destroySession', {
        });
    }
 
    redirectLogin(){
      return this.http.get('https://tutorias.dmcorrales.me/api/api/api.php?class=session&q=quienSoy', {
       });
    }

    insertUser(firstname, secondname, email, document, password){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=user&q=insertUser', {
            firstname: firstname,
            secondname: secondname,
            email: email,
            document: document,
            password: password

        })

    }

    insertUserInsertSALA(document){
        return this.http.get('https://tutorias.dmcorrales.me/api/api/copy.php?q=register&id='+document);
    }
}