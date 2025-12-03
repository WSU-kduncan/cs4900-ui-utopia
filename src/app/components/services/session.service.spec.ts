import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SessionService, Session } from './session.service';

describe('SessionService', () => {
  let service: SessionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SessionService]
    });

    service = TestBed.inject(SessionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch sessions from API', () => {
    const mockSessions: Session[] = [
      {
        id: 1,
        date: '2025-11-17',
        note: 'Test session note',
        duration: '60',
        client: { id: 1, name: 'John Jones' },
        trainer: { id: 1, name: 'Arnold Coleman' },
        routine: { id: 1, name: 'Full Body Strength' }
      }
    ];

    service.getSessions().subscribe((sessions: Session[]) => {
      expect(sessions.length).toBe(1);
      expect(sessions).toEqual(mockSessions);
    });

    const req = httpMock.expectOne('http://localhost:8080/OpenTrainer/session');
    expect(req.request.method).toBe('GET');
    req.flush(mockSessions);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
