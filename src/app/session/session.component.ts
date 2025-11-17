import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Session, SessionService } from '../services/session.service';

import { SessionDetailComponent } from '../session-detail/session-detail.component'; 

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [FormsModule, SessionDetailComponent],
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  newSessionName: string = '';

  constructor(public sessionService: SessionService) {}

  addSession() {
    if (!this.newSessionName.trim()) return;

    this.sessionService.addSession(this.newSessionName);
    this.newSessionName = '';
  }

  get sessions(): Session[] {
    return this.sessionService.sessions;
  }
}
