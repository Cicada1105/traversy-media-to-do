import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const observableTasks:Observable<Task[]> = of(TASKS);
    return observableTasks;
  }
}
