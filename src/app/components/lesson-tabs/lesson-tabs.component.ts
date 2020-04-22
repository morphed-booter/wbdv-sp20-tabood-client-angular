import { Component, OnInit } from '@angular/core';
import {LessonServiceClient} from '../../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient) { }

  lessons = []
  selectedLessonId = 0
  moduleId = 0
  courseId = 0

  ngOnInit(): void {
  }

}
