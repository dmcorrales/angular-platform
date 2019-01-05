import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service'
import { AuthenticationService } from '../../../services/auth.service';

import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   listCategories
  constructor(private userService: UserService, 
              private autenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.loadCategories()
  }

  loadCategories(){
    this.userService.getCategories().subscribe(data =>{
      this.listCategories = data
    })
  }

  destroySession(){
    this.autenticationService.logout().subscribe(data =>{
      this.router.navigate(['/signin/login'])
    })
  }

}
