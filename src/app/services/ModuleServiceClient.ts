import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModulesforCourse = (cid) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001258669/courses/${cid}/modules`)
      .then(response => response.json())
}
