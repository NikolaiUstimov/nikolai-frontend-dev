import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
  ViewChild
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {SvgIconComponent} from '../common-ui/svg-icon/svg-icon.component';
import {DOCUMENT} from '@angular/common';
import {filter} from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    SvgIconComponent,
    MatButton,
    MatMenuTrigger,
    MatMenuModule,
    RouterLinkActive
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements AfterViewInit {
  currentYear = new Date().getFullYear();
  r2 = inject(Renderer2);
  document: Document = inject(DOCUMENT);
  router: Router = inject(Router);

  constructor() {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
    )
    .subscribe((event: NavigationEnd) => {
      if (this.router.parseUrl(event.url).fragment) {
        setTimeout(() => this.scrollToFragment(), 100);
      } else {
        this.resetScroll();
      }
    })
  }

  @ViewChild('container') container!: ElementRef;
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.windowResize();
  }

  ngAfterViewInit() {
    this.windowResize();
  }

  windowResize() {
    const container = this.container.nativeElement;
    const headerHeight = this.document.querySelector('header')?.offsetHeight || 0;
    const footerHeight = this.document.querySelector('footer')?.offsetHeight || 0;

    const height = window.innerHeight - headerHeight - footerHeight;
    this.r2.setStyle(container, 'height', `${height}px`);
  }

  resetScroll() {
    this.container.nativeElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  scrollToFragment() {
    const fragment = this.router.parseUrl(this.router.url).fragment
    if (!fragment) return;

    const el = document.getElementById(fragment);
    const headerHeight = this.document.querySelector('header')?.offsetHeight || 0;
    console.log(el)
    if (el) {
      this.container.nativeElement.scrollTo({
        top: el.offsetTop - headerHeight - 20,
        behavior: 'smooth'
      })
    }
  }
}
