import { HttpClient } from '@angular/common/http';
import {Injectable, signal} from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from './trainer.service';

export interface Client {
  id?: number;
  name: string;
  email: string;
  passwordHash: string;
  trainer: Trainer;
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly apiUrl = 'http://localhost:8080/OpenTrainer/client';

  constructor(private http: HttpClient) { }

  private _clients = signal<Client[]>([]);
  clients = this._clients.asReadonly();

  fetchClients() {
    this.getClients().subscribe({
      next: (data) => this._clients.set(data),
      error: (err) => console.error('Error fetching clients', err),
    });
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  getClientByEmail(email: string): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/email/${email}`);
  }

  createClient(client: Partial<Client>): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }

  updateClient(id: number, client: Partial<Client>): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${id}`, client);
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
