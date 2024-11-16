import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Conversion } from '../../interfaces/conversion';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'] // Corrección aquí
})
export class HistorialComponent {
  conversiones: Conversion[] = []; // Array para almacenar el historial

  constructor() {}

  ngOnInit(): void {
    // Inicialización del componente o fetch del historial de conversiones
  }

  exportarHistorial(): void {
    // Implementar la lógica para exportar el historial
  }
}
