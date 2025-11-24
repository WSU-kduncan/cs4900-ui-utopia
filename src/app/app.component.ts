import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SessionComponent} from './session/session.component';
import { SessionFormComponent } from './session-form/session-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SessionComponent, SessionFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fitness-tracker';
}