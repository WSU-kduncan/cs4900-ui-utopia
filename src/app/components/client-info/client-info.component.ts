import { Component, Input } from '@angular/core';

export class Client {
    name: String = "Client Name";
    id: Number = 0;
}
@Component({
  selector: 'app-client-info',
  standalone: true,
  imports: [],
  templateUrl: './client-info.component.html',
  styleUrl: './client-info.component.scss'
})
export class ClientInfoComponent {
    @Input() client: Client | null = null

    clients = [
        { id: 1, name: 'James Rowe' },
        { id: 2, name: 'John Bench' },
        { id: 3, name: 'Jack Squat' }
    ];
}
