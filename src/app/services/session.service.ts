import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Session {
  id: number;
  date: string;
  note: string;
  duration: string;
  client?: { id: number; name: string };
  trainer?: { id: number; name: string };
  routine?: { id: number; name: string };
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private apiUrl = 'http://localhost:8080/OpenTrainer/session'; 
  
  constructor(private http: HttpClient) {}

  createSession(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }  

  getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(this.apiUrl);
  }
  
}
