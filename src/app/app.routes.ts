import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { ShopingCartComponent } from './pages/shoping-cart/shoping-cart.component';
import { PaymentComponent } from './pages/payment/payment.component';

/**
 *
 * pages [Home, Login, NotFound, PDetails, search, shopingCart]
 * components [Global, Home, Login, Product, search]
 * pipes [PriceOffer]
 * services [API, Cart]
 * types [Product]
 * guards [None]
 */

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Ecommerce | Home Page',
  },
  {
    path: 'product-details/:id/:title',
    component: ProductDetailsComponent,
    title: 'Ecommerce | Product Details',
  },
  {
    path: 'search',
    component: SearchComponent,
    title: 'Ecommerce | Search In Products',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Ecommerce | Login',
  },
  {
    path: 'cart',
    component: ShopingCartComponent,
    title: 'Ecommerce | Shoping Cart',
  },
  {
    path: 'payment',
    component: PaymentComponent,
    title: 'Tarek Baba | Payment page',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Ecommerce | 404 NOT FOUND',
  },
];
