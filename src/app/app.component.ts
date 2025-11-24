import { Component } from '@angular/core';
import { TrainerListComponent } from './trainer/trainer-list.component';

import { ClientInfoComponent } from './components/client-info/client-info.component';
import {SessionComponent} from './session/session.component';
import { SessionFormComponent } from './session-form/session-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TrainerListComponent, ClientInfoComponent, SessionComponent, SessionFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fitness-tracker';
}
