import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {SkillsComponent} from './skills/skills.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    SkillsComponent,
    NgOptimizedImage
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
