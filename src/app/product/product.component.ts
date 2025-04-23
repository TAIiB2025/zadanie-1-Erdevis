import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from '../../models/product'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<void>();

  isExpanded: boolean = true;

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  onAddToCart(): void {
    this.product.quantity++;
    this.addToCart.emit();
  }

}
