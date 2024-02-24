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
}
