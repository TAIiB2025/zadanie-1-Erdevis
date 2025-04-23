import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-koszyk',
  imports: [CommonModule],
  templateUrl: './koszyk.component.html',
  styleUrl: './koszyk.component.css'
})
export class KoszykComponent {
  @Input() totalPrice: number = 0.00;
  @Output() resetCartEvent = new EventEmitter<void>();


  handleResetCart(): void {
    this.resetCartEvent.emit(); 
  }

}
