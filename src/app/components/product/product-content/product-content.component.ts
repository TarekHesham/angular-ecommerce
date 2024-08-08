import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-content',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './product-content.component.html',
  styleUrl: './product-content.component.css',
})
export class ProductContentComponent {
  @Input() product!: Product;
  displayComponent: number = 0;

  toggleDisplay(id: number) {
    return (this.displayComponent = id);
  }

  startsArray(start: any) {
    return new Array(Math.floor(start));
  }
}
