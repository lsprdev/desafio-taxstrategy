import { Component } from '@angular/core';
import { ButtonComponent } from '../../buttons/button/button.component';
import { FullButtonComponent } from '../../buttons/full-button/full-button.component';
import { StrokeButtonComponent } from '../../buttons/stroke-button/stroke-button.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [ButtonComponent, FullButtonComponent, StrokeButtonComponent, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  person = {
    email: '',
    password: '',
    remember: false
  };

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }
}
