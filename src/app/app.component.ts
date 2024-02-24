import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivationStart, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { encapsulateStyle } from '@angular/compiler';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NgbModule,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'repair-strategy';
}
