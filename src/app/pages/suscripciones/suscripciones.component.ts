import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubscriptionType } from '../../interfaces/subscription-type.enum';

@Component({
  selector: 'app-suscripciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './suscripciones.component.html',
  styleUrls: ['./suscripciones.component.scss']
})
export class SuscripcionesComponent {
  // Estado actual del usuario
  userSubscription: SubscriptionType = SubscriptionType.Free;

  // Hacemos el enum accesible en el template
  subscriptionType = SubscriptionType;

  constructor() {}

  ngOnInit(): void {
    // Inicializar componente, obtener suscripción actual del usuario, etc.
  }

  upgradeTo(plan: SubscriptionType): void {
    // Lógica para actualizar la suscripción del usuario
  }
}
