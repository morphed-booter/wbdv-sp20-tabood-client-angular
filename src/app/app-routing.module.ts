import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './components/course-table/course-table.component';
import {CourseViewerComponent} from './components/course-viewer/course-viewer.component';


const routes: Routes = [
  {path: '', component: CourseTableComponent},
  {path: 'courses', component: CourseTableComponent},
  {path: 'courses/:cid/modules', component: CourseViewerComponent},
  {path: 'courses/:cid/modules/:mid/lessons', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
