import { Component } from '@angular/core';

@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [],
  templateUrl: './order-table.component.html',
  styleUrl: './order-table.component.css'
})
export class OrderTableComponent {
  // Equipamento(TV, Celular, Desktop, Monitor, Notebook), Início, Previsão de  entrega, Problema apresentado, Funcionário responsável, Status.
  orders = [
    {
      id: 1,
      equipment: 'TV',
      start: '2021-08-10',
      delivery: '2021-08-15',
      problem: 'Tela quebrada',
      employee: 'João',
      status: 'Em andamento'
    },
    {
      id: 2,
      equipment: 'Celular',
      start: '2021-08-10',
      delivery: '2021-08-15',
      problem: 'Tela quebrada',
      employee: 'João',
      status: 'Em andamento'
    },
    {
      id: 3,
      equipment: 'Desktop',
      start: '2021-08-10',
      delivery: '2021-08-15',
      problem: 'Tela quebrada',
      employee: 'João',
      status: 'Em andamento'
    },
    {
      id: 4,
      equipment: 'Monitor',
      start: '2021-08-10',
      delivery: '2021-08-15',
      problem: 'Tela quebrada',
      employee: 'João',
      status: 'Em andamento'
    },
    {
      id: 5,
      equipment: 'Notebook',
      start: '2021-08-10',
      delivery: '2021-08-15',
      problem: 'Tela quebrada',
      employee: 'João',
      status: 'Finalizado'
    },
  ];
}
