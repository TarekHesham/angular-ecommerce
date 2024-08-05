import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceAfterOffer',
  standalone: true,
})
export class PriceAfterOfferPipe implements PipeTransform {
  transform(price: number, discountPercentage: number): string {
    return (price -= price * (discountPercentage / 100)).toFixed(2);
  }
}
