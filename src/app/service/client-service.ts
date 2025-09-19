import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

export interface ClientResponse {
  content: Client[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  elementApiUrl = 'http://localhost:8081/api/v1/services';
  constructor(private http: HttpClient){}

    getClients(): Observable<ClientResponse> {
        return this.http.get<ClientResponse>(this.elementApiUrl);
    }

    finallyClient(id: number): Observable<any> {
       return this.http.delete<any>(`${this.elementApiUrl}/${id}`);
    }

}
