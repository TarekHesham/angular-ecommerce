import { Component } from '@angular/core';
import { HeroComponent } from '../../components/global/hero/hero.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {}
