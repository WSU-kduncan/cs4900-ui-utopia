import { Component } from '@angular/core';
import { TrainerListComponent } from './trainer/trainer-list.component';

import { ClientInfoComponent } from './components/client-info/client-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TrainerListComponent, ClientInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fitness-tracker';
}