import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Session, SessionService } from '../services/session.service';
import { SessionDetailComponent } from '../session-detail/session-detail.component';
import { SessionFormComponent } from "../session-form/session-form.component";

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor, NgIf, SessionDetailComponent, SessionFormComponent],
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent {

  newSessionName: string = '';
  sessions: Session[] = [];
  private sessionService = inject(SessionService);

  constructor() {
    this.loadSessions();
  }

  loadSessions() {
    this.sessionService.getSessions().subscribe({
      next: (data) => this.sessions = data,
      error: (err) => console.error('Failed to load sessions', err)
    });
  }

  addSession() {
    if (!this.newSessionName.trim()) return;

    const sessionData = {
      date: new Date().toISOString().slice(0, 10),
      duration: '01:00:00',
      note: this.newSessionName
    };

    this.sessionService.createSession(sessionData).subscribe({
      next: () => {
        this.loadSessions();
        this.newSessionName = '';
      },
      error: (err) => console.error('Failed to create session', err)
    });
  }

  deleteSession(id: number) {
    this.sessionService.deleteSession(id).subscribe({
      next: () => this.loadSessions(),
      error: (err) => console.error('Error deleting session:', err)
    });
  }

  trackById(index: number, session: Session) {
    return session.id;
  }
}
