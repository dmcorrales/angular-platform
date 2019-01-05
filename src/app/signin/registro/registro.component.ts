import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//SERVICOS
import { AuthenticationService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service'

import { Router } from '@angular/router'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

   registroForm: FormGroup;
   loading = false;
   submitted = false;

  constructor(
        private formBuilder: FormBuilder, 
        private autenticationService: AuthenticationService,
        private notifierService: NotificationService,
        private router : Router ) { }

  // convenience getter for easy access to form fields
  get f() { return this.registroForm.controls; }

  /**
   * INICIALIZA LOS COMPONENTES PARA VALIDACIONES DE FORMULARIOS
   */
  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      secondname: ['', Validators.required],
      document: ['', Validators.required],
      emailAddress: ['', Validators.required],
      password: ['', Validators.required],
      rpassword: ['', Validators.required]

      });
  }

  /**
   * EN CASO DE REALIZARSE UN SUBMIT DEL FORMULARIO, SE PROCEDE A VALIDAR LO INSERTADO.
   */
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.registroForm.invalid) {
        this.loading = true;
        this.notifierService.showNotification("warning", "Los datos no están correctos.")
        this.loading = false;
        return;
    }
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if(this.f.firstname.value.length < 4 || this.f.secondname.value.length < 4 || !EMAIL_REGEXP.test(this.f.emailAddress.value || this.f.password.value.length < 8)){
      this.notifierService.showNotification("warning", "Los campos son correctos.")
      return;
    }

    if(this.f.password.value != this.f.rpassword.value){
      this.notifierService.showNotification("warning", "La contraseña ingresada no coincide")
      this.loading = false;
      return ;
    }

    this.autenticationService.insertUser(this.f.firstname.value, this.f.secondname.value, this.f.emailAddress.value, this.f.document.value, this.f.password.value).subscribe(data =>{
      if(data['success']){

          this.autenticationService.insertUserInsertSALA(this.f.document.value).subscribe()

        this.notifierService.showNotification("success", data['message'])
        this.loading = false;
      }else{
        this.notifierService.showNotification("error", data['message'])
        this.loading = false;

      }
    })

   
}


}
