import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service'
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {

   idGet;
   dataUser;
   editUserForm: FormGroup;
   myId;

   cod_usuario: number;
   nombre_usuario: String;
   apellido_usuario: String
   correo_usuario: String;
   documento_usuario: String
   password_usuario: String;
   estado_usuario: String
   cod_rol: number;
   informacion_usuario: String;
    


  constructor(private activedRoute: ActivatedRoute, 
              private userService: UserService,
              private formBuilder: FormBuilder,
              private notificationService: NotificationService) { 
    this.idGet = this.activedRoute.snapshot.queryParamMap.get('id');
    console.log(this.idGet)
    userService.loadUserById(this.idGet).subscribe(data =>{
      this.cod_usuario = data['cod_usuario'];
      this.nombre_usuario = data['nombres_usuario'];
      this.apellido_usuario = data['apellidos_usuario'];
      this.correo_usuario = data['correo_usuario'];
      this.password_usuario = data['password_usuario'];
      this.cod_rol = data['cod_rol'];
      this.documento_usuario = data['documento_usuario'];
      this.estado_usuario = data['estado_usuario'];
    },err=>{
      console.log(err)
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.editUserForm.controls; }

  ngOnInit() {
    this.editUserForm = this.formBuilder.group({
      id_user: ['', Validators.required],
      nombre_usuario: ['', Validators.required],
      correo_usuario: ['', Validators.required],
      apellido_usuario: ['', Validators.required],
      password_usuario: ['', Validators.required],
      cod_rol: ['', Validators.required],
      estado_usuario: ['', Validators.required]
      });
  }

  onSubmit() {
    this.userService.updateUserData(this.cod_usuario, this.nombre_usuario, this.apellido_usuario, this.correo_usuario, this.password_usuario, this.documento_usuario , this.estado_usuario, this.cod_rol).subscribe(data =>{
      if(data['success'] == true){
        this.notificationService.showNotification("success","Los datos se han guardado correctamente");
      }else{
        this.notificationService.showNotification("warning","Ocurrió algo al insertar los datos");
      }
    },error =>{
       this.notificationService.showNotification("error","Ocurrió algo al insertar los datos");
    });

  }

}
