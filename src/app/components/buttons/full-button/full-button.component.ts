import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-button',
  standalone: true,
  imports: [],
  templateUrl: './full-button.component.html',
  styleUrl: './full-button.component.css'
})
export class FullButtonComponent {
  @Input({ required: true }) buttonString: string = '';
}
