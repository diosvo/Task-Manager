import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private webService: WebRequestService, private router: Router) { }

  login(email: string, password: string) {
    
  }
}
