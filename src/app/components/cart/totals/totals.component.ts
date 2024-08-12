import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}
  redirectPayment() {
    this.router.navigate(['payment']);
  }
}
