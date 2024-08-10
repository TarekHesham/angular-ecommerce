import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Product } from '../../../types/product';
import { PriceAfterOfferPipe } from '../../../pipes/price-after-offer.pipe';
import { RouterLink } from '@angular/router';
import { StarsComponent } from '../../global/stars/stars.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-shoping-cart',
  standalone: true,
  imports: [PriceAfterOfferPipe, RouterLink, StarsComponent],
  templateUrl: './product-shoping-cart.component.html',
  styleUrl: './product-shoping-cart.component.css',
})
export class ProductShopingCartComponent {
  @Input() product!: Product;
  @ViewChild('count') countProduct!: ElementRef;

  constructor(private cart: CartService) {}

  ngOnInit() {
    const productInCart = this.cart.getFromCart(this.product.id);
    if (productInCart) this.product.stock -= productInCart.quantity;
  }

  handleCount(add: boolean) {
    const ele = this.countProduct.nativeElement;

    if (add && +ele.value < this.product.stock) ele.value++;
    else if (!add && +ele.value > 0) ele.value--;
  }

  handleCart(product: Product, quantity: string) {
    try {
      const addedToCart = this.cart.setToCart(product, +quantity);
      if (addedToCart) {
        this.product.stock -= +quantity;
        this.countProduct.nativeElement.value = '0';
      }
    } catch (err) {
      console.error(`FROM Product shoping cart [ts] file...`);
    }
  }
}
