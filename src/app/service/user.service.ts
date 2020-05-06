import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../model/email.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  validateEmail(email: string): Observable<Email> {
    let req: Email = new Email();
    req.email = email;
    return this.http.post<Email>('http://localhost:8080/users/validate/', req);
  }
}
