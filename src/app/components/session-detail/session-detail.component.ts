import { Component, Input } from '@angular/core';
import { Session } from '../services/session.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-session-detail',
  standalone: true,
  imports: [NgIf], 
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.scss']
})
export class SessionDetailComponent {
  @Input() session!: Session;
}
