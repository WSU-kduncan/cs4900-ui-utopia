import { Injectable } from '@angular/core';

export interface Session {
  id: number; 
  name: string; 
  date: string; 
  duration: number;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  sessions: Session[] = [
    { id: 1, name: 'Leg Day', date: '2025-11-10', duration: 60 },
    { id: 2, name: 'Push Day', date: '2025-11-08', duration: 45 },
    { id: 3, name: 'Pull Day', date: '2025-11-05', duration: 50 }
  ];

  constructor() {}

  addSession(name: string, date: string = new Date().toISOString().slice(0, 10), duration: number = 60) {
    let newId = 1;
    if (this.sessions.length > 0) {
      newId = this.sessions[this.sessions.length - 1].id + 1;
    }
    this.sessions.push({ id: newId, name, date, duration });
  }
}
