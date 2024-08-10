import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

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

  setToCart(product: any, count: number) {
    try {
      const cartData = this.getCart;
      const productInCart = cartData.find((pro: any) => pro.id == product.id);

      if (productInCart) {
        productInCart.count += count;
        if (productInCart.count > productInCart.stock) {
          throw new Error(`Count greater than stock`);
        }
      } else {
        if (count > product.stock) {
          throw new Error(`Count greater than stock`);
        }
        product.count = count;
        cartData.push(product);
      }
      localStorage.setItem('cart', JSON.stringify(cartData));
      return true;
    } catch (err) {
      return console.error(err);
    }
  }
}
