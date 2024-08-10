import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  cartProductsCount: number = 0;
  constructor(private cart: CartService) {}
  ngOnInit() {
    this.cart.cartProductsCount$.subscribe((count) => {
      this.cartProductsCount = count;
    });
  }
}
