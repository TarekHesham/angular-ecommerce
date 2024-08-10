import { ApiProductsService } from './../../services/api-products.service';
import { Component } from '@angular/core';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { FeaturedProductsComponent } from '../../components/home/featured-products/featured-products.component';
import { Subscription } from 'rxjs';
import { Product } from '../../types/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturedProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productsHero!: Product[];
  productsFeatured!: Product[];

  private routeSub!: Subscription;
  constructor(private productsApi: ApiProductsService) {}

  ngOnInit() {
    this.routeSub = this.productsApi.getProducts.subscribe((product: any) => {
      this.productsHero = product.products
        ?.sort(() => Math.random() - 0.5)
        ?.slice(0, 3);
      this.productsFeatured = product.products
        ?.sort(() => Math.random() - 0.5)
        ?.slice(4, 16);
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
