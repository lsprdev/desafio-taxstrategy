import { Component } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { ActivationStart, RouterOutlet } from '@angular/router';
import { FullButtonComponent } from '../buttons/full-button/full-button.component';
import { StrokeButtonComponent } from '../buttons/stroke-button/stroke-button.component';
import { ButtonComponent } from '../buttons/button/button.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddOrderModalComponent } from '../modals/add-order-modal/add-order-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent, AddOrderModalComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router, private modalService: NgbModal) { }
  
  url: string = "";
  
  public open(modal: any): void {
    this.modalService.open(modal, { centered: true, animation: false });
  }

  ngOnInit() {
    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
        if (data.snapshot.url.length === 0) {
          this.url = "/login"
        } else {
          this.url = data.snapshot.url[0]["path"];
        }
      }
    });
  }
}