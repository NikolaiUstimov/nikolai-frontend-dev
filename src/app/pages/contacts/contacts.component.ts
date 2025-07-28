import {Component} from '@angular/core';
import {
  SvgIconComponent
} from '../../shared/common-ui/svg-icon/svg-icon.component';
import {
  AnimationEarthComponent
} from '../../shared/common-ui/animation-earth/animation-earth.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    SvgIconComponent,
    AnimationEarthComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
