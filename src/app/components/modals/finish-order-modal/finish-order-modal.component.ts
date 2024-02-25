import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../buttons/button/button.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-finish-order-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './finish-order-modal.component.html',
  styleUrl: './finish-order-modal.component.css'
})
export class FinishOrderModalComponent {
  constructor(private modalService: NgbModal) {
  }
  onCancel() {
    this.modalService.dismissAll();
  }
}
