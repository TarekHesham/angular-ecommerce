import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-totals',
  standalone: true,
  imports: [],
  templateUrl: './totals.component.html',
  styleUrl: './totals.component.css',
})
export class TotalsComponent {
  @Input() Subtotals: number = 0;
  @Input() paymentPage: boolean = false;

  constructor(private router: Router, private cart: CartService) {}
  redirectPayment() {
    this.router.navigate(['payment']);
    // Edit to but your behiveor payment ex: send data to api before clear :)
    this.cart.clearCart();
  }
}
