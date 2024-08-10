import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
