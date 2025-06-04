import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../../interfaces/product.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Output() productCreated = new EventEmitter<Product>();

  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.productService = productService;
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [0],
      weight: [0],
      category: ['BOOKS'],
      inCatalog: [true],
      inventoryData: this.fb.group({
        stock: [0],
        threshold: [0],
        totalSales: [0]
      })
    });
  }

  submit(): void {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      this.productService.createProduct(product).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
}
