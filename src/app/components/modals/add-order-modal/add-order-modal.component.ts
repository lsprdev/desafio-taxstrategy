import { Component } from '@angular/core';
import { ButtonComponent } from '../../buttons/button/button.component';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-order-modal',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './add-order-modal.component.html',
  styleUrl: './add-order-modal.component.css'
})
export class AddOrderModalComponent {
  constructor(private modalService: NgbModal, private router: Router) {}

  order = {
    equipment: '',
    startDate: '',
    deliveryDate: '',
    problemDescription: '',
    status: 'Em andamento',
  };

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }

  onCancel() {
    this.modalService.dismissAll();
  }
}
