import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onSubmitTask: EventEmitter<Task> = new EventEmitter<Task>();
  text:string = "";
  day:string = "";
  reminder: boolean = false;

  constructor() { }

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
