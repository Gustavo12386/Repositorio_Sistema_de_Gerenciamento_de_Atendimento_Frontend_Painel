import { Component, inject, model, OnInit, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Client } from '../models/client.model';
import { ClientService } from '../service/client-service';
import { response } from 'express';

@Component({
  selector: 'app-table-and-searchbar',
  imports: [TableModule],
  templateUrl: './table-and-searchbar.html',
  styleUrl: './table-and-searchbar.scss'
})
export class TableAndSearchbar implements OnInit {

  clients: Client[] = [];
  
  constructor(private clientService: ClientService){}

  ngOnInit(): void {
    this.getClientList();
  }

  getClientList() {
    this.clientService.getClients().subscribe({
    next: (response) => {
      this.clients = response.content; 
      console.log(this.clients);
    },
    error: (err) => {
      console.error('Erro ao buscar clientes', err);
    }
  });
  }
}
