import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseServiceClient,
    LessonServiceClient,
    ModuleServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
