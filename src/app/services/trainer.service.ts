import { Injectable, signal } from '@angular/core';

export interface Trainer {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class TrainerService {
  private _trainers = signal<Trainer[]>([
    { id: 1, name: 'John Addams' },
    { id: 2, name: 'Jack Daniel' },
    { id: 3, name: 'Jim Beam' }
  ]);

  trainers = this._trainers.asReadonly();

  addTrainer(name: string) {
    if (!name?.trim()) return;
    const newId = Math.max(...this._trainers().map(t => t.id), 0) + 1;
    this._trainers.update(list => [...list, { id: newId, name: name.trim() }]);
  }
}
