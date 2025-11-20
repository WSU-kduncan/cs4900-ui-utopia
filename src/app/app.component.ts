import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SessionComponent} from './session/session.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SessionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fitness-tracker';
}