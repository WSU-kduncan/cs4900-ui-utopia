import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ClientService {
    constructor() {}

    clients = [
        { id: 1, name: 'James Rowe' },
        { id: 2, name: 'John Bench' },
        { id: 3, name: 'Jack Squat' },
    ];

    addClient(name: string) {
        this.clients.push({ id: (this.clients.at(this.clients.length - 1)?.id ?? 0) + 1, name: name });
    }
}
