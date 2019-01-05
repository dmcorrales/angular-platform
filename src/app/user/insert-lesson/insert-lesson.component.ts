import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { LessonsService } from '../../services/lessons.service'
import { UserService } from '../../services/user.service'
import { ReportService } from '../../services/report.service'
import { NotificationService } from '../../services/notification.service'
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-insert-lesson',
  templateUrl: './insert-lesson.component.html',
  styleUrls: ['./insert-lesson.component.css']
})


export class InsertLessonComponent implements OnInit {
  public myId;
  public listadoMaterias;
  public tutoriaForm: FormGroup;
  public listado: FormArray
  public selectedOption;
  constructor(public subjectService: SubjectService,
    public lessonService: LessonsService,
    public userService: UserService,
    public notificationService: NotificationService,
    public formBuilder: FormBuilder,
    public reportService: ReportService) { }


  ngOnInit() {
    this.tutoriaForm = this.formBuilder.group({
      comentario: [''],
      materia: [''],
      listado: this.formBuilder.array([ this.onCreateList()])
      });



      this.userService.quienSoy().subscribe(data =>{
        this.myId = data['id'];
      })

      this.subjectService.getSubjectsById(2).subscribe(data =>{
        this.listadoMaterias = data
        console.log(data)
      })

  }

  selectOption(id: number) {
    this.selectedOption = id
  }

  onSubmit(myBootstrapModal){
    myBootstrapModal.close()
    //let listadoEstudiantes = this.tutoriaForm.get('listado') as FormArray;
     //console.log(this.tutoriaForm.controls.listado.controls[0].controls.fullName.value)
    let listadoEstudiantes = this.tutoriaForm.controls.listado.value
    let arr = this.tutoriaForm.get('listado') as FormArray;
    let tempSolution = ""
    for(let i =0 ; i< arr.length ;i++){
      tempSolution += arr.at(i).value.fullName + ","+ arr.at(i).value.document +  "," + arr.at(i).value.subject;
      if(i < arr.length-1 ){
        tempSolution += ","
      }
  
    }
    this.reportService.generateReport(this.myId, this.selectedOption, this.tutoriaForm.controls.comentario.value ,tempSolution).subscribe(data =>{
      if(data['success']){
        
        this.removeList()
        
        this.notificationService.showNotification("success","Se envío correctamente el formulario" + data['its'])
      }else{
        this.notificationService.showNotification("warning","Vaya.. Ha ocurrido algo al enviar el formulario, revisa de nuevo!")
      }
    })
   
  }

  removeList(){

    this.listado = this.tutoriaForm.get('listado') as FormArray;
    if(this.listado.length > 1){
      this.listado.reset()
    }
    for(let i =0 ; i< this.listado.length ;i++){
      this.listado.removeAt(i)
    }
  }

  onCreateList(): FormGroup {
    return this.formBuilder.group({
      fullName: '',
      document: '',
      subject: ''
    });
  }

  get formData(){
    return <FormArray>this.tutoriaForm.get('listado')
  }

  addItem(): void {
    this.listado = this.tutoriaForm.get('listado') as FormArray;
    this.listado.push(this.onCreateList());
  }

  
  removeItem(): void {
    this.listado = this.tutoriaForm.get('listado') as FormArray;
    this.listado.removeAt(this.listado.length-1)
  }




}
