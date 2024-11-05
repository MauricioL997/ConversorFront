import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,CommonModule,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
//  errorRegister: boolean = false;
//
//  constructor(private userService: UserService, private router: Router) {}
//
//  register(form: NgForm) {
//    if (form.valid) {
//      const { UserName, Email, FirstName, LastName, password } = form.value;
//      this.userService.registerUser({ UserName, Email, FirstName, LastName, password }).subscribe(
//        (response) => {
//          console.log('Registration successful', response);
//          this.router.navigate(['/login']);
//        },
//        (error) => {
//          console.error('Registration failed', error);
//          this.errorRegister = true;
//        }
//      );
//    }
//  }
}