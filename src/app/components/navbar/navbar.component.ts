import { Component } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { ActivationStart, RouterOutlet } from '@angular/router';
import { FullButtonComponent } from '../buttons/full-button/full-button.component';
import { StrokeButtonComponent } from '../buttons/stroke-button/stroke-button.component';
import { ButtonComponent } from '../buttons/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FullButtonComponent, StrokeButtonComponent, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  url: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
        console.log(data.snapshot.url[0]["path"]);
        if (data.snapshot.url.length === 0) {
          this.url = "/login"
        } else {
          this.url = data.snapshot.url[0]["path"];
        }
      }
    });
  }
}