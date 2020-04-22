import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../../services/ModuleServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private service: ModuleServiceClient, private route: ActivatedRoute) { }

  modules = []
  courseId = 0
  selectedModuleId = 0

  selectModule = (moduleId) => {
    this.selectedModuleId = moduleId;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.selectedModuleId = params.moduleId;
      this.service.findModulesforCourse(this.courseId)
        .then(modules => this.modules = modules);
    });
  }

}
