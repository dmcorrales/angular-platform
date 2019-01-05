import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class AdminWelcomeComponent implements OnInit {

  id : number
  constructor(private userService : UserService) { 
  this.ngOnMyData()
  
  }

  ngOnMyData(){
     this.userService.quienSoy().subscribe(data =>{
     this.id =  data.id
     })
  }

  ngOnInit() {
  }

}
