import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stroke-button',
  standalone: true,
  imports: [],
  templateUrl: './stroke-button.component.html',
  styleUrl: './stroke-button.component.css'
})
export class StrokeButtonComponent {
  @Input({ required: true }) buttonString: string = '';
  @Input({ required: true }) buttonColor: string = '';
  @Input({ required: true }) buttonTextColor: string = '';
  ngOnInit() {
    document.getElementById('strokeButton')?.style.setProperty('border', `2px solid ${this.buttonColor}`);
    document.getElementById('strokeButton')?.style.setProperty('color', this.buttonTextColor);
  }
}
