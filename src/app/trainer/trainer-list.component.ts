import { Component, signal } from '@angular/core';
import { TrainerService } from '../services/trainer.service';
import { TrainerDetailComponent } from '../trainer-detail/trainer-detail.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trainer-list',
  standalone: true,
  imports: [FormsModule, TrainerDetailComponent],
  templateUrl: './trainer-list.component.html',
  styleUrl: './trainer-list.component.scss',
})
export class TrainerListComponent {
  constructor(private trainerService: TrainerService) {}

  get trainers() {
    return this.trainerService.trainers;
  }

  newName = signal('');
  newNameValue = '';

  addTrainer() {
    this.trainerService.addTrainer(this.newName());
    this.newName.set('');
    this.newNameValue = '';
  }
}