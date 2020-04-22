import { Component, OnInit } from '@angular/core';
import {LessonServiceClient} from '../../services/LessonServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient,
              private route: ActivatedRoute) { }

  lessons = []
  selectedLessonId = 0
  moduleId = 0
  courseId = 0

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedLessonId = params.lessonId;
      this.moduleId = params.moduleId;
      this.courseId = params.courseId;
      this.service.findLessonsforModule(this.moduleId)
        .then(lessons => this.lessons = lessons);
    });
  }

}
