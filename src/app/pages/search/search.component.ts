import { Component } from '@angular/core';
import { HeroComponent } from '../../components/global/hero/hero.component';
import products from '../../../../public/data/products.json';
import { Product } from '../../types/product';
import { ActivatedRoute } from '@angular/router';
import { ResualtsComponent } from '../../components/search/resualts/resualts.component';

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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const { query } = this.activatedRoute.snapshot.params;
    this.searchResualts = products.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    this.searchQuery = query;
  }
}
