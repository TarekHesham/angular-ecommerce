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

  ngOnInit() {
    this.relatedProducts = this.relatedProducts
      // .filter((pro: Product) => pro.rating > 4)
      .sort((a: Product, z: Product) => Math.random() - 0.5)
      .slice(0, 4);
  }

  startsArray(start: any) {
    return new Array(Math.floor(start));
  }
}
