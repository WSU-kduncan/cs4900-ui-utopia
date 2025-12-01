import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Client, ClientService } from '../../services/client.service';
import { ClientDetailComponent } from '../client-detail/client-detail.component';
import { TrainerService, Trainer } from '../../services/trainer.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-client-info',
  standalone: true,
  imports: [ReactiveFormsModule, ClientDetailComponent, NgFor],
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss'],
})
export class ClientInfoComponent {
  private clientService = inject(ClientService);
  private trainerService = inject(TrainerService);
  private fb = inject(FormBuilder);

  clients = signal<Client[]>([]);
  trainers = this.trainerService.trainers;

  clientForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    passwordHash: ['', Validators.required],
    trainer_id: [this.trainers()[0]?.id || null, Validators.required]
  });

  constructor() {
    this.fetchClients();
    this.trainerService.fetchTrainers();
  }

  fetchClients() {
    this.clientService.getClients().subscribe({
      next: (data) => this.clients.set(data),
      error: (err) => console.error('Error fetching clients', err),
    });
  }

  trackByTrainerId(index: number, trainer: Trainer): number {
    return trainer.id;
  }

  addClient() {
    if (this.clientForm.valid) {
      const trainerId = Number(this.clientForm.value.trainer_id);
      const selectedTrainer: Trainer | undefined = this.trainers().find(
        t => t.id === trainerId
      );

      if (!selectedTrainer) {
        console.error('Invalid trainer selected');
        return;
      }

      const payload: Client = {
        name: this.clientForm.value.name,
        email: this.clientForm.value.email,
        passwordHash: this.clientForm.value.passwordHash,
        trainer: selectedTrainer,
      };

      this.clientService.createClient(payload).subscribe({
        next: () => {
          this.fetchClients();
          this.clientForm.reset();
        },
        error: (err) => console.error('Error creating client:', err),
      });
    }
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe({
      next: () => this.fetchClients(),
      error: (err) => console.error('Error deleting client:', err),
    });
  }
}
