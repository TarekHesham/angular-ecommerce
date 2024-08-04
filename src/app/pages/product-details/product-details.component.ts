import { Component } from '@angular/core';
import products from '../../../../public/data/products.json';
import { ActivatedRoute } from '@angular/router';
import { ProductHeroComponent } from '../../components/product-hero/product-hero.component';
import { ProductContentComponent } from '../../components/product-content/product-content.component';
import { RelatedProductsComponent } from '../../components/related-products/related-products.component';
import { ProductShopingCartComponent } from '../../components/product-shoping-chart/product-shoping-cart.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    ProductHeroComponent,
    ProductShopingCartComponent,
    ProductContentComponent,
    RelatedProductsComponent,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  productDetails: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.productDetails = products.find((item) => item.id === +id);
    console.log(this.productDetails);
  }
}
