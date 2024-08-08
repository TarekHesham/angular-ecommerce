import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product';
import { StarsComponent } from '../stars/stars.component';
import { PriceAfterOfferPipe } from '../../../pipes/price-after-offer.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [StarsComponent, PriceAfterOfferPipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() productDetails!: Product;
}
