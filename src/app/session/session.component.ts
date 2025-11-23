import {Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Session, SessionService } from '../services/session.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { SessionDetailComponent } from '../session-detail/session-detail.component';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [FormsModule, SessionDetailComponent, NgFor],
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent  {
  newSessionName: string = '';

  private sessionService = inject(SessionService);
  public sessions = toSignal(this.sessionService.getSessions(), { initialValue: [] });

  constructor() {}

  addSession() {
    if (!this.newSessionName.trim()) return;

    this.sessionService.addSession(this.newSessionName);
    this.newSessionName = '';
  }

  trackById(index: number, session: Session) {
    return session.id;
  }

}