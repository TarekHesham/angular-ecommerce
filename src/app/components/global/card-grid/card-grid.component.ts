import { Component, Input } from '@angular/core';
import { StarsComponent } from '../stars/stars.component';
import { PriceAfterOfferPipe } from '../../../pipes/price-after-offer.pipe';
import { RouterLink } from '@angular/router';
import { Product } from '../../../types/product';

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [
    StarsComponent,
    PriceAfterOfferPipe,
    RouterLink,
    PriceAfterOfferPipe,
  ],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css',
})
export class CardGridComponent {
  @Input() productDetails!: Product;
}
