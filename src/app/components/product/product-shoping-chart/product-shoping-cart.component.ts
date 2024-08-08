import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Product } from '../../../types/product';
import { PriceAfterOfferPipe } from '../../../pipes/price-after-offer.pipe';
import { RouterLink } from '@angular/router';
import { StarsComponent } from '../../global/stars/stars.component';

@Component({
  selector: 'app-product-shoping-cart',
  standalone: true,
  imports: [PriceAfterOfferPipe, RouterLink, StarsComponent],
  templateUrl: './product-shoping-cart.component.html',
  styleUrl: './product-shoping-cart.component.css',
})
export class ProductShopingCartComponent {
  disableCounter: boolean = false;

  @Input() product!: Product;
  @ViewChild('count') countProduct!: ElementRef;
  handleCount(add: boolean) {
    let ele = this.countProduct.nativeElement;

    if (add && +ele.value < this.product.stock) ele.value++;
    else if (!add && +ele.value > 0) ele.value--;

    if (+ele.value == this.product.stock) this.disableCounter = true;
    else this.disableCounter = false;
  }
}
