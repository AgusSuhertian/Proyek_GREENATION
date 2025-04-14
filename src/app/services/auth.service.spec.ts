import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(email: string, password: string): void {
    localStorage.setItem(email, password);
  }

  login(email: string, password: string): boolean {
    const storedPassword = localStorage.getItem(email);
    return storedPassword === password;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }
}
