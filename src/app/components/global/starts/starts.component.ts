import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-starts',
  standalone: true,
  imports: [],
  templateUrl: './starts.component.html',
  styleUrl: './starts.component.css',
})
export class StartsComponent {
  @Input() rating: number = 0;
  startsArray() {
    const starts: number = 15.6 * this.rating;
    return `background: linear-gradient(to right, gold ${starts}px, #d5d5d5 0);`;
  }
}
