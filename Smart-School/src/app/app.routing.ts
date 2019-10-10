import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import{UserComponent} from './user/user.component';
import{AboutComponent} from './about/about.component';
import { StudentloginComponent } from './student/studentlogin/studentlogin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { CenterloginComponent } from './center/centerlogin/centerlogin.component';
import { AppComponent } from './app.component';
import { StudentviewComponent  } from './student/studentview/studentview.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { HomeComponent  } from './home/home.component';
import { StudentregistrationComponent} from './student/studentregistration/studentregistration.component';
import { ParentPortalComponent } from './parent/parent-portal/parent-portal.component';
import {TimeTableComponent} from './parent/time-table/time-table.component';

import { HomeworkComponent } from './parent/homework/homework.component';
import {PerformanceComponent} from './parent/performance/performance.component';
import { FeedbackComponent } from './parent/feedback/feedback.component';
import { UpdatesComponent } from './parent/updates/updates.component';
import { DetailsComponent } from './parent/details/details.component';
import { TeacherPortalComponent } from './teacher/teacher-portal/teacher-portal.component';
import { UpdateDetailsComponent } from './teacher/update-details/update-details.component';
import { StudentListComponent } from './teacher/student-list/student-list.component';

import { HomeworkListComponent } from './teacher/homework-list/homework-list.component';
import{PostHomeworkComponent} from './teacher/post-homework/post-homework.component';
import{UpdatePerformanceComponent} from './teacher/update-performance/update-performance.component';


@NgModule({
    imports: [
    RouterModule.forRoot([
         { path: '', component: HomeComponent },
         { path: 'user', component: UserComponent },
         { path: 'about', component: AboutComponent },
         { path: 'studentlogin', component: StudentloginComponent },
         { path: 'studentregisteration', component: StudentregistrationComponent },
         { path: 'studentview', component: StudentviewComponent },
         { path: 'adminlogin', component: AdminloginComponent },
         { path: 'centerlogin', component: CenterloginComponent },
        { path: 'admindashboard', component: AdmindashboardComponent },
        

        {path: 'parent', component: ParentPortalComponent,children:[
          {path: 'details' , component: DetailsComponent},
          {path: 'Updates' , component: UpdatesComponent},
          {path: 'time-table', component: TimeTableComponent},
          {path:'Homework',component:HomeworkComponent},
        {path:'Performance',component:PerformanceComponent},
        {path: 'Feedback' , component: FeedbackComponent},
        
        
        
        ]
      
      }, 
       
        
       
        {path: 'teacher' , component: TeacherPortalComponent,children:[
          {path: 'updateDetails' , component: UpdateDetailsComponent}, 
          {path: 'studentList' , component: StudentListComponent},
         
           {path:'homeworkList', component:HomeworkListComponent},
         {path:'postHomework', component:PostHomeworkComponent},
         {path:'updatePerformance',component:UpdatePerformanceComponent}
        
        ]}   
        

    ],{preloadingStrategy:PreloadAllModules})
  ],
  exports:[RouterModule]
 })
export class AppRoutingModule {}
