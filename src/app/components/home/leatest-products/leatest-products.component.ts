import { Component, OnInit } from '@angular/core';
import { Product } from '../../../types/product';
import { ApiProductsService } from '../../../services/api-products.service';
import { LeatestCardsComponent } from '../leatest-cards/leatest-cards.component';

@Component({
  selector: 'app-leatest-products',
  standalone: true,
  imports: [LeatestCardsComponent],
  templateUrl: './leatest-products.component.html',
  styleUrl: './leatest-products.component.css',
})
export class LeatestProductsComponent implements OnInit {
  constructor(private products: ApiProductsService) {}

  selected: string = 'newArr';
  selectedProducts: Product[] = [];

  handlerSelect(selectItem: HTMLElement) {
    switch (selectItem.id) {
      case 'newArr':
        this.products.sortBy('createdAt', 'desc', 6).subscribe((data: any) => {
          this.selectedProducts = data.products;
        });
        break;
      case 'bestProducts':
        this.products.sortBy('rating', 'desc', 6).subscribe((data: any) => {
          this.selectedProducts = data.products;
        });
        break;
      case 'featuredProducts':
        this.products
          .sortBy('minimumOrderQuantity', 'desc', 6)
          .subscribe((data: any) => {
            this.selectedProducts = data.products;
          });
        break;
      case 'specialProducts':
        this.products
          .sortBy('discountPercentage', 'desc', 6)
          .subscribe((data: any) => {
            this.selectedProducts = data.products;
          });
        break;
    }
    this.selected = selectItem.id;
  }

  ngOnInit() {
    this.products.sortBy('createdAt', 'desc', 6).subscribe((data: any) => {
      this.selectedProducts = data.products;
    });
  }
}
