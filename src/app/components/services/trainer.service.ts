import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trainer {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
}

@Injectable({ providedIn: 'root' })
export class TrainerService {
  private apiUrl = 'http://localhost:8080/OpenTrainer/trainer';

  constructor(private http: HttpClient) {}

  private _trainers = signal<Trainer[]>([]);
  trainers = this._trainers.asReadonly();

  // Read
  fetchTrainers(): void {
    this.http.get<Trainer[]>(this.apiUrl).subscribe({
      next: (data) => this._trainers.set(data),
      error: (err) => console.error('Failed to fetch trainers', err)
    });
  }

  // Create
  createTrainer(trainer: Omit<Trainer, 'id'>): Observable<Trainer> {
    return this.http.post<Trainer>(this.apiUrl, trainer);
  }

  // Update 
  updateTrainer(trainer: Trainer): Observable<Trainer> {
    return this.http.put<Trainer>(`${this.apiUrl}/${trainer.id}`, trainer);
  }

  deleteTrainer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
