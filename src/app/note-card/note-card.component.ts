import { Component, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent {

  @Input() title: string;
  @Input() body: string;

  @ViewChild('truncator')
  truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText')
  bodyText: ElementRef<HTMLElement>;
  @ViewChild('paragraphText')
  paragraphText: ElementRef<HTMLElement>;
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    //work out if there is a text overflow and if not, then hide the truncator
    let style = window.getComputedStyle(this.paragraphText.nativeElement, null);
    if (
      this.paragraphText.nativeElement.scrollHeight >
      this.bodyText.nativeElement.clientHeight
    ) {
      //if there is no text overflow, show the fade out truncator
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      //else (there is a text overflow, hide the fade out truncator)
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }
}
