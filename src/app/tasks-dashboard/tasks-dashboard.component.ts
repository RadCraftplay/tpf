import {Component, OnInit} from '@angular/core';
import { Task } from '../services/tasks-service/task';
import {map} from "rxjs";
import {TasksService} from "../services/tasks-service/tasks-service";

@Component({
  selector: 'app-tasks-dashboard',
  templateUrl: './tasks-dashboard.component.html',
  styleUrl: './tasks-dashboard.component.css'
})
export class TasksDashboardComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.retrieveTasks();
  }

  retrieveTasks(): void {
    this.tasksService.getAllTasks().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => {
            const docId = c.payload.doc.id;
            const data = c.payload.doc.data();
            const task: Task = {
              id: docId,
              name: data.name,
              priority: data.priority,
              description: data.description,
              tags: data.tags,
              year: data.year,
              spanType: data.spanType,
              spanValue: data.spanValue,
              done: data.done
            };
            return task
          }
        )
      )
    ).subscribe(data => {
      this.tasks = data;
    });
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    this.tasksService.deleteTask(task.id);
  }

}
