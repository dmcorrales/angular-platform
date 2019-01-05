import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../../services/lessons.service'
import { SubjectService } from '../../services/subject.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-list-lesson',
  templateUrl: './list-lesson.component.html',
  styleUrls: ['./list-lesson.component.css']
})
export class ListLessonComponent implements OnInit {
   listaTutores
   listaMaterias
  constructor( private lessonService: LessonsService,
               private subjectsService: SubjectService,
               private router: Router ) { }

  ngOnInit() {
    this.getList()
    this.getSubjects()
  }

  private getList(){
    this.lessonService.getListLessons().subscribe(data =>{
      this.listaTutores = data
    })
  }

  private getSubjects(){
    this.subjectsService.getSubjectsPerUser().subscribe(data =>{
      this.listaMaterias = data
    })
  }

}
