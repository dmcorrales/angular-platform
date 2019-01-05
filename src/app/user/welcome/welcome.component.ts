import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['../user.component.scss']
})
export class WelcomeComponent implements OnInit {

  myData;
  constructor( private userService: UserService,
              private snackBar: MatSnackBar ) {} 

  ngOnInit() {
    this.loadMyData()
  }

  loadMyData(){
    this.userService.quienSoy().subscribe(data =>{
      this.myData = data
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });

}
}

