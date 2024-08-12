import { Component } from '@angular/core';
import { HeroComponent } from '../../components/global/hero/hero.component';
import { DisplayCartComponent } from '../../components/cart/display-cart/display-cart.component';
import { TotalsComponent } from '../../components/cart/totals/totals.component';

@Component({
  selector: 'app-shoping-cart',
  standalone: true,
  imports: [HeroComponent, DisplayCartComponent, TotalsComponent],
  templateUrl: './shoping-cart.component.html',
  styleUrl: './shoping-cart.component.css',
})
export class ShopingCartComponent {}
