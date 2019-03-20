import { Injectable } from '@angular/core';
import {Email} from './email';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailServerURL='https://5c5a21f9af3ff700140de477.mockapi.io/api/email';

  constructor(
    private http: HttpClient
  ) { }

  getEmails(): Observable<Email[]>{
    return this.http.get<Email[]>(this.emailServerURL);
  }
}
