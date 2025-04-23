import { Component } from '@angular/core';

@Component({
  selector: 'app-naglowek',
  imports: [],
  templateUrl: './naglowek.component.html',
  styleUrl: './naglowek.component.css'
})
export class NaglowekComponent {
  headerText: string = 'Sklep TAIiB';

  onMouseEnter(): void {
    this.headerText = 'Sklep TAIiB :)';
  }

  onMouseLeave(): void {
    this.headerText = 'Sklep TAIiB';
  }

}
