import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product';
import { CardComponent } from '../../global/card/card.component';
import { CardGridComponent } from '../../global/card-grid/card-grid.component';

@Component({
  selector: 'app-resualts',
  standalone: true,
  imports: [CardComponent, CardGridComponent],
  templateUrl: './resualts.component.html',
  styleUrl: './resualts.component.css',
})
export class ResualtsComponent {
  @Input() productResalts!: Product[];
  @Input() display!: string;
}
