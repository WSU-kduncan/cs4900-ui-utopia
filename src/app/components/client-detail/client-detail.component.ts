import { Component, input } from '@angular/core';

export interface Client {
    id: number;
    name: string;
}

@Component({
  selector: 'app-client-detail',
  imports: [],
  standalone: true,
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.scss'
})
export class ClientDetailComponent {
    client = input.required<Client>()
}
