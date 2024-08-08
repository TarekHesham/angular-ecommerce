import { Component } from '@angular/core';
import { HeroComponent } from '../../components/global/hero/hero.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {}
