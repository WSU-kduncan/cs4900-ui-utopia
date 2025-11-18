import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Session, SessionService } from '../services/session.service';
import { toSignal } from '@angular/core/rxjs-interop';
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

  public sessions = toSignal<Session[]>(this.sessionService.getSessions(), { initialValue: [] });

  constructor(public sessionService: SessionService) {}

  addSession() {
    if (!this.newSessionName.trim()) return;

    this.sessionService.addSession(this.newSessionName);
    this.newSessionName = '';
  }

  trackById(index: number, session: Session) {
    return session.id;
  }
  
}
