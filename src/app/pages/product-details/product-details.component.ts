import { Component } from '@angular/core';
import products from '../../../../public/data/products.json';
import { ActivatedRoute } from '@angular/router';
import { ProductContentComponent } from '../../components/product/product-content/product-content.component';
import { RelatedProductsComponent } from '../../components/product/related-products/related-products.component';
import { ProductShopingCartComponent } from '../../components/product/product-shoping-chart/product-shoping-cart.component';
import { HeroComponent } from '../../components/global/hero/hero.component';
import { Product } from '../../types/product';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    HeroComponent,
    ProductShopingCartComponent,
    ProductContentComponent,
    RelatedProductsComponent,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  productDetails: Product | any;
  relatedProducts: any;
  private routeSub!: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          const { id } = params;
          this.productDetails = products.find((item) => item.id === +id);
          this.relatedProducts = products
            .filter(
              (pro) =>
                pro.category === this.productDetails.category &&
                pro !== this.productDetails
            )
            .slice(0, 4);
          return [];
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
