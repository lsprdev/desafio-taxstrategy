import { Component, Input } from '@angular/core';
import { FullButtonComponent } from '../full-button/full-button.component';
import { StrokeButtonComponent } from '../stroke-button/stroke-button.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FullButtonComponent, StrokeButtonComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input({ required: true }) buttonString: string = '';
  @Input({ required: true }) buttonType: string = 'full' || 'stroke';
  @Input({ required: true }) buttonColor: string = '';
  @Input({ required: true }) buttonTextColor: string = '';
}
