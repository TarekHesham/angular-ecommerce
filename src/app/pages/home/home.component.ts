import { Component } from '@angular/core';
import { HeroComponent } from '../../components/home/hero/hero.component';
import products from '../../../../public/data/products.json';
import { FeaturedProductsComponent } from '../../components/home/featured-products/featured-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturedProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productsRandom: any[] = products.sort(() => Math.random() - 0.5);
  productsHero: any[] = this.productsRandom.slice(0, 3);
  productsFeatured: any[] = this.productsRandom.slice(4, 16);
}
