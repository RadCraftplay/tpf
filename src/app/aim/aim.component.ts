import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aim',
  standalone: true,
  imports: [],
  templateUrl: './aim.component.html',
  styleUrl: './aim.component.css'
})
export class AimComponent {
  @Input() name: string = "TODO";
  private _checked = false;

  @Input('checked')
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: string) {
    this._checked = value.toLowerCase() === "true";
    console.log(this._checked)
  }

  constructor() { }
}
