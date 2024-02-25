import { Component } from '@angular/core';
import { OrderTableComponent } from '../../components/order-table/order-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [OrderTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
}
