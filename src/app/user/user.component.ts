import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ScheduleService } from '../services/schedule.service'
import { UserService  } from '../services/user.service' 

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  title = 'WELCOME';

  public showNotification: boolean
  public myId;
  public myRank

  constructor( private userService: UserService,
    private scheduleService: ScheduleService ) {} 

  ngOnInit() {

    this.userService.quienSoy().subscribe(data =>{
      this.myId = data['id']
      this.myRank = data['rango']

        this.scheduleService.getSchedulePerUser(this.myId).subscribe(data =>{
          if(data[0] != null){
            this.showNotification = false
          }else{
            this.showNotification = true
          }
        })

    })

  }

}
