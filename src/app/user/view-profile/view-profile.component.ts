import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service'
import {  MessageService } from '../../services/message.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleService } from '../../services/schedule.service'
import { NotificationService } from '../../services/notification.service'
import { RatingService } from '../../services/rating.service'

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  public idGet;
  public firstName
  public secondName
  public emailAddress
  public document

  //todas las puntuaciones
  public totalPoints;

  //información del visitante
  public vId
  public p

  //listado de mensajes del perfil
  public listPublicMessages
  publishForm: FormGroup;
  loading = false;
  submitted = false;

  //listado de horario por usuario
  public listSchedule
  public totalRating
  public earnedPoints

  constructor(private activedRoute: ActivatedRoute,
              private userService: UserService,
              private messageService: MessageService,
              private formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private scheduleService: ScheduleService,
              private ratingService: RatingService) { }

  inputName: string;
  ngOnInit() {
  
    //cargo la información de quien visita el perfil
    this.userService.quienSoy().subscribe(data =>{
      this.vId = data['id']
    })

    //cargo los componentes
    this.publishForm = this.formBuilder.group({
      comentario: ['', [Validators.minLength(10), Validators.required]]
      });

    this.idGet = this.activedRoute.snapshot.queryParamMap.get('id');
    

    this.userService.loadUserById(this.idGet).subscribe(data =>{
      this.firstName = data['nombres_usuario']
      this.secondName = data['apellidos_usuario']
      this.emailAddress = data['correo_usuario']
      this.document = data['documento_usuario']
    })

    this.loadPublicMessages()
    this.loadSchedule()
    this.loadStars()
  }

  loadStars(){
    this.ratingService.getGlobalPointsPerUser(this.idGet).subscribe(data =>{
      this.rating = data['puntuacion']  
      this.totalRating =  data['puntuacion'] 
      this.totalPoints = data['total_votos']  
    })
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.publishForm.invalid) {
        this.loading = true;
        return;
    }

    this.messageService.insertMessage(1, this.f.comentario.value, this.vId, this.idGet).subscribe(data =>{
      if(data['success']){
        this.loadPublicMessages()
        this.f.comentario.reset()
        this.notificationService.showNotification("success", data['message'])
      }else{
        this.notificationService.showNotification("warning", data['message'])
      }
    })

  }

  public loadPublicMessages(){
    this.messageService.loadPublicMessages(this.idGet).subscribe(data =>{
      this.listPublicMessages = data
    })
  }

   // convenience getter for easy access to form fields
    get f() { return this.publishForm.controls; }
    
public loadSchedule(){
  this.scheduleService.getSchedulePerUser(this.idGet).subscribe(data =>{
    this.listSchedule = data
  })
}


//rating
onClick(rating: number): void {
  this.rating = rating;
  this.ratingClick.emit({
    itemId: this.itemId,
    rating: rating
  });
}

onSubmitStars(){
  this.ratingService.setPointsPerUser(this.vId, this.idGet, this.rating).subscribe(data =>{
    if(data['success']){
      this.loadStars()
      this.notificationService.showNotification("success", data['message'])
    }else{
      this.notificationService.showNotification("warning", data['message'])
    }
  })
}

}
