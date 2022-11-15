import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from '../../services/ui.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onSubmitTask: EventEmitter<Task> = new EventEmitter<Task>();

  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  text:string = "";
  day:string = "";
  reminder: boolean = false;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (!this.text) {
      alert("Please submit task");
      return;
    }
    if (!this.day) {
      alert("Please submit day");
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // Omit the passed in submit event defined in the parent
    this.onSubmitTask.emit(newTask);

    // Clear the form fields
    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}
