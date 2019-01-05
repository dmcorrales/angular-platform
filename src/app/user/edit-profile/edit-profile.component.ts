import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { NotificationService } from '../../services/notification.service'
import { SubjectService } from '../../services/subject.service'
import { ScheduleService } from '../../services/schedule.service'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public myId
  public myFirstName
  public mySecondName
  public myPwd
  public rMypwd
  public myEmail
  public myDocument
  public myRank
  public selectedFile: File;
  public mySubjects;
  public listSubjects;
  public listSchedule
  public selectedOption: number;
  constructor(private userService: UserService,
              private notificationService: NotificationService,
              private subjectService: SubjectService,
              private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.cargarMisDatos()
  
  }

  cargarMisDatos(){
    this.userService.quienSoy().subscribe(data =>{
      this.myId = data['id']
      this.myFirstName = data['firstname']
      this.mySecondName = data['secondname']
      this.myEmail = data['correo']
      this.myDocument = data['documento']
      this.myRank = data['rango']
      this.loadSubjects()
      this.loadAllSubjects()
      this.loadSchedule()
    })
  }

  onUpdateMyData(){
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if(this.myFirstName.length < 4 || this.mySecondName.length < 4 || this.myEmail.length < 4 || !EMAIL_REGEXP.test(this.myEmail)){
      this.notificationService.showNotification("error", "Los campos no están correctos")
      return;
    }
    //validations
    this.userService.updateUserDataUser(this.myId, this.myFirstName, this.mySecondName, this.myEmail).subscribe(data =>{
      if(data['success']){
        this.notificationService.showNotification("success", data['message'])
      }else{
        this.notificationService.showNotification("warning", data['message'])
      }
    })
  }

  onUpdateMyPwd(){
    if(this.myPwd != this.rMypwd){
      this.notificationService.showNotification("error", "La contraseña no coincide")
      return;
    }else if(this.myPwd.length < 8){
      this.notificationService.showNotification("error", "La contraseña debe tener al menos 8 caracteres")
      return;
    }

    this.userService.updateUserDataPassword(this.myId, this.myPwd).subscribe(data =>{
      if(data['success']){
        this.notificationService.showNotification("success", data['message'])
      }else{
        this.notificationService.showNotification("warning", data['message'])
      }
    })


  } 
  //Subir imagen
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (imgsrc:any) => { // called once readAsDataURL is completed
      this.userService.updateProfileImage(this.myDocument, imgsrc.target.result).subscribe(data =>{

        this.notificationService.showNotification("success", "Tu imagen se actualizó correctamente")
      })


    }
  }

//Etiqueta 'tutores' -> Mis materias
 
loadSubjects(){
  this.subjectService.getSubjectsById(this.myId).subscribe(data =>{
    this.mySubjects = data
    console.log(data)
  })
}

loadAllSubjects(){
  this.subjectService.getSubjects().subscribe(data =>{
    this.listSubjects = data
  })
  }

  addNewUserSubject(myBootstrapModal){
  
    this.subjectService.setSubjectsPerUser(this.myId,this.selectedOption).subscribe(data =>{
      if(data['success']){
        myBootstrapModal.close()
        this.loadSubjects()
        this.notificationService.showNotification("success", data['message'])
      }else{
        this.notificationService.showNotification("warning", data['message'])
      }
    })
  }
  
  selectOption(id: number) {
    this.selectedOption = id
  }

  removeSubjectPerUser(cod_materia){
    this.subjectService.removeSubjectsPerUser(this.myId, cod_materia).subscribe(data =>{
      if(data['success']){
        this.loadSubjects()
        this.notificationService.showNotification("success", data['message'])
      }else{
        this.notificationService.showNotification("warning", data['message'])
      }
    })
  }

  //Etiqueta 'Tutores' -> Horario
dia_semana;
hrs_semana;
onChangeDay(data: string){
  this.dia_semana = data
  
}

onChangeHrs(data: string){
  this.hrs_semana = data

}

loadSchedule(){
  this.scheduleService.getSchedulePerUser(this.myId).subscribe(data =>{
    this.listSchedule = data
  })
}


insertSchedule(myBootstrapModal){
  this.scheduleService.insertSchedulePerUser(this.myId, this.dia_semana, this.hrs_semana).subscribe(data =>{
    if(data['success']){
      myBootstrapModal.close()
      this.loadSchedule()
      this.notificationService.showNotification("success", data['message'])
    }else{
      this.notificationService.showNotification("warning", data['message'])
    }
  })
}

removeSchedulePerUser(cod_info_horario){
  this.scheduleService.removeSchedulePerUser(cod_info_horario).subscribe(data =>{
    if(data['success']){
      this.loadSchedule()
      this.notificationService.showNotification("success", data['message'])
    }else{
      this.notificationService.showNotification("warning", data['message'])
    }
  })
}

}


