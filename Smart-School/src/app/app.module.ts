
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';

import{UserService} from './user/user.service';
import {StudentService} from './student/studentservice/student.service';


import { StudentloginComponent } from './student/studentlogin/studentlogin.component';
import { StudentregistrationComponent } from './student/studentregistration/studentregistration.component';
import { StudentviewComponent } from './student/studentview/studentview.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminserviceComponent } from './admin/adminservice/adminservice.component';
import { HomeComponent } from './home/home.component';
import { CenterloginComponent } from './center/centerlogin/centerlogin.component';
import { CenterserviceComponent } from './center/centerservice/centerservice.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { ParentPortalComponent } from './parent/parent-portal/parent-portal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TimeTableComponent } from './parent/time-table/time-table.component';
import { ParentheaderComponent } from './parentheader/parentheader.component';
import { HomeworkComponent } from './parent/homework/homework.component';
import { PerformanceComponent } from './parent/performance/performance.component';
import { FeedbackComponent } from './parent/feedback/feedback.component';
import { UpdatesComponent } from './parent/updates/updates.component';
import { DetailsComponent } from './parent/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import {StuServiceService} from './shared/stu-service.service';
import { TeacherPortalComponent } from './teacher/teacher-portal/teacher-portal.component';
import { UpdateDetailsComponent } from './teacher/update-details/update-details.component';

import { StudentListComponent } from './teacher/student-list/student-list.component';
import { AdminloginService } from './admin/admin-login-service/adminlogin.service';

import { PhomeworkService } from './teacher/services/phomework.service';
import {HomeworkListComponent} from './teacher/homework-list/homework-list.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { PostHomeworkComponent } from './teacher/post-homework/post-homework.component';
import { StoredData } from './shared/storedData';
import { PmarkService } from './teacher/service/pmark.service';
import{UpdatePerformanceComponent} from './teacher/update-performance/update-performance.component';
import { FeedbackService } from './feedbacks/feedback.service';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    NavComponent,
    StudentloginComponent,
    StudentregistrationComponent,
    StudentviewComponent,
    AdminloginComponent,
    AdminserviceComponent,
    HomeComponent,
    CenterloginComponent,
    CenterserviceComponent,
    AdmindashboardComponent,
    ParentPortalComponent,
    TimeTableComponent,
    ParentheaderComponent,
    HomeworkComponent,
    PerformanceComponent,
    FeedbackComponent,
    UpdatesComponent,
    DetailsComponent,
    TeacherPortalComponent,
    UpdateDetailsComponent,
   
    StudentListComponent,
    HomeworkListComponent,
    ProfileEditorComponent,
    PostHomeworkComponent,
    UpdatePerformanceComponent

    
    
    
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [
    UserService,
    StudentService,
    StuServiceService,
    AdminloginService,
    PhomeworkService,
    StoredData,
    PmarkService,
    FeedbackService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
