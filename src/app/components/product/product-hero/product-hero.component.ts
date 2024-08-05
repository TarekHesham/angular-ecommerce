import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-hero.component.html',
  styleUrl: './product-hero.component.css',
})
export class ProductHeroComponent {}
