import {Component, inject, Output, EventEmitter, signal} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SessionService, Session } from '../services/session.service';
import {TrainerService} from '../services/trainer.service';
import {Client, ClientService} from '../services/client.service';

@Component({
  selector: 'app-session-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent {
  private sessionService = inject(SessionService);
  private fb = inject(FormBuilder);

  @Output() sessionCreated = new EventEmitter<Session>();

  constructor() {
    this.trainerService.fetchTrainers();
    this.clientService.fetchClients();
  }

  private trainerService = inject(TrainerService);
  trainers = this.trainerService.trainers;

  private clientService = inject(ClientService);
  clients = this.clientService.clients;

  routines = [
    { id: 1, name: 'Full Body Strength' },
    { id: 2, name: 'Cardio Endurance' },
    { id: 3, name: 'Core Builder' },
    { id: 4, name: 'Push' },
    { id: 5, name: 'Pull' },
    { id: 6, name: 'Leg' }
  ];

  sessionForm: FormGroup = this.fb.group({
    note: ['', Validators.required],
    date: [new Date().toISOString().slice(0, 10), Validators.required],
    duration: ['01:00:00', Validators.required],
    client: [null, Validators.required],
    trainer: [null, Validators.required],
    routine: [null, Validators.required]
  });

  onSubmit() {
    if (this.sessionForm.valid) {
      const sessionData = this.sessionForm.value;

      this.sessionService.createSession(sessionData).subscribe({
        next: (res: Session) => {
          console.log('Session created:', res);
          this.sessionForm.reset({
            note: '',
            date: new Date().toISOString().slice(0, 10),
            duration: '01:00:00',
            client: null,
            trainer: null,
            routine: null
          });

          this.sessionCreated.emit(res);
        },
        error: err => console.error('Error creating session:', err)
      });
    }
  }
}
