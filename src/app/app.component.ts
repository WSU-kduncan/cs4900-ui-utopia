import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Client, ClientInfoComponent } from './components/client-info/client-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fitness-tracker';
  client = new Client();
}
