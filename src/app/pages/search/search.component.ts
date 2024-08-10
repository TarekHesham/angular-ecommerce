import { Component } from '@angular/core';
import { HeroComponent } from '../../components/global/hero/hero.component';
import products from '../../../../public/data/products.json';
import { Product } from '../../types/product';
import { ActivatedRoute } from '@angular/router';
import { ResualtsComponent } from '../../components/search/resualts/resualts.component';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeroComponent, ResualtsComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchResualts!: Product[];
  searchQuery!: string;
  showDisplay: string = 'grid';

  private routeSub!: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.activatedRoute.queryParams.subscribe((params) => {
      const { query } = params;
      this.searchResualts = query
        ? products.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          )
        : [];
      this.searchQuery = query;
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
