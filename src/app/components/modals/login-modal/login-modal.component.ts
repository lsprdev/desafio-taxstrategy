import { Component, Input, inject } from '@angular/core';
import { ButtonComponent } from '../../buttons/button/button.component';
import { FullButtonComponent } from '../../buttons/full-button/full-button.component';
import { StrokeButtonComponent } from '../../buttons/stroke-button/stroke-button.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [
    ButtonComponent, 
    FullButtonComponent, 
    StrokeButtonComponent, 
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  constructor(private router: Router) { }

  admin = {
    email: '',
    password: '',
    remember: false
  };

  baseUrl: string = 'https://back.lsprlab.cloud';

  private httpClient = inject(HttpClient);
  
  async onSubmit(form: NgForm) {
    const user = {
      email: form.value.email,
      password: form.value.password
    };

    if (form.valid) {
      this.httpClient.post(`${this.baseUrl}/api/login`, user).subscribe((data: any) => {
        if (data.data.status === 200) {
          console.log('Login bem sucedido!');
          this.router.navigate(['/dashboard']);
        } else {
          console.log('Usuário não existe!');
        }
      });
    } else {
      console.log('Dados inválido!');
    }
  }

  ngOnInit() {
    this.httpClient.get(`${this.baseUrl}/api/seed`).subscribe((data: any) => {});
  }
}
