import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { UserRouting } from './user.routing'
import { UserGuard } from './user.guard';

// For MDB Angular Free
import { WavesModule, CardsFreeModule } from 'angular-bootstrap-md'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { UserComponent } from './user.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './web-structure/header/header.component';
import { NavbarComponent } from './web-structure/navbar/navbar.component';
import { FooterComponent } from './web-structure/footer/footer.component';
import { ListLessonComponent } from './list-lesson/list-lesson.component';
import { InsertLessonComponent } from './insert-lesson/insert-lesson.component';
import { RequestLessonComponent } from './request-lesson/request-lesson.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component'


import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { ViewProfileComponent } from './view-profile/view-profile.component';


@NgModule({

  
    imports: [
      CommonModule,
      FormsModule,
      NgxPaginationModule,
      ReactiveFormsModule,
      NgxSmartModalModule,
      UserRouting,
      MDBBootstrapModule,
      WavesModule,
      CardsFreeModule,
      MatTabsModule,
      BrowserAnimationsModule,
      MatSnackBarModule,
      MatDividerModule,
      MatListModule,
      MatButtonModule,
      MatSelectModule,
      MatCardModule

    ],
    declarations: [
     
    WelcomeComponent,
     
    HeaderComponent,
     
    NavbarComponent,
    UserComponent,
    FooterComponent,
    ListLessonComponent,
    InsertLessonComponent,
    RequestLessonComponent,
    EditProfileComponent,
    ViewProfileComponent],
      providers:[
        UserGuard
    ]
  })
  
  export class UserModule {}
  
