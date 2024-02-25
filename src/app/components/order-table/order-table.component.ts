import { Component } from '@angular/core';
import mockOrders from './mock-data';
import { NgStyle } from '@angular/common';
import { ClickOutsideDirective } from './click-outside.directive';
@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [NgStyle, ClickOutsideDirective],
  templateUrl: './order-table.component.html',
  styleUrl: './order-table.component.css'
})
export class OrderTableComponent {
  // Equipamento(TV, Celular, Desktop, Monitor, Notebook), Início, Previsão de  entrega, Problema apresentado, Funcionário responsável, Status.
  orders = mockOrders();
  
  getInProcessOrders() {
    return this.orders.length > 0 ? this.orders.filter(order => order.status === 'Em andamento') : [];
  }

  getFinishedOrders() {
    return this.orders.length > 0 ? this.orders.filter(order => order.status === 'Finalizado') : [];
  }

  selectedRowIds: Set<number> = new Set<number>();
  selectedId: string = '';

  onRowClick(id: number) {
    if (this.selectedRowIds.has(id)) {
      this.selectedRowIds.delete(id);
    }
    else {
      this.selectedRowIds.add(id);
    }
  }

  rowIsSelected(id: number) {
    return this.selectedRowIds.has(id);
  }

  getSelectedRows() {
    return this.orders.filter(x => this.selectedRowIds.has(x.id));
  }

  onLogClick() {
    console.log(this.getSelectedRows());
  }

  // CONTEXT MENU CODE

  rightPanelStyle: any = {}
  currentOrder: any = {};

  ngOnInit() {
    this.closeContextMenu();
  }

  detectRightMouseClick($event: any, order: any) {
    if ($event.which === 3) {
      this.rightPanelStyle = {
        'display': 'block',
        'position': 'absolute',
        'left.px': ($event.clientX),
        'top.px': ($event.clientY)
      };
      this.currentOrder = order;
    }
  }

  closeContextMenu() {
    this.rightPanelStyle = {
      'display': 'none'
    };
  }

}
