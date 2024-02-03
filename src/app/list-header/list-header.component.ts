import { Component } from '@angular/core';
import { AddTaskButtonComponent } from '../add-task-button/add-task-button.component';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'app-list-header',
  standalone: true,
  imports: [ AddTaskButtonComponent, SeparatorComponent ],
  templateUrl: './list-header.component.html',
  styleUrl: './list-header.component.css'
})
export class ListHeaderComponent {

}
