import { Component, OnInit, ViewChild} from '@angular/core';
import { TableModule } from 'primeng/table';
import { Client } from '../models/client.model';
import { ClientService } from '../service/client-service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { PaginatorModule } from 'primeng/paginator';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table-and-searchbar',
  imports: [TableModule, CommonModule, ButtonModule, MessageModule, FormsModule, PaginatorModule ],
  templateUrl: './table-and-searchbar.html',
  styleUrl: './table-and-searchbar.scss'
})
export class TableAndSearchbar implements OnInit {

  clients: Client[] = [];

  isShowDiv: boolean = false;
  searchTerm: string = '';

  @ViewChild('table') table!: Table; // referência para o p-table

  applyFilter() {
    this.table.filterGlobal(this.searchTerm, 'contains');
  }
  
  constructor(private clientService: ClientService, private router: Router){}

  onSearch(): void {
    this.applyFilter();
  }

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

  finallyClient(client: Client){
     const confirmed = window.confirm(`O atendimento com esse cliente já foi realizado?`);
       if (confirmed) {
       this.clientService.finallyClient(client.id).subscribe({
       next: () => {
       const index = this.clients.findIndex(c => c.id === client.id);
        if (index !== -1) {
          this.clients.splice(index, 1); 
        }
        this.isShowDiv = true;
        setTimeout(() => {
          this.isShowDiv = false;
        }, 3000);
      },
      error: err => {
        console.error('Erro ao deletar cliente:', err);
      }
    });
  }
  }
}
