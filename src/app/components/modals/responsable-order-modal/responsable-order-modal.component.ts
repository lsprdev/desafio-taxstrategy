import { Component } from '@angular/core';
import { ButtonComponent } from '../../buttons/button/button.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-responsable-order-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './responsable-order-modal.component.html',
  styleUrl: './responsable-order-modal.component.css'
})
export class ResponsableOrderModalComponent {
  constructor(private modalService: NgbModal) {
  }
  onCancel() {
    this.modalService.dismissAll();
  }
}
