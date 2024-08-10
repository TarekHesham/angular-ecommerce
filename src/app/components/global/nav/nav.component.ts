import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  @ViewChild('searchBar') searchBar!: ElementRef;

  constructor(private router: Router) {}
  hanleRoute() {
    this.router.navigate(['/search'], {
      queryParams: {
        query: this.searchBar.nativeElement.value,
      },
    });
    this.searchBar.nativeElement.value = '';
  }
}
