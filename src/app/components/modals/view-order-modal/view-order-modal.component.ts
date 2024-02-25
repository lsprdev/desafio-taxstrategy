import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonComponent } from '../../buttons/button/button.component';

@Component({
  selector: 'app-view-order-modal',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './view-order-modal.component.html',
  styleUrl: './view-order-modal.component.css'
})
export class ViewOrderModalComponent {
  @Input({ required: true }) order: any = {};

  ngOnInit() {
    this.order = JSON.parse(this.order);
  }
}
