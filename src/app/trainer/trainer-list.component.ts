import { Component, signal, inject } from '@angular/core';
import { TrainerService, Trainer } from '../services/trainer.service';
import { TrainerDetailComponent } from '../trainer-detail/trainer-detail.component';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-trainer-list',
  standalone: true,
  imports: [FormsModule, TrainerDetailComponent],
  templateUrl: './trainer-list.component.html',
  styleUrl: './trainer-list.component.scss',
})
export class TrainerListComponent {
  private trainerService = inject(TrainerService);

  trainers = toSignal(this.trainerService.getTrainers(), { initialValue: [] });

  newName = signal('');
  newNameValue = '';

  addTrainer() {
    this.trainerService.addTrainer(this.newName());
    this.newName.set('');
    this.newNameValue = '';
  }
}