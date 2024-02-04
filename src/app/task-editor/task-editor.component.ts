import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../services/tasks-service/task";
import { TasksService } from "../services/tasks-service/tasks-service";

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent {
  @Input() task: Task | undefined;
  @Output() editTask: EventEmitter<void> = new EventEmitter<void>();

  editedName: string = '';
  priority: string = '';
  editedDescription: string = '';
  editedTags: string = ''; // Zmiana na string

  constructor(private tasksService: TasksService) {}

  ngOnChanges(): void {
    if (this.task) {
      this.editedName = this.task.name;
      this.priority = this.task.priority;
      this.editedDescription = this.task.description;
      this.editedTags = this.task.tags;
    }
  }

  saveChanges(): void {
    if (this.task) {
      this.task.name = this.editedName;
      this.task.priority = this.priority;
      this.task.description = this.editedDescription;
      this.task.tags = this.editedTags;
      this.tasksService.updateTask(this.task)
        .then(() => {
          this.editTask.emit();
        });
    }
  }
}
