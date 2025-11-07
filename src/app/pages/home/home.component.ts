import {AfterViewInit, Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ItButtonDirective, ItCardComponent, ItCollapseComponent} from 'design-angular-kit';
import {SeoService} from '../../services/seo.service';
import {TutorialModalComponent} from '../../components/modals/tutorial-modal/tutorial-modal.component';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  imports: [
    ItCardComponent,
    NgOptimizedImage,
    TutorialModalComponent,
    ItButtonDirective,
    ItCollapseComponent
  ]
})
export class HomeComponent implements AfterViewInit {
  public readonly VIDEO_URL = "https://drive.google.com/file/d/1dal9thz7htgUWo0yLYyprZOp3JPXz-hK/preview"

  constructor(private seoService: SeoService) {
  }

  public ngAfterViewInit(): void {
    this.seoService.updateSeoSettings();
  }

}
