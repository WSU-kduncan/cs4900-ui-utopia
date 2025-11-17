import { Component, Input } from '@angular/core';
import { Session } from '../services/session.service';

@Component({
  selector: 'app-session-detail',
  standalone: true,
  imports: [],
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent {
  @Input() session!: Session;
}
