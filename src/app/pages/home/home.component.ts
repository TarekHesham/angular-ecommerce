import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import products from '../../../../public/data/products.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productsHero: object[] = products.splice(0, 3);
}
