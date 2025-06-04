import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product.model';
import { ProductService } from '../../services/product-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
;
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAllProducts();
  }
}