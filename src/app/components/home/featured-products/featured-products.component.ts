import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css',
})
export class FeaturedProductsComponent {
  @Input() getFeaturedProducts!: Product[];
}
