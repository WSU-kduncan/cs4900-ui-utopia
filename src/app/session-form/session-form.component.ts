import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-session-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent {
  private sessionService = inject(SessionService);
  private fb = inject(FormBuilder);

  // temporary data for dropdowns
  clients = [
    { id: 1, name: 'John Jones' },
    { id: 3, name: 'Kelly Walters' }
  ];
  trainers = [
    { id: 1, name: 'Arnold Coleman' },
    { id: 2, name: 'Charles Odderson' }
  ];
  routines = [
    { id: 1, name: 'Full Body Strength' },
    { id: 2, name: 'Cardio Endurance' },
    { id: 3, name: 'Core Builder' }
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
        next: res => {
          console.log('Session created:', res);
          this.sessionForm.reset({
            note: '',
            date: new Date().toISOString().slice(0, 10),
            duration: '01:00:00',
            client: null,
            trainer: null,
            routine: null
          });
        },
        error: err => console.error('Error creating session:', err)
      });
    }
  }
}
