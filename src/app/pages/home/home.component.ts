import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import products from '../../../../public/data/products.json';
import { FeaturedProductsComponent } from '../../components/featured-products/featured-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturedProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productsHero: any[] = products.splice(0, 3);
  productsFeatured: any[] = products.splice(4, 16);
}
