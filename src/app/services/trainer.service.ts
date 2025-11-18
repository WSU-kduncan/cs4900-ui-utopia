import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trainer {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class TrainerService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.apiUrl);
  }

  private _localTrainers = signal<Trainer[]>([]);
  localTrainers = this._localTrainers.asReadonly();

  addTrainer(name: string, email: string = '') {
    if (!name.trim()) return;

    const currentLocalIds = this._localTrainers().map(t => t.id);
    const maxLocalId = currentLocalIds.length > 0 ? Math.max(...currentLocalIds) : 0;
    const newId = maxLocalId + 1;

    const newTrainer: Trainer = {
      id: newId,
      name: name.trim(),
      email: email || `${name.toLowerCase().replace(' ', '.')}@example.com`
    };
    this._localTrainers.update(list => [...list, newTrainer]);
  }
}
