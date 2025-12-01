import { Component, Input } from '@angular/core';
import { Client } from '../../services/client.service';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss'],
})
export class ClientDetailComponent {
  @Input() client!: Client;
}
