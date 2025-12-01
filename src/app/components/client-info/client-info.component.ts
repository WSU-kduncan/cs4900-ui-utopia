import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { Client, ClientService } from '../../services/client.service';
import { ClientDetailComponent } from '../client-detail/client-detail.component';

@Component({
  selector: 'app-client-info',
  standalone: true,
  imports: [ReactiveFormsModule, ClientDetailComponent],
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss'],
})
export class ClientInfoComponent {
  private clientService = inject(ClientService);
  private fb = inject(FormBuilder);

  clients = toSignal(this.clientService.getClients(), { initialValue: [] });

  clientForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    trainer_id: [1, Validators.required]
  });

  refreshClients() {
    this.clients = toSignal(this.clientService.getClients(), { initialValue: [] });
  }

  addClient() {
    if (this.clientForm.valid) {
      this.clientService.createClient(this.clientForm.value).subscribe({
        next: () => {
          this.refreshClients();
          this.clientForm.reset();
        },
        error: (err) => console.error('Error creating client:', err),
      });
    }
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe({
      next: () => this.refreshClients(),
      error: (err) => console.error('Error deleting client:', err),
    });
  }
}
