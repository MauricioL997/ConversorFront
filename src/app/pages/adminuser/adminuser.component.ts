import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { SubscriptionType } from '../../interfaces/subscription-type.enum';
import { EnumUser } from '../../interfaces/enum-user.enum';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminuser',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.scss']
})
export class AdminUserComponent {
  users: User[] = [];
  isModalOpen: boolean = false;
  editingUser: User | null = null;
  currentUser: User = {
    id: 0,
    userName: '',
    email: '',
    password: '', 
    firstName: '',
    lastName: '',
    role: EnumUser.User, // Valor predeterminado
    type: SubscriptionType.Free, // Valor predeterminado
    subscriptionStartDate: new Date(),
    isActive: true
  };
  

  roles = Object.values(EnumUser); // Opciones para el campo de roles
  subscriptionTypes = Object.values(SubscriptionType); // Opciones para el campo de tipos de suscripción

  constructor() {}

  ngOnInit(): void {
    // Inicialización del componente, fetch de usuarios, etc.
  }

  toggleUserStatus(id: number): void {
    // Vacío, lógica a implementar
  }

  openEditModal(user: User): void {
    // Vacío, lógica a implementar
  }

  openAddModal(): void {
    // Vacío, lógica a implementar
  }

  closeModal(): void {
    // Vacío, lógica a implementar
  }

  deleteUser(id: number): void {
    // Vacío, lógica a implementar
  }

  saveUser(): void {
    // Vacío, lógica a implementar
  }
}
