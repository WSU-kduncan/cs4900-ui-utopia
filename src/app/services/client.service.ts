import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Client {
  id: number;
  name: string;
  email: string;
}
@Injectable({
    providedIn: 'root',
})
export class ClientService {
    private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {}

    getClients(): Observable<Client[]> {
      return this.http.get<Client[]>(this.apiUrl);
    }

    // clients = [
    //     { id: 1, name: 'James Rowe' },
    //     { id: 2, name: 'John Bench' },
    //     { id: 3, name: 'Jack Squat' },
    // ];

    // addClient(name: string) {
    //     this.clients.push({ id: (this.clients.at(this.clients.length - 1)?.id ?? 0) + 1, name: name });
    // }
}
