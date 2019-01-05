import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-header-admin',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AdminHeaderComponent implements OnInit {
  public listCategories;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getCategories().subscribe(data =>{
      this.listCategories = data
    })
  }

}
