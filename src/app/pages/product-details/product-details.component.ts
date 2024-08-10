import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductContentComponent } from '../../components/product/product-content/product-content.component';
import { RelatedProductsComponent } from '../../components/product/related-products/related-products.component';
import { ProductShopingCartComponent } from '../../components/product/product-shoping-chart/product-shoping-cart.component';
import { HeroComponent } from '../../components/global/hero/hero.component';
import { Product } from '../../types/product';
import { Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { ApiProductsService } from '../../services/api-products.service';

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
export class ProductDetailsComponent implements OnInit, OnDestroy {
  productDetails: Product | any;
  relatedProducts: any;
  private destroy$ = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiProduct: ApiProductsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap((params: any) => this.apiProduct.getProductById(params?.id)),
        switchMap((pro: any) => {
          this.productDetails = pro;
          return this.apiProduct.getProductByCategory(pro.category, 4);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((related: any) => {
        this.relatedProducts = related.products;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
