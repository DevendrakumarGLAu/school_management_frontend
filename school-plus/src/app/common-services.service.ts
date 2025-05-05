import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })
export class CommonServicesService {
  // private baseUrl = 'http://localhost:8000';
  private baseUrl = environment.backendURL

  constructor(private http: HttpClient) {}

  login(data:any): Observable<any> {
    // const loginData = {  };
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  getMessage(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}

