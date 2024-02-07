import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../services/tasks-service/task";
import { TasksService } from "../services/tasks-service/tasks-service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent {
  @Input() task: Task | undefined;
  @Output() editTask: EventEmitter<void> = new EventEmitter<void>();

  editedName: string = '';
  priority: number = 0;
  editedDescription: string = '';
  editedTags: string[] = [];
  editedYear: number = 0;
  editedSpanValue: number = 0;

  constructor(private tasksService: TasksService, private location: Location) {}

  ngOnChanges(): void {
    if (this.task) {
      this.editedName = this.task.name;
      this.priority = this.task.priority;
      this.editedDescription = this.task.description;
      this.editedTags = this.task.tags.map(tag => tag.toString())
      this.editedYear = this.task.year;
      this.editedSpanValue = this.task.spanValue;
    }
  }

  saveChanges(): void {

    if (this.task) {
      this.task.name = this.editedName;
      this.task.priority = parseInt(this.priority.toString());
      this.task.description = this.editedDescription;
      this.task.tags = this.editedTags;
      this.task.year = parseInt(this.editedYear.toString());
      this.task.spanValue = parseInt(this.editedSpanValue.toString());

      this.tasksService.updateTask(this.task)
        .then(() => {
          this.editTask.emit();
        });
    }
  }
  goBack(): void {
    this.location.back();
  }
}
