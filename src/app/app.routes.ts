import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';

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
  {
    path: 'search/:query',
    component: SearchComponent,
    title: 'TarekBaba | Search In Products',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'TarekBaba | Login',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'TarekBaba | 404 NOT FOUND',
  },
];
