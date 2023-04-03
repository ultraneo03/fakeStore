import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models';
import { environment } from 'src/app/config';

@Injectable({
  providedIn: 'root',
})
export class ProductDataSource {
  private apiUrl = environment.apiFakeStoreUrl;
  private origin = 'fakeStore';

  constructor(private http: HttpClient) {}

  getProducts(
    page: number,
    size: number,
    search: string,
    order: string
  ): Observable<Product[]> {
    const url = `${this.apiUrl}?page=${page}&size=${size}&search=${search}&order=${order}`;
    var result = this.http.get<any>(url).pipe(
      map((response) => {
        const products = response.items.map((item: Product) => {
          return { ...item, origin: this.origin } as Product;
        });
        return products;
      })
    );
    return result;
  }

  getProductRemoteById(productId: number): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    var result = this.http.get<Product>(url).pipe(
      map((response) => {
        const product = response;
        product.origin = this.origin;
        return product;
      })
    );
    return result;
  }
}
