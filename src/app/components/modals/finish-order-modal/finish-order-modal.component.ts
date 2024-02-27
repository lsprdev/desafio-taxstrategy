import { Component, Input, inject } from '@angular/core';
import { ButtonComponent } from '../../buttons/button/button.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import baseUrl from '../../../../baseUrl';

@Component({
  selector: 'app-finish-order-modal',
  standalone: true,
  imports: [
    ButtonComponent,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './finish-order-modal.component.html',
  styleUrl: './finish-order-modal.component.css'
})
export class FinishOrderModalComponent {
  constructor(private modalService: NgbModal) {}
  @Input({ required: true }) currentOrder: any = {};
  
  data = {
    serviceDescription: '',
    finalizationDate: '',
  };

  private httpClient = inject(HttpClient);
  
  async onSubmit(form: NgForm) {
    let currentOrder = JSON.parse(this.currentOrder);
    this.httpClient.put(`${baseUrl}/api/orders/${currentOrder.id}`, {
      status: 'Finalizado',
    }).subscribe((data: any) => {
      console.log(data);
      this.modalService.dismissAll();
      window.location.reload();
    });
  }

  onCancel() {
    this.modalService.dismissAll();
  }
}
