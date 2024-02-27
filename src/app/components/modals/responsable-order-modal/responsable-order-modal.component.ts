import { Component, Input, inject } from '@angular/core';
import { ButtonComponent } from '../../buttons/button/button.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import baseUrl from '../../../../baseUrl';

@Component({
  selector: 'app-responsable-order-modal',
  standalone: true,
  imports: [
    ButtonComponent,
    FormsModule,
    HttpClientModule 
  ],
  templateUrl: './responsable-order-modal.component.html',
  styleUrl: './responsable-order-modal.component.css'
})
export class ResponsableOrderModalComponent {
  constructor(private modalService: NgbModal) {}
  @Input({ required: true }) currentOrder: any = '';
  @Input({ required: true }) selectedOrders: any = '';

  private httpClient = inject(HttpClient);

  data = {
    personInCharge: '',
  }

  onCancel() {
    this.modalService.dismissAll();
  }

  onSubmit(form: NgForm) {
    console.log(this.currentOrder);
    console.log(JSON.parse(this.selectedOrders));
    console.log(form.value.personInCharge);

    const selectedOrders = JSON.parse(this.selectedOrders);
    const currentOrder = JSON.parse(this.currentOrder);

    if (selectedOrders.length > 0) {
      selectedOrders.forEach((order: any) => {
        this.httpClient.put(`${baseUrl}/api/orders/${order.id}`, {
          personInCharge: form.value.personInCharge
        }).subscribe((data: any) => {
          console.log(data);
          this.modalService.dismissAll();
          window.location.reload();
        });
      });
    } else {
      this.httpClient.put(`${baseUrl}/api/orders/${currentOrder.id}`, {
        personInCharge: form.value.personInCharge
      }).subscribe((data: any) => {
        console.log(data);
        this.modalService.dismissAll();
        window.location.reload();
      });
    }
  }

}
