import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Product } from '../models';
import { ProductDataSource } from './product/product-data-source';
import { ProductDJDataSource } from './product/product-DJ-data-source';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];

  constructor(
    private dataSource: ProductDataSource,
    private djDataSource: ProductDJDataSource
  ) {}

  async getProducts(
    fromBoth: boolean = false,
    page: number,
    size: number,
    search: string,
    order: string
  ): Promise<Product[]> {
    if (!this.products) {
      const storageValue = localStorage.getItem('products');
      if (storageValue) {
        this.products = JSON.parse(storageValue);
      } else {
        this.products = [];
      }
    }

    if (fromBoth) {
      const productsFromSource = await this.dataSource.getProducts(
        page,
        size,
        search,
        order
      );
      const productsFromDJSource = await this.djDataSource.getProducts(
        page,
        size,
        search,
        order
      );

      forkJoin({
        source: productsFromSource,
        dj: productsFromDJSource,
      }).subscribe(({ source, dj }) => {
        this.products = [...source, ...dj];
        localStorage.setItem('products', JSON.stringify(this.products));
      });
    } else {
      if (this.products) {
        const dataSource =
          this.products[0].origin === 'fakeStore'
            ? this.dataSource
            : this.djDataSource;
        await dataSource
          .getProducts(page, size, search, order)
          .subscribe((products: Product[]) => {
            this.products = products;
            localStorage.setItem('products', JSON.stringify(this.products));
          });
      }
    }

    return this.products;
  }
}
