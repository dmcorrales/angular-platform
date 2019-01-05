import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//SERVICOS
import { AuthenticationService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service'

import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'})
  export class LoginComponent implements OnInit {

   loginForm: FormGroup;
   loading = false;
   submitted = false;

  constructor(
        private formBuilder: FormBuilder, 
        private autenticationService: AuthenticationService,
        private notifierService: NotificationService,
        private router : Router ) { }

   // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

  /**
   * INICIALIZA LOS COMPONENTES PARA VALIDACIONES DE FORMULARIOS
   */
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
      });
  }

  /**
   * EN CASO DE REALIZARSE UN SUBMIT DEL FORMULARIO, SE PROCEDE A VALIDAR LO INSERTADO.
   */
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        this.loading = true;
        return;
    }

    //Valido si existe el usuario especificado por el usuario, en dado caso de ser así le envío a su respectivo módulo.
    this.autenticationService.login(this.f.email.value,this.f.password.value).subscribe(data =>{
      if(data['session']){
        if(data['rango'] == 3){
          this.notifierService.showNotification("success","Bienvenido al módulo administrativo.");
          this.router.navigate(['/admin/welcome'])
        }else{
          this.notifierService.showNotification("success","Bienvenido!");
          this.router.navigate(['/user/welcome'])
        }
        this.loading = false;
      }else{
        this.notifierService.showNotification("error","Usuario y/o contraseña incorrectos");
        this.loading = false;
      }
    },err => {
      console.log(err)
      this.notifierService.showNotification("error","Vaya.. al parecer hay problemas técnicos");
    })
}

}
