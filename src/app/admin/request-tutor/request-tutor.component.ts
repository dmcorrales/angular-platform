import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../../services/lessons.service';
import { SubjectService } from '../../services/subject.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-request-tutor',
  templateUrl: './request-tutor.component.html',
  styleUrls: ['./request-tutor.component.css']
})
export class RequestTutorComponent implements OnInit {
   p;
   listSubjects;
   listRequests;
  constructor(private lessonsService: LessonsService,
              private subjectService: SubjectService,
              private notificacionService: NotificationService) {

                this.loadRequests()
  

   }

   loadRequests(){
    this.lessonsService.getListRequests().subscribe(data =>{
      this.listRequests = data;
    })

    this.subjectService.getSubjectsPerUser().subscribe(data =>{
      this.listSubjects = data;
    })
   }
  
   acceptRequest(cod_usuario){
     this.lessonsService.acceptRequest(cod_usuario).subscribe(data =>{
       if(data['success']){
        this.notificacionService.showNotification("success","Se aceptó al tutor")
        this.loadRequests()
       }else{
        this.notificacionService.showNotification("error","Ocurrió algo al aceptar la solicitud")
       }
     })
   }

  ngOnInit() {
  }





}



