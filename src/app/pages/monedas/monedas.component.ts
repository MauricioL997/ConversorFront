import { Component, OnInit } from '@angular/core';
import { Currency } from '../../interfaces/currency';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monedas',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.scss']
})
export class MonedasComponent implements OnInit {
  currencies: Currency[] = [];
  isAdmin: boolean = false; // Set this based on user role
  showModal: boolean = false;
  editingCurrency: Currency | null = null;
  currentCurrency: Currency = {
    code: '',
    legend: '',
    symbol: '',
    convertibilityIndex: 0,
    isActive: true
  };

  constructor() { }

  ngOnInit(): void {
    // Initialize component, fetch currencies, etc.
  }

  editCurrency(currency: Currency): void {
    // Logic for editing a currency
  }

  deleteCurrency(id: number): void {
    // Logic for deleting a currency
  }

  addCurrency(): void {
    // Logic for adding a new currency
  }

  saveCurrency(): void {
    // Logic for saving a currency (both add and edit)
  }

  closeModal(): void {
    // Logic for closing the modal
  }
}