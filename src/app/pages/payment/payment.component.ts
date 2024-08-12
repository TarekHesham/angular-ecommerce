import { Component } from '@angular/core';
import { HeroComponent } from '../../components/global/hero/hero.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  orderCompleted: boolean = true;

  constructor(private router: Router) {}

  redirectShopping() {
    this.router.navigate(['/']);
  }
}
