import { Category } from './category.enum';
import { InventoryData } from './inventory-data.model';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: number;
  category: Category;
  inCatalog: boolean;
  inventoryData: InventoryData;
}
