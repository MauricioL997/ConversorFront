import { Injectable } from '@angular/core';
import { AuthRequest, AuthResponse } from '../interfaces/auth-request';
import { environment } from '../../environments/environment';
import { RegisterRequest } from '../interfaces/register-request';

@Injectable({
  providedIn: 'root'
})
export class DataAuthService {
  private tokenKey = 'authToken';

  constructor() { }

  async login(authRequest: AuthRequest): Promise<AuthResponse | null> {
    try {
      const response = await fetch(`${environment.API_URL}Auth/authenticate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authRequest),
      });

      if (response.ok) {
        const authResponse: AuthResponse = await response.json();
        localStorage.setItem(this.tokenKey, authResponse.token);
        localStorage.setItem('user', JSON.stringify(authResponse.user));
        return authResponse;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error de autenticación:', error);
      return null;
    }
  }
  async register(registerRequest: RegisterRequest): Promise<boolean> {
    try {
      const response = await fetch(`${environment.API_URL}User/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerRequest),
      });

      if (response.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error de registro:', error);
      return false;
    }
  }
}
