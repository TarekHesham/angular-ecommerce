import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProductsCount = new BehaviorSubject<number>(0);
  cartProductsCount$ = this.cartProductsCount.asObservable();

  constructor() {
    this.cartProductsCount.next(this.getCart.length);
  }

  get getCart() {
    const cartData: string | any = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  }

  getFromCart(id: number) {
    const allData = localStorage.getItem('cart');
    if (allData) {
      return JSON.parse(allData).find((x: any) => x.id == id);
    }
  }

  setToCart(product: any, quantity: number) {
    try {
      const cartData = this.getCart;
      const productInCart = cartData.find((pro: any) => pro.id == product.id);

      if (productInCart) {
        productInCart.quantity += quantity;
        if (productInCart.quantity > productInCart.stock) {
          throw new Error(`Qount greater than stock`);
        }
      } else {
        if (quantity > product.stock) {
          throw new Error(`Quantity greater than stock`);
        }
        product.quantity = quantity;
        cartData.push(product);
      }
      localStorage.setItem('cart', JSON.stringify(cartData));
      this.cartProductsCount.next(cartData.length);
      return true;
    } catch (err) {
      return console.error(err);
    }
  }
}
