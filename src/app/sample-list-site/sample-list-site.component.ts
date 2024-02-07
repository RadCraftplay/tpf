import { Component } from '@angular/core';
import { TagListComponent } from '../tag-list/tag-list.component';
import { SeparatorVerticalComponent } from '../separator-vertical/separator-vertical.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sample-list-site',
  standalone: true,
  imports: [ NavbarComponent, SeparatorVerticalComponent, TagListComponent ],
  templateUrl: './sample-list-site.component.html',
  styleUrl: './sample-list-site.component.css'
})
export class SampleListSiteComponent {

}
