import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {SliderContents} from '../../core/data/main-data';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {
  SvgIconComponent
} from '../../shared/common-ui/svg-icon/svg-icon.component';
import {
  ProjectCardComponent
} from '../../shared/common-ui/project-card/project-card.component';
import {SlicePipe} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    SvgIconComponent,
    ProjectCardComponent,
    SlicePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  dataProjects = SliderContents;
  el = inject(ElementRef);
  r2 = inject(Renderer2);
  activatedRoute = inject(ActivatedRoute);
  observer: IntersectionObserver | undefined;
  className = 'animate-active-translate';

  @ViewChild('skillsList') skillsList!: ElementRef;
  @ViewChildren('skillsItem') skillsItem!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.intersectionObserveElement();
  }

  intersectionObserveElement() {
    const options = {
      root: null,
      threshold: 0.5,
      rootMargin: '0px',
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.r2.setStyle(this.skillsList.nativeElement, 'visibility', 'visible');
          this.r2.addClass(this.skillsList.nativeElement, 'animate-active-translate');

          this.skillsItem.forEach((item) => {
            this.r2.addClass(item.nativeElement, 'animate-active-rotate');
          })

          this.observer?.unobserve(entry.target);
        }
      })
    }, options);

    this.observer!.observe(this.skillsList.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect()
  }
}
