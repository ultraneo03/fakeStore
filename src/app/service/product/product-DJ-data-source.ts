import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class ProductDJDataSource {
  private apiUrl = 'https://localhost:7118/api/ProductsDJ';
  private origin = 'DummyJson';

  constructor(private http: HttpClient) {}

  getProducts(
    page: number,
    size: number,
    search: string,
    order: string
  ): Observable<Product[]> {
    const url = `${this.apiUrl}?page=${page}&size=${size}&search=${search}&order=${order}`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        const products = response.items.map((item: Product) => {
          return { ...item, origin: this.origin } as Product;
        });
        return products;
      })
    );
  }

  getProductRemoteById(productId: number): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    var result = this.http.get<any>(url).pipe(
      map((response) => {
        const product = response;
        product.origin = this.origin;
        return product;
      })
    );
    return result;
  }
}
