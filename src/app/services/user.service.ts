import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

export interface myDataSession {
    id : number,
    username: string,
    rango: number,
    correo: string,
    session: boolean
}

export interface datosQuienSoy {
    id : number,
    username: string,
    rango: number,
    correo: string
}

@Injectable()
export class UserService {
    hasPermissions: Boolean;
    constructor(private http: HttpClient,
                private router: Router) { 
        this.hasPermissions = false;
    }

    /*
    *  Devuelve la información a través del GET de el usuario que está activo en sesión.
    */
    quienSoy(): Observable<datosQuienSoy>{
        return this.http.get<datosQuienSoy>('https://tutorias.dmcorrales.me/api/api/api.php?class=session&q=quienSoy');
    }

    /*
    * Devuelve los datos de la sesión actual por parte del servidor
    */
    getSession(): Observable<myDataSession>{ 
         return this.http.get<myDataSession>('https://tutorias.dmcorrales.me/api/api/api.php?class=session&q=getSession');
    }

    /*
    * Devuelve las categorías según rango
    */
    getCategories(){
        return this.http.get('https://tutorias.dmcorrales.me/api/api/api.php?class=categories&q=loadCategories');
    }

    /*
    * Devuelve el listado de usuarios  (según rango)
    */
    listUsers(){
        return this.http.get('https://tutorias.dmcorrales.me/api/api/api.php?class=user&q=loadUsers');   
    }

    loadUserById(id){
        return this.http.get('https://tutorias.dmcorrales.me/api/api/api.php?class=user&q=loadUserById&id='+ id);   
    }

    //this.cod_usuario, this.nombre_usuario, this.apellido_usuario, this.correo_usuario, this.password_usuario, this.documento_usuario , this.estado_usuario, this.cod_rol
    updateUserData(id,firstname, secondname ,emailaddress,password,document, estado_usuario ,rank){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=user&q=editUser', 
         {
            id: id,
            firstname: firstname,
            secondname: secondname,
            emailaddress: emailaddress,
            password: password,
            rank: rank,
            estado: estado_usuario,
            document: document
        });
    }

    updateUserDataUser(id, firstname, secondname, emailaddress){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=user&q=updateMyData', {
            id : id,
            firstname: firstname,
            secondname: secondname,
            emailaddress: emailaddress
        })
    }

    updateUserDataPassword(id, password){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/api.php?class=user&q=updateMyDataPassword', {
            id: id,
            password: password
        }) 
    }

    updateProfileImage(document_user, image_data){
        return this.http.post('https://tutorias.dmcorrales.me/api/api/image-update.php?q=update', {
            document_user: document_user,
            image_data: image_data
        });
    }
}