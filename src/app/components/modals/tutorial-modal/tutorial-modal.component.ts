import {Component, ElementRef, ViewChild} from '@angular/core';
import {ItButtonDirective, ItModalComponent} from 'design-angular-kit';

@Component({
  selector: 'app-tutorial-modal',
  styleUrl: './tutorial-modal.component.scss',
  templateUrl: './tutorial-modal.component.html',
  imports: [
    ItModalComponent,
    ItButtonDirective
  ]
})
export class TutorialModalComponent {
  public readonly VIDEO_URL = "https://drive.google.com/file/d/1dal9thz7htgUWo0yLYyprZOp3JPXz-hK/preview"

  @ViewChild(ItModalComponent) modal!: ItModalComponent;
  @ViewChild('iFrame') iFrame!: ElementRef;

  public open(): void {
    this.modal.toggle();
  }

  stopVideo() {
    const iframeElement = this.iFrame.nativeElement as HTMLIFrameElement;
    iframeElement.src = this.VIDEO_URL;
  }
}
