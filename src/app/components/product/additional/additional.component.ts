import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product';

@Component({
  selector: 'app-additional',
  standalone: true,
  imports: [],
  templateUrl: './additional.component.html',
  styleUrl: './additional.component.css',
})
export class AdditionalComponent {
  @Input() product!: Product;
}
