import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { LessonsService } from '../../services/lessons.service'
import { UserService } from '../../services/user.service'
import { NotificationService } from '../../services/notification.service'
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-request-lesson',
  templateUrl: './request-lesson.component.html',
  styleUrls: ['./request-lesson.component.css']
})
export class RequestLessonComponent implements OnInit {
  public myId;
  public listSubjects;
  public listSubjects1;
  public registroMateriasForm: FormGroup;
  public materiasArray;
  constructor(private subjectService: SubjectService,
              private lessonService: LessonsService,
              private userService: UserService,
              private notificationService: NotificationService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.userService.quienSoy().subscribe(data =>{
      this.myId = data['id']
      console.log(this.myId)
    })

    this.loadSubjects()
    this.registroMateriasForm = this.formBuilder.group({
      materias: this.formBuilder.array([]),
      comentario: ['']
    });
  }

  loadSubjects(){
    this.subjectService.getSubjects().subscribe(data =>{
    this.listSubjects = JSON.stringify(data);
    this.listSubjects1 = data
    console.log(this.listSubjects)
   
   })
  }

    // convenience getter for easy access to form fields
    get f() { return this.registroMateriasForm.controls; }

  onSubmit(){
    console.log(this.f.comentario.value)
    console.log("*"+this.f.materias.value)
    this.lessonService.setNewRequest(this.myId, ""+this.f.materias.value, this.f.comentario.value).subscribe(data =>{
      if(data['success']){
        this.notificationService.showNotification("success",data['message'])
      }else{
        this.notificationService.showNotification("warning",data['message'])

      }

    })
  }
  onChange(materia_nombre: string, isChecked: boolean) {
   this.materiasArray = <FormArray>this.registroMateriasForm.controls.materias;

    if (isChecked) {
      this.materiasArray.push(new FormControl(materia_nombre));
    } else {
      let index = this.materiasArray.controls.findIndex(x => x.value == materia_nombre)
      this.materiasArray.removeAt(index);
    }
  }
}
