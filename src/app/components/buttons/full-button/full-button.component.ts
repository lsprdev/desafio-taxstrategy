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
  @Input({ required: true }) buttonColor: string = '';
  @Input({ required: true }) buttonTextColor: string = '';
  ngOnInit() {
    document.getElementById('fullButton')?.style.setProperty('background-color', this.buttonColor);
    document.getElementById('fullButton')?.style.setProperty('color', this.buttonTextColor);
  }
}
