import { Injectable } from '@angular/core';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly STORAGE_KEY = 'products';

  constructor() {}

  getProducts(): Product[] {
    const productsJson = localStorage.getItem(this.STORAGE_KEY);
    if (!productsJson) {
      return [];
    }
    const products: Product[] = JSON.parse(productsJson);
    return products;
  }

  saveProducts(products: Product[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
  }

  filterByCategory(category: string): Product[] {
    const products = this.getProducts();
    return products.filter((p) => p.category === category);
  }

  searchByName(query: string): Product[] {
    const products = this.getProducts();
    return products.filter((p) => p.name.includes(query));
  }

  filterByPriceRange(min: number, max: number): Product[] {
    const products = this.getProducts();
    return products.filter((p) => p.price >= min && p.price <= max);
  }

  sortByNameAlphabetically(order: 'asc' | 'desc'): Product[] {
    const products = this.getProducts();
    return products.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return order === 'asc' ? -1 : 1;
      }
      if (nameA > nameB) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  sortByPrice(order: 'asc' | 'desc'): Product[] {
    const products = this.getProducts();

    const sortedProducts = products.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    return sortedProducts;
  }

  getProductsByCategory(category: string): Product[] {
    const products = this.getProducts();
    return products.filter((p) => p.category === category);
  }

  searchProductsByName(searchTerm: string): Product[] {
    const products = this.getProducts();
    return products.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  filterProductsByPriceRange(minPrice: number, maxPrice: number): Product[] {
    const products = this.getProducts();
    return products.filter((p) => p.price >= minPrice && p.price <= maxPrice);
  }

  getTopRatedProducts(): Product[] {
    const products = this.getProducts();
    return products.sort((a, b) => b.rating - a.rating).slice(0, 3);
  }
}
