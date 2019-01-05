import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { SubjectService } from '../../services/subject.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.scss', '../admin.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListSubjectsComponent implements OnInit {
  p;
  public cod_materia;
  public nombre_materia;
  guardarMateriasForm: FormGroup;
  listSubjects;
  constructor(public ngxSmartModalService: NgxSmartModalService,
              private formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private subjectService: SubjectService) {
                this.cargarMaterias()
              }

  ngOnInit() {}

  public guardarMateria(cod_materia, nombre_materia, myMtrlzModal){
    this.subjectService.setSubjects(cod_materia, nombre_materia).subscribe(data =>{
      if(data['success']){
        this.notificationService.showNotification("success","La materia se guardó correctamente.")
        this.cargarMaterias()
      }else{
        this.notificationService.showNotification("error","No se pudo guardar la materia.")
      }
    })
    myMtrlzModal.close()
  }

  public cargarMaterias(){
    this.subjectService.getSubjects().subscribe(data =>{
      this.listSubjects = data;
    })
  }

  public eliminarMateria(cod_materia){
    this.subjectService.removeSubject(cod_materia).subscribe(data =>{
      if(data['success']){
        this.notificationService.showNotification("success","La materia se eliminó correctamente.")
        this.cargarMaterias()
      }else{
        this.notificationService.showNotification("error","No se pudo eliminar la materia.")
      }  
    })
  }
}
