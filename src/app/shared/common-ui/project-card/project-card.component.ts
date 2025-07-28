import {Component, Input} from '@angular/core';
import {CardType} from '../../../core/types';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() data?: CardType;
  @Input() isLink: boolean = false;
}
