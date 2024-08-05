import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private baseUrl = 'http://localhost:8080/api/registration';
  
    constructor(private http: HttpClient) { }
  
    register(user: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/register`, user);
    }
  
    login(user: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/login`, user);
    }
  }
  