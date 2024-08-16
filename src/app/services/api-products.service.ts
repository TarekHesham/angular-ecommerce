import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  private pathURL: string = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  get getProducts() {
    return this.http.get(`${this.pathURL}`);
  }

  getProductById(id: number) {
    return this.http.get(`${this.pathURL}/${id}`);
  }

  getProductByCategory(category: string, limit: number) {
    return this.http.get(`${this.pathURL}/category/${category}?limit=${limit}`);
  }

  searchProduct(query: any) {
    return this.http.get(`${this.pathURL}/search?q=${query}`);
  }

  sortBy(
    sortBy: string,
    order: 'desc' | 'asc',
    limit = 0
  ): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.pathURL}?sortBy=${sortBy}&order=${order}${
        limit ? `&limit=${limit}` : ''
      }`
    );
  }
}
