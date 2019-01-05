import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRouting } from './admin.routing';
import { AdminHeaderComponent } from './web-structure/header/header.component';
import { AdminFooterComponent } from './web-structure/footer/footer.component';
import { AdminWelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './web-structure/navbar/navbar.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import {  AdminGuard } from './admin.guard';
import { ListUsersComponent } from './list-users/list-users.component';
import { RequestTutorComponent } from './request-tutor/request-tutor.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { ListLessonsComponent } from './list-lessons/list-lessons.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRouting,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgxSmartModalModule
  ],
  declarations: [
    AdminComponent,

    AdminHeaderComponent,
    AdminFooterComponent,
    AdminWelcomeComponent,
    NavbarComponent,
    ListUsersComponent,
    RequestTutorComponent,
    EditUserComponent,
    ListSubjectsComponent,
    ListLessonsComponent
  ],
    providers:[
    AdminGuard
  ]
})

export class AdminModule {}
