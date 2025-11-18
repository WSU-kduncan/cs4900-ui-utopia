import { Component, inject, Input } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormsModule } from '@angular/forms';
import { ClientDetailComponent } from '../client-detail/client-detail.component';
import { toSignal } from '@angular/core/rxjs-interop';

export class Client {
  name: String = 'Client Name';
  id: Number = 0;
}
@Component({
  selector: 'app-client-info',
  standalone: true,
  imports: [FormsModule, ClientDetailComponent],
  templateUrl: './client-info.component.html',
  styleUrl: './client-info.component.scss',
})
export class ClientInfoComponent {
  @Input() client: Client | null = null;

  private clientService = inject(ClientService);
  clients = toSignal(this.clientService.getClients(), { initialValue: [] });

  newClientName = '';

  addClient() {
    if (this.newClientName.trim()) {
      // this.clientService.addClient(this.newClientName.trim());
      this.newClientName = '';
    }
  }
}
