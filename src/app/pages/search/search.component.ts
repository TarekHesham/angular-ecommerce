import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/global/hero/hero.component';
import { Product } from '../../types/product';
import { ActivatedRoute } from '@angular/router';
import { ResualtsComponent } from '../../components/search/resualts/resualts.component';
import { Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeroComponent, ResualtsComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit, OnDestroy {
  searchResualts!: Product[];
  searchQuery!: string;
  showDisplay: string = 'grid';
  private destroy$ = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsAPI: ApiProductsService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams
      .pipe(
        switchMap((params: any) => {
          this.searchQuery = params?.query;
          return this.productsAPI.searchProduct(this.searchQuery);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((resualts: any) => {
        this.searchResualts = resualts.products;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
