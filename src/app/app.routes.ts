import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

// pages
// components
// pipes
// services
// types
// guards

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'TarekBaba | Home Page',
  },
  {
    path: 'product-details/:id/:title',
    component: ProductDetailsComponent,
    title: 'TarekBaba | Product Details',
  },
];
