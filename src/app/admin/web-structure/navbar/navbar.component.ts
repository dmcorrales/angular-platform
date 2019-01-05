import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/auth.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }
  
  onExit(){
    this.auth.logout().subscribe(data =>{
      this.router.navigate(['/signin/login'])
    })
  }

}
