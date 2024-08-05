import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product';
import { PriceAfterOfferPipe } from '../../../pipes/price-after-offer.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-shoping-cart',
  standalone: true,
  imports: [PriceAfterOfferPipe, RouterLink],
  templateUrl: './product-shoping-cart.component.html',
  styleUrl: './product-shoping-cart.component.css',
})
export class ProductShopingCartComponent {
  @Input() product!: Product;

  startArray(start: any) {
    return new Array(Math.floor(start));
  }
}
