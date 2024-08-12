import { Component, Output } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../types/product';
import { PriceAfterOfferPipe } from '../../../pipes/price-after-offer.pipe';
import { TotalsComponent } from '../totals/totals.component';

@Component({
  selector: 'app-display-cart',
  standalone: true,
  imports: [PriceAfterOfferPipe, TotalsComponent],
  templateUrl: './display-cart.component.html',
  styleUrl: './display-cart.component.css',
})
export class DisplayCartComponent {
  @Output() Subtotals: number = 0;
  dataInCart: Product[] = [];

  editCart: boolean = true;

  constructor(private cart: CartService) {}
  ngOnInit() {
    this.dataInCart = this.cart.getCart;
    this.totals();
  }

  calcPrice(price: number, discount: number, quantity: any) {
    return +((price -= (price * discount) / 100) * quantity).toFixed(2);
  }

  toggleEditCart() {
    this.editCart = this.editCart ? false : true;
  }

  productQuantity(id: number, plus: boolean) {
    const product = this.dataInCart?.find(
      (product: Product) => product.id === id
    );

    if (!product) return;
    else if (plus && product.quantity === product.stock) return;
    else if (!plus && product.quantity < 1) return;

    plus ? ++product.quantity : --product.quantity;

    // Update in localstorage
    this.cart.productQuantity(id, product.quantity);
    // Update totals
    this.totals();
  }

  deleteFromCart(id: number) {
    this.cart.deleteFromCart(id);
    this.dataInCart = this.cart.getCart;
  }

  clearCart() {
    this.cart.clearCart();
    this.dataInCart = [];
  }

  totals() {
    this.Subtotals = 0;
    for (let pro of this.dataInCart) {
      this.Subtotals += this.calcPrice(
        pro.price,
        pro.discountPercentage,
        pro.quantity
      );
    }
  }
}
