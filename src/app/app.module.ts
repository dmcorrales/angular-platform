import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HashLocationStrategy, LocationStrategy } from '@angular/common'

import { Routes, RouterModule } from '@angular/router'
import { GeneralRouting } from './app.routing'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//Modulos del sitio
import { AdminModule } from './admin/admin.module';
import { SigninModule } from './signin/signin.module';
import { UserModule } from './user/user.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
//Servicios
import { UserService} from './services/user.service';
import { SubjectService} from './services/subject.service';
import { LessonsService } from './services/lessons.service';
import { ReportService } from './services/report.service'
import { ScheduleService } from './services/schedule.service'
import { MessageService } from './services/message.service'
import { RatingService } from './services/rating.service'
//Modulo de aplicaciones
import { NotifierModule , NotifierOptions  } from 'angular-notifier';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
	position: {
		  horizontal: {
			  position: 'right',
			  distance: 12
		  },
		  vertical: {
			  position: 'top',
			  distance: 12,
			  gap: 10
		  }
	  },
	theme: 'material',
	behaviour: {
	  autoHide: 5000,
	  onClick: 'hide',
	  onMouseover: 'pauseAutoHide',
	  showDismissButton: true,
	  stacking: 4
	},
	animations: {
	  enabled: true,
	  show: {
		preset: 'slide',
		speed: 300,
		easing: 'ease'
	  },
	  hide: {
		preset: 'fade',
		speed: 300,
		easing: 'ease',
		offset: 50
	  },
	  shift: {
		speed: 300,
		easing: 'ease'
	  },
	  overlap: 150
	}
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    GeneralRouting,
    AdminModule,
		SigninModule,
		UserModule,
    HttpClientModule,
		NotifierModule.withConfig( customNotifierOptions ),
		NgxSmartModalModule.forRoot(),
		MDBBootstrapModule.forRoot(),
		LoadingBarHttpClientModule,
		BrowserAnimationsModule
  ],
  providers: [UserService, SubjectService, LessonsService, ReportService , ScheduleService, MessageService, RatingService ,{provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
