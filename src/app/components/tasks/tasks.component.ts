import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';

// Services
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[] = [];
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // getTasks() returns an observable. Subscribe to observable
    this.taskService.getTasks().subscribe((tasks:Task[]) => {
      this.tasks = tasks;
    });
  }

}
