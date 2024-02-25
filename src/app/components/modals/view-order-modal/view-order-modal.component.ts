import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonComponent } from '../../buttons/button/button.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-order-modal',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './view-order-modal.component.html',
  styleUrl: './view-order-modal.component.css'
})
export class ViewOrderModalComponent {
  constructor(private modalService: NgbModal) {}
  @Input({ required: true }) order: any = {};

  ngOnInit() {
    this.order = JSON.parse(this.order);
  }
  onCancel() {
    this.modalService.dismissAll();
  }
}
