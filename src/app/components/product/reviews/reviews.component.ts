import { DatePipe } from '@angular/common';
import { StarsComponent } from '../../global/stars/stars.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [DatePipe, StarsComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent {
  @Input() productReviews!: any;
}
