import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent {
  // Variables simuladas para el ejemplo
  user = {
    subscriptionId: 1, // Ejemplo de ID de suscripción, cambiar según sea necesario
  };
  
  // Lista de monedas (puedes reemplazarla con una llamada a un servicio si tienes una API)
  currencies = [
    { id: 1, symbol: 'USD', name: 'Dólar Estadounidense' },
    { id: 2, symbol: 'EUR', name: 'Euro' },
    { id: 3, symbol: 'JPY', name: 'Yen Japonés' }
    // Agrega más monedas según sea necesario
  ];

  // Conjunto de monedas favoritas
  favoriteCurrenciesSet = new Set<number>([1, 3]); // Ejemplo: USD y JPY como favoritos

  // Objeto de conversión para almacenar los datos de la conversión
  conversion = {
    sourceCurrencyId: null,
    targetCurrencyId: null,
    originalAmount: null,
  };

  // Contador de conversiones restantes (ejemplo)
  remainingConversions: number = 5; // Cambiar según lógica de suscripción

  // Método para confirmar la conversión
  confirmarConversion() {
    if (this.conversion.originalAmount && this.conversion.sourceCurrencyId && this.conversion.targetCurrencyId) {
      // Aquí iría la lógica para la conversión de moneda
      console.log('Conversión confirmada:', this.conversion);
      // Decrementar el contador de conversiones si no es ilimitado
      if (this.user.subscriptionId !== 9 && this.remainingConversions > 0) {
        this.remainingConversions--;
      }
    } else {
      console.log('Por favor, completa todos los campos antes de convertir.');
    }
  }

  // Método para navegar a la página de monedas favoritas
  navegar(ruta: string) {
    // Lógica de navegación
    console.log(`Navegando a ${ruta}`);
  }
}
