import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { MakeItBlueDirective } from './make-it-blue.directive'; //ngModel

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    MakeItBlueDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
