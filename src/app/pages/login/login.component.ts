import { Component } from '@angular/core';
import { LoginModalComponent } from '../../components/modals/login-modal/login-modal.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginModalComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }
}
