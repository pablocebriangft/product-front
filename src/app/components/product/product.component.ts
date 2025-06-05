import { Component, OnInit } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { Product } from '../../interfaces/product.model';
import { ProductService } from '../../services/product-service';
import { PromotionService, Promotion, PromotionSeason, PromotionQuantity } from '../../services/promotion.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { map } from 'rxjs/operators';
import { FakeAdComponent } from '../fake-ad/fake-ad.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FakeAdComponent],
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [
        animate('300ms ease-in')
      ]),
      transition(':leave', [
        animate('300ms ease-out')
      ])
    ]),
    trigger('slideInOut', [
      state('void', style({ transform: 'translateY(-20px)', opacity: 0 })),
      state('*', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', [
        animate('300ms ease-out')
      ]),
      transition(':leave', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class ProductComponent implements OnInit {
  products$!: Observable<Product[]>;
  searchId: number | null = null;
  searchText: string = '';
  selectedCategory: string = '';
  errorMessage: string = '';
  showStockModal = false;
  selectedProduct: Product | null = null;
  stockChange: number = 0;
  activePromotions: Promotion[] = [];
  loading: boolean = false;
  
  viewMode: 'table' | 'cards' = 'table';
  
  sortCriteria: string = 'id';
  sortDirection: 'asc' | 'desc' = 'asc';
  

  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;
  paginatedProducts: Product[] = [];
  showBulkEditModal = false;
  selectedProducts: Product[] = [];
  bulkEditCategory: string = '';
  bulkEditPriceAdjustment: number | null = null;
  bulkEditStockAdjustment: number | null = null;
  bulkEditCatalogStatus: boolean | null = null;

  constructor(private productService: ProductService, private promotionService: PromotionService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  setViewMode(mode: 'table' | 'cards'): void {
    this.viewMode = mode;
  }

  loadProducts(): void {
    this.loading = true;
    this.products$ = this.productService.getAllProducts().pipe(
      map(products => {
        const categories = [...new Set(products.map(p => p.category))];
        this.promotionService.getActivePromotionsByCategory(categories).subscribe({
          next: (promotions) => {
            this.activePromotions = promotions;
            console.log('Active Promotions:', this.activePromotions);
          },
          error: (error) => {
            console.error('Error fetching promotions:', error);
          }
        });
        return this.sortProducts(products, this.sortCriteria, this.sortDirection);
      })
    );

    this.products$.subscribe({
      next: products => {
        this.totalPages = Math.ceil(products.length / this.itemsPerPage);
        this.updatePaginatedProducts(products);
        this.loading = false;
      },
      error: error => {
        console.error('Error loading products:', error);
        this.errorMessage = 'Failed to load products.';
        this.loading = false;
      }
    });
    this.errorMessage = '';
  }

  sortProducts(products: Product[], criteria: string, direction: 'asc' | 'desc'): Product[] {
    const sortedProducts = [...products]
    sortedProducts.sort((a, b) => {
      let valueA: any;
      let valueB: any;

      switch (criteria) {
        case 'id':
          valueA = a.id;
          valueB = b.id;
          break;
        case 'name':
          valueA = a.name.toLowerCase();
          valueB = b.name.toLowerCase();
          break;
        case 'price':
          valueA = a.price;
          valueB = b.price;
          break;
        case 'stock':
          valueA = a.inventoryData?.stock || 0;
          valueB = b.inventoryData?.stock || 0;
          break;
        default:
          valueA = a.id;
          valueB = b.id;
      }

      if (valueA < valueB) {
        return direction === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return direction === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
    return sortedProducts;
  }

  applySorting(): void {
    this.loadProducts();
  }

  toggleSortDirection(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.applySorting();
  }

  updatePaginatedProducts(products: Product[]): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedProducts = products.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadProducts();
    }
  }

  searchProduct(): void {
    this.loading = true;
    if (!this.searchId) {
      this.loadProducts();
      return;
    }

    this.productService.getProductById(this.searchId).subscribe({
      next: (product) => {
        this.promotionService.getActivePromotionsByCategory([product.category]).subscribe({
          next: (promotions) => {
            this.activePromotions = promotions;
            console.log('Active Promotions for single product:', this.activePromotions);
          },
          error: (error) => {
            console.error('Error fetching promotions for single product:', error);
          }
        });

        const sortedProduct = this.sortProducts([product], this.sortCriteria, this.sortDirection);

        this.products$ = of(sortedProduct);
        this.paginatedProducts = sortedProduct;
        this.totalPages = 1;
        this.currentPage = 1;
        this.errorMessage = '';
        this.loading = false;
      },
      error: (error) => {
        console.error('Error searching product:', error);
        this.errorMessage = 'Product not found';
        this.products$ = of([]);
        this.paginatedProducts = [];
        this.activePromotions = [];
        this.loading = false;
      }
    });
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.loading = true;
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.loadProducts();
        },
        error: (error) => {
          console.error('Error deleting product:', error);
          alert('Error deleting product. Please try again.');
          this.loading = false;
        }
      });
    }
  }

  openStockModal(product: Product): void {
    this.selectedProduct = product;
    this.stockChange = 0;
    this.showStockModal = true;
  }

  closeStockModal(): void {
    this.showStockModal = false;
    this.selectedProduct = null;
    this.stockChange = 0;
  }

  updateStock(): void {
    if (!this.selectedProduct || this.stockChange === 0) {
      this.closeStockModal();
      return;
    }

    this.loading = true;
    this.productService.updateProductStock(this.selectedProduct.id, this.stockChange).subscribe({
      next: () => {
        this.loadProducts();
        this.closeStockModal();
      },
      error: (error) => {
        console.error('Error updating stock:', error);
        alert('Error updating stock. Please try again.');
        this.loading = false;
      }
    });
  }
  
  findApplicablePromotion(product: Product): Promotion | undefined {
    return this.activePromotions.find(promo => {
      if (promo.promotionType === 'SEASON') {
        const seasonPromo = promo as PromotionSeason;
        return seasonPromo.affectedCategories?.includes(product.category);
      } else if (promo.promotionType === 'QUANTITY') {
        const quantityPromo = promo as PromotionQuantity;
        return quantityPromo.category === product.category;
      }
       return false;
    });
  }

  filterProducts(): void {
    if (!this.searchText) {
      this.loadProducts();
      return;
    }

    this.products$.subscribe(products => {
      const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchText.toLowerCase())
      );
      this.paginatedProducts = this.sortProducts(filteredProducts, this.sortCriteria, this.sortDirection);
      this.totalPages = Math.ceil(filteredProducts.length / this.itemsPerPage);
      this.currentPage = 1;
    });
  }

  filterByCategory(): void {
    if (!this.selectedCategory) {
      this.loadProducts();
      return;
    }

    this.products$.subscribe(products => {
      const filteredProducts = products.filter(product => 
        product.category === this.selectedCategory
      );
      this.paginatedProducts = this.sortProducts(filteredProducts, this.sortCriteria, this.sortDirection);
      this.totalPages = Math.ceil(filteredProducts.length / this.itemsPerPage);
      this.currentPage = 1;
    });
  }

  openBulkEditModal(): void {
    this.showBulkEditModal = true;
  }

  showLowStock(): void {
    this.products$.subscribe(products => {
      const lowStockProducts = products.filter(p => 
        (p.inventoryData?.stock || 0) <= (p.inventoryData?.threshold || 0)
      );
      this.paginatedProducts = this.sortProducts(lowStockProducts, this.sortCriteria, this.sortDirection);
      this.totalPages = Math.ceil(lowStockProducts.length / this.itemsPerPage);
      this.currentPage = 1;
    });
  }

  closeBulkEditModal(): void {
    this.showBulkEditModal = false;
    this.bulkEditCategory = '';
    this.bulkEditPriceAdjustment = null;
    this.bulkEditStockAdjustment = null;
    this.bulkEditCatalogStatus = null;
  }

  applyBulkEdit(): void {
    this.loading = true;
    this.products$.subscribe(products => {
      const updatePromises = products.map(product => {
        const updates: any = {};
        
        if (this.bulkEditCategory) {
          updates.category = this.bulkEditCategory;
        }
        
        if (this.bulkEditPriceAdjustment !== null) {
          updates.price = product.price * (1 + this.bulkEditPriceAdjustment / 100);
        }
        
        if (this.bulkEditStockAdjustment !== null) {
          updates.stockChange = this.bulkEditStockAdjustment;
        }
        
        if (this.bulkEditCatalogStatus !== null) {
          updates.inCatalog = this.bulkEditCatalogStatus;
        }

        if (Object.keys(updates).length > 0) {
          return this.productService.updateProduct(product.id, { ...product, ...updates }).toPromise();
        }
        return Promise.resolve();
      });

      Promise.all(updatePromises)
        .then(() => {
          this.loadProducts();
          this.closeBulkEditModal();
        })
        .catch(error => {
          console.error('Error applying bulk edit:', error);
          this.errorMessage = 'Error applying changes. Please try again.';
        })
        .finally(() => {
          this.loading = false;
        });
    });
  }
}