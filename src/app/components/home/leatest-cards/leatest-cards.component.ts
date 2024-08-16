import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product';
import { PriceAfterOfferPipe } from '../../../pipes/price-after-offer.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leatest-cards',
  standalone: true,
  imports: [PriceAfterOfferPipe, RouterLink],
  templateUrl: './leatest-cards.component.html',
  styleUrl: './leatest-cards.component.css',
})
export class LeatestCardsComponent {
  @Input() productDetails!: Product;
}
