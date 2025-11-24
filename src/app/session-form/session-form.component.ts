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

  sessionForm: FormGroup = this.fb.group({
    note: ['', Validators.required],         // required field
    date: [new Date().toISOString().slice(0, 10), Validators.required],
    duration: ['01:00:00', Validators.required]
  });

  constructor() {}

  onSubmit() {
    if (this.sessionForm.valid) {
      this.sessionService.createSession(this.sessionForm.value).subscribe({
        next: (res) => {
          console.log('Session created:', res);
          this.sessionForm.reset({ note: '', date: new Date().toISOString().slice(0, 10), duration: '01:00:00' });
        },
        error: (err) => console.error('Error creating session:', err)
      });
    }
  }
}
