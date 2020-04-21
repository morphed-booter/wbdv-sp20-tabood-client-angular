import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsforModule = (mid) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001258669/modules/${mid}/lessons`)
      .then(response => response.json())
}
