import { Component, OnInit } from '@angular/core';
import { ActivationStart, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CenteredNavbarComponent } from './components/centered-navbar/centered-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NgbModule,
    NavbarComponent,
    CenteredNavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'repair-strategy';
  url: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
        if (data.snapshot.url.length === 0) {
          this.url = "/"
        } else {
          this.url = data.snapshot.url[0]["path"];
        }
      }
    });
  }
}
