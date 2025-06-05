import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PromotionSeason {
  id: number;
  startDate: string;
  endDate: string;
  discount: number;
  promotionType: 'SEASON';
  name: string;
  affectedCategories: string[];
}

export interface PromotionQuantity {
  id: number;
  startDate: string;
  endDate: string;
  discount: number;
  promotionType: 'QUANTITY';
  quantity: number;
  category: string;
}

export interface Promotion {
  id: number;
  startDate: string;
  endDate: string;
  discount: number;
  promotionType: 'SEASON' | 'QUANTITY';
}

export interface CategoryRequest {
  categories: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private apiUrl = 'https://workshop-7uvd.onrender.com/api/v1/promotions';

  constructor(private http: HttpClient) { }

  getActivePromotionsByCategory(categories: string[]): Observable<Promotion[]> {
    const categoryRequest: CategoryRequest = { categories };
    return this.http.post<Promotion[]>(`${this.apiUrl}/get-by-category`, categoryRequest);
  }

  // getAllPromotions(): Observable<Promotion[]> {
  //   return this.http.get<Promotion[]>(this.apiUrl);
  // }
} 