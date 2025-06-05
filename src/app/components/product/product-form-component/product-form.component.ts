import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../../interfaces/product.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditMode = false;
  productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    public router: Router,
    private route: ActivatedRoute
  ) {
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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.productId = +id;
      this.loadProduct(this.productId);
    }
  }

  loadProduct(id: number): void {
    this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.productForm.patchValue(product);
      },
      error: (error) => {
        console.error('Error loading product:', error);
        alert('Error loading product. Please try again.');
        this.router.navigate(['/products']);
      }
    });
  }

  submit(): void {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      
      if (this.isEditMode && this.productId) {
        this.productService.updateProduct(this.productId, product).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
          error: (error) => {
            console.error('Error updating product:', error);
            alert('Error updating product. Please try again.');
          }
        });
      } else {
        this.productService.createProduct(product).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
          error: (error) => {
            console.error('Error creating product:', error);
            alert('Error creating product. Please try again.');
          }
        });
      }
    }
  }
}
