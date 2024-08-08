import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css',
})
export class StarsComponent {
  @Input() rating: number = 0;
  starsArray() {
    const stars: number = 20 * this.rating;
    return `background: linear-gradient(to right, gold ${stars}%, #d5d5d5 0);`;
  }
}
