import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableAndSearchbar } from "./table-and-searchbar/table-and-searchbar";
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableModule, TableAndSearchbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('painel-de-atendimento');
}
