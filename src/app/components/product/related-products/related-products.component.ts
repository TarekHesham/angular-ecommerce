import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product';
import { PriceAfterOfferPipe } from '../../../pipes/price-after-offer.pipe';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [PriceAfterOfferPipe],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.css',
})
export class RelatedProductsComponent {
  @Input() relatedProducts: Product[] | any;

  ngOnInit() {
    this.relatedProducts = this.relatedProducts
      .filter((pro: Product) => pro.rating > 4)
      .sort((a: Product, z: Product) => Math.random() - 0.5)
      .slice(0, 4);

    console.log(this.relatedProducts);
  }

  startsArray(start: any) {
    return new Array(Math.floor(start));
  }
}
