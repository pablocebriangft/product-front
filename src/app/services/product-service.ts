import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://workshop-7uvd.onrender.com/api/v1/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductsByIds(ids: number[]): Observable<Product[]> {
    return this.http.post<Product[]>(`${this.apiUrl}/list-by-ids`, ids);
  }

  createProduct(product: Product): Observable<number> {
    return this.http.post<number>(this.apiUrl, product);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateProductStock(id: number, quantityChange: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { quantityChange });
  }

}
