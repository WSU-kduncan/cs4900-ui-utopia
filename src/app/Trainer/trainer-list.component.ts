import { Component } from '@angular/core';

@Component({
  selector: 'app-trainer-list',
  standalone: true,
  imports: [],
  templateUrl: './trainer-list.component.html',
  styleUrl: './trainer-list.component.scss',
})
export class TrainerListComponent {
  dataArray = [
    { id: 1, name: 'John Addams' },
    { id: 2, name: 'Jack Daniel' },
    { id: 3, name: 'Jim Beam' }
  ];
}
