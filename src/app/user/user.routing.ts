import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user.component'
import { ListLessonComponent } from './list-lesson/list-lesson.component'
import { InsertLessonComponent } from './insert-lesson/insert-lesson.component'
import { RequestLessonComponent } from './request-lesson/request-lesson.component'
import { EditProfileComponent } from './edit-profile/edit-profile.component'
import { ViewProfileComponent } from './view-profile/view-profile.component'
import { UserGuard } from './user.guard'
//Componentes


const UserLayoutRoutes: Routes = [
    { 
        path: 'user', 
        component: UserComponent,
        canActivate: [UserGuard],
        children: 
        [ 
        {path: 'welcome', component: WelcomeComponent},
        {path: 'listLesson', component: ListLessonComponent} ,
        {path: 'insertLesson', component: InsertLessonComponent},
        {path: 'requestLesson', component: RequestLessonComponent},
        {path: 'editProfile', component: EditProfileComponent},
        {path: 'viewProfile', component: ViewProfileComponent},
        {path: '**',  redirectTo: '/user/welcome'}],
        }
];

export const UserRouting = RouterModule.forRoot(UserLayoutRoutes);
