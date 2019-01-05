import { Routes, RouterModule } from '@angular/router';

//Componentes
import {  AdminWelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin.component';
import { ListUsersComponent  } from './list-users/list-users.component';
import { RequestTutorComponent } from './request-tutor/request-tutor.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { ListLessonsComponent } from './list-lessons/list-lessons.component'
import { AdminGuard } from './admin.guard'

const AdminLayoutRoutes: Routes = [
    { 
    path: 'admin', 
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: 
    [ 
    {path: 'welcome', component: AdminWelcomeComponent},
    {path: 'listUsers', component: ListUsersComponent},
    {path: 'requestTutor', component: RequestTutorComponent},
    {path: 'listUsers/editUser', component: EditUserComponent},
    {path: 'listSubjects', component: ListSubjectsComponent},
    {path: 'listLessons', component: ListLessonsComponent}],
    }
];

export const AdminRouting = RouterModule.forRoot(AdminLayoutRoutes);
