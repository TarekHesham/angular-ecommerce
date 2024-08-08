import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/global/header/header.component';
import { FooterComponent } from './components/global/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerceApp';
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
