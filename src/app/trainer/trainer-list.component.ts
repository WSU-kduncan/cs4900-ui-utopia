import { Component, signal, inject, OnInit } from '@angular/core';
import { TrainerService, Trainer } from '../services/trainer.service';
import { TrainerDetailComponent } from '../trainer-detail/trainer-detail.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainer-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TrainerDetailComponent],
  templateUrl: './trainer-list.component.html',
  styleUrl: './trainer-list.component.scss',
})
export class TrainerListComponent implements OnInit {
  private trainerService = inject(TrainerService);

  trainers = this.trainerService.trainers;

  newName = signal('');
  newEmail = signal('');
  newPassword = signal('');

  ngOnInit() {
    this.trainerService.fetchTrainers();
    this.trainers().forEach(t => console.log(t.name));
  }

  addTrainer() {
    const name = this.newName();
    const email = this.newEmail();
    const passwordHash = this.newPassword();

    if (!name || !email || !passwordHash) return;

    this.trainerService.createTrainer({ name, email, passwordHash }).subscribe({
      next: () => {
        this.trainerService.fetchTrainers();
        this.newName.set('');
        this.newEmail.set('');
        this.newPassword.set('')
      },
      error: (err) => console.error('Failed to create trainer', err),
    });
  }

  trackByTrainerId(index: number, trainer: Trainer): number {
    return trainer.id;
  }

  deleteTrainer(id: number) {
    this.trainerService.deleteTrainer(id).subscribe({
      next: () => this.trainerService.fetchTrainers(),
      error: err => console.error('Failed to delete trainer', err)
    });
  }
}