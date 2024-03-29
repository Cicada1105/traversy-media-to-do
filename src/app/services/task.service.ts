import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }
  addTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl,newTask,httpOptions);
  }
  deleteTask(task: Task): Observable<Task> {
    const url:string = `${this.apiUrl}/${task.id}`;

    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task: Task): Observable<Task> {
    const url:string = `${this.apiUrl}/${task.id}`;

    return this.http.put<Task>(url,task,httpOptions);
  }
}
