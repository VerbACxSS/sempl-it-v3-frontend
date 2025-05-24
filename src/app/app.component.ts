import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {ItBackToTopComponent, ItNotificationsComponent, ItSpinnerComponent} from 'design-angular-kit';
import {HttpLoaderService} from './services/http-loader.service';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ItSpinnerComponent,
    ItBackToTopComponent,
    ItNotificationsComponent
  ]
})
export class AppComponent implements OnInit {
  public isSpinnerActive: boolean;

  constructor(private httpLoaderService: HttpLoaderService) {
    this.isSpinnerActive = false;
  }

  public ngOnInit(): void {
    this.httpLoaderService.isLoading
      .subscribe((loading) => {
        loading ? this.isSpinnerActive = true : this.isSpinnerActive = false
      });
  }
}
