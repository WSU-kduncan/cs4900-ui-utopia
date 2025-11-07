import { Component } from '@angular/core';
import { TrainerListComponent } from './Trainer/trainer-list.component';

@Component({
  selector: 'app-root',
  imports: [TrainerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fitness-tracker';
}
