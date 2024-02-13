import { Component, Input } from '@angular/core';
import { AimSpan } from '../models/aim';

@Component({
  selector: 'app-add-task-button',
  standalone: true,
  imports: [],
  templateUrl: './add-task-button.component.html',
  styleUrl: './add-task-button.component.css'
})
export class AddTaskButtonComponent {
  @Input() spanType : AimSpan = AimSpan.Month

  public get createUrl() : string {
    return `/create/${this.spanType.valueOf()}`
  }
  
}
