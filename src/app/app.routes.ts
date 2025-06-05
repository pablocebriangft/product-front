import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductFormComponent } from './components/product/product-form-component/product-form.component';

export const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'products/new', component: ProductFormComponent },
  { path: 'products/edit/:id', component: ProductFormComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];