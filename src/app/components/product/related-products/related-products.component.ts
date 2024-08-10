import { RouterLink } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product';
import { PriceAfterOfferPipe } from '../../../pipes/price-after-offer.pipe';
import { StarsComponent } from '../../global/stars/stars.component';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [PriceAfterOfferPipe, StarsComponent, RouterLink],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.css',
})
export class RelatedProductsComponent {
  @Input() relatedProducts: Product[] | any;

  startsArray(start: any) {
    return new Array(Math.floor(start));
  }
}
