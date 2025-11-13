import { Component } from '@angular/core';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [],
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})

export class SessionComponent {
  sessions = [
    { id: 1, name: 'Leg Day', date: '2025-11-10', duration: 60 },
    { id: 2, name: 'Push Day', date: '2025-11-08', duration: 45 },
    { id: 3, name: 'Pull Day', date: '2025-11-05', duration: 50 }
  ];
}