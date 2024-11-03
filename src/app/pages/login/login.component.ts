import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, NgClass, FormsModule, RouterLink,RouterModule],
  templateUrl: './login.component.html',
  styleUrl:'./login.component.scss',
})
export class LoginComponent {
  private showPassword: boolean = false;
  private rememberMe: boolean = false;
  private isNitroActive: boolean = false;

constructor() {
  this.initializeEventListeners();
}
private initializeEventListeners(): void {
  const eyeButton = document.querySelector('.btn-eye');
  const rememberSwitch = document.getElementById('remember') as HTMLInputElement;
  const loginButton = document.querySelector('.btn-login');

  eyeButton?.addEventListener('click', this.togglePasswordVisibility.bind(this));
  rememberSwitch?.addEventListener('change', this.toggleRememberMe.bind(this));
  loginButton?.addEventListener('click', this.activateNitro.bind(this));
}

private togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
  const passwordInput = document.getElementById('password') as HTMLInputElement;
  const eyeIcon = document.querySelector('.eye-icon');

  if (passwordInput && eyeIcon) {
    passwordInput.type = this.showPassword ? 'text' : 'password';
    eyeIcon.classList.toggle('eye-off', this.showPassword);
  }
}

private toggleRememberMe(): void {
  this.rememberMe = !this.rememberMe;
}

private activateNitro(): void {
  this.isNitroActive = true;
  const loginButton = document.querySelector('.btn-login');
  const btnText = loginButton?.querySelector('.btn-text');
  const btnIcon = loginButton?.querySelector('.icon');

  if (loginButton && btnText && btnIcon) {
    loginButton.classList.add('active');
    btnText.textContent = '¡NOS Activado!';
    btnIcon.classList.remove('dollar-icon');
    btnIcon.classList.add('gauge-icon');

    setTimeout(() => {
      this.isNitroActive = false;
      loginButton.classList.remove('active');
      btnText.textContent = 'Iniciar Conversión';
      btnIcon.classList.remove('gauge-icon');
      btnIcon.classList.add('dollar-icon');
      }, 1000);
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  new LoginComponent();
});