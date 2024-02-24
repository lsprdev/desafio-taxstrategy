import { Component } from '@angular/core';
import { ButtonComponent } from '../../buttons/button/button.component';

@Component({
  selector: 'app-add-order-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './add-order-modal.component.html',
  styleUrl: './add-order-modal.component.css'
})
export class AddOrderModalComponent {

}
