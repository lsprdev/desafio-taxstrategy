import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../buttons/button/button.component';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-order-modal',
  standalone: true,
  imports: [
    ButtonComponent, 
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './add-order-modal.component.html',
  styleUrl: './add-order-modal.component.css'
})
export class AddOrderModalComponent {
  constructor(private modalService: NgbModal, private router: Router) {}

  baseUrl: string = 'http://localhost:3000';

  private httpClient = inject(HttpClient);

  order = {
    equipment: '',
    startDate: '',
    deliveryDate: '',
    problemDescription: '',
    status: 'Em andamento',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      const orders = {
        equipment: form.value.equipment,
        startDate: form.value.startDate,
        deliveryDate: form.value.deliveryDate,
        problemDescription: form.value.problemDescription,
        status: 'Em andamento'
      }

      this.httpClient.post(`${this.baseUrl}/api/orders`, orders).subscribe((data: any) => {
        console.log(data.status);
        if (data.status === 200) {
          console.log('Ordem cadastrada com sucesso!');
          this.modalService.dismissAll();
          this.router.navigate(['/dashboard']);
        } else {
          console.log('Erro ao cadastrar ordem!');
        }
      });
    } else {
      console.log('Dados inválidos!');
    }
  }

  onCancel() {
    this.modalService.dismissAll();
  }
}
