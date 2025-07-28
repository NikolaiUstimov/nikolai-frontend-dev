import {Component} from '@angular/core';
import {SliderContents} from '../../core/data/main-data';
import {
  ProjectCardComponent
} from '../../shared/common-ui/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  dataProjects = SliderContents;
}
