import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataAuthService } from '../../services/data-auth.service';
import { AuthRequest } from '../../interfaces/auth-request';
import { User } from '../../interfaces/user';
import { RegisterRequest } from '../../interfaces/register-request';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  authService = inject(DataAuthService);
  router = inject(Router);
  errorRegister = false;
  username: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';

  async register(registerForm: NgForm) {
    const { username, email, firstName, lastName, password } = registerForm.value;
    const registerRequest: RegisterRequest = { username, email, firstName, lastName, password };

    try {
      const success = await this.authService.register(registerRequest);
      if (success) {
        this.router.navigate(['/login']);
      } else {
        this.errorRegister = true;
      }
    } catch (error) {
      console.error(error);
      this.errorRegister = true;
    }
  }
}
