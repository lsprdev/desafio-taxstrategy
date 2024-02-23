import { Component } from '@angular/core';
import { CenteredNavbarComponent } from '../../components/centered-navbar/centered-navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CenteredNavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
