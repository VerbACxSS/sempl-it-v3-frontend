import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ItCardComponent} from 'design-angular-kit';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  imports: [
    ItCardComponent,
    NgOptimizedImage
  ]
})
export class HomeComponent {

}
