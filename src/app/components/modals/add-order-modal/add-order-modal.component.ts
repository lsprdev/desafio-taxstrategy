import { Component } from '@angular/core';
import { ButtonComponent } from '../../buttons/button/button.component';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-order-modal',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './add-order-modal.component.html',
  styleUrl: './add-order-modal.component.css'
})
export class AddOrderModalComponent {
  order = {
    type: '',
    description: '',
    initialDate: '',
    endDate: '',
    status: 'Em andamento',
  };
  constructor(private router: Router) { }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    this.router.navigateByUrl('dashboard');
  }
}
