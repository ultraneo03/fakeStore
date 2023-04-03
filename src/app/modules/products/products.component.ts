import { Component } from '@angular/core';
import { Product } from 'src/app/models';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  displayedProducts: Product[] = [];
  categories: string[] = [];

  categoryFilter: string = '';
  minPriceFilter: number = 0;
  maxPriceFilter: number = 1000;
  orderBy = 'a_Z';
  page: number = 1;
  records: number = 9;
  initial: number = 0;
  showMoreButton: boolean = true;

  constructor(private productService: LocalStorageService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.applyOrder();
    this.displayedProducts = this.filteredProducts.slice(
      this.initial,
      this.records
    );
    this.minPriceFilter = this.products.reduce(
      (min, product) => (product.price < min ? product.price : min),
      this.products[0].price
    );
    this.maxPriceFilter = this.products.reduce(
      (max, product) => (product.price > max ? product.price : max),
      this.products[0].price
    );
    this.categories = this.products
      .map((product) => product.category)
      .filter(
        (category, index, categories) => categories.indexOf(category) === index
      );
    this.page++;
  }

  loadMore() {
    let newItems = this.filteredProducts.slice(
      this.initial,
      this.records * this.page
    );
    if (newItems.length != this.records * this.page) {
      this.showMoreButton = false;
    }
    if (newItems.length > 0) {
      this.page++;
    }

    this.displayedProducts = newItems;
  }

  applyFilters() {
    this.filteredProducts = this.products.filter((product) => {
      let passesCategoryFilter = true;
      let passesPriceFilter = true;
      if (this.categoryFilter) {
        passesCategoryFilter = product.category === this.categoryFilter;
      }
      if (this.minPriceFilter && this.maxPriceFilter) {
        passesPriceFilter =
          product.price >= this.minPriceFilter &&
          product.price <= this.maxPriceFilter;
      } else if (this.minPriceFilter) {
        passesPriceFilter = product.price >= this.minPriceFilter;
      } else if (this.maxPriceFilter) {
        passesPriceFilter = product.price <= this.maxPriceFilter;
      }
      return passesCategoryFilter && passesPriceFilter;
    });

    this.applyOrder();

    this.displayedProducts = this.filteredProducts.slice(0, this.records);
    this.showMoreButton = true;
    this.page = 1;
  }

  applyOrder() {
    switch (this.orderBy) {
      case 'a_Z':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Z_a':
        this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price_asc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
    }
  }
}
