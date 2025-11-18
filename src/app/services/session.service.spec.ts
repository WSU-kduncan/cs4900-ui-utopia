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
      { id: 1, name: 'Test Session', date: '2025-11-17', duration: 60 }
    ];

    service.getSessions().subscribe((sessions: string | any[]) => {
      expect(sessions.length).toBe(1);
      expect(sessions).toEqual(mockSessions);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockSessions);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
