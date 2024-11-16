import { Component, inject } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { DataAuthService } from '../../services/data-auth.service';
import { AuthRequest } from '../../interfaces/auth-request';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  authService = inject(DataAuthService);
  router = inject(Router);
  errorLogin = false;
  username: string = '';
  password: string = '';


  async login(loginForm: NgForm) {
    const { username, password } = loginForm.value;
    const authRequest: AuthRequest = { username, password };

    try {
      const authResponse = await this.authService.login(authRequest);
      if (authResponse) {
        this.router.navigate(['/conversor']);
      } else {
        this.errorLogin = true;
      }
    } catch (error) {
      console.error(error);
      this.errorLogin = true;
    }
  }
}