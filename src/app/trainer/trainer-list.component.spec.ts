import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerListComponent } from './trainer-list.component';
import { TrainerService } from '../services/trainer.service';
import { signal } from '@angular/core';

describe('TrainerListComponent', () => {
  let component: TrainerListComponent;
  let fixture: ComponentFixture<TrainerListComponent>;

  beforeEach(async () => {
    const mockService = {
      trainers: signal([
        { id: 1, name: 'John Addams' },
        { id: 2, name: 'Jack Daniel' },
        { id: 3, name: 'Jim Beam' }
      ])
    };

    await TestBed.configureTestingModule({
      imports: [TrainerListComponent],
      providers: [{ provide: TrainerService, useValue: mockService }]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display trainers', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.list-item').length).toBe(3);
  });
});
