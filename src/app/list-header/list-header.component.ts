import { Component, Input } from '@angular/core';
import { AddTaskButtonComponent } from '../add-task-button/add-task-button.component';
import { SeparatorComponent } from '../separator/separator.component';
import { NgIf } from '@angular/common';
import { AimSpan } from '../models/aim';

@Component({
  selector: 'app-list-header',
  standalone: true,
  imports: [ AddTaskButtonComponent, SeparatorComponent, NgIf ],
  templateUrl: './list-header.component.html',
  styleUrl: './list-header.component.css'
})
export class ListHeaderComponent {
  @Input() name : string = "TODO";
  @Input() canAdd : boolean = true;
  @Input() spanType : AimSpan = AimSpan.Month

  constructor() {}
}
