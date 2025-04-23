import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../models/product';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { KoszykComponent } from './koszyk/koszyk.component';
import { NaglowekComponent } from './naglowek/naglowek.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, CommonModule,KoszykComponent, NaglowekComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TAIiB Store';
  products: Product[] = [
  new Product('Produkt 1', 20.00, new Date('2001-09-30'), true),
  new Product('Produkt 2', 30.00, new Date('2022-01-01'), false),
  new Product('Produkt 3', 40.00, new Date('2023-02-01'), false),
  new Product('Produkt 4', 50.00, new Date('2024-03-01'), true),
  new Product('Produkt 5', 60.00, new Date('2025-04-01'), false)
  ];

 totalPrice: number = 0.00;

 productsVisible: boolean = true;

 
 addToCart(cena: number): void {
  this.totalPrice += cena; 
}

resetCart(): void {
  this.totalPrice = 0;
  this.products.forEach(product => product.quantity = 0);
}

 toggleProductsVisibility(): void {
  this.productsVisible = !this.productsVisible;
}


}
